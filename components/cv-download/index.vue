<template>
    <Button @click="downloadCV">
        <font-awesome-icon :icon="['fas', 'download']" class="w-4 h-4" />
        <span>Download CV</span>
    </Button>
</template>

<script setup lang="ts">
const { generateCV: generateCVFull } = useCVGenerator()
const { generateCV: generateCVCompact } = useCVGeneratorCompact()

const props = defineProps<{
    companyName?: string
    companyAddress?: string
    compact?: boolean
}>()

const downloadCV = () => {
    if (props.compact) {
        generateCVCompact(props.companyName, props.companyAddress)
    } else {
        generateCVFull(props.companyName, props.companyAddress)
    }
}
</script>
