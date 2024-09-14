<template lang="">
  <div class="pb-56">
    <div class="flex flex-col lg:flex-row items-start justify-end gap-1 lg:gap-4 w-full">
      <div class="grow">
        <h3>{{ title }}</h3>
        <h4>{{ subtitle }}</h4>
      </div>
    </div>
    <div class="mt-4">
      <slot></slot>
    </div>
  </div>
</template>
<script setup lang="ts">
import { computed, useSlots } from 'vue'

const slots = useSlots()

defineProps<{
  title: string
  subtitle: string
}>()
</script>
<style lang=""></style>
