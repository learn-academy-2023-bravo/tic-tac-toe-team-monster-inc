import React, { useState } from "react"
import Squares from "./componets/Squares"
import "./App.css"
// import swal from "sweetalert"

const App = () => {
  const [squares, setSquares] = useState(Array(9).fill(null))
  const [player, setPlayer] = useState(true)

  const gameChange = (i) => {
    if (squares[i] !== null) {
      return
    }

    const determineWinner = (squares) => {
      const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
      ]
      for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i]
        if (
          squares[a] &&
          squares[a] === squares[b] &&
          squares[a] === squares[c]
        ) {
          return squares[a]
        }
      }
      return null
    }

    const newSquare = [...squares]
    newSquare[i] = player ? '☕️' : '🍩'
    setSquares(newSquare)
    setPlayer(!player)

    const winner = determineWinner(newSquare)
    if (winner) {
      // swal("YOU WON! Game restarting now...")
        alert("YOU WON! Game restarting now...")
      setTimeout(() => {
        window.location.reload()
        ;
      }, 2500)
    }
  }

  return (
    <>
      <h1>☕️ - TIC﹒TAC﹒TOE - 🍩 </h1>
      <div className="board">
        {squares.map((square, index) => {
          return (
            <>
              <Squares
                square={square}
                index={index}
                key={index}
                gameChange={gameChange}
              />
            </>
          )
        })}
        
      </div>
      <button
          className="refreshButton"
          onClick={() => window.location.reload(true)}
        >
          RESTART
        </button>
    </>
    
  )
}

export default App