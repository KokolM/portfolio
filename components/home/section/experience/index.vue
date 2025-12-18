<template lang="">
  <HomeSection title="Experience">
    <HomeSectionExperiencePreview
      v-for="experience in experiences"
      :key="experience.id"
      :title="experience.company"
      :subtitle="experience.position"
      :startDate="experience.startDate"
      :endDate="experience.endDate"
    >
      <p v-for="(paragraph, index) in experience.description" :key="index" :class="{ 'mt-6': index > 0 }">
        {{ paragraph }}
      </p>
    </HomeSectionExperiencePreview>
  </HomeSection>
</template>

<script setup lang="ts">
import { experienceData } from '~/data'

const experiences = Object.values(experienceData)
</script>
<style lang=""></style>
