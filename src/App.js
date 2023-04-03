import React, { useState } from 'react'
// import Cell from './components/Cell'
import './App.css'
import Board from './components/Board'

const App = () => {
  const [squares, setSquares] = useState(Array(9).fill(null))

  return (
    <>
      <h1>Tic Tac Toe</h1>
      <Board />
      {/* <Cell /> */}
    </>
  )
}

export default App