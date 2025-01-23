import './App.css'
import './index.css'
//es un hock de react el cual ayuda a que los componentes sean mas dinamicos y aca se esta importando
import { useState } from 'react'
//enum para las dos opciones que tienen los jugadores
const TURNS = {
  X : 'x',
  O : 'o'
}

//-------------------------------------------------------------------------------------

//-------------------------------------------------------------------------------------


//componente el cual renderiza cada casilla del juego , 
// recibe children:recibe un board[index] el cual se renderiza con un div  updateBoard:se usa para modificar cada cuadro  
//  index:en el index de board  isTurn:cuando es el turno de uno o del otro
const Square = ({children , updateBoard, index, isTurn}) => {
 
 const classname = `square ${isTurn? 'is-selected' : ' '} ` 

  const handleClick = () => {
    updateBoard(index) 
  }

  return (
    <div  onClick={handleClick}  className={classname}>
      {children}
    </div>
        )
  } 

//-------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------


const WINNER_COMBOS = [
  [0,1,2],
  [3,4,5],
  [6,7,8],
  [0,3,6],
  [1,4,7],
  [2,5,8],
  [0,4,8],
  [2,4,6]
]


function App() {

  //me modifica el array que representa mi tablero de juego 
  const [board, setBoard] = useState(Array(9).fill(null))
  //me maneja los turnos los cuales estan representados por un enum ya sea x o o
  const [turn,setTurn] = useState(TURNS.X)
  //me maneja el ganador de el juego esta reprensentado por x o o
  const [winner,setWinner] = useState(null) 

//-------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------

//recorre la lista de los posibles ganadores y si en las posiciones que yta estan escritas esta la misma letra gano.
  const checkWinner = (boardCheck) => {

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
//-------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------

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
          setWinner(newWinner)
        }
  } 
//-------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------

  return (
    <main className='board'>
      <h1> Tik Tak Toe </h1>
      <section className='game'>
        {
          board.map(( _ , index) => {
          return(
           <Square key={index} index={index} updateBoard={updateBoard}  >
            {board[index]}
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
    </main>
  )
}

export default App
