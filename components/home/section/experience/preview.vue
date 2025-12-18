<template lang="">
    <div class="pb-32 max-w-4xl">
        <div
            class="flex flex-col lg:flex-row items-start justify-end gap-1 lg:gap-4 w-full"
        >
            <div class="grow">
                <h3>{{ title }}</h3>
                <h4>{{ subtitle }}</h4>
                <div class="text-primary flex items-center gap-1 mt-2">
                    <div>{{ moment(startDate).format('MMM YYYY') }}</div>
                    <div>-</div>
                    <div>
                        {{
                            endDate
                                ? moment(endDate).format('MMM YYYY')
                                : 'Present'
                        }}
                    </div>
                </div>
            </div>
        </div>
        <div class="mt-8">
            <slot></slot>
        </div>
    </div>
</template>
<script setup lang="ts">
import moment from 'moment'

const props = defineProps<{
    title: string
    subtitle: string
    startDate: Date
    endDate?: Date
}>()
</script>
<style lang=""></style>
