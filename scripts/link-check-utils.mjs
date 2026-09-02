import { execFile } from 'node:child_process';
import { promises as fs } from 'node:fs';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { promisify } from 'node:util';

const execFileAsync = promisify(execFile);

export const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
export const DEFAULT_PATHS = ['zh', 'en'];

async function collectMarkdownFiles(targetPath) {
  const stat = await fs.stat(targetPath);
  if (stat.isFile()) return targetPath.endsWith('.md') ? [targetPath] : [];
  if (!stat.isDirectory()) return [];

  const files = [];
  const entries = await fs.readdir(targetPath, { withFileTypes: true });
  for (const entry of entries) {
    if (entry.name.startsWith('.')) continue;
    const entryPath = path.join(targetPath, entry.name);
    if (entry.isDirectory()) {
      files.push(...await collectMarkdownFiles(entryPath));
    } else if (entry.isFile() && entry.name.endsWith('.md')) {
      files.push(entryPath);
    }
  }
  return files;
}

export async function resolveMarkdownFiles(paths) {
  const targets = paths.map(target => path.resolve(ROOT, target));
  return [...new Set((await Promise.all(targets.map(collectMarkdownFiles))).flat())].sort();
}

export async function resolveStagedMarkdownFiles() {
  const { stdout } = await execFileAsync(
    'git',
    ['diff', '--cached', '--name-only', '--diff-filter=ACMR', '-z', '--', 'zh', 'en'],
    { cwd: ROOT, encoding: 'buffer' },
  );

  return stdout
    .toString('utf8')
    .split('\0')
    .filter(file => file.endsWith('.md'))
    .map(file => path.join(ROOT, file))
    .sort();
}

export async function readStagedFile(file) {
  const relativePath = path.relative(ROOT, file);
  const { stdout } = await execFileAsync(
    'git',
    ['cat-file', 'blob', `:${relativePath}`],
    { cwd: ROOT, encoding: 'buffer', maxBuffer: 50 * 1024 * 1024 },
  );
  return stdout.toString('utf8');
}

export async function stagedFileType(relativePath) {
  try {
    const { stdout } = await execFileAsync(
      'git',
      ['cat-file', '-t', `:${relativePath}`],
      { cwd: ROOT, encoding: 'utf8' },
    );
    return stdout.trim();
  } catch (error) {
    if (error?.code === 128) return null;
    throw error;
  }
}

function blankInlineCode(line) {
  // split() keeps indexes aligned with JavaScript string offsets, including surrogate pairs.
  const characters = line.split('');
  let index = 0;

  while (index < characters.length) {
    if (characters[index] !== '`') {
      index++;
      continue;
    }

    let markerLength = 1;
    while (characters[index + markerLength] === '`') markerLength++;
    const marker = '`'.repeat(markerLength);
    const closingIndex = line.indexOf(marker, index + markerLength);
    if (closingIndex === -1) {
      index += markerLength;
      continue;
    }

    characters.fill(' ', index, closingIndex + markerLength);
    index = closingIndex + markerLength;
  }

  return characters.join('');
}

export function cleanUrl(rawUrl) {
  return rawUrl
    .replace(/\\([!"#$%&'()*+,\-./:;<=>?@[\]^_`{|}~])/g, '$1')
    .replace(/&amp;/gi, '&')
    .replace(/[.,;:!?，。；！？、]+$/u, '');
}

export function forEachRenderedLine(markdown, callback) {
  const lines = markdown.split(/\r?\n/);
  let fence = null;
  let inHtmlComment = false;

  for (let lineIndex = 0; lineIndex < lines.length; lineIndex++) {
    let line = lines[lineIndex];
    const fenceMatch = line.match(/^\s{0,3}(`{3,}|~{3,})/);

    if (fence) {
      if (fenceMatch && fenceMatch[1][0] === fence.character &&
          fenceMatch[1].length >= fence.length) {
        fence = null;
      }
      continue;
    }
    if (fenceMatch) {
      fence = { character: fenceMatch[1][0], length: fenceMatch[1].length };
      continue;
    }

    if (inHtmlComment) {
      const commentEnd = line.indexOf('-->');
      if (commentEnd === -1) continue;
      line = `${' '.repeat(commentEnd + 3)}${line.slice(commentEnd + 3)}`;
      inHtmlComment = false;
    }

    while (true) {
      const commentStart = line.indexOf('<!--');
      if (commentStart === -1) break;
      const commentEnd = line.indexOf('-->', commentStart + 4);
      if (commentEnd === -1) {
        line = line.slice(0, commentStart);
        inHtmlComment = true;
        break;
      }
      line = `${line.slice(0, commentStart)}${' '.repeat(commentEnd + 3 - commentStart)}${line.slice(commentEnd + 3)}`;
    }

    callback(blankInlineCode(line), lineIndex);
  }
}

export function displayPath(file) {
  const relative = path.relative(ROOT, file);
  return relative.startsWith('..') ? file : relative;
}

export function isMain(importMetaUrl) {
  return Boolean(
    process.argv[1] && importMetaUrl === pathToFileURL(path.resolve(process.argv[1])).href,
  );
}
