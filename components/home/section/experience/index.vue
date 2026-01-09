<template lang="">
    <HomeSection title="Experience">
        <HomeSectionExperiencePreview
            v-for="experience in experiences"
            :key="experience.id"
            :title="experience.company"
            :subtitle="experience.position"
            :startDate="experience.startDate"
            :endDate="experience.endDate"
            :website="experience.website"
        >
            <div class="space-y-4">
                <div
                    v-for="(paragraph, index) in experience.description"
                    :key="index"
                    class="flex items-start gap-2 lg:gap-6"
                >
                    <div>•</div>
                    <p>
                        {{ paragraph }}
                    </p>
                </div>
            </div>
        </HomeSectionExperiencePreview>
    </HomeSection>
</template>

<script setup lang="ts">
import { experienceData } from '~/data'

const experiences = Object.values(experienceData)
</script>
<style lang=""></style>
