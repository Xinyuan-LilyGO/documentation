<template>
  <div ref="giscusRef" class="giscus-wrapper" />
</template>

<script setup lang="ts">
import { ref, watch, onMounted } from 'vue'
import { useRoute, useData } from 'vitepress'

const route = useRoute()
const { isDark, lang } = useData()
const giscusRef = ref<HTMLElement | null>(null)

function getTheme() {
  return isDark.value ? 'dark' : 'light'
}

function getLang() {
  return lang.value.startsWith('zh') ? 'zh-CN' : 'en'
}

function loadGiscus() {
  if (!giscusRef.value) return

  giscusRef.value.innerHTML = ''

  const script = document.createElement('script')
  script.src = 'https://giscus.app/client.js'
  script.dataset.repo = 'Xinyuan-LilyGO/documentation'
  script.dataset.repoId = 'R_kgDOSjhQGg'
  script.dataset.category = 'Announcements'
  script.dataset.categoryId = 'DIC_kwDOSjhQGs4C9hXc'
  script.dataset.mapping = 'pathname'
  script.dataset.strict = '0'
  script.dataset.reactionsEnabled = '1'
  script.dataset.emitMetadata = '1'
  script.dataset.inputPosition = 'top'
  script.dataset.theme = getTheme()
  script.dataset.lang = getLang()
  script.dataset.loading = 'lazy'
  script.crossOrigin = 'anonymous'
  script.async = true

  giscusRef.value.appendChild(script)
}

function updateTheme() {
  const iframe = document.querySelector<HTMLIFrameElement>('.giscus-frame')
  if (!iframe) return
  iframe.contentWindow?.postMessage(
    { giscus: { setConfig: { theme: getTheme() } } },
    'https://giscus.app',
  )
}

onMounted(loadGiscus)

watch(() => route.path, loadGiscus)
watch(isDark, updateTheme)
</script>

<style scoped>
.giscus-wrapper {
  margin-top: 2rem;
  padding-top: 1.5rem;
  border-top: 1px solid var(--vp-c-divider);
}
</style>
