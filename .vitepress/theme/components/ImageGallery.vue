<template>
  <div class="image-gallery" :style="width ? { maxWidth: width } : {}">
    <div class="gallery-main">
      <button
        class="gallery-arrow gallery-arrow-left"
        @click="prev"
        :disabled="current === 0"
        aria-label="Previous"
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
          <polyline points="15 18 9 12 15 6" />
        </svg>
      </button>

      <div class="gallery-track-wrap">
        <div class="gallery-track" :style="{ transform: `translateX(-${current * slideWidth}%)` }">
          <div
            v-for="(img, i) in images"
            :key="i"
            class="gallery-slide"
            :style="{ width: `${slideWidth}%` }"
            @click="openLightbox(i)"
          >
            <img :src="img.src" :alt="img.alt || ''" draggable="false" />
          </div>
        </div>
      </div>

      <button
        class="gallery-arrow gallery-arrow-right"
        @click="next"
        :disabled="current >= maxCurrent"
        aria-label="Next"
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
          <polyline points="9 18 15 12 9 6" />
        </svg>
      </button>
    </div>

    <div class="gallery-thumbs" v-if="images.length > columns">
      <button
        v-for="(img, i) in images"
        :key="i"
        class="gallery-thumb"
        :class="{ active: i >= current && i < current + columns }"
        @click="goTo(i)"
        :aria-label="`Image ${i + 1}`"
      >
        <img :src="img.src" :alt="img.alt || ''" draggable="false" />
      </button>
    </div>
  </div>

  <!-- Lightbox -->
  <Teleport to="body">
    <Transition name="lb">
      <div v-if="lightboxIndex !== null" class="lb-overlay" @click.self="closeLightbox">
        <button class="lb-close" @click="closeLightbox" aria-label="Close">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>

        <button class="lb-arrow lb-arrow-left" @click="lbPrev" :disabled="lightboxIndex === 0" aria-label="Previous">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
            <polyline points="15 18 9 12 15 6" />
          </svg>
        </button>

        <img
          class="lb-image"
          :src="images[lightboxIndex].src"
          :alt="images[lightboxIndex].alt || ''"
          draggable="false"
        />

        <button class="lb-arrow lb-arrow-right" @click="lbNext" :disabled="lightboxIndex === images.length - 1" aria-label="Next">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
            <polyline points="9 18 15 12 9 6" />
          </svg>
        </button>

        <div class="lb-counter">{{ lightboxIndex + 1 }} / {{ images.length }}</div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue'

interface GalleryImage {
  src: string
  alt?: string
}

const props = defineProps<{
  images: GalleryImage[]
  width?: string
  columns?: number
}>()

const cols = computed(() => props.columns ?? 1)
const slideWidth = computed(() => 100 / cols.value)
const maxCurrent = computed(() => Math.max(0, props.images.length - cols.value))

const current = ref(0)

function prev() {
  current.value = Math.max(0, current.value - 1)
}

function next() {
  current.value = Math.min(maxCurrent.value, current.value + 1)
}

function goTo(i: number) {
  current.value = Math.min(i, maxCurrent.value)
}

// Lightbox
const lightboxIndex = ref<number | null>(null)

function openLightbox(i: number) {
  lightboxIndex.value = i
  document.body.style.overflow = 'hidden'
}

function closeLightbox() {
  lightboxIndex.value = null
  document.body.style.overflow = ''
}

function lbPrev() {
  if (lightboxIndex.value !== null && lightboxIndex.value > 0) {
    lightboxIndex.value--
  }
}

function lbNext() {
  if (lightboxIndex.value !== null && lightboxIndex.value < props.images.length - 1) {
    lightboxIndex.value++
  }
}

function onKeydown(e: KeyboardEvent) {
  if (lightboxIndex.value === null) return
  if (e.key === 'Escape') closeLightbox()
  if (e.key === 'ArrowLeft') lbPrev()
  if (e.key === 'ArrowRight') lbNext()
}

onMounted(() => window.addEventListener('keydown', onKeydown))
onUnmounted(() => {
  window.removeEventListener('keydown', onKeydown)
  document.body.style.overflow = ''
})
</script>

<style scoped>
.image-gallery {
  width: 100%;
  user-select: none;
  margin-top: 24px;
}

.gallery-main {
  position: relative;
  background: var(--vp-c-bg-soft);
  border-radius: 10px;
  overflow: hidden;
}

.gallery-track-wrap {
  overflow: hidden;
  width: 100%;
}

.gallery-track {
  display: flex;
  transition: transform 0.35s ease;
}

.gallery-slide {
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 12px 8px;
  box-sizing: border-box;
  cursor: zoom-in;
}

.gallery-slide img {
  width: 100%;
  height: auto;
  max-height: 400px;
  object-fit: contain;
  display: block;
  border-radius: 6px;
}

.gallery-arrow {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 10;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  border: none;
  background: rgba(0, 0, 0, 0.25);
  color: #fff;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background 0.2s;
}

.gallery-arrow:hover:not(:disabled) {
  background: rgba(0, 0, 0, 0.55);
}

.gallery-arrow:disabled {
  opacity: 0.25;
  cursor: default;
}

.gallery-arrow svg {
  width: 18px;
  height: 18px;
}

.gallery-arrow-left {
  left: 8px;
}

.gallery-arrow-right {
  right: 8px;
}

.gallery-thumbs {
  display: flex;
  gap: 6px;
  margin-top: 10px;
  flex-wrap: wrap;
  justify-content: center;
}

.gallery-thumb {
  width: 68px;
  height: 68px;
  border-radius: 6px;
  border: 2px solid transparent;
  padding: 2px;
  background: var(--vp-c-bg-soft);
  cursor: pointer;
  overflow: hidden;
  transition: border-color 0.2s;
  flex-shrink: 0;
}

.gallery-thumb img {
  width: 100%;
  height: 100%;
  object-fit: contain;
  display: block;
}

.gallery-thumb.active {
  border-color: var(--vp-c-brand-1);
}

.gallery-thumb:hover:not(.active) {
  border-color: var(--vp-c-brand-soft);
}

/* Lightbox */
.lb-overlay {
  position: fixed;
  inset: 0;
  z-index: 9999;
  background: rgba(0, 0, 0, 0.85);
  display: flex;
  align-items: center;
  justify-content: center;
}

.lb-image {
  max-width: 90vw;
  max-height: 90vh;
  object-fit: contain;
  border-radius: 8px;
  user-select: none;
  pointer-events: none;
}

.lb-close {
  position: absolute;
  top: 16px;
  right: 16px;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: none;
  background: rgba(255, 255, 255, 0.15);
  color: #fff;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background 0.2s;
  z-index: 1;
}

.lb-close:hover {
  background: rgba(255, 255, 255, 0.3);
}

.lb-close svg {
  width: 20px;
  height: 20px;
}

.lb-arrow {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 44px;
  height: 44px;
  border-radius: 50%;
  border: none;
  background: rgba(255, 255, 255, 0.15);
  color: #fff;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background 0.2s;
}

.lb-arrow:hover:not(:disabled) {
  background: rgba(255, 255, 255, 0.3);
}

.lb-arrow:disabled {
  opacity: 0.2;
  cursor: default;
}

.lb-arrow svg {
  width: 22px;
  height: 22px;
}

.lb-arrow-left {
  left: 16px;
}

.lb-arrow-right {
  right: 16px;
}

.lb-counter {
  position: absolute;
  bottom: 16px;
  left: 50%;
  transform: translateX(-50%);
  color: rgba(255, 255, 255, 0.7);
  font-size: 14px;
}

/* Transition */
.lb-enter-active,
.lb-leave-active {
  transition: opacity 0.2s ease;
}

.lb-enter-from,
.lb-leave-to {
  opacity: 0;
}

@media (max-width: 640px) {
  .gallery-slide img {
    max-height: 260px;
  }

  .gallery-arrow {
    width: 28px;
    height: 28px;
  }

  .gallery-arrow svg {
    width: 14px;
    height: 14px;
  }

  .gallery-thumb {
    width: 52px;
    height: 52px;
  }

  .lb-arrow {
    width: 36px;
    height: 36px;
  }

  .lb-arrow-left {
    left: 8px;
  }

  .lb-arrow-right {
    right: 8px;
  }
}
</style>
