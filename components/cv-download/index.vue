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

const props = defineProps<{
    companyName?: string
    companyAddress?: string
}>()

const downloadCV = () => {
    generateCV(props.companyName, props.companyAddress)
}
</script>
