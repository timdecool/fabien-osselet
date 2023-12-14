<script setup>
import { useScoreStore } from '@/stores/score.js'
const scoreStore = useScoreStore()
</script>

<template>
    <section>
        <div>Score : {{ scoreStore.score }}</div>
    </section>
</template>

<style scoped>
    div {
        color: rgb(71, 71, 71);
        font-size: 25px;
        margin: 0;
        line-height: 25px;
    }
</style>