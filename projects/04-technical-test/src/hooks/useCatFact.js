import { useState, useEffect } from "react";
import { getRandomFact } from "../services/facts"

export const useCatFact = () => {
    const [fact, setFact] = useState(String)

    const refreshFact = () => {
        getRandomFact().then(firstFact => setFact(firstFact))
    }

    // UseEffect Divisors // Good practice

    // To get the fact about the cats
    useEffect(refreshFact, [])

    return { fact, refreshFact }
}