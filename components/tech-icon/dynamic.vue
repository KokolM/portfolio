<template>
  <TechIcon
    v-if="config"
    :icon="config.icon"
    :title="config.title"
    :url="config.url"
    :sizeRem="config.sizeRem"
    :compact="compact"
  />
</template>

<script setup lang="ts">
import { techIconsConfig, getConfigKey } from './config'

const props = defineProps<{
  name?: string
  compact?: boolean
}>()

const config = computed(() => {
  // Support both 'nuxt' and 'TechIconNuxt' format
  const key = props.name?.startsWith('TechIcon') 
    ? getConfigKey(props.name) 
    : props.name
  return key ? techIconsConfig[key] : undefined
})
</script>
