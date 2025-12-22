<template>
    <HomeSection id="projects" title="Projects">
        <div class="flex flex-col gap-56 w-fit">
            <HomeSectionProjectsPreview
                v-for="project in projects"
                :key="project.id"
                :id="project.id"
                :title="project.title"
                :description="project.description"
                :features="project.features"
                :status="project.status"
                :layout="project.layout"
                :image="project.image"
            />
        </div>
    </HomeSection>
</template>

<script setup lang="ts">
import { projectsMeta } from '~/data/projects'

// Convert projectsMeta object to array
const projects = Object.values(projectsMeta)
</script>
