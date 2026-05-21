<script setup lang="ts">
import { ref, computed, onMounted, onBeforeUnmount, watch } from 'vue'
import { useData } from 'vitepress'
import { data as productsData } from '../../products.data'

interface Card {
  title: string
  desc: string
  image: string
  link: string
  btn: string
  external?: boolean
}

interface Section {
  id: string
  label: string
  heading: string
  cards: Card[]
}

const { frontmatter, localeIndex } = useData()
const sections = computed<Section[]>(() => frontmatter.value.sections ?? [])
const activeSection = ref('')

const i18n = {
  zh: { placeholder: '搜索产品名称…', btn: '搜索', noResults: '未找到匹配的产品' },
  en: { placeholder: 'Search product name…', btn: 'Search', noResults: 'No matching products found' },
}
const t = computed(() => i18n[localeIndex.value as 'zh' | 'en'] ?? i18n.en)

const searchQuery = ref('')
const showDropdown = ref(false)
const searchWrapRef = ref<HTMLElement | null>(null)

const catalog = computed(() => productsData[localeIndex.value as 'zh' | 'en'] ?? productsData.zh)

const searchResults = computed(() => {
  const q = searchQuery.value.trim().toLowerCase()
  if (!q) return []
  return catalog.value.products
    .filter(p => p.name.toLowerCase().includes(q))
    .slice(0, 10)
})

watch(searchQuery, (val) => {
  showDropdown.value = val.trim().length > 0
})

watch(localeIndex, () => {
  searchQuery.value = ''
  showDropdown.value = false
})

function onClickOutside(e: MouseEvent) {
  if (searchWrapRef.value && !searchWrapRef.value.contains(e.target as Node)) {
    showDropdown.value = false
  }
}

function onSelectResult() {
  searchQuery.value = ''
  showDropdown.value = false
}

watch(sections, (val) => {
  if (val.length && !activeSection.value) {
    activeSection.value = val[0].id
  }
}, { immediate: true })

let observer: IntersectionObserver | null = null

onMounted(() => {
  document.addEventListener('mousedown', onClickOutside)

  observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) activeSection.value = entry.target.id
      }
    },
    { rootMargin: '-20% 0px -70% 0px', threshold: 0 }
  )
  for (const s of sections.value) {
    const el = document.getElementById(s.id)
    if (el) observer.observe(el)
  }
})

onBeforeUnmount(() => {
  observer?.disconnect()
  document.removeEventListener('mousedown', onClickOutside)
})

function scrollTo(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
}
</script>

<template>
  <div class="home-layout-wrapper">
    <!-- Search bar -->
    <div class="home-search-bar" ref="searchWrapRef">
      <div class="home-search-field">
        <input
          v-model="searchQuery"
          type="text"
          :placeholder="t.placeholder"
          class="home-search-input"
          @focus="showDropdown = searchQuery.trim().length > 0"
          @keydown.escape="showDropdown = false"
        />
        <button class="home-search-btn">{{ t.btn }}</button>

        <!-- Dropdown -->
        <div v-if="showDropdown" class="search-dropdown">
          <template v-if="searchResults.length">
            <a
              v-for="p in searchResults"
              :key="p.docLink"
              :href="p.docLink"
              class="search-dropdown-item"
              @click="onSelectResult"
            >
              <img
                v-if="p.imageUrl"
                :src="p.imageUrl"
                :alt="p.name"
                class="search-dropdown-img"
                @error="($event.target as HTMLImageElement).style.display = 'none'"
              />
              <span class="search-dropdown-name">{{ p.name }}</span>
            </a>
          </template>
          <div v-else class="search-dropdown-empty">{{ t.noResults }}</div>
        </div>
      </div>
    </div>

    <!-- Main layout -->
    <div class="home-layout">
      <nav class="home-sidebar">
        <div class="cat-header">DOCUMENT</div>
        <div class="cat-nav">
          <button
            v-for="s in sections"
            :key="s.id"
            class="cat-item"
            :class="{ active: activeSection === s.id }"
            @click="scrollTo(s.id)"
          >{{ s.label }}</button>
        </div>
      </nav>

      <main class="home-main">
        <section v-for="s in sections" :key="s.id" :id="s.id">
          <h2 class="section-heading">{{ s.heading }}</h2>
          <div v-for="(card, i) in s.cards" :key="i" class="section-card">
            <div class="card-image" :class="{ 'card-image--icon': card.image === 'github' }">
              <svg
                v-if="card.image === 'github'"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 98 96"
                width="72"
                height="72"
                aria-hidden="true"
              >
                <path fill-rule="evenodd" clip-rule="evenodd" d="M48.854 0C21.839 0 0 22 0 49.217c0 21.756 13.993 40.172 33.405 46.69 2.427.49 3.316-1.059 3.316-2.362 0-1.141-.08-5.052-.08-9.127-13.59 2.934-16.42-5.867-16.42-5.867-2.184-5.704-5.42-7.17-5.42-7.17-4.448-3.015.324-3.015.324-3.015 4.934.326 7.523 5.052 7.523 5.052 4.367 7.496 11.404 5.378 14.235 4.074.404-3.178 1.699-5.378 3.074-6.6-10.839-1.141-22.243-5.378-22.243-24.283 0-5.378 1.94-9.778 5.014-13.2-.485-1.222-2.184-6.275.486-13.038 0 0 4.125-1.304 13.426 5.052a46.97 46.97 0 0 1 12.214-1.63c4.125 0 8.33.571 12.213 1.63 9.302-6.356 13.427-5.052 13.427-5.052 2.67 6.763.97 11.816.485 13.038 3.155 3.422 5.015 7.822 5.015 13.2 0 18.905-11.404 23.06-22.324 24.283 1.78 1.548 3.316 4.481 3.316 9.126 0 6.6-.08 11.897-.08 13.526 0 1.304.89 2.853 3.316 2.364 19.412-6.52 33.405-24.935 33.405-46.691C97.707 22 75.788 0 48.854 0z" fill="currentColor" />
              </svg>
              <img v-else :src="card.image" :alt="card.title" loading="lazy" />
            </div>
            <div class="card-body">
              <h3>{{ card.title }}</h3>
              <p>{{ card.desc }}</p>
              <a
                :href="card.link"
                class="card-btn"
                v-bind="card.external ? { target: '_blank', rel: 'noopener noreferrer' } : {}"
              >{{ card.btn }}</a>
            </div>
          </div>
        </section>
      </main>
    </div>
  </div>
</template>

<style scoped>
.home-layout-wrapper {
  max-width: 1280px;
  margin: 0 auto;
  padding: 24px 24px 64px;
}

/* ── Search bar ──────────────────────────── */
.home-search-bar {
  margin-bottom: 1.5rem;
}

.home-search-field {
  position: relative;
  display: flex;
  gap: 0.5rem;
}

.home-search-input {
  flex: 1;
  padding: 0.55rem 1rem;
  border: 1px solid var(--vp-c-divider);
  border-radius: 6px;
  font-size: 0.95rem;
  background: var(--vp-c-bg-soft);
  color: var(--vp-c-text-1);
  outline: none;
}

.home-search-input:focus {
  border-color: var(--vp-c-brand-1);
}

.home-search-btn {
  padding: 0.55rem 1.6rem;
  background: var(--vp-c-brand-1);
  color: #fff;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-size: 0.95rem;
  font-weight: 600;
  white-space: nowrap;
}

.home-search-btn:hover {
  background: var(--vp-c-brand-2);
}

/* ── Dropdown ────────────────────────────── */
.search-dropdown {
  position: absolute;
  top: calc(100% + 4px);
  left: 0;
  right: 0;
  background: var(--vp-c-bg);
  border: 1px solid var(--vp-c-divider);
  border-radius: 8px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
  z-index: 200;
  overflow: hidden;
  max-height: 360px;
  overflow-y: auto;
}

.search-dropdown-item {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.6rem 1rem;
  text-decoration: none;
  color: var(--vp-c-text-1);
  border-bottom: 1px solid var(--vp-c-divider);
  transition: background 0.15s;
}

.search-dropdown-item:last-child {
  border-bottom: none;
}

.search-dropdown-item:hover {
  background: var(--vp-c-bg-soft);
}

.search-dropdown-img {
  width: 40px;
  height: 40px;
  object-fit: contain;
  border-radius: 4px;
  background: var(--vp-c-bg-soft);
  flex-shrink: 0;
}

.search-dropdown-name {
  font-size: 0.9rem;
  font-weight: 500;
}

.search-dropdown-empty {
  padding: 1.2rem 1rem;
  text-align: center;
  color: var(--vp-c-text-3);
  font-size: 0.9rem;
}

/* ── Layout ──────────────────────────────── */
.home-layout {
  display: flex;
  align-items: flex-start;
}

/* ── Sidebar ─────────────────────────────── */
.home-sidebar {
  position: sticky;
  top: calc(var(--vp-nav-height) + 24px);
  flex-shrink: 0;
  width: 170px;
  margin-right: 1.5rem;
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

/* ── Main ────────────────────────────────── */
.home-main {
  flex: 1;
  min-width: 0;
}

.home-main > section {
  margin-bottom: 52px;
}

.section-heading {
  font-size: 20px;
  font-weight: 700;
  margin: 0 0 20px;
  padding-left: 12px;
  border-left: 4px solid var(--vp-c-brand-1, #fdae29);
  border-top: none;
  border-right: none;
  border-bottom: none;
  line-height: 1.3;
}

/* ── Card ────────────────────────────────── */
.section-card {
  display: flex;
  align-items: stretch;
  background: var(--vp-c-bg-soft);
  border: 1px solid var(--vp-c-divider);
  border-radius: 8px;
  overflow: hidden;
  margin-bottom: 16px;
}

.card-image {
  flex-shrink: 0;
  width: 260px;
  overflow: hidden;
  background: var(--vp-c-bg);
  display: flex;
  align-items: center;
  justify-content: center;
}

.card-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.card-image--icon {
  color: var(--vp-c-text-3);
  min-height: 160px;
}

.card-body {
  flex: 1;
  padding: 28px 32px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.card-body h3 {
  font-size: 20px;
  font-weight: 700;
  margin: 0 0 10px;
  color: var(--vp-c-text-1);
  border-top: none;
}

.card-body p {
  font-size: 14px;
  line-height: 1.75;
  color: var(--vp-c-text-2);
  margin: 0 0 20px;
}

.card-btn {
  display: inline-block;
  align-self: flex-start;
  padding: 8px 22px;
  background: var(--vp-c-brand-1, #fdae29);
  color: #fff !important;
  font-size: 14px;
  font-weight: 600;
  border-radius: 6px;
  text-decoration: none !important;
  transition: opacity 0.15s;
}

.card-btn:hover {
  opacity: 0.82;
}

/* ── Responsive ──────────────────────────── */
@media (max-width: 640px) {
  .home-layout-wrapper {
    padding: 16px 16px 48px;
  }

  .home-layout {
    flex-direction: column;
  }

  .home-sidebar {
    position: static;
    width: 100%;
  }

  .section-card {
    flex-direction: column;
  }

  .card-image {
    width: 100%;
    height: 200px;
  }

  .card-image--icon {
    min-height: 120px;
  }

  .card-body {
    padding: 20px 16px;
  }
}
</style>
