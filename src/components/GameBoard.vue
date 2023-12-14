<script setup>
import { useScoreStore } from '@/stores/score.js'
const scoreStore = useScoreStore()
</script>

<template>
    <section>
        <div v-for="(col, index) of scoreStore.boardValues" :id="`col-${index}`" class="column" @click="scoreStore.addValue(index)">
            <div v-for="(block, idx) of col" :id="`block-${idx}-col-${index}`" class="block">
                    <span v-if="block !== null">{{ block }}</span>
            </div> 
        </div>
    </section>
</template>

<style scoped>

    section {
        display: flex;
        margin: 10px;
    }
    .block {
        width: 60px;
        height: 60px;
        background-color: white;
        border: 1px solid black;
        color: black;
        font-size: 30px;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .column {
        border: 1px solid black;
    }

</style>