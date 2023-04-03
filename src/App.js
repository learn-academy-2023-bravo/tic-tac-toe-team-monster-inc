import React, { useState } from 'react'
// import Cell from './components/Cell'
import './App.css'
import Board from './components/Board'

const App = () => {
  const [gameClick, setGameClick] = useState(["", "", "", "", "", "", "", "", ""])
  
  
  const gamePlay = (clickedBox) => {
    let updatedBoard =[...gameClick]
      if(clickedBox === gameClick){
        updatedBoard = 'X'
      }else {
        alert('This cell is already occupied...')
      }
    }
  
  return (
    <>
      <h1>Tic Tac Toe</h1>
      <div className='gameboard'>
      {gameClick.map((value, index) =>{
        return( <Board
        gamePlay={gamePlay}
        />
        )
      })
    }
      </div>
    </>
  ) 
  }

export default App