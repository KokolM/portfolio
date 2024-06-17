<template lang="">
  <div class="w-full h-full flex items-center">
    <div class="hidden h-full lg:block">
      <LayoutSideNav />
    </div>
    <div id="app" class="w-full h-full overflow-y-auto">
      <slot />
    </div>
  </div>
</template>
<script>
export default {}
</script>
<style lang=""></style>
