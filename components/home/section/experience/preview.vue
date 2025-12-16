<template lang="">
    <div class="pb-56 max-w-4xl">
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
            <div v-if="hasTechnologies">
                <div class="mt-10 text-xs pb-6">
                    Technologies used:
                </div>
                <div
                    class="flex flex-col lg:flex-row lg:items-center gap-16 lg:gap-12"
                >
                    <div
                        v-if="$slots.technologiesFronend != undefined"
                        class="grid grid-cols-4 sm:grid-cols-5 items-center gap-4 min-w-60 w-fit relative"
                    >
                        <slot name="technologiesFronend"></slot>
                        <div class="absolute -bottom-8 left-0 w-full">
                            <div
                                class="relative h-0.5 w-full bg-secondary bg-opacity-20"
                            >
                                <div
                                    class="absolute bg-white text-xs text-light-grey -top-2 px-2 left-1/2 transform -translate-x-1/2"
                                >
                                    Frontend
                                </div>
                            </div>
                        </div>
                    </div>
                    <div
                        v-if="$slots.technologiesBackend != undefined"
                        class="grid grid-cols-4 sm:grid-cols-5 items-center gap-4 min-w-60 w-fit relative"
                    >
                        <slot name="technologiesBackend"></slot>
                        <div class="absolute -bottom-8 left-0 w-full">
                            <div
                                class="relative h-0.5 w-full bg-secondary bg-opacity-20"
                            >
                                <div
                                    class="absolute bg-white text-xs text-light-grey -top-2 px-2 left-1/2 transform -translate-x-1/2"
                                >
                                    Backend
                                </div>
                            </div>
                        </div>
                    </div>
                    <div
                        v-if="$slots.technologiesDevOps != undefined"
                        class="grid grid-cols-4 sm:grid-cols-5 items-center gap-4 min-w-60 w-fit relative"
                    >
                        <slot name="technologiesDevOps"></slot>
                        <div class="absolute -bottom-8 left-0 w-full">
                            <div
                                class="relative h-0.5 w-full bg-secondary bg-opacity-20"
                            >
                                <div
                                    class="absolute bg-white text-xs text-light-grey -top-2 px-2 left-1/2 transform -translate-x-1/2"
                                >
                                    DevOps
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
import { computed, useSlots } from 'vue'
import moment from 'moment'

const slots = useSlots()

defineProps<{
    title: string
    subtitle: string
    startDate: Date
    endDate?: Date
}>()

const hasTechnologies = computed(
    () =>
        slots.technologiesFronend != undefined ||
        slots.technologiesBackend != undefined
)
</script>
<style lang=""></style>
