#!/usr/bin/env node

import { promises as fs } from 'node:fs';
import path from 'node:path';

import {
  cleanUrl,
  DEFAULT_PATHS,
  displayPath,
  forEachRenderedLine,
  isMain,
  readStagedFile,
  resolveMarkdownFiles,
  resolveStagedMarkdownFiles,
  ROOT,
  stagedFileType,
} from './link-check-utils.mjs';

const PUBLIC_DIR = path.join(ROOT, 'public');

function usage() {
  return `Check local static asset links in Markdown files.

Usage:
  node scripts/check-internal-links.mjs [--staged | path ...]

Paths default to "zh en". A path may be a Markdown file or a directory.

Options:
  --staged    Check staged Markdown files under "zh" and "en"
  -h, --help  Show this help
`;
}

export function parseArgs(args) {
  const options = { staged: false, help: false, paths: [] };
  for (const arg of args) {
    if (arg === '--staged') options.staged = true;
    else if (arg === '-h' || arg === '--help') options.help = true;
    else if (arg.startsWith('-')) throw new Error(`Unknown option: ${arg}`);
    else options.paths.push(arg);
  }
  if (options.staged && options.paths.length > 0) {
    throw new Error('--staged cannot be combined with paths');
  }
  if (!options.staged && options.paths.length === 0) options.paths = [...DEFAULT_PATHS];
  return options;
}

function localAssetsInLine(line) {
  const assets = [];
  const markdownLink = /!?\[[^\]\n]*\]\(\s*((?:\/(?!\/)|public\/|<(?:\/(?!\/)|public\/))[^)\n]*)\)/g;
  let markdownMatch;
  while ((markdownMatch = markdownLink.exec(line)) !== null) {
    let rawPath = markdownMatch[1].trim();
    const angleMatch = rawPath.match(/^<([^>]+)>(?:\s+(?:"[^"]*"|'[^']*'|\([^)]*\)))?$/);
    const titleMatch = rawPath.match(/^(\S+)\s+(?:"[^"]*"|'[^']*'|\([^)]*\))$/);
    if (angleMatch) rawPath = angleMatch[1];
    else if (titleMatch) rawPath = titleMatch[1];

    const cleanedPath = cleanUrl(rawPath);
    const pathname = cleanedPath.split(/[?#]/, 1)[0];
    const publicPrefix = /^\/?public\//.test(pathname);
    const extension = path.posix.extname(pathname).toLowerCase();
    if (!publicPrefix && (!extension || ['.md', '.html', '.htm'].includes(extension))) continue;

    const hasUnescapedSpace = !angleMatch && /\s/.test(cleanedPath);
    assets.push({
      path: cleanedPath,
      column: markdownMatch.index + markdownMatch[0].indexOf(markdownMatch[1]) + 1,
      ...(hasUnescapedSpace && {
        error: 'local asset path contains an unescaped space',
        suggestion: cleanedPath.replace(/\s/g, '%20'),
      }),
    });
  }

  const attributePatterns = [
    /\b(?:src|href)\s*=\s*(["'])((?:\/(?!\/)|public\/).*?)\1/gi,
    /\b(?:src|href)\s*:\s*(["'])((?:\/(?!\/)|public\/).*?)\1/gi,
  ];

  for (const pattern of attributePatterns) {
    let match;
    while ((match = pattern.exec(line)) !== null) {
      const rawPath = match[2];
      const cleanedPath = cleanUrl(rawPath);
      const pathname = cleanedPath.split(/[?#]/, 1)[0];
      const publicPrefix = /^\/?public\//.test(pathname);
      const extension = path.posix.extname(pathname).toLowerCase();

      // Extensionless paths are normally VitePress routes, not static assets.
      if (!publicPrefix && (!extension || ['.md', '.html', '.htm'].includes(extension))) continue;
      assets.push({ path: cleanedPath, column: match.index + match[0].indexOf(rawPath) + 1 });
    }
  }

  return assets;
}

export function extractInternalLinks(markdown, file = '<input>') {
  const links = [];
  forEachRenderedLine(markdown, (line, lineIndex) => {
    for (const candidate of localAssetsInLine(line)) {
      links.push({ ...candidate, file, line: lineIndex + 1 });
    }
  });
  return links;
}

export async function checkInternalLink(reference, publicDir = PUBLIC_DIR) {
  const rawPath = reference.path.split(/[?#]/, 1)[0];
  const publicMatch = rawPath.match(/^\/?public\/(.+)$/);
  if (publicMatch) {
    return {
      ok: false,
      error: 'public paths must omit the "public" directory',
      suggestion: `/${publicMatch[1]}`,
    };
  }
  if (reference.error) {
    return {
      ok: false,
      error: reference.error,
      ...(reference.suggestion && { suggestion: reference.suggestion }),
    };
  }

  let decodedPath;
  try {
    decodedPath = decodeURIComponent(rawPath);
  } catch {
    return { ok: false, error: 'invalid percent-encoding in local asset path' };
  }

  const assetPath = path.resolve(publicDir, decodedPath.replace(/^\/+/, ''));
  const relativePath = path.relative(publicDir, assetPath);
  if (relativePath.startsWith('..') || path.isAbsolute(relativePath)) {
    return { ok: false, error: 'local asset path resolves outside the public directory' };
  }

  try {
    const stat = await fs.stat(assetPath);
    return stat.isFile()
      ? { ok: true, assetPath }
      : { ok: false, error: 'local asset path is not a file', assetPath };
  } catch (error) {
    if (error?.code === 'ENOENT') {
      return { ok: false, error: 'local asset file does not exist', assetPath };
    }
    throw error;
  }
}

export async function checkStagedInternalLink(reference) {
  const rawPath = reference.path.split(/[?#]/, 1)[0];
  const publicMatch = rawPath.match(/^\/?public\/(.+)$/);
  if (publicMatch) {
    return {
      ok: false,
      error: 'public paths must omit the "public" directory',
      suggestion: `/${publicMatch[1]}`,
    };
  }
  if (reference.error) {
    return {
      ok: false,
      error: reference.error,
      ...(reference.suggestion && { suggestion: reference.suggestion }),
    };
  }

  let decodedPath;
  try {
    decodedPath = decodeURIComponent(rawPath).replace(/^\/+/, '');
  } catch {
    return { ok: false, error: 'invalid percent-encoding in local asset path' };
  }

  const relativePath = path.posix.normalize(`public/${decodedPath}`);
  if (!relativePath.startsWith('public/')) {
    return { ok: false, error: 'local asset path resolves outside the public directory' };
  }

  const fileType = await stagedFileType(relativePath);
  if (fileType === 'blob') return { ok: true, assetPath: path.join(ROOT, relativePath) };
  if (fileType) {
    return {
      ok: false,
      error: 'local asset path is not a file',
      assetPath: path.join(ROOT, relativePath),
    };
  }
  return {
    ok: false,
    error: 'local asset file does not exist in the staged commit',
    assetPath: path.join(ROOT, relativePath),
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
    occurrences.push(...extractInternalLinks(markdown, file));
  }

  const grouped = new Map();
  for (const occurrence of occurrences) {
    const key = JSON.stringify([occurrence.path, occurrence.error, occurrence.suggestion]);
    const group = grouped.get(key) || [];
    group.push(occurrence);
    grouped.set(key, group);
  }

  const results = await Promise.all([...grouped.values()].map(async references => ({
    path: references[0].path,
    references,
    ...await (options.staged
      ? checkStagedInternalLink(references[0])
      : checkInternalLink(references[0])),
  })));
  const failures = results.filter(result => !result.ok);
  const uniquePaths = new Set(occurrences.map(occurrence => occurrence.path)).size;

  console.log(
    `Found ${occurrences.length} internal asset references (${uniquePaths} unique) in ` +
    `${files.length} Markdown files.`,
  );

  if (failures.length > 0) {
    console.error(`\n${failures.length} internal link check(s) failed:`);
    for (const failure of failures) {
      console.error(`\n  ${failure.path}\n  Reason: ${failure.error}`);
      if (failure.suggestion) console.error(`  Use: ${failure.suggestion}`);
      for (const reference of failure.references) {
        console.error(`  - ${displayPath(reference.file)}:${reference.line}:${reference.column}`);
      }
    }
    process.exitCode = 1;
    return;
  }

  console.log(`All ${uniquePaths} unique internal assets exist.`);
}

if (isMain(import.meta.url)) {
  main().catch(error => {
    console.error(error);
    process.exitCode = 1;
  });
}
