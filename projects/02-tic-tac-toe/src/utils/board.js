import { WINNER_COMBOS } from "../constants"

export const checkWinner = (boardToCheck) => {
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
    return null
}

export const checkEndGame = (newBoard) => {
    // check if there ir a tie
    // if there are no more empty spaces 
    // on the board
    return newBoard.every((square) => square !== null)

}

