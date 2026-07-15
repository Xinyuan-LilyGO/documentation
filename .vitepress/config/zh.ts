import { defineConfig, type DefaultTheme } from 'vitepress'
import { readFileSync, readdirSync, existsSync } from 'fs'
import { resolve, dirname, join } from 'path'
import { fileURLToPath } from 'url'
import { load } from 'js-yaml'

const __dirname = dirname(fileURLToPath(import.meta.url))
const productsDir = resolve(__dirname, '../../zh/products')
const openSourceDir = resolve(__dirname, '../../zh/open-source')

function parseFrontmatter(content: string): Record<string, unknown> {
  const m = content.match(/^---\n([\s\S]*?)\n---/)
  if (!m) return {}
  return (load(m[1]) as Record<string, unknown>) ?? {}
}

function readFrontmatter(filePath: string): Record<string, unknown> {
  if (!existsSync(filePath)) return {}
  try { return parseFrontmatter(readFileSync(filePath, 'utf8')) } catch { return {} }
}

function readTitle(filePath: string): string {
  const fm = readFrontmatter(filePath)
  const raw = typeof fm.title === 'string' ? fm.title : ''
  return raw.replace(/^LILYGO\s+/i, '')
}

function getCategoryOrder(): string[] {
  const fm = readFrontmatter(join(productsDir, 'index.md'))
  return Array.isArray(fm.category_order) ? (fm.category_order as string[]) : []
}

function getCategoryLabel(cat: string): string {
  const fm = readFrontmatter(join(productsDir, cat, 'index.md'))
  return typeof fm.title === 'string' && fm.title ? fm.title : cat
}

function scanDir(dir: string, urlBase: string): DefaultTheme.SidebarItem[] {
  const result: DefaultTheme.SidebarItem[] = []
  const entries = readdirSync(dir, { withFileTypes: true })

  const subdirs = entries
    .filter(e => e.isDirectory())
    .sort((a, b) => a.name.localeCompare(b.name))

  for (const d of subdirs) {
    const subDir = join(dir, d.name)
    const subEntries = readdirSync(subDir, { withFileTypes: true })
    const hasIndex = subEntries.some(e => e.isFile() && e.name === 'index.md')
    const otherMds = subEntries
      .filter(e => e.isFile() && e.name.endsWith('.md') && e.name !== 'index.md')
      .sort((a, b) => a.name.localeCompare(b.name))
    const subSubdirs = subEntries.filter(e => e.isDirectory())

    const title = hasIndex ? readTitle(join(subDir, 'index.md')) : ''
    const isLeaf = subSubdirs.length === 0 && otherMds.length === 0

    if (isLeaf) {
      result.push({
        text: title || d.name,
        link: `${urlBase}/${d.name}/`,
      })
    } else {
      const subItems: DefaultTheme.SidebarItem[] = [
        ...otherMds.map(f => {
          const t = readTitle(join(subDir, f.name))
          return {
            text: t || f.name.replace('.md', ''),
            link: `${urlBase}/${d.name}/${f.name.replace('.md', '')}`,
          }
        }),
        ...scanDir(subDir, `${urlBase}/${d.name}`),
      ]
      const item: DefaultTheme.SidebarItem = {
        text: title || d.name,
        collapsed: true,
        items: subItems,
      }
      if (hasIndex) item.link = `${urlBase}/${d.name}/`
      result.push(item)
    }
  }

  return result
}

function buildOpenSourceSidebar(): DefaultTheme.SidebarItem[] {
  if (!existsSync(openSourceDir)) return []
  
  const entries = readdirSync(openSourceDir, { withFileTypes: true })
    .filter(e => e.isDirectory())
    .sort((a, b) => a.name.localeCompare(b.name))

  return entries.map(dir => {
    const dirPath = join(openSourceDir, dir.name)
    const indexPath = join(dirPath, 'index.md')
    const title = existsSync(indexPath) ? readTitle(indexPath) : dir.name
    
    // Read all .md files in this directory
    const mdFiles = readdirSync(dirPath, { withFileTypes: true })
      .filter(e => e.isFile() && e.name.endsWith('.md'))
      .sort((a, b) => a.name.localeCompare(b.name))
    
    // Create items for each .md file
    const items: DefaultTheme.SidebarItem[] = mdFiles.map(file => {
      const filePath = join(dirPath, file.name)
      const fileTitle = readTitle(filePath)
      const linkName = file.name.replace('.md', '')
      return {
        text: fileTitle || linkName,
        link: `/zh/open-source/${dir.name}/${linkName}/`,
      }
    })
    
    return {
      text: title,
      collapsed: false,
      items: items,
    }
  })
}

function buildSidebar(): DefaultTheme.Sidebar {
  const order = getCategoryOrder()
  const allCats = readdirSync(productsDir, { withFileTypes: true })
    .filter(e => e.isDirectory())
    .map(e => e.name)

  const sorted = [
    ...order.filter(c => allCats.includes(c)),
    ...allCats.filter(c => !order.includes(c)).sort(),
  ]

  const sidebar: DefaultTheme.Sidebar = {
    '/zh/products/': sorted.map(cat => ({
      text: getCategoryLabel(cat),
      collapsed: false,
      items: scanDir(join(productsDir, cat), `/zh/products/${cat}`),
    })),
  }

  const openSourceItems = buildOpenSourceSidebar()
  if (openSourceItems.length > 0) {
    sidebar['/zh/open-source/'] = openSourceItems
  }

  return sidebar
}

export const zh = defineConfig({
  lang: 'zh-CN',
  description: 'LILYGO 文档中心',

  themeConfig: {
    nav: [
      {
        component: 'ImageNav',
        props: { href: 'https://xinyuan-lilygo.github.io/Launchpad', image: '/image/setting.svg' }
      },
      {
        component: 'ImageNav',
        props: { href: 'https://lilygo.cc', image: '/image/shopping.svg' }
      },
      {
        component: 'ImageNav',
        props: { href: 'https://www.youtube.com/@LILYGO', image: '/image/youtube.svg' }
      },
    ],

    sidebar: buildSidebar(),

    outline: {
      label: '本页目录',
      level: [2, 3],
    },
    docFooter: {
      prev: '上一页',
      next: '下一页',
    },
    darkModeSwitchLabel: '主题',
    lightModeSwitchTitle: '切换到浅色模式',
    darkModeSwitchTitle: '切换到深色模式',
    sidebarMenuLabel: '菜单',
    returnToTopLabel: '回到顶部',
    langMenuLabel: '切换语言',
    editLink: {
      pattern: 'https://github.com/Xinyuan-LilyGO/documentation/edit/master/:path',
      text: '在 GitHub 上编辑此页面'
    },
    lastUpdated: {
      text: '最后更新于'
    },
  },
})
