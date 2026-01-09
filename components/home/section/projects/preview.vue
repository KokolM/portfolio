<template>
    <div
        :to="`/projects/${id}`"
        :id="id"
        class="flex items-start lg:items-center gap-6 lg:gap-24 relative -m-6 p-6 group-hover:m-0 group-hover:p-12 rounded-lg cursor-pointer group min-w-full transition-all duration-300"
        :class="
            layout === 'image-right'
                ? 'flex-col lg:flex-row lg:justify-start'
                : 'flex-col lg:flex-row-reverse lg:justify-end'
        "
        @click="onClick"
    >
        <div
            class="absolute inset-0 bg-gradient-to-t from-primary/20 to-primary/0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0"
        ></div>
        <div
            class="border-l-4 border-primary pt-2 pb-5 relative z-10 sm:pl-8 pl-4 shrink-0 w-full lg:max-w-96"
        >
            <h3>{{ props.title }}</h3>
            <h4>{{ props.description }}</h4>
            <StatusTag :status="props.status" size="small" class="mt-3" />
            <div class="flex flex-col gap-4 mt-8">
                <div
                    v-for="feature in props.features"
                    :key="feature"
                    class="flex items-center gap-4"
                >
                    <font-awesome-icon
                        icon="check"
                        class="text-primary text-2xl shrink-0"
                    />
                    <div>{{ feature }}</div>
                </div>
            </div>
            <!-- Mobile Click Indicator -->
            <div
                class="flex items-center gap-2 mt-12 pb-6 lg:hidden text-primary text-sm font-semibold animate-pulse"
            >
                <span>Tap to view details</span>
                <font-awesome-icon icon="arrow-right" class="text-lg" />
            </div>
        </div>
        <div class="relative z-10">
            <NuxtImg
                :src="props.image"
                :alt="`${props.title} Project Screenshot`"
                class="object-fit rounded-md transition-opacity duration-300 w-auto"
                :class="getImageSizeClass()"
                loading="lazy"
                placeholder
            />
        </div>
    </div>
</template>

<script lang="ts" setup>
import type { ProjectStatus } from '~/models/project.models'

const props = defineProps<{
    id: string
    title: string
    description: string
    features: string[]
    status: ProjectStatus
    layout: 'image-left' | 'image-right'
    image: string
}>()

const router = useRouter()
const route = useRoute()

const onClick = async () => {
    // Update current URL with hash BEFORE navigating (non-blocking)
    await router.replace({
        path: route.path,
        hash: `#${props.id}`,
    })

    router.push(`/projects/${props.id}`)
}

const getImageSizeClass = () => {
    // You can customize image sizes based on project id or other criteria
    const sizeMap: Record<string, string> = {
        holup: 'sm:w-[32rem]',
        'data-sharing-platform': 'sm:w-[40rem]',
        'omnium-capital-portal': 'sm:max-w-xl',
        greencast: 'sm:max-w-[32rem]',
        heyme: 'sm:max-w-xl',
    }
    return sizeMap[props.id] || 'max-w-xl'
}
</script>

<style></style>
