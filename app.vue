<script setup lang="ts">
import { SpeedInsights } from '@vercel/speed-insights/nuxt'
import { Analytics, type BeforeSendEvent } from '@vercel/analytics/nuxt'

const beforeSend = (event: BeforeSendEvent) => {
    if (localStorage.getItem('va-disable') === 'true') {
        return null
    }
    return event
}
</script>

<template>
    <div class="bg-white w-full text-text">
        <NuxtLayout>
            <NuxtPage />
        </NuxtLayout>
        <SpeedInsights />
        <Analytics :before-send="beforeSend" />
    </div>
</template>
