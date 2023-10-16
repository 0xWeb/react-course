import { useState } from 'react';
import withResults from '../mocks/apiResults.json'
import noApiResults from '../mocks/noApiResults.json'

export function useMovies({ search }) {
    const [responseMovies, setResponseMovies] = useState([])

    const movies = responseMovies.Search;

    const mappedMovies = movies?.map(movie => ({
        id: movie.imdbID,
        title: movie.Title,
        year: movie.Year,
        poster: movie.Poster
    }))

    const getMovies = async () => {
        if (search) {
            // setResponseMovies(withResults)
            const res = await fetch(`https://www.omdbapi.com/?apikey=4287ad07&s=${search}`)
            const data = await res.json()
            setResponseMovies(data)
        } else {
            setResponseMovies(noApiResults)
        }
    }

    return { movies: mappedMovies, getMovies }
}