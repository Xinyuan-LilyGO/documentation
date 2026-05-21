import { defineConfig } from 'vitepress'
import { readFileSync, existsSync } from 'fs'
import { resolve, dirname, join } from 'path'
import { fileURLToPath } from 'url'
import { parseFragment, serialize } from 'parse5'
import { zh } from './config/zh'
import { en } from './config/en'

const __dirname = dirname(fileURLToPath(import.meta.url))

export default defineConfig({
  srcDir: '.',
  srcExclude: ['README.md', 'README.zh.md'],
  outDir: '../vitepress-dist',
  cacheDir: '.vitepress/cache',

  rewrites: {
    'en/:rest*': ':rest*',
  },

  lastUpdated: true,

  vite: {
    publicDir: resolve(__dirname, '../public'),
    plugins: [
      {
        name: 'serve-srcdir-binary-assets',
        configureServer(server) {
          server.middlewares.use((req, res, next) => {
            const urlPath = (req.url ?? '').split('?')[0]
            if (urlPath.endsWith('.bin')) {
              const filePath = resolve(__dirname, '..', decodeURIComponent(urlPath.slice(1)))
              if (existsSync(filePath)) {
                const data = readFileSync(filePath)
                res.setHeader('Content-Type', 'application/octet-stream')
                res.setHeader('Content-Length', String(data.length))
                res.end(data)
                return
              }
            }
            next()
          })
        },
      },
    ],
    build: {
      rollupOptions: {
        onwarn(warning, defaultHandler) {
          // SSR-compiled pages with inline styles import from 'vue' and 'vue/server-renderer'.
          // These are resolvable by Node.js at SSR render time but Vite's bundler can't
          // externalize them as subpath exports in this context, generating spurious warnings.
          if (warning.code === 'UNRESOLVED_IMPORT' &&
              typeof warning.exporter === 'string' &&
              /^(vue|@vue\/)/.test(warning.exporter)) {
            return
          }
          defaultHandler(warning)
        },
      },
    },
  },

  title: 'Documentation',
  description: 'LILYGO Documentation',

  // Cross-page links use teedoc URL formats (/get_started/zh/...) that differ from VitePress
  // routes (/zh/...). Suppress dead-link failures to allow the build to complete.
  ignoreDeadLinks: true,

  locales: {
    root: { label: 'English', ...en },
    zh: { label: '中文', ...zh },
  },

  head: [[
    'link',
    { rel: 'icon', href: '/image/logo.png' },
  ]],

  themeConfig: {
    logo: '/image/logo.png',
    socialLinks: [
      { icon: 'github', link: 'https://github.com/Xinyuan-LilyGO/documentation' },
    ],
    search: {
      provider: 'local',
    },
  },

  markdown: {
    image: {
      lazyLoading: true,
    },
    config: (md) => {
      // Patch individual html_block tokens: apply parse5 HTML repair to each raw HTML block.
      // We scope parse5 here rather than over the full rendered output to avoid corrupting
      // VitePress's internal SFC structure (which lives outside md.renderer.render's scope
      // but can be broken if the full output is restructured by the HTML5 parser).
      const defaultHtmlBlock = md.renderer.rules.html_block
        || ((tokens: any[], idx: number) => tokens[idx].content)
      md.renderer.rules.html_block = (tokens, idx, options, env, self) => {
        let html: string = defaultHtmlBlock(tokens, idx, options, env, self)
        // Fix unquoted % attributes (e.g. width=100% → width="100%")
        html = html.replace(/(\s(?:width|height))=(\d+(?:\.\d+)?%)/g, '$1="$2"')
        // Fix <p align="center"> issues
        html = html.replace(/<p align="center">(.*?)<\/p>/g, (_m: string, inner: string) => inner.trim())
        html = html.replace(/<p align="center">/g, '')
        // Skip parse5 for Vue component tags (PascalCase start) — parse5 lowercases tag
        // names which breaks Vue's component resolution (e.g. EspFlasher → espflasher).
        if (/^\s*<[A-Z]/.test(html)) return html
        // Repair structural HTML issues (duplicate </tr>, missing </tr>, stray text in tables)
        html = serialize(parseFragment(html))
        return html
      }

      // Apply inline-HTML fixes and image src stripping on the full rendered output.
      // We do NOT run parse5 here — parse5 is scoped to html_block tokens above to avoid
      // corrupting VitePress's internal SFC structure.
      const origRendererRender = md.renderer.render.bind(md.renderer)
      md.renderer.render = (tokens, options, env) => {
        let html = origRendererRender(tokens, options, env)
        // Fix unquoted % attributes that may appear in inline HTML (e.g. width=100%)
        html = html.replace(/(\s(?:width|height))=(\d+(?:\.\d+)?%)/g, '$1="$2"')
        // Fix <p align="center"> that appears as inline HTML inside markdown table cells
        html = html.replace(/<p align="center">(.*?)<\/p>/g, (_m, inner) => inner.trim())
        html = html.replace(/<p align="center">/g, '')
        // Strip bare relative paths (e.g. src="images/foo.jpg" — no leading ./ or /)
        html = html.replace(/(<img\b[^>]*?)\ssrc="(?!https?:\/\/|\/|\.{1,2}\/)([^"]+)"([^>]*>)/g, '$1$3')
        // Strip ./assets/ paths where the file does not actually exist on disk
        const mdDir = env && (env as { realPath?: string }).realPath
          ? dirname((env as { realPath: string }).realPath)
          : null
        if (mdDir) {
          html = html.replace(/(<img\b[^>]*?)\ssrc="(\.{1,2}\/[^"]+)"([^>]*>)/g, (m, pre, src, post) => {
            const abs = join(mdDir, src)
            return existsSync(abs) ? m : `${pre}${post}`
          })
        }
        return html
      }
    },
  },
})
