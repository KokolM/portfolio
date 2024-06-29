<template lang="">
  <div class="w-full h-full flex flex-col lg:flex-row items-center">
    <LayoutNavigation />
    <div id="app" class="w-full h-full overflow-y-auto">
      <slot />
    </div>
  </div>
</template>
<script setup lang="ts">
</script>
<style lang=""></style>
