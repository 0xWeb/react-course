import { useState, useEffect } from "react"

const CAT_ENPOINT_RANDOM_CAT = `https://catfact.ninja/fact`
// const CAT_ENDPOINT_IMAGE_URL = `https://cataas.com/cat/says/${firstWord}?size=50&color=red&json=true`
const CAT_PREFIX_URL = 'https://cataas.com'

export function App() {

    const [fact, setFact] = useState(String)
    const [imageURL, setImageURL] = useState()

    useEffect(() => {

        fetch(CAT_ENPOINT_RANDOM_CAT)
            .then(res => res.json())
            .then(data => {
                const { fact } = data
                setFact(fact)

                const firstWord = fact.split(' ')[0]
                const threeFirstWords = fact.split(' ', 3).join(' ')
                // const threeFirstWords = fact.split(' ').slice(0, 3).join(' ')

                fetch(`https://cataas.com/cat/says/${threeFirstWords}?size=50&color=red&json=true`)
                    .then(res => res.json())
                    .then(response => {
                        const { url } = response
                        setImageURL(url)
                    })
            })

    }, [])


    return (
        <main>
            <h1>App de gatos</h1>
            {fact && <p>{fact}</p>}
            {imageURL && <img src={`${CAT_PREFIX_URL}${imageURL}`} alt={'Image extracted using the first three words'} />}
        </main>
    )
};
