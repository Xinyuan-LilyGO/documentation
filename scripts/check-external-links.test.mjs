import assert from 'node:assert/strict';
import { once } from 'node:events';
import http from 'node:http';
import test from 'node:test';

import {
  checkUrl,
  extractExternalLinks,
  isWarningResult,
  parseArgs,
} from './check-external-links.mjs';

test('extracts rendered external URLs and preserves locations', () => {
  const markdown = [
    '[Markdown](https://example.com/docs_(v1))',
    '<a href="https://example.org/path?a=1&amp;b=2">HTML</a>',
    'link: https://example.net/a.',
    '`https://ignored.example/inline`',
    '\u4e2d\u6587 `https://ignored.example/unicode-inline`',
    '<!-- https://ignored.example/comment -->',
    '<!-- multi-line',
    'comment --> [after](https://example.edu/after)',
    '```sh',
    'curl https://ignored.example/fence',
    '```',
    '[local](http://127.0.0.1:3000/status)',
  ].join('\n');

  assert.deepEqual(extractExternalLinks(markdown, 'guide.md'), [
    { url: 'https://example.com/docs_(v1)', file: 'guide.md', line: 1, column: 12 },
    { url: 'https://example.org/path?a=1&b=2', file: 'guide.md', line: 2, column: 10 },
    { url: 'https://example.net/a', file: 'guide.md', line: 3, column: 7 },
    { url: 'https://example.edu/after', file: 'guide.md', line: 8, column: 21 },
  ]);
});

test('parses CLI options and default paths', () => {
  assert.deepEqual(parseArgs([]).paths, ['zh', 'en']);
  assert.deepEqual(parseArgs(['--timeout', '50', '--concurrency', '2', '--retries', '0', 'en']), {
    timeout: 50,
    concurrency: 2,
    hostConcurrency: 2,
    retries: 0,
    staged: false,
    verbose: false,
    help: false,
    paths: ['en'],
  });
  assert.deepEqual(parseArgs(['--staged']).paths, []);
  assert.equal(parseArgs(['--staged']).staged, true);
  assert.throws(() => parseArgs(['--staged', 'en']), /cannot be combined/);
  assert.throws(() => parseArgs(['--concurrency', '0']), /greater than or equal to 1/);
});

test('checks successful, redirected, GET-only, forbidden, and missing URLs', async t => {
  const server = http.createServer((request, response) => {
    if (request.url === '/redirect') {
      response.writeHead(302, { location: '/ok' }).end();
    } else if (request.url === '/get-only' && request.method === 'HEAD') {
      response.writeHead(405).end();
    } else if (request.url === '/redirect-no-location') {
      response.writeHead(302).end();
    } else if (request.url === '/forbidden') {
      response.writeHead(403).end();
    } else if (request.url === '/ok' || request.url === '/get-only') {
      response.writeHead(200).end('ok');
    } else {
      response.writeHead(404).end();
    }
  });
  server.listen(0, '127.0.0.1');
  await once(server, 'listening');
  t.after(() => server.close());

  const { port } = server.address();
  const baseUrl = `http://127.0.0.1:${port}`;
  assert.equal((await checkUrl(`${baseUrl}/ok`, { retries: 0 })).ok, true);
  assert.equal((await checkUrl(`${baseUrl}/redirect`, { retries: 0 })).ok, true);
  assert.equal((await checkUrl(`${baseUrl}/redirect-no-location`, { retries: 0 })).ok, true);
  assert.equal((await checkUrl(`${baseUrl}/get-only`, { retries: 0 })).ok, true);
  const forbidden = await checkUrl(`${baseUrl}/forbidden`, { retries: 0 });
  assert.deepEqual(forbidden, {
    ok: false,
    status: 403,
    finalUrl: `${baseUrl}/forbidden`,
  });
  assert.equal(isWarningResult(forbidden), true);
  assert.equal(isWarningResult({ ok: false, status: 404 }), false);
  assert.deepEqual(await checkUrl(`${baseUrl}/missing`, { retries: 0 }), {
    ok: false,
    status: 404,
    finalUrl: `${baseUrl}/missing`,
  });
});
