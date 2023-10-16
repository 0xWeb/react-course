
import './App.css'
import { useEffect, useRef, useState } from 'react';
import { useMovies } from "./hooks/useMovies";
import { Movies } from './components/Movies';

//https://www.omdbapi.com/?apikey=4287ad07&s

function useSearch() {
  const [search, updateSearch] = useState('')
  const [error, setError] = useState(null)
  const isFirstInput = useRef(true)

  useEffect(() => {

    if (isFirstInput.current) {
      isFirstInput.current = search === ''
      return
    }
    if (search === '') {
      setError('Please, writte the name of the movie')
      return
    }
    if (search.length < 3) {
      setTimeout(() => { setError('Please, writte at least 3 characters') }, 1000)
      return
    }

    setError(null)

  }, [search])


  return { search, updateSearch, error }
}


function App() {

  const { search, updateSearch, error } = useSearch()
  const { movies, getMovies } = useMovies({ search })

  // With Vanilla JS
  const handleSubmitVanilla = (event) => {
    event.preventDefault()
    getMovies()
  }

  const handleChange = (event) => {
    const newQuery = event.target.value
    if (newQuery.startsWith(' ')) return
    updateSearch(event.target.value)

  }

  return (
    <div className='page'>
      <header>
        <h1>
          Movie Browser
        </h1>
        <form className='form' onSubmit={handleSubmitVanilla}>
          <input onChange={handleChange} value={search} name='search' type="text" placeholder='Harry Potter, Matrix...' />
          <button type='submit'>Search</button>
        </form>
        {error && <p style={{ color: 'red' }} >{error}</p>}
      </header>

      <main>
        <Movies movies={movies} />
      </main>
    </div>
  )
}

export default App
