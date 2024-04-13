<template lang="">
  <div class="text-text flex flex-col items-center h-full">
    <div class="container flex gap-6 h-full">
      <div class="h-full">
        <div class="h-full overflow-y-auto py-6 ">
            <LayoutProfile />
        </div>
      </div>
      <div class="w-full h-full overflow-auto">
        <div class="flex flex-col gap-6 w-full h-full py-6">
          <LayoutHeader />
          <div class="levios-card">
            <slot />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {}
</script>
<style lang=""></style>
