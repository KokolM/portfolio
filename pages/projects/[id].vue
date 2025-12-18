<template>
    <div class="bg-white min-h-screen">
        <div class="flex flex-col lg:flex-row min-h-screen">
            <!-- Left Panel - Project Details -->
            <div
                class="w-full lg:w-2/5 p-8 lg:p-16 flex flex-col justify-between relative"
            >
                <div class="space-y-6">
                    <!-- Title Section -->
                    <div>
                        <h1
                            class="text-4xl lg:text-5xl font-bold text-gray-900 mb-2"
                        >
                            {{ project.title }}
                        </h1>
                        <h4>
                            {{ project.subtitle }}
                        </h4>
                    </div>

                    <!-- Status -->
                    <div class="space-y-2">
                        <p class="text-sm text-gray-600 font-medium">STATUS</p>
                        <ProjectStatus :status="project.status" />
                    </div>

                    <!-- Tech Stack -->
                    <div class="space-y-8">
                        <p class="text-sm text-gray-600 font-medium">
                            TECH STACK
                        </p>
                        <div class="flex flex-wrap gap-3">
                            <component
                                v-for="tech in project.techStack"
                                :key="tech.name"
                                :is="tech.component"
                            />
                        </div>
                    </div>

                    <!-- Links/Actions -->
                    <div class="space-y-3 pt-4">
                        <Button
                            v-for="link in project.links"
                            :key="link.text"
                            :label="link.text"
                            :disabled="link.disabled"
                            :severity="link.disabled ? 'secondary' : 'contrast'"
                            class="w-full"
                            @click="
                                link.url && !link.disabled
                                    ? openLink(link.url)
                                    : null
                            "
                        />
                    </div>

                    <!-- Screenshots Navigation -->
                    <div
                        v-if="
                            project.screenshots &&
                            project.screenshots.length > 1
                        "
                        class="pt-4"
                    >
                        <p class="text-xs text-gray-500 uppercase mb-3">
                            IMAGES
                        </p>
                        <div class="flex gap-3 flex-wrap">
                            <div
                                v-for="(
                                    screenshot, index
                                ) in project.screenshots"
                                :key="index"
                                :class="[
                                    'w-20 h-20 border-2 transition-all overflow-hidden cursor-pointer',
                                    selectedImageIndex === index
                                        ? 'border-gray-900'
                                        : 'border-gray-200 hover:border-gray-400',
                                ]"
                                @click="selectedImageIndex = index"
                            >
                                <img
                                    :src="screenshot"
                                    :alt="`${project.title} screenshot ${
                                        index + 1
                                    }`"
                                    class="w-full h-full object-cover"
                                />
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Description Section -->
                <div class="mt-8 space-y-4">
                    <p class="text-gray-700 leading-relaxed">
                        {{ project.longDescription || project.description }}
                    </p>

                    <!-- Features -->
                    <div
                        v-if="project.features && project.features.length > 0"
                        class="space-y-2"
                    >
                        <p class="text-sm text-gray-600 font-medium uppercase">
                            Key Features
                        </p>
                        <ul class="space-y-1">
                            <li
                                v-for="feature in project.features"
                                :key="feature"
                                class="text-sm text-gray-600"
                            >
                                • {{ feature }}
                            </li>
                        </ul>
                    </div>

                    <!-- Contribution -->
                    <div v-if="project.contribution" class="space-y-2">
                        <p class="text-sm text-gray-600 font-medium uppercase">
                            My Contribution
                        </p>
                        <p class="text-sm text-gray-600">
                            {{ project.contribution }}
                        </p>
                    </div>
                </div>
            </div>

            <!-- Right Panel - Image -->
            <div class="w-full lg:w-3/5 bg-gray-50 relative">
                <div
                    class="sticky top-0 h-screen flex items-center justify-center p-8"
                >
                    <!-- Navigation Arrows for Images -->
                    <Button
                        v-if="hasMultipleImages && selectedImageIndex > 0"
                        icon="pi pi-chevron-left"
                        rounded
                        severity="primary"
                        class="absolute left-4 top-1/2 -translate-y-1/2 z-10"
                        @click="previousImage"
                    />

                    <Button
                        v-if="
                            hasMultipleImages &&
                            selectedImageIndex < totalImages - 1
                        "
                        icon="pi pi-chevron-right"
                        rounded
                        severity="primary"
                        class="absolute right-4 top-1/2 -translate-y-1/2 z-10"
                        @click="nextImage"
                    />

                    <!-- Project Image -->
                    <img
                        :src="currentImage"
                        :alt="project.title"
                        class="max-w-full max-h-full object-contain"
                    />
                </div>
            </div>
        </div>

        <div class="fixed top-4 right-4">
            <!-- Close button -->
            <Button
                icon="pi pi-times"
                text
                rounded
                severity="secondary"
                @click="$router.back()"
            />
        </div>
    </div>
</template>

<script lang="ts" setup>
import { projectsData } from '~/data'

const route = useRoute()
const router = useRouter()
const id = route.params.id as string

const project = projectsData[id]

if (!project) {
    throw createError({ statusCode: 404, statusMessage: 'Project not found' })
}

// Reset scroll position when component mounts
onMounted(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
})

const selectedImageIndex = ref(0)

const currentImage = computed(() => {
    if (project.screenshots && project.screenshots.length > 0) {
        return project.screenshots[selectedImageIndex.value]
    }
    return project.image
})

// Image navigation
const hasMultipleImages = computed(() => {
    return project.screenshots && project.screenshots.length > 1
})

const totalImages = computed(() => {
    return project.screenshots ? project.screenshots.length : 1
})

const previousImage = () => {
    if (selectedImageIndex.value > 0) {
        selectedImageIndex.value--
    }
}

const nextImage = () => {
    if (
        project.screenshots &&
        selectedImageIndex.value < project.screenshots.length - 1
    ) {
        selectedImageIndex.value++
    }
}

const openLink = (url: string) => {
    window.open(url, '_blank')
}
</script>

<style scoped>
/* Override default h1 styling for this page */
h1 {
    font-size: 2.5rem;
    line-height: 1.2;
    font-family: 'Saira Extra Condensed', serif;
}

@media (min-width: 1024px) {
    h1 {
        font-size: 3rem;
    }
}
</style>
