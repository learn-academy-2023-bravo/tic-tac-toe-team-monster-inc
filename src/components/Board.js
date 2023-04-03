import React from "react"
// import Cell from './components/Cell'

const Board = (gamePlay) => {
    const click = () => {
        gamePlay()
    }
  return (
   <div className="square" onClick={click}></div>
    
  )
}

export default Board
