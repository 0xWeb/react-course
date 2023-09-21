import { Square } from "./Square"

function WinnerModal({ winner, resetGame }) {

    if (winner === null) return null

    const winnertext = winner === false ? 'Tie' : 'Won'


    return (
        <div>
            <section className='winner'>
                <div className='text'>
                    <h2>
                        {winnertext}
                    </h2>
                    <header className='win'>
                        {winner && <Square>{winner}</Square>}
                    </header>

                    <footer>
                        <button onClick={resetGame}>
                            Start again
                        </button>
                    </footer>
                </div>
            </section>
        </div>

    )
}

export default WinnerModal