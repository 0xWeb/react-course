import { Square } from "./Square"


function Board({ board, updateBoard }) {
    return (
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
    )
}

export default Board