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
            <h4>
                <span class="text-primary">{{ personalData.email }} ·</span>
            </h4>
        </div>
        <div class="mt-10 max-w-[820px] flex flex-col gap-10">
            <div>Hello 👋, I’m Matej, a full-stack software developer.</div>
            <div class="text-sm" v-html="personalData.aboutMe" />
        </div>
        <div
            v-if="personalData.jobSeeking?.active"
            class="mt-10 inline-flex items-center gap-3 px-5 py-3 bg-surface-50 dark:bg-surface-800 border border-surface-200 dark:border-surface-700 rounded-md w-fit"
        >
            <i class="pi pi-briefcase text-primary text-lg"></i>
            <div class="flex flex-col">
                <span
                    class="text-sm font-semibold text-surface-900 dark:text-surface-100"
                >
                    {{ personalData.jobSeeking.message }}
                </span>
                <span class="text-xs text-surface-600 dark:text-surface-400">
                    Location: {{ personalData.jobSeeking.location }}
                </span>
            </div>
        </div>
    </HomeSection>
</template>

<script setup lang="ts">
import { personalData } from '~/data'
</script>
<style lang=""></style>
