import { useState, useEffect } from 'react'

const CAT_PREFIX_URL = 'https://cataas.com'

// Custom Hook
export function useCatImage({ fact }) {
    const [imageUrl, setImageURL] = useState()

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

    return { imageUrl: `${CAT_PREFIX_URL}${imageUrl}` }
} // { imageURL: 'https://...' }