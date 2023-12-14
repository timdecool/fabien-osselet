<script setup>
import { ref } from 'vue'

import DiceRoller from '@/components/DiceRoller.vue'
import GameBoard from '@/components/GameBoard.vue'
import ScoreView from '@/components/ScoreView.vue'

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
    <section class="layout">
      <game-board :rollValue="currentRoll" @resetRoll="handleReset"/>
      <dice-roller @newRoll="handleRoll" />
      <score-view />
    </section>
  </main>
</template>

<style scoped>
.layout {
  display: flex;
  align-items: center;
  gap: 20px;
}
</style>
