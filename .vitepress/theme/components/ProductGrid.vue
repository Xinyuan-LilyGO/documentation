<template>
  <div class="product-catalog">
    <div class="search-bar">
      <input
        v-model="searchQuery"
        type="text"
        :placeholder="t.searchPlaceholder"
        class="search-input"
      />
      <button class="search-btn">{{ t.searchBtn }}</button>
    </div>

    <div class="catalog-body">
      <aside class="cat-sidebar">
        <div class="cat-header">PRODUCTS</div>
        <nav class="cat-nav">
          <button
            v-for="cat in catalog.categories"
            :key="cat"
            class="cat-item"
            :class="{ active: selectedCategory === cat }"
            @click="selectedCategory = selectedCategory === cat ? '' : cat"
          >{{ cat }}</button>
        </nav>
      </aside>

      <main class="product-main">
        <h2 v-if="selectedCategory" class="section-title">{{ selectedCategory }}</h2>
        <div v-if="filteredProducts.length" class="product-grid">
          <a
            v-for="product in filteredProducts"
            :key="product.docLink"
            :href="product.docLink"
            class="product-card"
          >
            <div class="card-img-wrap">
              <img
                :src="product.imageUrl"
                :alt="product.name"
                class="card-img"
                loading="lazy"
                @error="onImgError"
              />
            </div>
            <div class="card-info">
              <div class="card-name">{{ product.name }}</div>
              <div class="card-actions">
                <span class="btn-doc">{{ t.viewDocs }}</span>
                <a
                  v-if="product.shopLink"
                  :href="product.shopLink"
                  target="_blank"
                  rel="noopener"
                  class="btn-shop"
                  @click.prevent.stop="openShop(product.shopLink)"
                >{{ t.buy }}</a>
              </div>
            </div>
          </a>
        </div>
        <div v-else class="no-results">{{ t.noResults }}</div>
      </main>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, watch } from 'vue'
import { useData } from 'vitepress'
import { data } from '../../products.data'

const { localeIndex } = useData()

const i18n = {
  zh: {
    searchPlaceholder: '产品名称 / 型号',
    searchBtn: '搜索',
    viewDocs: '查看文档',
    buy: '购买',
    noResults: '未找到匹配的产品',
  },
  en: {
    searchPlaceholder: 'Product Name / SKU',
    searchBtn: 'Search',
    viewDocs: 'View Docs',
    buy: 'Buy',
    noResults: 'No matching products found',
  },
}

// localeIndex is 'root' for the default (English) locale, 'zh' for Chinese
const locale = computed(() => localeIndex.value === 'zh' ? 'zh' : 'en')
const t = computed(() => i18n[locale.value])
const catalog = computed(() => data[locale.value])

const searchQuery = ref('')
const selectedCategory = ref('')

watch(localeIndex, () => {
  selectedCategory.value = ''
  searchQuery.value = ''
})

const filteredProducts = computed(() => {
  let list = catalog.value.products
  if (selectedCategory.value) {
    list = list.filter(p => p.category === selectedCategory.value)
  }
  const q = searchQuery.value.trim().toLowerCase()
  if (q) {
    list = list.filter(p => p.name.toLowerCase().includes(q))
  }
  return list
})

function openShop(url: string) {
  window.open(url, '_blank', 'noopener')
}

function onImgError(e: Event) {
  const img = e.target as HTMLImageElement
  img.src = '/image/logo.png'
}
</script>

<style scoped>
.product-catalog {
  max-width: 1200px;
  margin: 0 auto;
  padding: 1.5rem 0;
}

/* Search */
.search-bar {
  display: flex;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
}

.search-input {
  flex: 1;
  padding: 0.55rem 1rem;
  border: 1px solid var(--vp-c-divider);
  border-radius: 6px;
  font-size: 0.95rem;
  background: var(--vp-c-bg-soft);
  color: var(--vp-c-text-1);
  outline: none;
}

.search-input:focus {
  border-color: var(--vp-c-brand-1);
}

.search-btn {
  padding: 0.55rem 1.6rem;
  background: var(--vp-c-brand-1);
  color: #fff;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-size: 0.95rem;
  font-weight: 600;
}

.search-btn:hover {
  background: var(--vp-c-brand-2);
}

/* Layout */
.catalog-body {
  display: flex;
  gap: 1.5rem;
  align-items: flex-start;
}

/* Sidebar */
.cat-sidebar {
  width: 170px;
  flex-shrink: 0;
  border: 1px solid var(--vp-c-divider);
  border-radius: 8px;
  overflow: hidden;
}

.cat-header {
  background: var(--vp-c-brand-1);
  color: #fff;
  font-weight: 700;
  font-size: 0.95rem;
  letter-spacing: 0.05em;
  padding: 0.6rem 1rem;
}

.cat-nav {
  display: flex;
  flex-direction: column;
}

.cat-item {
  display: block;
  width: 100%;
  text-align: left;
  padding: 0.5rem 1rem;
  background: none;
  border: none;
  border-bottom: 1px solid var(--vp-c-divider);
  cursor: pointer;
  font-size: 0.875rem;
  color: var(--vp-c-text-2);
  transition: background 0.15s;
}

.cat-item:last-child {
  border-bottom: none;
}

.cat-item:hover {
  background: var(--vp-c-bg-soft);
  color: var(--vp-c-text-1);
}

.cat-item.active {
  color: var(--vp-c-brand-1);
  font-weight: 600;
  background: var(--vp-c-bg-soft);
}

/* Product area */
.product-main {
  flex: 1;
  min-width: 0;
}

.section-title {
  font-size: 1.1rem;
  font-weight: 700;
  margin: 0 0 1rem;
  padding-left: 0.6rem;
  border-left: 3px solid var(--vp-c-brand-1);
}

/* Grid */
.product-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
}

@media (max-width: 960px) {
  .product-grid { grid-template-columns: repeat(2, 1fr); }
}

@media (max-width: 640px) {
  .catalog-body { flex-direction: column; }
  .cat-sidebar { width: 100%; }
  .product-grid { grid-template-columns: repeat(2, 1fr); }
}

/* Card */
.product-card {
  border: 1px solid var(--vp-c-divider);
  border-radius: 10px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  text-decoration: none;
  color: inherit;
  transition: box-shadow 0.2s, border-color 0.2s;
  background: var(--vp-c-bg);
}

.product-card:hover {
  box-shadow: 0 4px 18px rgba(0, 0, 0, 0.1);
  border-color: var(--vp-c-brand-1);
  text-decoration: none;
}

.card-img-wrap {
  aspect-ratio: 1;
  overflow: hidden;
  background: var(--vp-c-bg-soft);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1.2rem;
}

.card-img {
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
}

.card-info {
  padding: 0.75rem;
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
  border-top: 1px solid var(--vp-c-divider);
}

.card-name {
  font-weight: 600;
  font-size: 0.92rem;
  text-align: center;
  color: var(--vp-c-text-1);
}

.card-actions {
  display: flex;
  gap: 0.4rem;
  justify-content: center;
  flex-wrap: wrap;
}

.btn-doc,
.btn-shop {
  padding: 0.3rem 0.9rem;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 500;
  cursor: pointer;
  text-decoration: none;
  display: inline-block;
}

.btn-doc {
  background: var(--vp-c-brand-1);
  color: #fff;
}

.btn-shop {
  border: 1px solid var(--vp-c-brand-1);
  color: var(--vp-c-brand-1);
}

.btn-shop:hover {
  background: var(--vp-c-brand-1);
  color: #fff;
}

.no-results {
  padding: 3rem;
  text-align: center;
  color: var(--vp-c-text-3);
  font-size: 0.95rem;
}
</style>
