import React, { useState } from "react"

const Squares = ({ square, index, gameChange}) => {
  const clickAction = () => {
    gameChange(index)
  }
  return (
    <>
      <div className="squares" onClick={clickAction}>
        {square}
      </div>
    </>
  )
}

export default Squares
