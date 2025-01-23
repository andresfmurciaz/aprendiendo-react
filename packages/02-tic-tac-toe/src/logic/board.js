
import { WINNER_COMBOS } from "../constants"
//recorre la lista de los posibles ganadores y si en las posiciones que yta estan escritas esta la misma letra gano.
 export const checkWinner = (boardCheck) => {

      for(const combo of WINNER_COMBOS){
       const [a,b,c] = combo
       if(
        boardCheck[a] && 
        boardCheck[a] == boardCheck[b] &&
        boardCheck[a] == boardCheck[c]
       ) {
        return boardCheck[a]
       }
      }
return null

  }

export  const checkEndGame = (newBoard) => {
    //si todo el arreglo no tiene ningun null es por que empato 
  return newBoard.every((Square)=>Square != null)
  
  }
  