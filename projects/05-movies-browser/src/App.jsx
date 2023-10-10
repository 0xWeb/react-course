
import './App.css'

function App() {

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
        Here will load the movies
      </main>
    </div>
  )
}

export default App
