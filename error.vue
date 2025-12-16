<script setup lang="ts">
const error = useError()

const goHome = () => {
    clearError({ redirect: '/' })
}
</script>

<template>
    <div
        class="min-h-screen flex flex-col items-center justify-center text-center"
    >
        <h1 class="text-6xl font-bold mb-4">
            {{ error?.statusCode }}
        </h1>

        <p class="text-xl mb-6 text-text">
            {{ error?.statusMessage || 'Page not found' }}
        </p>

        <Button @click="goHome" label="Go to Home" />
    </div>
</template>
