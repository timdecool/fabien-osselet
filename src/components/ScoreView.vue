<script setup>
import { useScoreStore } from '@/stores/score.js'
const scoreStore = useScoreStore()
</script>

<template>
    <section>
        <div>{{ scoreStore.score }}</div>
    </section>
</template>
