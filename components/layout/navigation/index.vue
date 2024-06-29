<template lang="">
  <div class="h-full hidden lg:block">
    <div class="w-64 h-full bg-primary text-white flex flex-col items-center justify-center px-4 pb-6">
      <LayoutNavigationButton v-for="item in menu" :item="item"></LayoutNavigationButton>
    </div>
  </div>
  <div class="w-full bg-primary flex justify-end items-center lg:hidden px-2 py-2">
    <div>
      <Button icon="pi pi-bars" severity="secondary" @click="visible = true"></Button>
    </div>
    <Drawer v-model:visible="visible" position="top" style="height: auto">
      <template #container="{ closeCallback }">
        <div class="bg-primary flex flex-col items-start w-full px-4 py-4">
          <div class="w-full flex justify-end">
            <Button icon="pi pi-times" :rounded="true" severity="secondary" @click="closeCallback"></Button>
          </div>
          <LayoutNavigationButton v-for="item in menu" :item="item" @onLinkClick="closeCallback"></LayoutNavigationButton>
        </div>
      </template>
    </Drawer>
  </div>
</template>
<script setup lang="ts">
import { onMounted, onUnmounted } from 'vue'
import type { MenuItem } from '~/models/menu.models'

const visible = ref(false)

const menu: Ref<MenuItem[]> = ref([
  {
    title: 'About',
    path: '/',
    hash: '#about',
    menuRef: null,
    active: true,
  },
  {
    title: 'Experience',
    path: '/',
    hash: '#experience',
    menuRef: null,
    active: false,
  },
  {
    title: 'Projects',
    path: '/',
    hash: '#projects',
    menuRef: null,
    active: false,
  },
  {
    title: 'Skills',
    path: '/',
    hash: '#skills',
    menuRef: null,
    active: false,
  },
  {
    title: 'Education',
    path: '/',
    hash: '#education',
    menuRef: null,
    active: false,
  },
])

let app: HTMLElement | null = null
let active: MenuItem | null = null

onMounted(() => {
  init()
  app?.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  app?.removeEventListener('scroll', handleScroll)
})

function init() {
  app = document.getElementById('app')
  menu.value.forEach((item) => (item.menuRef = document.getElementById(item.hash.replace('#', ''))))
}

function handleScroll(event: Event) {
  const scrollTop = (event.target as HTMLElement).scrollTop
  let target: MenuItem | null = null
  for (let item of menu.value) {
    if (!item.menuRef) continue
    const itemOffsetTop = item.menuRef.offsetTop
    const itemScrollHeight = item.menuRef.scrollHeight
    if (scrollTop >= itemOffsetTop - 200 && scrollTop < itemOffsetTop + itemScrollHeight) {
      target = item
    }
  }
  if (target && target != active) {
    menu.value.forEach((element) => (element.active = false))
    target.active = true
    active = target
  }
}
</script>
<style>
.p-drawer {
  border: none;
}
</style>
