<template>
    <div
        :to="`/projects/${id}`"
        :id="id"
        class="flex items-center gap-24 relative -m-6 p-6 group-hover:m-0 group-hover:p-12 rounded-lg cursor-pointer group w-full transition-all duration-300"
        :class="
            layout === 'image-right'
                ? 'flex-row justify-start'
                : 'flex-row-reverse justify-end'
        "
        @click="onClick"
    >
        <div
            class="absolute inset-0 bg-gradient-to-t from-primary/20 to-primary/0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0"
        ></div>
        <div
            class="border-l-4 border-primary pt-2 pb-5 relative z-10 pl-8 shrink-0 max-w-96"
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
                        class="text-primary text-2xl"
                    />
                    <div>{{ feature }}</div>
                </div>
            </div>
        </div>
        <div class="relative z-10">
            <NuxtImg
                :src="props.image"
                :alt="`${props.title} Project Screenshot`"
                class="object-fit rounded-md transition-opacity duration-300"
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
        holup: 'w-[32rem]',
        'data-sharing-platform': 'w-[40rem]',
        'omnium-capital-portal': 'max-w-xl',
        greencast: 'max-w-[32rem]',
        heyme: 'max-w-xl',
    }
    return sizeMap[props.id] || 'max-w-xl'
}
</script>

<style></style>
