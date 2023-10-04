// Ctrl + . => Chnage to async function

const CAT_ENPOINT_RANDOM_CAT = `https://catfact.ninja/fact`

export const getRandomFact = async () => {
    const res = await fetch(CAT_ENPOINT_RANDOM_CAT)
    // TODO: Handle error if !res.ok
    // if (!res.ok) throw new Error('Error fetching fact')
    const data = await res.json()
    const { fact } = data
    return fact
}