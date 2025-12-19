<template lang="">
  <HomeSection title="Skills">
    <div class="space-y-16">
      <div v-for="category in categories" :key="category" class="max-w-4xl">
        <h3 class="text-xl font-semibold mb-8 text-primary">{{ category }}</h3>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-x-40 gap-y-4">
          <HomeSectionSkillsPreview
            v-for="skill in skillsByCategory[category]"
            :key="skill.id"
            :skill="skill"
          />
        </div>
      </div>
    </div>
  </HomeSection>
</template>

<script setup lang="ts">
import { skillsData } from '~/data'
import type { Skill } from '~/models/skill.models'

const allSkills = Object.values(skillsData).sort((a, b) => {
  // Sort by years of experience (descending), then by name
  if (b.yearsOfExperience !== a.yearsOfExperience) {
    return b.yearsOfExperience - a.yearsOfExperience
  }
  return a.name.localeCompare(b.name)
})

// Group skills by category
const skillsByCategory: Record<string, Skill[]> = {}
const categories: string[] = []

for (const skill of allSkills) {
  if (!skillsByCategory[skill.category]) {
    skillsByCategory[skill.category] = []
    categories.push(skill.category)
  }
  skillsByCategory[skill.category]!.push(skill)
}

// Define order of categories
const categoryOrder = ['Frontend', 'Backend', 'DevOps', 'Design', 'Other']
categories.sort((a, b) => {
  const indexA = categoryOrder.indexOf(a)
  const indexB = categoryOrder.indexOf(b)
  return (indexA === -1 ? 999 : indexA) - (indexB === -1 ? 999 : indexB)
})
</script>
<style lang=""></style>
