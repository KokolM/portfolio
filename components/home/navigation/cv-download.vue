<template>
    <Button
        @click="downloadCV"
    >
        <font-awesome-icon :icon="['fas', 'download']" class="w-4 h-4" />
        <span>Download CV</span>
    </Button>
</template>

<script setup lang="ts">
const { generateCV } = useCVGenerator()

const downloadCV = () => {
    generateCV()
}
</script>
