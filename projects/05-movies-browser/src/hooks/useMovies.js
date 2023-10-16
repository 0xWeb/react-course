import { useState, useRef, useMemo, useCallback } from 'react';
import { searchMovies } from '../services/movies';

export function useMovies({ search, sort }) {
    const [movies, setMovies] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    const previusSearch = useRef(search)

    // useMemo to values & useCallback to functions.
    // useCallback works with useMemo to simplify 
    // the function inside useMemo
    const getMovies = useCallback(
        async ({ search }) => {
            if (search === previusSearch.current) return

            try {
                setLoading(true)
                setError(null)
                previusSearch.current = search
                const newMovies = await searchMovies({ search })
                setMovies(newMovies)
            } catch (error) {
                setError(error.message)
            } finally {
                setLoading(false)
            }
        }, [])

    // Only ejecute the function when the one 
    // of the two parameters is changed
    const sortedMovies = useMemo(() => {
        return sort
            ? [...movies].sort((a, b) => a.title.localeCompare(b.title))
            : movies
    }, [sort, movies])

    return { movies: sortedMovies, loading, error, getMovies }
}