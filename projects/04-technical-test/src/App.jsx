import { useState, useEffect } from "react"

const CAT_ENPOINT_RANDOM_CAT = `https://catfact.ninja/fact`
// const CAT_ENDPOINT_IMAGE_URL = `https://cataas.com/cat/says/${firstWord}?size=50&color=red&json=true`

export function App() {

    const [fact, setFact] = useState(String)

    useEffect(() => {

        fetch(CAT_ENPOINT_RANDOM_CAT)
            .then(res => res.json())
            .then(data => {
                const { fact } = data
                setFact(fact)

                const firstWord = fact.split(' ')[0]
                // const firstThreeWords = fact.split(' ', 3).join(' ')
                // const firstThreeWords = fact.split(' ').slice(0, 3).join(' ')
            })

    }, [])


    return (
        <main>
            <h1>App de gatos</h1>
            {fact && <p>{fact}</p>}
        </main>
    )
};