<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { useRouter } from 'vitepress'

const props = withDefaults(defineProps<{
  /** Source language of the page. 'auto' lets Google detect it. */
  lang?: string
  /** Google Translate domain. Use 'translate.google.cn' if the default is blocked. */
  domain?: string
}>(), {
  lang: 'auto',
  domain: 'translate.google.com',
})

const loaded = ref(false)
const loading = ref(false)
const activeDomain = ref(props.domain)
const router = useRouter()

/** Extract locale prefix from a path, e.g. '/zh/foo' → 'zh' */
function getLocale(path: string): string {
  const m = path.match(/^\/([^/]+)\//)
  return m ? m[1] : ''
}

function clearTranslateCookie() {
  document.cookie = 'googtrans=; max-age=0; path=/'
  document.cookie = `googtrans=; max-age=0; path=/; domain=${location.hostname}`
}

onMounted(() => {
  const stored = localStorage.getItem('gtrans_domain')
  if (stored) activeDomain.value = stored

  // When the user switches VitePress locale (e.g. zh → en), clear Google
  // Translate and do a full page load to the new URL so the content is
  // never shown in a stale translated state.
  router.onBeforeRouteChange = (to: string) => {
    if (!loaded.value) return
    if (getLocale(to) !== getLocale(window.location.pathname)) {
      clearTranslateCookie()
      loaded.value = false
      loading.value = false
      window.location.href = to  // hard navigate; skip SPA transition
      return false               // cancel VitePress's own SPA navigation
    }
  }
})

onBeforeUnmount(() => {
  router.onBeforeRouteChange = undefined
})

function registerCallback() {
  ;(window as any).googleTranslateElementInit = () => {
    const gt = (window as any).google?.translate
    if (!gt) return
    new gt.TranslateElement(
      { pageLanguage: props.lang, layout: gt.TranslateElement.InlineLayout.SIMPLE },
      'google_translate_element',
    )
    loaded.value = true
    loading.value = false
  }
}

function loadJS(url: string): Promise<void> {
  return new Promise((resolve, reject) => {
    const script = document.createElement('script')
    script.type = 'text/javascript'
    script.src = url
    script.onload = () => resolve()
    script.onerror = () => reject(new Error(url))
    document.head.appendChild(script)
  })
}

async function activate() {
  if (loaded.value || loading.value) return

  if (loading.value) {
    const change = confirm(`Loading from ${activeDomain.value}, please wait — or change domain?`)
    if (!change) return
    const newDomain = prompt(
      `Enter alternate domain (current: ${activeDomain.value}):`,
      activeDomain.value,
    )
    if (newDomain && newDomain !== activeDomain.value) {
      activeDomain.value = newDomain
    }
    return
  }

  loading.value = true
  registerCallback()

  const url = `https://${activeDomain.value}/translate_a/element.js?cb=googleTranslateElementInit`
  try {
    await loadJS(url)
    localStorage.setItem('gtrans_domain', activeDomain.value)
  } catch {
    loading.value = false
    const newDomain = prompt(
      `Could not load from "${activeDomain.value}".\nEnter alternate domain (e.g. translate.google.cn):`,
      props.domain,
    )
    if (newDomain) {
      activeDomain.value = newDomain
      activate()
    }
  }
}
</script>

<template>
  <div class="vp-translate">
    <!--
      #google_translate_element must always be in the DOM.
      Google Translate renders its <select> widget into this div when initialized.
    -->
    <div id="google_translate_element" :class="{ 'vp-translate-widget--hidden': !loaded }" />

    <button
      v-if="!loaded"
      class="vp-translate-btn"
      :class="{ 'vp-translate-btn--loading': loading }"
      :title="loading ? 'Loading translator…' : 'Translate this page'"
      @click="activate"
    >
      <!-- Google Translate icon (based on teedoc-plugin-google-translate asset) -->
      <svg
        class="vp-translate-icon"
        viewBox="0 0 1024 1024"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path
          d="M853.333333 213.333333h-388.266666L426.666667 85.333333H170.666667c-46.933333 0-85.333333
             38.4-85.333334 85.333334v554.666666c0 46.933333 38.4 85.333333 85.333334 85.333334h298.666666
             l42.666667 128h341.333333c46.933333 0 85.333333-38.4 85.333334-85.333334V298.666667
             c0-46.933333-38.4-85.333333-85.333334-85.333334zM307.2 622.933333
             c-93.866667 0-174.933333-76.8-174.933333-174.933333s76.8-174.933333 174.933333-174.933333
             c42.666667 0 85.333333 17.066667 115.2 46.933333h4.266667L375.466667 371.2h-4.266667
             c-12.8-12.8-34.133333-25.6-64-25.6-55.466667 0-102.4 46.933333-102.4 102.4s46.933333 102.4
             102.4 102.4c59.733333 0 85.333333-38.4 89.6-64H302.933333V422.4H469.333333v4.266667
             c0 8.533333 4.266667 17.066667 4.266667 25.6 0 98.133333-68.266667 170.666667-166.4
             170.666666z m256-72.533333c12.8 25.6 29.866667 51.2 51.2 72.533333l-21.333333
             21.333334-29.866667-93.866667z m34.133333-34.133333h-42.666666l-12.8-42.666667h170.666666
             s-12.8 55.466667-68.266666 115.2c-21.333333-25.6-38.4-51.2-46.933334-72.533333z
             m298.666667 337.066666c0 21.333333-21.333333 42.666667-42.666667
             42.666667h-298.666666l85.333333-85.333333-34.133333-119.466667 38.4-38.4 115.2 115.2
             29.866666-29.866667-115.2-115.2c38.4-42.666667 68.266667-93.866667
             81.066667-149.333333H810.666667v-42.666667h-153.6V384h-42.666667v42.666667h-85.333333
             l-51.2-170.666667H853.333333c21.333333 0 42.666667 17.066667 42.666667
             42.666667v554.666666z"
          fill="currentColor"
        />
      </svg>
      <span class="vp-translate-label">
        {{ loading ? 'Loading…' : 'Translate' }}
      </span>
    </button>
  </div>
</template>

<style scoped>
.vp-translate {
  display: flex;
  align-items: center;
  height: var(--vp-nav-height, 64px);
  margin-left: 4px;
}

.vp-translate-widget--hidden {
  display: none;
}

.vp-translate-btn {
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 0 8px;
  height: 32px;
  border: none;
  border-radius: 4px;
  background: transparent;
  color: var(--vp-c-text-2);
  font-size: 13px;
  font-family: inherit;
  cursor: pointer;
  transition: color 0.25s, background-color 0.25s;
  white-space: nowrap;
}

.vp-translate-btn:hover {
  color: var(--vp-c-text-1);
  background-color: var(--vp-c-default-soft);
}

.vp-translate-btn--loading {
  opacity: 0.7;
  cursor: default;
}

.vp-translate-icon {
  width: 18px;
  height: 18px;
  flex-shrink: 0;
}

@media (max-width: 768px) {
  .vp-translate-label {
    display: none;
  }
}
</style>

<style>
/*
  VitePress navbar DOM order:
    search → menu → translations → appearance → social-links → extra → [nav-bar-content-after] → hamburger
  Push appearance/social-links/extra to flex order:1 so our widget (order:0, DOM-last among them)
  lands visually right after .translations.
*/
.VPNavBar .content-body .appearance,
.VPNavBar .content-body .social-links,
.VPNavBar .content-body .extra {
  order: 1;
}

/* Divider on the left of our widget, matching VitePress's nav separator style */
.VPNavBar .content-body .vp-translate::before {
  display: block;
  margin-right: 8px;
  margin-left: 8px;
  width: 1px;
  height: 24px;
  background-color: var(--vp-c-divider);
  content: "";
}

.goog-te-banner-frame {
  display: none !important;
}
body {
  top: 0 !important;
}
.skiptranslate > iframe {
  height: 0 !important;
  border: none !important;
  box-shadow: none !important;
}

#google_translate_element {
  display: flex !important;
  align-items: center !important;
}

#google_translate_element .goog-te-gadget {
  display: flex !important;
  align-items: center !important;
  margin: 0 !important;
  padding: 0 !important;
  line-height: 1 !important;
  font-size: 0 !important;
}

#google_translate_element .goog-te-gadget > * {
  font-size: 13px !important;
}

#google_translate_element .goog-te-gadget-simple {
  display: inline-flex !important;
  align-items: center !important;
  max-width: 130px !important;
  height: 32px !important;
  background-color: transparent !important;
  border: 1px solid var(--vp-c-divider) !important;
  border-radius: 4px !important;
  font-size: 13px !important;
  padding: 0 6px !important;
  margin: 0 !important;
  line-height: 1 !important;
  cursor: pointer !important;
  overflow: hidden !important;
}

#google_translate_element .goog-te-gadget-simple img {
  display: none !important;
}

#google_translate_element .goog-te-gadget-simple .goog-te-menu-value {
  display: inline-flex !important;
  align-items: center !important;
  max-width: 90px !important;
  overflow: hidden !important;
}

#google_translate_element .goog-te-gadget-simple .goog-te-menu-value span:first-child {
  display: block !important;
  overflow: hidden !important;
  text-overflow: ellipsis !important;
  white-space: nowrap !important;
  color: var(--vp-c-text-1) !important;
}

#google_translate_element .goog-te-gadget-simple span {
  color: var(--vp-c-text-2) !important;
}
</style>
