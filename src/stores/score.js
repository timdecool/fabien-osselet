import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useScoreStore = defineStore('score', () => {
  // STATES
  const currentRoll = ref(null)
  const boardValues = ref([[null,null,null],[null,null,null],[null,null,null]])

  // GETTERS
  const score = computed(() => {
        
  })

  // ACTIONS
  function newRoll() {
    currentRoll.value = Math.ceil(Math.random() * 6)
  }

  function addValue(index) {
    if(currentRoll.value !== null) {
        for(let i = 0; i<boardValues.value[index].length; i++) {
            if(boardValues.value[index][i] === null) {
                boardValues.value[index][i]  = currentRoll.value
                currentRoll.value = null
                break;
            }
        }
    }
}



return { currentRoll, newRoll, addValue, boardValues }

})
