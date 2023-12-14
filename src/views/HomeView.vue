<script setup>
import { ref } from 'vue'

import DiceRoller from '@/components/DiceRoller.vue'
import GameBoard from '@/components/GameBoard.vue'

const currentRoll = ref(null)
function handleRoll(rollValue) {
  currentRoll.value = rollValue
}

function handleReset() {
  currentRoll.value = null
}

</script>

<template>
  <main>
    <game-board :rollValue="currentRoll" @resetRoll="handleReset"/>
    <dice-roller @newRoll="handleRoll" />
  </main>
</template>
