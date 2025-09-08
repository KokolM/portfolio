<template>
  <div class="pb-20">
    <div class="flex flex-col gap-2 mb-6">
      <h3>{{ title }}</h3>
      <h4>{{ subtitle }}</h4>
    </div>
    <div v-if="screenshots?.length" class="mb-8">
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <div
          v-for="(src, i) in screenshots"
          :key="i"
          class="relative group rounded-2xl overflow-hidden border border-gray-200 shadow-lg bg-white aspect-[16/9] flex items-center justify-center max-w-[480px] mx-auto cursor-pointer"
          @click="openFullscreen(i)"
        >
          <img
            :src="src"
            :alt="`${title} screenshot ${i+1}`"
            class="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
            loading="lazy"
          />
          <div class="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-2xl"></div>
        </div>
      </div>

      <!-- Fullscreen Modal -->
      <div v-if="fullscreenIndex !== null" class="fixed inset-0 z-50 flex items-center justify-center bg-black/80">
        <button @click="closeFullscreen" class="absolute top-6 right-8 text-white text-3xl font-bold z-60 hover:text-primary transition-colors">&times;</button>
        <button v-if="screenshots.length > 1" @click="prevImage" class="absolute left-4 top-1/2 -translate-y-1/2 text-white text-4xl z-60 px-2 py-1 hover:text-primary">&#8592;</button>
        <img
          :src="screenshots[fullscreenIndex]"
          :alt="`${title} screenshot fullscreen`"
          class="max-w-[90vw] max-h-[80vh] rounded-2xl shadow-2xl border-4 border-white object-contain bg-white"
        />
        <button v-if="screenshots.length > 1" @click="nextImage" class="absolute right-4 top-1/2 -translate-y-1/2 text-white text-4xl z-60 px-2 py-1 hover:text-primary">&#8594;</button>
      </div>
    </div>
    <div v-if="description" class="mb-6 text-base max-w-3xl">
      {{ description }}
    </div>
    <div class="mb-6">
      <div class="font-semibold mb-2 text-base">Tech Stack:</div>
      <div class="flex gap-3 flex-wrap items-center">
        <slot name="techstack" />
      </div>
    </div>
    <div v-if="features?.length" class="mb-6 max-w-3xl">
      <div class="font-semibold mb-2 text-base">Features:</div>
      <ul class="list-disc ml-6 text-base">
        <li v-for="(feature, i) in features" :key="i">{{ feature }}</li>
      </ul>
    </div>
    <div class="mb-6">
      <div class="font-semibold mb-2 text-base">Links:</div>
      <div class="flex gap-3 flex-wrap">
        <slot name="links" />
      </div>
    </div>
    <div v-if="contribution" class="mb-6 max-w-3xl">
      <div class="font-semibold mb-2 text-base">My Contribution:</div>
      <div class="text-base">{{ contribution }}</div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'

const props = defineProps<{
  title: string
  subtitle: string
  screenshots?: string[]
  description?: string
  features?: string[]
  contribution?: string
}>()

const fullscreenIndex = ref<number|null>(null)
function openFullscreen(i: number) {
  fullscreenIndex.value = i
  document.body.style.overflow = 'hidden'
}
function closeFullscreen() {
  fullscreenIndex.value = null
  document.body.style.overflow = ''
}
function prevImage() {
  if (fullscreenIndex.value !== null && props.screenshots) {
    fullscreenIndex.value = (fullscreenIndex.value - 1 + props.screenshots.length) % props.screenshots.length
  }
}
function nextImage() {
  if (fullscreenIndex.value !== null && props.screenshots) {
    fullscreenIndex.value = (fullscreenIndex.value + 1) % props.screenshots.length
  }
}
</script>
