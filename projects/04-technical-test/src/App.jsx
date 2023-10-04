import { useState, useEffect } from "react"
import './App.css'
import { getRandomFact } from "./services/facts"

// const CAT_ENDPOINT_IMAGE_URL = `https://cataas.com/cat/says/${firstWord}?size=50&color=red&json=true`
const CAT_PREFIX_URL = 'https://cataas.com'

export function App() {

    const [fact, setFact] = useState(String)
    const [imageURL, setImageURL] = useState()


    // UseEffect Divisors // Good practice

    // To get the fact about the cats
    useEffect(() => {
        getRandomFact().then(firstFact => setFact(firstFact))

    }, [])

    // To get the image using the three first words of the fact
    useEffect(() => {
        if (!fact) return
        const firstWord = fact.split(' ')[0]
        const threeFirstWords = fact.split(' ', 3).join(' ')
        // const threeFirstWords = fact.split(' ').slice(0, 3).join(' ')

        fetch(`https://cataas.com/cat/says/${threeFirstWords}?size=50&color=red&json=true`)
            .then(res => res.json())
            .then(response => {
                const { url } = response
                setImageURL(url)
            })
    }, [fact])

    const handleClick = async () => {
        const newFact = await getRandomFact()
        setFact(newFact)
    }

    return (
        <main>
            <h1>App de gatos</h1>

            <button onClick={handleClick}>Get New Fact</button>

            {fact && <p>{fact}</p>}
            {imageURL && <img src={`${CAT_PREFIX_URL}${imageURL}`} alt={'Image extracted using the first three words'} />}
        </main>
    )
};
