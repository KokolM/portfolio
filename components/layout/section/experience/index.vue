<template lang="">
  <LayoutSectionDetail :title="title" :subtitle="subtitle">
    <slot></slot>
    <div v-if="hasTechnologies">
      <div class="mt-5 text-xs pb-6">Technologies:</div>
      <div class="flex flex-col lg:flex-row lg:items-center gap-24 lg:gap-20">
        <div v-if="$slots.technologiesDaily != undefined" class="grid grid-cols-4 sm:grid-cols-6 items-center gap-4 min-w-60 relative">
          <slot name="technologiesDaily"></slot>
          <div class="absolute -bottom-8 left-0 w-full">
            <div class="relative h-0.5 w-full bg-secondary bg-opacity-20">
              <div class="absolute bg-white text-xs text-light-grey -top-2 px-2 left-1/2 transform -translate-x-1/2">Used daily</div>
            </div>
          </div>
        </div>
        <div v-if="$slots.technologiesOccasinaly != undefined" class="grid grid-cols-4 sm:grid-cols-6 items-center gap-4 min-w-60 relative">
          <slot name="technologiesOccasinaly"></slot>
          <div class="absolute -bottom-8 left-0 w-full">
            <div class="relative h-0.5 w-full bg-secondary bg-opacity-20">
              <div class="absolute bg-white text-xs text-light-grey -top-2 px-2 left-1/2 transform -translate-x-1/2">Used occasionaly</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </LayoutSectionDetail>
</template>
<script setup lang="ts">
import { computed, useSlots } from 'vue'

const slots = useSlots()

defineProps<{
  title: string
  subtitle: string
}>()

const hasTechnologies = computed(() => slots.technologiesDaily != undefined || slots.technologiesOccasinaly != undefined)
</script>
<style lang=""></style>
