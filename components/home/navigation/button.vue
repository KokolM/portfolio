<template lang="">
    <div @click.native="onLinkClick">
        <div
            class="text-white font-semibold uppercase h-10 w-full flex items-center justify-center cursor-pointer"
            :class="{
                'opacity-100': item.active,
                'opacity-60 hover:opacity-80 ': !item.active,
            }"
        >
            {{ item.title }}
        </div>
    </div>
</template>
<script setup lang="ts">
import type { MenuItem } from '~/models/menu.models'

const props = defineProps<{
    item: MenuItem
}>()

const router = useRouter()
const route = useRoute()

const emit = defineEmits(['onLinkClick'])

const onLinkClick = async () => {
    const id = props.item.hash?.replace('#', '') || ''
    const currentPath = route.path
    if (currentPath !== props.item.path) {
        await router.push({ path: props.item.path, hash: props.item.hash })
        if (id) {
            const el = document.getElementById(id)
            if (el) {
                window.scrollTo({ behavior: 'instant', top: el.offsetTop })
            }
        }
    } else {
        if (id) {
            const el = document.getElementById(id)
            if (el) {
                window.scrollTo({ behavior: 'smooth', top: el.offsetTop })
            }
        }
    }
    emit('onLinkClick')
}
</script>
<style lang=""></style>
