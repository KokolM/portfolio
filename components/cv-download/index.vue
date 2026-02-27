<template>
    <Button @click="downloadCV">
        <font-awesome-icon :icon="['fas', 'download']" class="w-4 h-4" />
        <span>Download CV</span><span v-if="compact"> (compact)</span>
    </Button>
</template>

<script setup lang="ts">
const { generateCV: generateCVFull } = useCVGenerator()
const { generateCV: generateCVCompact } = useCVGeneratorCompact()

const props = defineProps<{
    summary?: string
    companyName?: string
    companyAddress?: string
    compact?: boolean
}>()

const downloadCV = () => {
    if (props.compact) {
        generateCVCompact(props.summary, props.companyName, props.companyAddress)
    } else {
        generateCVFull(props.summary, props.companyName, props.companyAddress)
    }
}
</script>
