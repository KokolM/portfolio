<template lang="">
  <div :id="id" class="w-full min-h-svh flex flex-col justify-center border-b border-secondary border-opacity-20 px-4 py-10 lg:px-10">
    <div v-if="title" class="pb-20">
      <h2>{{ title }}</h2>
    </div>
    <slot></slot>
  </div>
</template>
<script setup lang="ts">
defineProps<{
  id: string
  title?: string
}>()
</script>
<style lang=""></style>
