import './App.css'
import './index.css'
import { Square } from './component/Square'
import { useState } from 'react'
import confetti from 'canvas-confetti'
import { TURNS } from './constants'
import { checkWinner , checkEndGame} from './logic/board'
import { WinnerModal } from './component/WinnerModal'



function App() {

  //me modifica el array que representa mi tablero de juego 
  const [board, setBoard] = useState(Array(9).fill(null))
  //me maneja los turnos los cuales estan representados por un enum ya sea x o o
  const [turn,setTurn] = useState(TURNS.X)
  //me maneja el ganador de el juego esta reprensentado por x o o
  const [winner,setWinner] = useState(null) 


    const resetGame = () => {

      setBoard(Array(9).fill(null) )
      setTurn(TURNS.X)
      setWinner(null)
    }


//me actualiza la casilla cuando el jugador le da click en la casilla y tiene otras validaciones importantes
  const updateBoard = (index) => {
    
    //If he has a change on the board or no existe un winner, he makes return 
    if(board[index] || winner ) return
    
    //update table
    const newBoard = [...board]
    newBoard[index] = turn
    setBoard(newBoard)
    
    //cambia el turno
    const newTurn = turn == TURNS.X ? TURNS.O : TURNS.X
    setTurn(newTurn)

    //mira el ganador 
    const newWinner = checkWinner(newBoard)
      if(newWinner)
        {
          confetti()
          setWinner(newWinner)
        }else if(checkEndGame(newBoard)) {
            setWinner(false) //empate
        }
  } 





  return (
    <main className='board'>
      <h1> Tik Tak Toe </h1>
      <button onClick={resetGame}> Resetear juego</button>
      <section className='game'>
        {
          board.map(( square , index) => {
          return(
           <Square key={index} index={index} updateBoard={updateBoard}  >
            {square}
           </Square>
          )
          })
        }
      </section>
      <section className='turn'>
        <Square isTurn = {turn == TURNS.X} >
          {TURNS.X}
        </Square>
        <Square isTurn = {turn == TURNS.O}>
          {TURNS.O}
        </Square>
      </section>

   <WinnerModal resetGame={resetGame} winner={winner}></WinnerModal>
    </main>
  )
}

export default App
