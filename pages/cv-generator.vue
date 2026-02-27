<template>
    <div class="w-full h-dvh flex items-center justify-center">
        <div class="flex flex-col gap-4 w-fit p-8">
            <Textarea v-model="summary" placeholder="Summary" class="w-96" />
            <InputText v-model="companyName" placeholder="Company name" />
            <InputText v-model="companyAddress" placeholder="Company address" />
            <CvDownload
                :summary="summaryParsed"
                :companyName="companyNameParsed"
                :companyAddress="companyAddressParsed"
                :compact="true"
            />
            <CvDownload
                :summary="summaryParsed"
                :companyName="companyNameParsed"
                :companyAddress="companyAddressParsed"
                :compact="false"
            />
        </div>
    </div>
</template>

<script lang="ts" setup>
const summary = ref('')
const companyName = ref('')
const companyAddress = ref('')

const summaryParsed = computed(() =>
    summary.value.length > 0 ? summary.value.trim() : undefined,
)
const companyNameParsed = computed(() =>
    companyName.value.length > 0 ? companyName.value.trim() : undefined,
)
const companyAddressParsed = computed(() =>
    companyAddress.value.length > 0 ? companyAddress.value.trim() : undefined,
)
</script>

<style></style>
