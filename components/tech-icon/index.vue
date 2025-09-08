<template lang="">
  <div v-if="$viewport.isGreaterOrEquals('tablet')" class="cursor-pointer hover:text-primary" v-tooltip.bottom="title" @click="goToPage()">
    <div class="size-12 flex items-center justify-center">
      <i :class="icon" :style="{ fontSize: (sizeRem ?? 2) + 'rem' }"></i>
    </div>
  </div>
  <div v-else class="cursor-pointer hover:text-primary flex flex-col items-center gap-2" @click="goToPage()">
    <div class="size-12 flex items-center justify-center">
      <i :class="icon" :style="{ fontSize: (sizeRem ?? 2) + 'rem' }"></i>
    </div>
    <div class="text-xs w-20 flex justify-center">{{ title }}</div>
  </div>
</template>
<script setup lang="ts">
import { computed, useSlots } from 'vue'

const slots = useSlots()

const props = defineProps<{
  icon: string
  title: string
  url: string
  sizeRem?: number
}>()

const { url } = toRefs(props)

function goToPage() {
  window.open(url.value, '_blank')
}

const hasTechnologies = computed(() => slots.technologiesDaily != undefined || slots.technologiesOccasinaly != undefined)
</script>
<style lang=""></style>
