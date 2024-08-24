<template lang="">
  <div class="h-full w-full hidden lg:block">
    <div class="w-full h-full bg-primary text-white flex flex-col items-center justify-center px-4 pb-6">
      <div class="pb-6">
        <LayoutNavigationProfileImage></LayoutNavigationProfileImage>
      </div>
      <LayoutNavigationButton v-for="item in menu" :item="item"></LayoutNavigationButton>
    </div>
  </div>
  <div class="w-full h-20 bg-primary flex justify-end items-center lg:hidden px-2 py-2">
    <div>
      <Button icon="pi pi-bars" severity="secondary" @click="visible = true"></Button>
    </div>
    <Drawer v-model:visible="visible" position="top" style="height: auto">
      <template #container="{ closeCallback }">
        <div class="bg-primary flex flex-col items-start w-full px-2 py-2">
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

let active: MenuItem | null = null

onMounted(() => {
  menu.value.forEach((item) => (item.menuRef = document.getElementById(item.hash.replace('#', ''))))
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})

function handleScroll(event: Event) {
  const scrollY = window.scrollY
  let target: MenuItem | null = null
  for (let item of menu.value) {
    if (!item.menuRef) continue
    const itemOffsetTop = item.menuRef.offsetTop
    const itemScrollHeight = item.menuRef.scrollHeight
    if (scrollY >= itemOffsetTop - 200 && scrollY < itemOffsetTop + itemScrollHeight) {
      target = item
    }
  }
  if (target && target != active) {
    updateActiveTarget(target)
  }
}

function updateActiveTarget(target: MenuItem) {
  menu.value.forEach((element) => (element.active = false))
  target.active = true
  active = target
  if (history.pushState) {
    history.pushState(null, '', target.hash)
  }
  // const base = window.location.hash
  // window.history.pushState("object or string", "Title", "/new-url")
}
</script>
<style>

</style>
