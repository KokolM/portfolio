<template>
  <div class="border border-gray-200 rounded-lg p-4 bg-white hover:shadow-md transition-all duration-300 hover:border-primary cursor-pointer group" @click="scrollToLink">
    <div class="flex items-center justify-between">
      <div class="flex-1">
        <div class="flex items-center gap-2 mb-1">
          <h4 class="text-base font-medium text-gray-900 tracking-wider">{{ title }}</h4>
          <div v-if="status" class="flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-medium" :class="statusClasses">
            <div class="w-1.5 h-1.5 rounded-full" :class="statusDotClass"></div>
            {{ statusText }}
          </div>
        </div>
        <p class="text-sm text-gray-600">{{ subtitle }}</p>
      </div>
      <div 
        v-if="projectLink" 
        :href="projectLink"
        class="flex items-center gap-1 px-3 py-1.5 text-sm font-medium ml-4 group-hover:text-primary"
      >
        <span>More Info</span>
        <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
        </svg>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

type ProjectStatus = 'development' | 'production' | 'discontinued'

const props = defineProps<{
  title: string
  subtitle: string
  status?: ProjectStatus
  projectLink?: string
}>()

const statusText = computed(() => {
  switch (props.status) {
    case 'development':
      return 'In Development'
    case 'production':
      return 'In Production'
    case 'discontinued':
      return 'Discontinued'
    default:
      return ''
  }
})

const statusClasses = computed(() => {
  switch (props.status) {
    case 'development':
      return 'bg-yellow-100 text-yellow-800'
    case 'production':
      return 'bg-green-100 text-green-800'
    case 'discontinued':
      return 'bg-red-100 text-red-800'
    default:
      return ''
  }
})

const statusDotClass = computed(() => {
  switch (props.status) {
    case 'development':
      return 'bg-yellow-500'
    case 'production':
      return 'bg-green-500'
    case 'discontinued':
      return 'bg-red-500'
    default:
      return ''
  }
})

const scrollToLink = () => {
  if (props.projectLink) {
    const element = document.querySelector(props.projectLink)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }
}
</script>