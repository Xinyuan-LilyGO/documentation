<template>
  <div>
    <div class="spw-wrap" v-if="release">
      <div class="spw-card">
        <div class="spw-card-info">
          <div class="spw-card-icon" v-html="boltSvg"></div>
          <div class="spw-card-text">
            <span class="spw-card-title">LILYGO Spark</span>
            <span class="spw-card-ver">{{ version }} · macOS / Windows / Linux</span>
          </div>
        </div>
        <div class="spw-card-btns">
          <a class="spw-btn-dl" :href="dlUrl">
            <span v-html="dlSvg"></span>
            Download for {{ platformLabel }}
          </a>
          <button class="spw-btn-tog" :class="{ open: panelOpen }" type="button" @click="panelOpen = !panelOpen">
            All Platforms <span v-html="chevSvg"></span>
          </button>
        </div>
      </div>
      <div class="spw-panel" :class="{ open: panelOpen }">
        <div class="spw-panel-inner">
          <div v-for="group in groups" :key="group.label" class="spw-plat-group">
            <span class="spw-plat">{{ group.label }}</span>
            <div class="spw-pills">
              <template v-for="item in group.keys" :key="item.k">
                <a
                  v-if="release.assets && release.assets[item.k]"
                  class="spw-pill"
                  :href="release.assets[item.k].url"
                >
                  <span>{{ item.l }}</span>
                  <span class="spw-pill-size">{{ fmtSize(release.assets[item.k].size) }}</span>
                </a>
              </template>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-else-if="error" class="spw-fallback">
      <a href="https://github.com/Xinyuan-LilyGO/LILYGO-Spark/releases">Download LILYGO Spark</a>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'

const release = ref<any>(null)
const error = ref(false)
const panelOpen = ref(false)

const boltSvg = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>'
const dlSvg = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>'
const chevSvg = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"/></svg>'

const groups = [
  { label: 'macOS', keys: [
    { k: 'macOS-arm64', l: 'Apple Silicon (.dmg)' },
    { k: 'macOS-x64', l: 'Intel (.dmg)' },
    { k: 'macOS-universal', l: 'Universal (.dmg)' },
  ]},
  { label: 'Windows', keys: [
    { k: 'windows-x64-setup', l: 'x64 Installer (.exe)' },
    { k: 'windows-x64-portable', l: 'x64 Portable (.exe)' },
    { k: 'windows-arm64-setup', l: 'ARM64 Installer (.exe)' },
  ]},
  { label: 'Linux', keys: [
    { k: 'linux-x86_64-AppImage', l: 'x86_64 (.AppImage)' },
    { k: 'linux-amd64-deb', l: 'amd64 (.deb)' },
    { k: 'linux-x86_64-rpm', l: 'x86_64 (.rpm)' },
  ]},
]

function fmtSize(bytes: number) {
  return (bytes / 1048576).toFixed(1) + ' MB'
}

function detectPlatform(): { k: string; l: string } {
  if (typeof navigator === 'undefined') return { k: 'windows-x64-setup', l: 'Windows' }
  const ua = navigator.userAgent.toLowerCase()
  if (ua.includes('mac')) {
    try {
      const c = document.createElement('canvas')
      const gl = c.getContext('webgl')
      if (gl) {
        const d = gl.getExtension('WEBGL_debug_renderer_info')
        if (d && gl.getParameter(d.UNMASKED_RENDERER_WEBGL).includes('Apple')) {
          return { k: 'macOS-arm64', l: 'macOS (Apple Silicon)' }
        }
      }
    } catch {}
    return { k: 'macOS-arm64', l: 'macOS' }
  }
  if (ua.includes('win')) return { k: 'windows-x64-setup', l: 'Windows' }
  if (ua.includes('linux')) return { k: 'linux-x86_64-AppImage', l: 'Linux' }
  return { k: 'windows-x64-setup', l: 'Windows' }
}

const platform = ref<{ k: string; l: string }>({ k: 'windows-x64-setup', l: 'Windows' })

const version = computed(() => release.value ? 'v' + release.value.version : '')
const dlUrl = computed(() => {
  if (!release.value?.assets) return 'https://github.com/Xinyuan-LilyGO/LILYGO-Spark/releases'
  const asset = release.value.assets[platform.value.k]
  return asset ? asset.url : 'https://github.com/Xinyuan-LilyGO/LILYGO-Spark/releases'
})
const platformLabel = computed(() => platform.value.l)

onMounted(() => {
  platform.value = detectPlatform()
  let attempts = 0
  const poll = () => {
    const R = (window as any).SPARK_LATEST
    if (R) { release.value = R; return }
    if (++attempts < 50) setTimeout(poll, 200)
    else error.value = true
  }
  poll()
})
</script>

<style scoped>
.spw-wrap {
  font-family: Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  line-height: 1.5;
  border: 1px solid #d1fae5;
  border-radius: 14px;
  overflow: hidden;
  margin: 1.5rem 0;
}
.spw-wrap * { box-sizing: border-box; }
.spw-wrap a { text-decoration: none; }

.spw-card {
  padding: 20px 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 16px;
  background: var(--vp-c-bg);
  border-bottom: 1px solid #d1fae5;
}
.spw-card-info { display: flex; align-items: center; gap: 12px; }
.spw-card-icon {
  width: 38px; height: 38px; border-radius: 10px;
  display: flex; align-items: center; justify-content: center; flex-shrink: 0;
  background: linear-gradient(135deg, #10b981, #059669);
  color: #fff;
}
.spw-card-icon :deep(svg) { width: 20px; height: 20px; }
.spw-card-text { display: block; }
.spw-card-title { font-size: 16px; font-weight: 700; color: var(--vp-c-text-1); line-height: 1.3; display: block; }
.spw-card-ver { font-size: 12px; color: #9ca3af; margin-top: 2px; line-height: 1.3; display: block; }
.spw-card-btns { display: flex; gap: 8px; flex-wrap: wrap; align-items: center; }

.spw-btn-dl {
  display: inline-flex; align-items: center; gap: 6px;
  padding: 10px 22px; border-radius: 24px;
  font-size: 14px; font-weight: 600; border: none; cursor: pointer;
  background: #10b981; color: #fff;
  box-shadow: 0 2px 8px rgba(16,185,129,.3);
  transition: all .15s;
}
.spw-btn-dl:hover {
  background: #059669;
  box-shadow: 0 4px 14px rgba(5,150,105,.35);
  transform: translateY(-1px);
  color: #fff;
}
.spw-btn-dl :deep(svg) { width: 16px; height: 16px; }

.spw-btn-tog {
  font-size: 13px; font-weight: 600; cursor: pointer;
  display: inline-flex; align-items: center; gap: 5px;
  color: #10b981; border: 1.5px solid #a7f3d0;
  padding: 9px 18px; border-radius: 24px;
  background: var(--vp-c-bg); transition: all .15s;
}
.spw-btn-tog:hover { border-color: #10b981; background: #ecfdf5; }
.spw-btn-tog :deep(svg) { width: 13px; height: 13px; transition: transform .25s; }
.spw-btn-tog.open :deep(svg) { transform: rotate(180deg); }

.spw-panel {
  max-height: 0; overflow: hidden;
  transition: max-height .35s cubic-bezier(.4,0,.2,1);
  background: #ecfdf5;
}
.spw-panel.open { max-height: 800px; }
.spw-panel-inner { padding: 16px 24px 20px; }

.spw-plat-group { margin-bottom: 16px; }
.spw-plat-group:last-child { margin-bottom: 0; }
.spw-plat {
  font-size: 11px; font-weight: 700; text-transform: uppercase;
  letter-spacing: .08em; color: #059669; margin-bottom: 10px; display: block;
}
.spw-pills { display: flex; flex-wrap: wrap; gap: 10px; }
.spw-pill {
  display: inline-flex; align-items: center; gap: 8px;
  padding: 11px 20px; border-radius: 28px; font-size: 13px; font-weight: 500;
  white-space: nowrap; background: var(--vp-c-bg);
  border: 1.5px solid #d1fae5; color: var(--vp-c-text-1);
  box-shadow: 0 1px 3px rgba(0,0,0,.04); transition: all .2s;
}
.spw-pill:hover { border-color: #10b981; background: #f0fdf9; box-shadow: 0 4px 14px rgba(16,185,129,.12); }
.spw-pill-size { font-size: 11px; color: #9ca3af; font-weight: 400; }

.spw-fallback { padding: 12px 0; }
.spw-fallback a { color: #10b981; }
</style>
