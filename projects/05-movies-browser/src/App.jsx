
import './App.css'
import { useMovies } from "./hooks/useMovies";
import { Movies } from './components/Movies';


function App() {

  const { movies } = useMovies()

  return (
    <div className='page'>
      <header>
        <h1>
          Movie Browser
        </h1>
        <form className='form'>
          <input type="text" placeholder='Harry Potter, Matrix...' />
          <button type='submit'>Search</button>
        </form>
      </header>

      <main>
        <Movies movies={movies} />
      </main>
    </div>
  )
}

export default App
