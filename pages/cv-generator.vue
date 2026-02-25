<template>
    <div class="w-full h-dvh flex items-center justify-center">
        <div class="flex flex-col gap-4 w-fit p-8">
            <InputText v-model="companyName" placeholder="Company name" />
            <InputText v-model="companyAddress" placeholder="Company address" />
            <CvDownload
                :companyName="companyName"
                :companyAddress="companyAddress"
            />
        </div>
    </div>
</template>

<script lang="ts" setup>
const companyName = ref('')
const companyAddress = ref('')
</script>

<style></style>
