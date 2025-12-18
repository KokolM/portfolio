<template lang="">
    <HomeSection>
        <h1>
            {{ personalData.name }}
            <span class="text-primary">{{ personalData.surname }}</span>
        </h1>
        <div
            class="flex flex-col md:flex-row items-start md:items-center gap-1"
        >
            <h4>Fullstack software developer ·</h4>
            <h4>{{ personalData.phone }} ·</h4>
            <h4><span class="text-primary">{{ personalData.email }} ·</span></h4>
        </div>
        <div class="mt-10 max-w-[820px]">
            Hello 👋, I'm a passionate full-stack software developer dedicated
            to turning innovative ideas into functional, user-friendly
            solutions.
        </div>
    </HomeSection>
</template>

<script setup lang="ts">
import { personalData } from '~/data'
</script>
<style lang=""></style>
