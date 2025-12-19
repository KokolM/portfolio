<template>
    <div class="mt-8 p-4 bg-gray-50 border-l-4 border-primary">
        <div class="text-xs font-bold text-primary mb-2 uppercase">
            {{ title }}
        </div>
        <div class="text-sm">{{ text }}</div>
    </div>
</template>

<script lang="ts" setup>
const props = defineProps<{
    title: string
    text: string
}>()
</script>

<style></style>
