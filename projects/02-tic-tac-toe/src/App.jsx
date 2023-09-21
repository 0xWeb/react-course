import { useState } from 'react'
import './App.css'
import confetti from "canvas-confetti";

import { Square } from './components/Square';
import { TURNS } from './constants';
import { checkWinner, checkEndGame } from './utils/board';
import WinnerModal from './components/WinnerModal';
import Board from './components/Board';

function App() {

  const [board, setBoard] = useState([null, null, null, null, null, null, null, null, null])
  const [turn, setTurn] = useState(TURNS.X)
  const [winner, setWinner] = useState(null)

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
      confetti()
      setWinner(newWinner)
    } else if (checkEndGame(newBoard)) {
      setWinner(false) // tie
    }
  }

  const resetGame = () => {
    // Set all the states to the original
    setBoard([null, null, null, null, null, null, null, null, null])
    setTurn(TURNS.X)
    setWinner(null)
  }

  return (
    <main className='board'>
      <h1>Tic Tac Toe</h1>
      <button onClick={resetGame}>Re-Start the Game</button>

      <Board board={board} updateBoard={updateBoard} />

      <section className='turn'>
        <Square isSelected={turn === TURNS.X}>{TURNS.X}</Square>
        <Square isSelected={turn === TURNS.O}>{TURNS.O}</Square>
      </section>


      <WinnerModal resetGame={resetGame} winner={winner} />

    </main>
  )
}

export default App
