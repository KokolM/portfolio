<template>
    <div class="pb-16 max-w-4xl">
        <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 w-full">
            <div class="flex items-center gap-6">
                <component :is="skill.component" compact class="w-12 h-12" />
                <div>
                    <h4 class="text-lg font-semibold">{{ skill.name }}</h4>
                    <div class="text-sm text-secondary mt-1">
                        {{ skill.yearsOfExperience }} {{ skill.yearsOfExperience === 1 ? 'year' : 'years' }} of experience
                    </div>
                </div>
            </div>
            <div class="px-4 py-1 bg-primary bg-opacity-10 text-primary text-xs rounded-full">
                {{ skill.category }}
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import type { Skill } from '~/models/skill.models'

const props = defineProps<{
    skill: Skill
}>()
</script>

<style scoped></style>
