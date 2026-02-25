<template>
    <HomeSection id="projects" title="Projects">
        <div class="flex flex-col gap-32 w-full sm:w-fit overflow-hidden sm:overflow-visible">
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
                :active-users="project.activeUsers"
            />
        </div>
    </HomeSection>
</template>

<script setup lang="ts">
import { projectsData } from '~/data'

// Convert projectsData object to array
const projects = Object.values(projectsData)
</script>
