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
      <div>
        <p>Player 2</p>
        <score-view />
      </div>
    </section>
    <div class="divider"></div>
    <section class="layout">
      <game-board :rollValue="currentRoll" @resetRoll="handleReset" player="self"/>
      <dice-roller @newRoll="handleRoll" />
      <div>
        <p>Player 1</p>
        <score-view />
      </div>
    </section>
  </main>
</template>

<style scoped>
main {
  background-color: rgb(207, 199, 199);
  padding: 20px 50px;
  border-radius: 10px;
}
.layout {
  display: flex;
  align-items: center;
  gap: 20px;
}

.divider {
  height: 3px;
  width: 100%;
  background-color: rgb(106, 36, 128);
  border-radius: 10px;
}

p {
  margin: 0;
  color: rgb(37, 37, 37);
  font-size: 16px;
}
</style>
