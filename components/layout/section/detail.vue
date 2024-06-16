<template lang="">
  <div class="pb-40">
    <h3>{{ title }}</h3>
    <h4>{{ subtitle }}</h4>
    <div class="mt-4 max-w-[800px]">
      <slot></slot>
    </div>
  </div>
</template>
<script setup lang="ts">
defineProps<{
  title: string
  subtitle: string
}>()
</script>
<style lang=""></style>
