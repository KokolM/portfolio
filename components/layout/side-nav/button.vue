<template lang="">
  <ClientOnly>
    <NuxtLink :to="{ path, hash }">
      <div
        class="text-white font-semibold uppercase h-10 w-full flex items-center justify-center cursor-pointer"
        :class="{ 'opacity-100': active, 'opacity-40 hover:opacity-60 ': !active }"
      >
        {{ title }}
      </div>
    </NuxtLink>
  </ClientOnly>
</template>
<script setup lang="ts">
const props = defineProps<{
  title: string
  path: string
  hash: string
}>()

const route = useRoute()

const { hash } = toRefs(props)

const active = computed(() => route.hash == hash.value)
</script>
<style lang=""></style>
