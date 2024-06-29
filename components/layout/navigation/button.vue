<template lang="">
  <ClientOnly>
    <NuxtLink :to="{ path: item.path, hash: item.hash }" @click.native="onLinkClick">
      <div
        class="text-white font-semibold uppercase h-10 w-full flex items-center justify-center cursor-pointer"
        :class="{ 'opacity-100': item.active, 'opacity-60 hover:opacity-80 ': !item.active }"
      >
        {{ item.title }}
      </div>
    </NuxtLink>
  </ClientOnly>
</template>
<script setup lang="ts">
import type { MenuItem } from '~/models/menu.models'

const props = defineProps<{
  item: MenuItem
}>()

const emit = defineEmits(['onLinkClick'])

function onLinkClick() {
  emit('onLinkClick')
}
</script>
<style lang=""></style>
