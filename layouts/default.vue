<!-- <template lang="">
  <div class="w-full h-full flex flex-col lg:flex-row items-center">
    <LayoutNavigation />
    <div id="app" class="w-full h-full overflow-y-auto">
      <slot />
    </div>
  </div>
</template>
<script setup lang="ts">
</script>
<style lang=""></style> -->

<template lang="">
  <div class="w-full h-full">
    <div class="lg:w-60 lg:h-full w-full h-16 fixed z-50">
      <LayoutNavigation />
    </div>
    <div class="lg:pl-64 pt-16">
      <slot />
    </div>
  </div>
</template>
<script setup lang="ts">
</script>
<style lang=""></style>
