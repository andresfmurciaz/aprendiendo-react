
//componente el cual renderiza cada casilla del juego , 
// recibe children:recibe un board[index] el cual se renderiza con un div  updateBoard:se usa para modificar cada cuadro  
//  index:en el index de board  isTurn:cuando es el turno de uno o del otro
export const Square = ({children , updateBoard, index, isTurn}) => {
 
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
   
   