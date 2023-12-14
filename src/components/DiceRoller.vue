<script setup>
import { ref } from 'vue'
import { useScoreStore } from '@/stores/score.js'
const scoreStore = useScoreStore()
</script>

<template>
    <div class="dice" @click="scoreStore.newRoll">
        {{ scoreStore.currentRoll }}
    </div>
</template>

<style scoped>
    .dice {
        background-color: white;
        font-size: 30px;
        color: black;
        height: 50px;
        width: 50px;
        text-align: center;
        cursor:pointer;
        user-select: none;
    }
</style>
