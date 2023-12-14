import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useScoreStore = defineStore('score', () => {
  // STATES

  const currentRoll = ref(null)
  const boardValues = ref([[null,null,null],[null,null,null],[null,null,null]])

  // GETTERS
  const score = computed(() => {
    let sum = 0
    for(let i=0; i<3; i++) {
      for(let j=0; j<3; j++) {
        let multiply = 0
        for(let k=0; k<3; k++) {
            if(boardValues.value[i][j] === boardValues.value[i][k]) {
              multiply++
            }
        }
        sum += boardValues.value[i][j] * multiply
      }
    }
    return sum  
  })

  // ACTIONS
  function newRoll() {
    if(currentRoll.value === null) {
      currentRoll.value = Math.ceil(Math.random() * 6)
    }
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


return { currentRoll, newRoll, addValue, boardValues, score }

})
