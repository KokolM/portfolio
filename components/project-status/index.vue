<template>
    <Tag
        :value="props.status.toUpperCase()"
        :severity="
            props.status === 'Production'
                ? 'success'
                : props.status === 'Development'
                ? 'info'
                : 'secondary'
        "
        :class="[sizeClass]"
    />
</template>

<script lang="ts" setup>
import type { ProjectStatus } from '~/models/project.models'

const props = defineProps<{
    status: ProjectStatus
    size?: 'small' | 'large'
}>()


const sizeClass = computed(() => {
    return props.size && props.size === 'small'
        ? 'text-xs px-2 py-1'
        : 'text-sm px-3 py-2'
})
</script>

<style></style>
