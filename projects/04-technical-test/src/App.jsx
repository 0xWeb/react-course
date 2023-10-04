import { useState, useEffect } from "react"
import './App.css'
import { useCatImage } from "./hooks/useCatImages"
import { useCatFact } from "./hooks/useCatFact"
import { Image } from "./components/Image.jsx";


export function App() {

    const { fact, refreshFact } = useCatFact()
    const { imageUrl } = useCatImage({ fact })

    const handleClick = async () => {
        refreshFact()
    }

    return (
        <main>
            <h1>App de gatos</h1>

            <button onClick={handleClick}>Get New Fact</button>

            {fact && <p>{fact}</p>}
            {imageUrl && <img src={imageUrl} alt={'Image extracted using the first three words'} />}

            <Image />
        </main>
    )
};
