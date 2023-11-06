import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function HomePage() {
  return (
    <>
      <h1>
        Home
      </h1>
      <p>
        This is a example page to create a React Router
      </p>
      <a href="/about">About</a>
    </>
  )
}

function AboutPage() {
  return (
    <>
      <h1>
        About
      </h1>
      <img src="https://avatars.githubusercontent.com/u/99775980?v=4" width={'300px'} alt="" />
      <p>
        This is a example page to create a React Router in about page
      </p>
      <a href="/">Home</a>
    </>
  )
}

function App() {

  const [currentPath, setCurrentPath] = useState(window.location.pathname)

  return (
    <main>
      {currentPath === '/' && <HomePage />}
      {currentPath === '/about' && <AboutPage />}
    </main>
  )
}

export default App
