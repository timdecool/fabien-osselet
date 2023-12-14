<script setup>
import { useScoreStore } from '@/stores/score.js'
import DiceRoller from '@/components/DiceRoller.vue'
const scoreStore = useScoreStore()

const props = defineProps({
    player: {
        type: String,
        required: false,
        default: function() {
            return "standard"
        }
    }
})
</script>

<template>
    <section>
        <div v-for="(col, index) of scoreStore.boardValues" :id="`col-${index}`" class="column" :class="player==='self' ? 'reverse':''" @click="scoreStore.addValue(index)">
            <div v-for="(block, idx) of col" :id="`block-${idx}-col-${index}`" class="block">
                    <span v-if="block !== null">
                        <dice-roller :roll="block" />                
                    </span>
            </div> 
        </div>
    </section>
</template>

<style scoped>

    section {
        display: flex;
        margin: 10px;
        border-radius: 10px;
        gap: 5px;
    }
    .block {
        width: 60px;
        height: 60px;
        border-radius: 10px;
        color: black;
        font-size: 30px;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .column {
        background-color: rgb(139, 137, 139);
        display: flex;
        flex-direction: column;
        gap: 7px;
        padding: 5px;
        border-radius: 5px;
    }

    .reverse {
        display: flex;
        flex-direction: column-reverse;
    }

</style>