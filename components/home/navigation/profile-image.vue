<template lang="">
  <div class="w-[160px] h-[160px] rounded-full bg-white bg-opacity-40 flex items-center justify-center border-8 border-primary border-opacity-60">
    <NuxtImg
      src="/images/profile-image.webp" 
      alt="Matej Kokol - Profile Image" 
      width="100%" 
      height="100%" 
      class="rounded-full transition-opacity duration-300"
      loading="lazy"
    >
      <template #placeholder>
        <Skeleton shape="circle" size="160px" />
      </template>
    </NuxtImg>
  </div>
</template>
<script setup lang="ts"></script>
<style lang=""></style>
