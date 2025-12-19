<template lang="">
    <div class="pb-56 max-w-4xl">
        <div
            class="flex flex-col lg:flex-row items-start justify-end gap-1 lg:gap-4 w-full"
        >
            <div class="grow">
                <h3>{{ institution }}</h3>
                <h4>{{ degree }}</h4>
                <div class="text-primary flex items-center gap-1 mt-2">
                    <div>{{ moment(startDate).format('MMM YYYY') }}</div>
                    <div>-</div>
                    <div>{{ moment(endDate).format('MMM YYYY') }}</div>
                </div>
                <div class="text-sm text-secondary mt-2">
                    {{ field }} • {{ location }}
                </div>
            </div>
        </div>
        <div class="mt-8">
            <slot></slot>
            <Admonition v-if="thesis" title="Bachelor Thesis" :text="thesis" />
        </div>
    </div>
</template>
<script setup lang="ts">
import moment from 'moment'

const props = defineProps<{
    institution: string
    degree: string
    field: string
    location: string
    startDate: Date
    endDate: Date
    thesis?: string
}>()
</script>
<style lang=""></style>
