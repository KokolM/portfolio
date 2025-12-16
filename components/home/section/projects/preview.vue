<template>
    <div
        :to="`/projects/${id}`"
        :id="id"
        class="flex items-center gap-24 relative p-6 rounded-lg cursor-pointer group w-full"
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
            <div
                class="mt-3 text-sm font-semibold text-white rounded-md px-2 py-1 inline-block"
                :class="{
                    'bg-yellow-600': props.status === 'development',
                    'bg-green-600': props.status === 'production',
                    'bg-gray-600': props.status === 'discontinued',
                }"
            >
                {{
                    props.status === 'development'
                        ? 'In Development'
                        : props.status === 'production'
                        ? 'In Production'
                        : props.status === 'discontinued'
                        ? 'Discontinued'
                        : ''
                }}
            </div>
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
            <img
                :src="props.image"
                :alt="`${props.title} Project Screenshot`"
                class="object-fit rounded-md"
                :class="getImageSizeClass()"
            />
        </div>
    </div>
</template>

<script lang="ts" setup>
type ProjectStatus = 'development' | 'production' | 'discontinued'

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
    // Update current URL with hash BEFORE navigating
    await router.replace({
        path: route.path,
        hash: `#${props.id}`,
    })

    router.push(`/projects/${props.id}`)
}

const getImageSizeClass = () => {
    // You can customize image sizes based on project id or other criteria
    const sizeMap: Record<string, string> = {
        'holup': 'w-[32rem]',
        'data-sharing-platform': 'w-[40rem]',
        'omnium-capital-portal': 'max-w-xl',
        'greencast': 'max-w-[32rem]',
        'heyme': 'max-w-xl',
    }
    return sizeMap[props.id] || 'max-w-xl'
}
</script>

<style></style>
