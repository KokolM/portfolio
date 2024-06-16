<script setup lang="ts">
import { SpeedInsights } from '@vercel/speed-insights/nuxt'
</script>

<template>
  <div class="bg-white w-full h-dvh text-text">
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
    <SpeedInsights />
  </div>
</template>
