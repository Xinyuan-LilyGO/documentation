import { h } from 'vue'
import type { App } from 'vue'
import DefaultTheme from 'vitepress/theme'
import './style.css'
import EspFlasher from './components/EspFlasher.vue'
import ShopLink from './components/ShopLink.vue'
import GoogleTranslate from './components/GoogleTranslate.vue'
import ImageNav from './components/ImageNav.vue'
import ProductGrid from './components/ProductGrid.vue'
import HomeLayout from './components/HomeLayout.vue'
import ImageGallery from './components/ImageGallery.vue'
import GiscusComment from './components/GiscusComment.vue'
import SparkWidget from './components/SparkWidget.vue'

export default {
  extends: DefaultTheme,

  Layout: () => h(DefaultTheme.Layout, null, {
    'nav-bar-content-after': () => h(GoogleTranslate, {
      lang: 'auto',
      domain: 'translate.google.com',
    }),
    'doc-after': () => h(GiscusComment),
  }),

  enhanceApp({ app }: { app: App }) {
    app.component('EspFlasher', EspFlasher)
    app.component('ShopLink', ShopLink)
    app.component('ImageNav', ImageNav)
    app.component('ProductGrid', ProductGrid)
    app.component('HomeLayout', HomeLayout)
    app.component('ImageGallery', ImageGallery)
    app.component('SparkWidget', SparkWidget)
  },
}
