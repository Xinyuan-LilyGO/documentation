import { readFileSync, readdirSync, existsSync } from 'fs'
import { resolve, dirname, basename, join } from 'path'
import { fileURLToPath } from 'url'
import { load } from 'js-yaml'

interface DirEntry { name: string; isDirectory(): boolean; isFile(): boolean }

const __dirname = dirname(fileURLToPath(import.meta.url))

export interface Product {
  name: string
  category: string
  docLink: string
  shopLink: string
  imageUrl: string
}

export interface Catalog {
  categories: string[]
  products: Product[]
}

export interface AllCatalogs {
  zh: Catalog
  en: Catalog
}

function parseFm(content: string): Record<string, unknown> {
  const m = content.match(/^---\n([\s\S]*?)\n---/)
  if (!m) return {}
  return (load(m[1]) as Record<string, unknown>) ?? {}
}

function readFm(filePath: string): Record<string, unknown> {
  if (!existsSync(filePath)) return {}
  try { return parseFm(readFileSync(filePath, 'utf8')) } catch { return {} }
}

function parseFrontmatterTitle(content: string): string {
  const fm = parseFm(content)
  const raw = typeof fm.title === 'string' ? fm.title : ''
  return raw.replace(/^LILYGO\s+/i, '')
}

function extractShopLink(content: string): string {
  const match = content.match(/^#\s+.*<ShopLink\s+href="(https?:\/\/[^"]+)"/m)
  return match ? match[1] : ''
}

// ─── EN: scan vitepress-wiki/en/products/ ────────────────────────────────────

const EN_PRODUCTS_DIR = resolve(__dirname, '../en/products')

function getEnCategoryOrder(): string[] {
  const fm = readFm(join(EN_PRODUCTS_DIR, 'index.md'))
  return Array.isArray(fm.category_order) ? (fm.category_order as string[]) : []
}

function getEnCategoryLabel(cat: string): string {
  const fm = readFm(join(EN_PRODUCTS_DIR, cat, 'index.md'))
  return typeof fm.title === 'string' && fm.title ? fm.title : cat
}

function collectEnProducts(dir: string, relBase: string, category: string, products: Product[]) {
  const entries = readdirSync(dir, { withFileTypes: true }) as unknown as DirEntry[]

  for (const e of entries) {
    if (e.isDirectory()) {
      collectEnProducts(join(dir, e.name), `${relBase}/${e.name}`, category, products)
    } else if (e.isFile() && e.name === 'index.md' && relBase.includes('/')) {
      const content = readFileSync(join(dir, 'index.md'), 'utf8')
      const dirName = basename(dir)
      products.push({
        name: parseFrontmatterTitle(content) || dirName,
        category,
        docLink: `/en/products/${relBase}/`,
        shopLink: extractShopLink(content),
        imageUrl: `/products/${relBase}/assets/${dirName}-1.jpg`,
      })
    }
  }
}

function buildEnCatalog(): Catalog {
  const categories: string[] = []
  const products: Product[] = []

  const order = getEnCategoryOrder()
  const allCats = (readdirSync(EN_PRODUCTS_DIR, { withFileTypes: true }) as unknown as DirEntry[])
    .filter((e: DirEntry) => e.isDirectory())
    .map((e: DirEntry) => e.name)

  const cats = [
    ...order.filter((c: string) => allCats.includes(c)),
    ...allCats.filter((c: string) => !order.includes(c)).sort(),
  ]

  for (const cat of cats) {
    const label = getEnCategoryLabel(cat)
    categories.push(label)
    collectEnProducts(join(EN_PRODUCTS_DIR, cat), cat, label, products)
  }

  return { categories, products }
}

// ─── ZH: scan vitepress-wiki/zh/products/ ────────────────────────────────────

const ZH_PRODUCTS_DIR = resolve(__dirname, '../zh/products')

function getZhCategoryOrder(): string[] {
  const fm = readFm(join(ZH_PRODUCTS_DIR, 'index.md'))
  return Array.isArray(fm.category_order) ? (fm.category_order as string[]) : []
}

function getZhCategoryLabel(cat: string): string {
  const fm = readFm(join(ZH_PRODUCTS_DIR, cat, 'index.md'))
  return typeof fm.title === 'string' && fm.title ? fm.title : cat
}

function collectZhProducts(dir: string, relBase: string, category: string, products: Product[]) {
  const entries = readdirSync(dir, { withFileTypes: true }) as unknown as DirEntry[]

  for (const e of entries) {
    if (e.isDirectory()) {
      collectZhProducts(join(dir, e.name), `${relBase}/${e.name}`, category, products)
    } else if (e.isFile() && e.name === 'index.md' && relBase.includes('/')) {
      const content = readFileSync(join(dir, 'index.md'), 'utf8')
      const dirName = basename(dir)
      products.push({
        name: parseFrontmatterTitle(content) || dirName,
        category,
        docLink: `/zh/products/${relBase}/`,
        shopLink: extractShopLink(content),
        imageUrl: `/products/${relBase}/assets/${dirName}-1.jpg`,
      })
    }
  }
}

function buildZhCatalog(): Catalog {
  const categories: string[] = []
  const products: Product[] = []

  const order = getZhCategoryOrder()
  const allCats = (readdirSync(ZH_PRODUCTS_DIR, { withFileTypes: true }) as unknown as DirEntry[])
    .filter((e: DirEntry) => e.isDirectory())
    .map((e: DirEntry) => e.name)

  const cats = [
    ...order.filter((c: string) => allCats.includes(c)),
    ...allCats.filter((c: string) => !order.includes(c)).sort(),
  ]

  for (const cat of cats) {
    const label = getZhCategoryLabel(cat)
    categories.push(label)
    collectZhProducts(join(ZH_PRODUCTS_DIR, cat), cat, label, products)
  }

  return { categories, products }
}

// ─── Export ───────────────────────────────────────────────────────────────────

export default {
  watch: [
    '../en/products/**/index.md',
    '../zh/products/**/index.md',
  ],
  load(): AllCatalogs {
    return {
      zh: buildZhCatalog(),
      en: buildEnCatalog(),
    }
  },
}
