<script setup lang="ts">
import { SpeedInsights } from '@vercel/speed-insights/nuxt'
import { Analytics } from '@vercel/analytics/nuxt'
</script>

<template>
  <div class="bg-white w-full text-text">
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
    <SpeedInsights />
    <Analytics />
  </div>
</template>
