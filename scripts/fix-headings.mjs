import { readFileSync, writeFileSync } from 'fs';
import { readdirSync, statSync } from 'fs';
import path from 'path';

// All H2 headings that should become H3 under ## Arduino wrapper
const TARGET_H2 = new Set([
  'Arduino IDE',
  'Arduino IDE (Experimental)',
  'Arduino IDE (RP2350)',
  'PlatformIO',
  'PlatformIO (Recommended)',
  'PlatformIO（推荐）',
  'LVGL',
  'Peripheral Examples',
  '外设示例',
]);

function isTarget(line) {
  if (!line.startsWith('## ')) return false;
  return TARGET_H2.has(line.slice(3).trim());
}

function walk(dir) {
  const results = [];
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) results.push(...walk(full));
    else if (entry.name === 'quick-start.md') results.push(full);
  }
  return results;
}

function processFile(filePath) {
  const original = readFileSync(filePath, 'utf8');
  const lines = original.split('\n');
  const out = [];
  let wrapperInserted = false;
  let insideTargetSection = false;

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];

    if (isTarget(line)) {
      // First target section: insert ## Arduino wrapper
      if (!wrapperInserted) {
        out.push('## Arduino');
        out.push('');
        wrapperInserted = true;
      }
      // Demote ## -> ###
      out.push('###' + line.slice(2));
      insideTargetSection = true;
    } else if (line.startsWith('## ')) {
      // Any other H2 ends the target region
      insideTargetSection = false;
      out.push(line);
    } else if (insideTargetSection && line.startsWith('### ')) {
      // H3 inside target section -> H4
      out.push('####' + line.slice(3));
    } else if (insideTargetSection && line.startsWith('#### ')) {
      // H4 inside target section -> H5 (shouldn't be needed but just in case)
      out.push('#####' + line.slice(4));
    } else {
      out.push(line);
    }
  }

  const result = out.join('\n');
  if (result !== original) {
    writeFileSync(filePath, result, 'utf8');
    return true;
  }
  return false;
}

const baseDir = path.resolve('.');
let total = 0, updated = 0;

for (const lang of ['en', 'zh']) {
  const dir = path.join(baseDir, lang, 'products');
  const files = walk(dir);
  for (const f of files) {
    total++;
    if (processFile(f)) {
      updated++;
      console.log('updated:', path.relative(baseDir, f));
    }
  }
}

console.log(`\nDone: ${updated}/${total} files updated.`);
