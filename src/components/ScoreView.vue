<script setup>
import { useScoreStore } from '@/stores/score.js'
const scoreStore = useScoreStore()
</script>

<template>
    <section>
        <div>Score actuel : {{ scoreStore.score }}</div>
    </section>
</template>

<style scoped>
    div {
        color: white;
        font-size: 25px;
    }

</style>