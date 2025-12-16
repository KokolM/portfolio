<!-- <template lang="">
  <div class="w-full h-full flex flex-col lg:flex-row items-center">
    <HomeNavigation />
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
      <HomeNavigation />
    </div>
    <div class="lg:pl-64 lg:pt-0 pt-16 w-full h-full">
      <slot />
    </div>
  </div>
</template>
<script setup lang="ts">
</script>
<style lang=""></style>
