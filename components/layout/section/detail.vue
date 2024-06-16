<template lang="">
  <div class="pb-40">
    <div class="flex flex-col lg:flex-row items-start justify-end gap-1 lg:gap-4 w-full">
      <div class="grow">
        <h3>{{ title }}</h3>
        <h4>{{ subtitle }}</h4>
      </div>
      <div class="text-primary flex items-center gap-1">
        <div>{{ moment(startDate).format('MMM YYYY') }}</div>
        <div>-</div>
        <div>{{ endDate ? moment(endDate).format('MMM YYYY') : 'Present' }}</div>
      </div>
    </div>
    <div class="mt-4 max-w-[800px]">
      <slot></slot>
    </div>
  </div>
</template>
<script setup lang="ts">
import moment from 'moment'

defineProps<{
  title: string
  subtitle: string
  startDate: Date
  endDate?: Date
}>()
</script>
<style lang=""></style>
