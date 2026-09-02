import assert from 'node:assert/strict';
import { promises as fs } from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import test from 'node:test';

import {
  checkInternalLink,
  extractInternalLinks,
  parseArgs,
} from './check-internal-links.mjs';

test('parses internal checker paths and options', () => {
  assert.deepEqual(parseArgs([]), { staged: false, help: false, paths: ['zh', 'en'] });
  assert.deepEqual(parseArgs(['en']), { staged: false, help: false, paths: ['en'] });
  assert.deepEqual(parseArgs(['--help']), {
    staged: false,
    help: true,
    paths: ['zh', 'en'],
  });
  assert.deepEqual(parseArgs(['--staged']), { staged: true, help: false, paths: [] });
  assert.throws(() => parseArgs(['--staged', 'en']), /cannot be combined/);
  assert.throws(() => parseArgs(['--unknown']), /Unknown option/);
});

test('extracts internal static assets and flags public-prefixed authoring paths', () => {
  const markdown = [
    '[valid](/datasheet/valid.pdf)',
    '[wrong](public/datasheet/file\\_name.pdf)',
    '<img src="/products/device/image.png">',
    "<ImageGallery :images=\"[{ src: 'public/products/gallery.jpg' }]\" />",
    '[space](/datasheet/file name.pdf)',
    '[angle](</datasheet/file name.pdf>)',
    '[route](/products/device/)',
    '[page](/products/device/index.html)',
    '[external](https://example.com/public/file.pdf)',
    '`[inline](public/ignored.pdf)`',
    '```md',
    '[fenced](/ignored.pdf)',
    '```',
  ].join('\n');

  const links = extractInternalLinks(markdown, 'guide.md');
  assert.deepEqual(links.map(({ path: assetPath, line }) => ({ path: assetPath, line })), [
    { path: '/datasheet/valid.pdf', line: 1 },
    { path: 'public/datasheet/file_name.pdf', line: 2 },
    { path: '/products/device/image.png', line: 3 },
    { path: 'public/products/gallery.jpg', line: 4 },
    { path: '/datasheet/file name.pdf', line: 5 },
    { path: '/datasheet/file name.pdf', line: 6 },
  ]);
  assert.equal(links[4].error, 'local asset path contains an unescaped space');
  assert.equal(links[4].suggestion, '/datasheet/file%20name.pdf');
  assert.equal(links[5].error, undefined);
});

test('checks internal assets against public and suggests paths without public', async t => {
  const publicDir = await fs.mkdtemp(path.join(os.tmpdir(), 'link-check-public-'));
  t.after(() => fs.rm(publicDir, { recursive: true, force: true }));
  await fs.mkdir(path.join(publicDir, 'datasheet'));
  await fs.writeFile(path.join(publicDir, 'datasheet', 'valid file.pdf'), 'pdf');

  assert.equal((await checkInternalLink({ path: '/datasheet/valid%20file.pdf' }, publicDir)).ok, true);
  assert.deepEqual(await checkInternalLink({
    path: 'public/datasheet/valid%20file.pdf',
  }, publicDir), {
    ok: false,
    error: 'public paths must omit the "public" directory',
    suggestion: '/datasheet/valid%20file.pdf',
  });
  assert.deepEqual(await checkInternalLink({
    path: '/datasheet/valid file.pdf',
    error: 'local asset path contains an unescaped space',
    suggestion: '/datasheet/valid%20file.pdf',
  }, publicDir), {
    ok: false,
    error: 'local asset path contains an unescaped space',
    suggestion: '/datasheet/valid%20file.pdf',
  });
  assert.match(
    (await checkInternalLink({ path: '/datasheet/missing.pdf' }, publicDir)).error,
    /does not exist/,
  );
});
