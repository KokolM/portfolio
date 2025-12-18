<template lang="">
  <HomeSection title="Education">
    <HomeSectionEducationPreview
      v-for="education in educations"
      :key="education.id"
      :institution="education.institution"
      :degree="education.degree"
      :field="education.field"
      :location="education.location"
      :startDate="education.startDate"
      :endDate="education.endDate"
      :thesis="education.thesis"
    >
      <p v-for="(paragraph, index) in education.description" :key="index" :class="{ 'mt-6': index > 0 }">
        {{ paragraph }}
      </p>
    </HomeSectionEducationPreview>
  </HomeSection>
</template>

<script setup lang="ts">
import { educationData } from '~/data'

const educations = Object.values(educationData)
</script>
<style lang=""></style>
