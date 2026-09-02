#!/usr/bin/env node

import { promises as fs } from 'node:fs';

import {
  cleanUrl,
  DEFAULT_PATHS,
  displayPath,
  forEachRenderedLine,
  isMain,
  readStagedFile,
  resolveMarkdownFiles,
  resolveStagedMarkdownFiles,
} from './link-check-utils.mjs';

const DEFAULT_TIMEOUT = 10_000;
const DEFAULT_CONCURRENCY = 10;
const DEFAULT_HOST_CONCURRENCY = 2;
const DEFAULT_RETRIES = 1;
const USER_AGENT =
  'Mozilla/5.0 (compatible; LILYGO-Link-Checker/1.0; +https://github.com/Xinyuan-LilyGO)';

function usage() {
  return `Check external HTTP(S) links in Markdown files.

Usage:
  node scripts/check-external-links.mjs [options] [path ...]

Paths default to "zh en". A path may be a Markdown file or a directory.

Options:
  --staged        Check staged Markdown files under "zh" and "en"
  --concurrency N  Maximum concurrent requests (default: ${DEFAULT_CONCURRENCY})
  --host-concurrency N
                   Maximum concurrent requests to one host (default: ${DEFAULT_HOST_CONCURRENCY})
  --timeout MS     Timeout for each request (default: ${DEFAULT_TIMEOUT})
  --retries N      Retries after a failed request (default: ${DEFAULT_RETRIES})
  --verbose        Print successful checks as well as failures
  -h, --help       Show this help
`;
}

function readIntegerOption(args, index, name, { min = 0 } = {}) {
  const value = args[index + 1];
  if (value === undefined || !/^\d+$/.test(value) || Number(value) < min) {
    throw new Error(`${name} must be an integer greater than or equal to ${min}`);
  }
  return Number(value);
}

export function parseArgs(args) {
  const options = {
    concurrency: DEFAULT_CONCURRENCY,
    hostConcurrency: DEFAULT_HOST_CONCURRENCY,
    timeout: DEFAULT_TIMEOUT,
    retries: DEFAULT_RETRIES,
    staged: false,
    verbose: false,
    help: false,
    paths: [],
  };

  for (let i = 0; i < args.length; i++) {
    const arg = args[i];
    if (arg === '--staged') {
      options.staged = true;
    } else if (arg === '--concurrency') {
      options.concurrency = readIntegerOption(args, i, arg, { min: 1 });
      i++;
    } else if (arg === '--host-concurrency') {
      options.hostConcurrency = readIntegerOption(args, i, arg, { min: 1 });
      i++;
    } else if (arg === '--timeout') {
      options.timeout = readIntegerOption(args, i, arg, { min: 1 });
      i++;
    } else if (arg === '--retries') {
      options.retries = readIntegerOption(args, i, arg);
      i++;
    } else if (arg === '--verbose') {
      options.verbose = true;
    } else if (arg === '-h' || arg === '--help') {
      options.help = true;
    } else if (arg.startsWith('-')) {
      throw new Error(`Unknown option: ${arg}`);
    } else {
      options.paths.push(arg);
    }
  }

  if (options.staged && options.paths.length > 0) {
    throw new Error('--staged cannot be combined with paths');
  }
  if (!options.staged && options.paths.length === 0) options.paths = [...DEFAULT_PATHS];
  return options;
}

function urlsInLine(line) {
  const urls = [];
  const startPattern = /https?:\/\//gi;
  let match;

  while ((match = startPattern.exec(line)) !== null) {
    const start = match.index;
    let end = start;
    let parenthesisDepth = 0;

    while (end < line.length) {
      const character = line[end];
      if (/\s|[<>"']/.test(character)) break;

      if (character === '(') {
        parenthesisDepth++;
      } else if (character === ')') {
        if (parenthesisDepth === 0) break;
        parenthesisDepth--;
      }
      end++;
    }

    const url = cleanUrl(line.slice(start, end));
    if (url) urls.push({ url, column: start + 1 });
    startPattern.lastIndex = Math.max(end, start + match[0].length);
  }

  return urls;
}

function isLocalHostname(hostname) {
  const normalized = hostname.replace(/^\[|\]$/g, '').toLowerCase();
  return normalized === 'localhost' || normalized === '::1' || normalized === '0.0.0.0' ||
    normalized === '127.0.0.1' || normalized.startsWith('127.');
}

export function extractExternalLinks(markdown, file = '<input>') {
  const links = [];

  forEachRenderedLine(markdown, (line, lineIndex) => {
    for (const candidate of urlsInLine(line)) {
      try {
        const parsed = new URL(candidate.url);
        if (!isLocalHostname(parsed.hostname)) {
          parsed.hash = '';
          links.push({
            url: parsed.href,
            file,
            line: lineIndex + 1,
            column: candidate.column,
          });
        }
      } catch {
        links.push({
          url: candidate.url,
          file,
          line: lineIndex + 1,
          column: candidate.column,
          parseError: 'invalid URL',
        });
      }
    }
  });

  return links;
}

async function request(url, method, timeout) {
  const response = await fetch(url, {
    method,
    redirect: 'follow',
    signal: AbortSignal.timeout(timeout),
    headers: {
      'user-agent': USER_AGENT,
      accept: '*/*',
    },
  });

  if (response.body) await response.body.cancel();
  return response;
}

function errorMessage(error) {
  if (error?.name === 'TimeoutError' || error?.name === 'AbortError') return 'request timed out';
  return error?.cause?.message || error?.message || String(error);
}

export async function checkUrl(url, { timeout = DEFAULT_TIMEOUT, retries = DEFAULT_RETRIES } = {}) {
  let lastResult;

  for (let attempt = 0; attempt <= retries; attempt++) {
    let headResult;
    try {
      const response = await request(url, 'HEAD', timeout);
      headResult = { ok: response.status < 400, status: response.status, finalUrl: response.url };
      if (headResult.ok) return headResult;
    } catch (error) {
      headResult = { ok: false, error: errorMessage(error) };
    }

    try {
      const response = await request(url, 'GET', timeout);
      lastResult = { ok: response.status < 400, status: response.status, finalUrl: response.url };
      if (lastResult.ok) return lastResult;
    } catch (error) {
      lastResult = { ok: false, error: errorMessage(error) };
    }

    if (!lastResult.status && headResult.status) lastResult = headResult;
    if (attempt < retries) {
      await new Promise(resolve => setTimeout(resolve, 250 * 2 ** attempt));
    }
  }

  return lastResult;
}

export function isWarningResult(result) {
  return !result.ok && result.status === 403;
}

async function runPool(items, concurrency, worker) {
  const results = new Array(items.length);
  let nextIndex = 0;

  async function runWorker() {
    while (nextIndex < items.length) {
      const index = nextIndex++;
      results[index] = await worker(items[index], index);
    }
  }

  await Promise.all(Array.from({ length: Math.min(concurrency, items.length) }, runWorker));
  return results;
}

function createHostLimiter(limit) {
  const hosts = new Map();

  return async function withHostLimit(url, operation) {
    const hostname = new URL(url).hostname;
    const state = hosts.get(hostname) || { active: 0, waiting: [] };
    hosts.set(hostname, state);

    if (state.active >= limit) {
      await new Promise(resolve => state.waiting.push(resolve));
    } else {
      state.active++;
    }

    try {
      return await operation();
    } finally {
      const next = state.waiting.shift();
      if (next) next();
      else state.active--;
      if (state.active === 0 && state.waiting.length === 0) hosts.delete(hostname);
    }
  };
}

async function main() {
  let options;
  try {
    options = parseArgs(process.argv.slice(2));
  } catch (error) {
    console.error(`Error: ${error.message}\n\n${usage()}`);
    process.exitCode = 2;
    return;
  }

  if (options.help) {
    process.stdout.write(usage());
    return;
  }

  let files;
  try {
    files = options.staged
      ? await resolveStagedMarkdownFiles()
      : await resolveMarkdownFiles(options.paths);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exitCode = 2;
    return;
  }

  const occurrences = [];
  for (const file of files) {
    const markdown = options.staged
      ? await readStagedFile(file)
      : await fs.readFile(file, 'utf8');
    occurrences.push(...extractExternalLinks(markdown, file));
  }

  const grouped = new Map();
  for (const occurrence of occurrences) {
    const group = grouped.get(occurrence.url) || [];
    group.push(occurrence);
    grouped.set(occurrence.url, group);
  }

  const invalidUrls = [...grouped.entries()].filter(([, references]) => references[0].parseError);
  const urls = [...grouped.keys()].filter(url => !grouped.get(url)[0].parseError);

  console.log(
    `Found ${occurrences.length} external link references (${grouped.size} unique) in ` +
    `${files.length} Markdown files.`,
  );

  let completed = 0;
  const withHostLimit = createHostLimiter(options.hostConcurrency);
  const results = await runPool(urls, options.concurrency, async url => {
    const result = await withHostLimit(url, () => checkUrl(url, options));
    completed++;
    if (options.verbose) {
      const label = result.ok
        ? `OK ${result.status}`
        : `${isWarningResult(result) ? 'WARN' : 'FAIL'} ${result.status || result.error}`;
      console.log(`[${completed}/${urls.length}] ${label} ${url}`);
    } else if (process.stdout.isTTY) {
      process.stdout.write(`\rChecked ${completed}/${urls.length} unique links...`);
    }
    return { url, ...result };
  });

  if (!options.verbose && process.stdout.isTTY && urls.length > 0) process.stdout.write('\r\x1b[K');

  const warnings = results.filter(isWarningResult);
  const failures = [
    ...invalidUrls.map(([url]) => ({ url, ok: false, error: 'invalid URL' })),
    ...results.filter(result => !result.ok && !isWarningResult(result)),
  ];

  if (warnings.length > 0) {
    console.warn(`\n${warnings.length} external link check(s) returned warnings:`);
    for (const warning of warnings) {
      console.warn(`\n  ${warning.url}\n  Reason: HTTP 403 (access forbidden)`);
      for (const reference of grouped.get(warning.url)) {
        console.warn(`  - ${displayPath(reference.file)}:${reference.line}:${reference.column}`);
      }
    }
  }

  if (failures.length > 0) {
    console.error(`\n${failures.length} external link check(s) failed:`);
    for (const failure of failures) {
      const rateLimitHint = failure.status === 429 ? ' (rate limited; retry later)' : '';
      const reason = failure.status ? `HTTP ${failure.status}${rateLimitHint}` : failure.error;
      console.error(`\n  ${failure.url}\n  Reason: ${reason}`);
      for (const reference of grouped.get(failure.url)) {
        console.error(`  - ${displayPath(reference.file)}:${reference.line}:${reference.column}`);
      }
    }
    process.exitCode = 1;
    return;
  }

  if (warnings.length > 0) {
    console.log(`Link check completed with ${warnings.length} warning(s) and no errors.`);
  } else {
    console.log(`All ${urls.length} unique external links are reachable.`);
  }
}

if (isMain(import.meta.url)) {
  main().catch(error => {
    console.error(error);
    process.exitCode = 1;
  });
}
