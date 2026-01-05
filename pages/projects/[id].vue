<template>
    <div class="bg-white min-h-screen">
        <div class="flex flex-col lg:flex-row min-h-screen">
            <!-- Left Panel - Project Details -->
            <div
                class="w-full lg:w-2/5 p-8 flex flex-col justify-between relative"
            >
                <!-- Back button -->
                <div
                    class="w-fit sticky top-0 z-50 py-4 mb-6 pr-4 bg-transparent pb-4"
                >
                    <Button
                        icon="pi pi-chevron-left"
                        label="Back to Projects"
                        iconPos="left"
                        outlined
                        severity="secondary"
                        size="small"
                        class="bg-white"
                        @click="$router.replace(`/#${project.id}`)"
                    />
                </div>
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
                        <StatusTag :status="project.status" />
                    </div>

                    <!-- Tech Stack -->
                    <div class="space-y-8">
                        <p class="text-sm text-gray-600 font-medium">
                            TECH STACK
                        </p>
                        <div class="flex flex-wrap gap-3">
                            <TechIconDynamic
                                v-for="tech in project.techStack"
                                :key="tech.name"
                                :name="tech.component"
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
                        class="pt-8"
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
                                    'w-20 h-20 border-2 transition-all overflow-hidden cursor-pointer relative',
                                    selectedImageIndex === index
                                        ? 'lg:border-gray-900'
                                        : 'border-gray-200 lg:hover:border-gray-400',
                                ]"
                                @click="selectActiveThumbnail(index)"
                            >
                                <Skeleton
                                    v-if="!thumbnailsLoaded[index]"
                                    class="absolute inset-0"
                                    width="100%"
                                    height="100%"
                                />
                                <NuxtImg
                                    :src="screenshot"
                                    :alt="`${project.title} screenshot ${
                                        index + 1
                                    }`"
                                    :class="[
                                        'w-full h-full object-cover transition-opacity duration-300',
                                        thumbnailsLoaded[index]
                                            ? 'opacity-100'
                                            : 'opacity-0',
                                    ]"
                                    loading="lazy"
                                    @load="thumbnailsLoaded[index] = true"
                                    @error="thumbnailsLoaded[index] = true"
                                />
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Description Section -->
                <div class="mt-8 space-y-8">
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
                    <Admonition
                        v-if="project.contribution"
                        title="My Contribution"
                        :text="project.contribution"
                    />
                </div>
            </div>

            <!-- Right Panel - Image -->
            <div class="w-full lg:w-3/5 bg-gray-50 relative hidden lg:flex">
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
                    <div
                        class="relative w-full h-full flex items-center justify-center"
                    >
                        <Skeleton
                            v-if="!mainImageLoaded"
                            class="absolute inset-0 m-auto"
                            width="100%"
                            height="600px"
                        />
                        <NuxtImg
                            :src="currentImage"
                            :alt="project.title"
                            :class="[
                                'max-w-full max-h-full object-contain cursor-pointer transition-opacity duration-300',
                                mainImageLoaded ? 'opacity-100' : 'opacity-0',
                            ]"
                            @load="mainImageLoaded = true"
                            @error="mainImageLoaded = true"
                            @click="openFullscreen"
                        />
                    </div>
                </div>
            </div>
        </div>

        <!-- Fullscreen Modal -->
        <div
            v-if="isFullscreen"
            class="fixed inset-0 bg-black bg-opacity-95 z-50 flex items-center justify-center"
            @click="closeFullscreen"
        >
            <!-- Navigation Arrows -->
            <Button
                v-if="hasMultipleImages && selectedImageIndex > 0"
                icon="pi pi-chevron-left"
                rounded
                severity="primary"
                class="absolute left-4 top-1/2 -translate-y-1/2 z-10"
                @click.stop="previousImage"
            />

            <Button
                v-if="hasMultipleImages && selectedImageIndex < totalImages - 1"
                icon="pi pi-chevron-right"
                rounded
                severity="primary"
                class="absolute right-4 top-1/2 -translate-y-1/2 z-10"
                @click.stop="nextImage"
            />

            <!-- Close button -->
            <Button
                icon="pi pi-times"
                rounded
                severity="secondary"
                class="absolute top-4 right-4 z-10"
                @click.stop="closeFullscreen"
            />

            <!-- Image counter -->
            <div
                v-if="hasMultipleImages"
                class="absolute top-4 left-1/2 -translate-x-1/2 text-white text-sm bg-black bg-opacity-50 px-4 py-2 rounded-full"
            >
                {{ selectedImageIndex + 1 }} / {{ totalImages }}
            </div>

            <!-- Fullscreen Image -->
            <div class="relative">
                <Skeleton
                    v-if="!fullscreenImageLoaded"
                    class="absolute inset-0 m-auto"
                    width="800px"
                    height="600px"
                />
                <NuxtImg
                    :src="currentImage"
                    :alt="project.title"
                    :class="[
                        'max-w-[95vw] max-h-[95vh] object-contain transition-opacity duration-300',
                        fullscreenImageLoaded ? 'opacity-100' : 'opacity-0',
                    ]"
                    @load="fullscreenImageLoaded = true"
                    @error="fullscreenImageLoaded = true"
                    @click.stop
                />
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { projectsData } from '~/data'

const route = useRoute()
const router = useRouter()
const viewport = useViewport()

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
const isFullscreen = ref(false)

// Image loading states
const mainImageLoaded = ref(false)
const fullscreenImageLoaded = ref(false)
const thumbnailsLoaded = ref<Record<number, boolean>>({})

// Initialize thumbnails loaded state
if (project.screenshots) {
    project.screenshots.forEach((_, index) => {
        thumbnailsLoaded.value[index] = false
    })
}

const currentImage = computed(() => {
    if (project.screenshots && project.screenshots.length > 0) {
        return project.screenshots[selectedImageIndex.value]
    }
    return project.image
})

// Reset loading states when image changes
watch(currentImage, () => {
    mainImageLoaded.value = false
    fullscreenImageLoaded.value = false
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

const selectActiveThumbnail = (index: number) => {
    selectedImageIndex.value = index
    if (viewport.isLessOrEquals('tablet')) {
        openFullscreen()
    }
}

const openFullscreen = () => {
    isFullscreen.value = true
    // Prevent body scroll when fullscreen is open
    document.body.style.overflow = 'hidden'
}

const closeFullscreen = () => {
    isFullscreen.value = false
    // Restore body scroll
    document.body.style.overflow = ''
}

// Handle ESC key to close fullscreen
onMounted(() => {
    const handleEscape = (e: KeyboardEvent) => {
        if (e.key === 'Escape' && isFullscreen.value) {
            closeFullscreen()
        }
    }
    window.addEventListener('keydown', handleEscape)

    // Cleanup
    onUnmounted(() => {
        window.removeEventListener('keydown', handleEscape)
        document.body.style.overflow = '' // Ensure scroll is restored
    })
})
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
