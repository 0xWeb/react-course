
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
    if (search.length < 2) {
      setTimeout(() => { setError('Please, writte at least 3 characters') }, 1000)
      return
    }

    setError(null)

  }, [search])


  return { search, updateSearch, error }
}


function App() {
  const [sort, setSort] = useState(false)
  const { search, updateSearch, error } = useSearch()
  const { movies, getMovies, loading } = useMovies({ search, sort })

  // With Vanilla JS
  const handleSubmit = (event) => {
    event.preventDefault()
    getMovies({ search })
  }
  const handleChange = (event) => {
    const newQuery = event.target.value
    if (newQuery.startsWith(' ')) return
    updateSearch(event.target.value)
  }
  const handleSort = () => {
    setSort(!sort)
  }

  return (
    <div className='page'>
      <header>
        <h1>
          Movie Browser
        </h1>
        <form className='form' onSubmit={handleSubmit}>
          <input type="checkbox" onChange={handleSort} checked={sort} />
          <input onChange={handleChange} value={search} name='search' type="text" placeholder='Harry Potter, Matrix...' />
          <button type='submit'>Search</button>
        </form>
        {error && <p style={{ color: 'red' }} >{error}</p>}
      </header>

      <main>
        {loading ? <p>Loading movies....</p> : <Movies movies={movies} />}
      </main>
    </div>
  )
}

export default App
