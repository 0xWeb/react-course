import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const NAVIGATION_EVENT = 'pushstate'


function navigate(href) {
  window.history.pushState({}, '', href)

  // Create a personalized event
  const navigationEvent = new Event(NAVIGATION_EVENT)
  window.dispatchEvent(navigationEvent)
}


function HomePage() {
  return (
    <>
      <h1>
        Home
      </h1>
      <p>
        This is a example page to create a React Router
      </p>
      <button onClick={() => navigate('/about')} >About</button>
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
      <button onClick={() => navigate('/')} >Home</button>
    </>
  )
}

function App() {

  const [currentPath, setCurrentPath] = useState(window.location.pathname)

  useEffect(() => {
    const onLocationChange = () => {
      setCurrentPath(window.location.pathname)
    }

    window.addEventListener(NAVIGATION_EVENT, onLocationChange)

    return () => {
      window.removeEventListener(NAVIGATION_EVENT, onLocationChange)
    }
  }, [])


  return (
    <main>
      {currentPath === '/' && <HomePage />}
      {currentPath === '/about' && <AboutPage />}
    </main>
  )
}

export default App
