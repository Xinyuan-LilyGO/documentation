/**
 * Batch PDF export script for LILYGO VitePress documentation.
 *
 * Prerequisites:
 *   npm install -D puppeteer
 *
 * Usage:
 *   # First start the dev server in another terminal:
 *   npm run dev
 *
 *   # Then in a new terminal:
 *   node scripts/export-pdf.mjs [options]
 *
 * Options:
 *   --lang en|zh     Export only one locale (default: both)
 *   --base-url URL   Dev server base URL (default: http://localhost:5173)
 *   --out-dir PATH   Output directory (default: ./pdf-export)
 *   --concurrency N  Number of parallel pages (default: 3)
 *   --product NAME   Export only pages whose path contains NAME
 *                    e.g. --product t-display-s3
 */

import puppeteer from 'puppeteer';
import { promises as fs } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Extract `title:` from markdown frontmatter
async function readTitle(mdFile) {
  try {
    const text = await fs.readFile(mdFile, 'utf8');
    const m = text.match(/^---[\s\S]*?^title:\s*(.+)/m);
    if (m) return m[1].trim().replace(/[<>:"/\\|?*]+/g, '-');
  } catch {}
  return null;
}

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');

// ── CLI args ──────────────────────────────────────────────────────────────────
const args = process.argv.slice(2);
const get = (flag, fallback) => {
  const i = args.indexOf(flag);
  return i !== -1 && args[i + 1] ? args[i + 1] : fallback;
};

const BASE_URL    = get('--base-url', 'http://localhost:5173');
const OUT_DIR     = path.resolve(ROOT, get('--out-dir', 'pdf-export'));
const CONCURRENCY = parseInt(get('--concurrency', '3'), 10);
const LANG_FILTER = get('--lang', 'both');   // 'en' | 'zh' | 'both'
const PRODUCT     = get('--product', '');

// ── Collect pages ─────────────────────────────────────────────────────────────

async function collectPages(srcDir, urlPrefix) {
  const pages = [];

  async function walk(dir) {
    const entries = await fs.readdir(dir, { withFileTypes: true });
    for (const e of entries) {
      if (e.name.startsWith('.') || e.name === 'node_modules') continue;
      const full = path.join(dir, e.name);
      if (e.isDirectory()) {
        await walk(full);
      } else if (e.name === 'index.md') {
        // Convert file path → URL path
        const rel = path.relative(srcDir, path.dirname(full)).replace(/\\/g, '/');
        const url = rel === '.' ? `${BASE_URL}${urlPrefix}` : `${BASE_URL}${urlPrefix}${rel}/`;

        // Use frontmatter title as filename, fall back to directory name
        const title = await readTitle(full) || path.basename(path.dirname(full));
        const pdfName = `${title}.pdf`;

        const outFile = path.join(
          OUT_DIR,
          urlPrefix.replace(/\//g, ''),   // 'en' or 'zh'
          rel === '.' ? pdfName : `${path.dirname(rel)}/${pdfName}`
        );
        pages.push({ url, outFile, label: `${urlPrefix}${rel}` });
      }
    }
  }

  await walk(srcDir);
  return pages;
}

// ── PDF rendering ─────────────────────────────────────────────────────────────

async function renderPDF(page, { url, outFile }) {
  await page.goto(url, { waitUntil: 'networkidle2', timeout: 60_000 });
  // Wait for VitePress content to mount
  await page.waitForSelector('#app', { timeout: 10_000 }).catch(() => {});
  // Extra settle time for images / Vue components
  await new Promise(r => setTimeout(r, 800));

  // Hide prev/next navigation links and Giscus comment widget before printing
  await page.evaluate(() => {
    const selectors = [
      '.pager',           // VitePress prev/next page nav
      '.giscus',          // Giscus comment container
      '.giscus-frame',    // Giscus iframe
    ];
    for (const sel of selectors) {
      document.querySelectorAll(sel).forEach(el => {
        el.style.display = 'none';
      });
    }
  });

  await fs.mkdir(path.dirname(outFile), { recursive: true });
  await page.pdf({
    path: outFile,
    format: 'A4',
    margin: { top: '15mm', bottom: '15mm', left: '12mm', right: '12mm' },
    printBackground: true,
  });
}

// ── Concurrency pool ──────────────────────────────────────────────────────────

async function runPool(browser, items, concurrency) {
  let index = 0;
  let done = 0;
  const total = items.length;
  const errors = [];

  async function worker() {
    while (index < total) {
      const item = items[index++];
      const page = await browser.newPage();
      try {
        await renderPDF(page, item);
        done++;
        process.stdout.write(`\r[${done}/${total}] ${item.label}`.padEnd(80));
      } catch (err) {
        errors.push({ item, err });
        console.error(`\n  ERROR ${item.label}: ${err.message}`);
      } finally {
        await page.close();
      }
    }
  }

  await Promise.all(Array.from({ length: concurrency }, worker));
  return errors;
}

// ── Main ──────────────────────────────────────────────────────────────────────

async function main() {
  // Build page list
  let pages = [];

  if (LANG_FILTER !== 'zh') {
    const enPages = await collectPages(path.join(ROOT, 'en'), '/');
    pages.push(...enPages);
  }
  if (LANG_FILTER !== 'en') {
    const zhPages = await collectPages(path.join(ROOT, 'zh'), '/zh/');
    pages.push(...zhPages);
  }

  // Optional product filter
  if (PRODUCT) {
    pages = pages.filter(p => p.label.includes(PRODUCT));
  }

  if (pages.length === 0) {
    console.error('No pages matched. Check --lang / --product filters.');
    process.exit(1);
  }

  console.log(`Found ${pages.length} pages → output: ${OUT_DIR}`);
  console.log(`Connecting to ${BASE_URL} …\n`);

  // Verify server is up
  try {
    const res = await fetch(BASE_URL, { signal: AbortSignal.timeout(5000) });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
  } catch {
    console.error(
      `Cannot reach ${BASE_URL}\nMake sure "npm run dev" is running first.`
    );
    process.exit(1);
  }

  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
  });

  try {
    const errors = await runPool(browser, pages, CONCURRENCY);
    console.log(`\n\nDone. ${pages.length - errors.length}/${pages.length} exported.`);
    if (errors.length) {
      console.log('Failed pages:');
      errors.forEach(({ item }) => console.log('  -', item.label));
    }
  } finally {
    await browser.close();
  }
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});
