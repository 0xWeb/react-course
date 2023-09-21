import { useState } from 'react'
import './App.css'

const TURNS = {
  X: 'x',
  O: 'o'
}

const Square = ({ children, isSelected, updateBoard, index }) => {
  const className = `square ${isSelected ? 'is-selected' : ''}`

  const handleClick = () => {
    updateBoard(index)
  }

  return (
    <div className={className} onClick={handleClick}>
      {children}
    </div>
  )
}

export const WINNER_COMBOS = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
]

function App() {

  const [board, setBoard] = useState([null, null, null, null, null, null, null, null, null])
  const [turn, setTurn] = useState(TURNS.X)
  const [winner, setWinner] = useState(null)

  const checkWinner = (boardToCheck) => {
    // review all the winner combos
    for (const combo of WINNER_COMBOS) {
      const [a, b, c] = combo
      if (
        boardToCheck[a] && // 0 -> x u o
        boardToCheck[a] === boardToCheck[b] &&
        boardToCheck[a] === boardToCheck[c]
      ) {
        return boardToCheck[a]
      }
    }
  }

  const updateBoard = (index) => {
    // don't update this position
    // if it already has something
    if (board[index] || winner) return

    // don't mutate or change the value of state
    // only with setTtate, you can create a copy and modify that
    const newBoard = [...board]
    newBoard[index] = turn
    setBoard(newBoard)

    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X
    setTurn(newTurn)

    // check if here is a winner
    const newWinner = checkWinner(newBoard)
    if (newWinner) {
      setWinner(newWinner)
      console.log(winner);
    }
  }

  return (
    <main className='board'>
      <h1>Tic Tac Toe</h1>

      <section className='game'>
        {
          board.map((square, index) => {
            return (
              <Square
                key={index}
                index={index}
                // Don't use the function ejecution directly updateBoard()
                // It will ejecute itself with the renderization of the application (9 times)
                updateBoard={updateBoard}
              >
                {square}
              </Square>
            )
          })
        }
      </section>

      <section className='turn'>
        <Square isSelected={turn === TURNS.X}>{TURNS.X}</Square>
        <Square isSelected={turn === TURNS.O}>{TURNS.O}</Square>
      </section>
    </main>
  )
}

export default App
