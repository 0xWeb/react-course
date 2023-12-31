import { useEffect, useState } from "react"
import './App.css'

const FollowMouse = () => {
  const [enable, setEnable] = useState(false)
  const [position, setPosition] = useState({ x: 0, y: 0 })

  useEffect(() => {

    const handleMove = (event) => {
      const { clientX, clientY } = event
      console.log('handleMove:', { clientX, clientY });
      setPosition({ x: clientX, y: clientY })
    }

    if (enable) {
      window.addEventListener('pointermove', handleMove)
    }

    // clear the events when enable change getEventlisteners(window)
    // -> when the component is unmounted
    // -> when dependencies change, before executing
    // the effect again
    return () => {
      window.removeEventListener('pointermove', handleMove)
    }
  }, [enable])

  // change body className
  // [] -> only executed once when the component is mounted
  // [enabled] -> runs when enabled changes and when the component is mounted
  // undefined -> executed every time the component is rendered
  useEffect(() => {
    document.body.classList.toggle('no-cursor', enable)

    return () => {
      document.body.classList.remove('no-cursor')
    }
  }, [enable])

  //window.addEventListener() // <--- is executed ALLWAYS that the componet is rendered --> BAD PRACTICE


  return (
    <>
      <div style={{
        display: enable ? 'block' : 'none',
        position: 'absolute',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        border: '1px solid #fff',
        borderRadius: '50%',
        opacity: 0.8,
        pointerEvents: 'none',
        left: -25,
        top: -25,
        width: 50,
        height: 50,
        transform: `translate(${position.x}px, ${position.y}px)`
      }}
      />
      <h3>
        Mouse Follower
      </h3>
      <button onClick={() => { setEnable(!enable) }}>
        {enable ? 'Desactivate' : 'Activate follow mouse'}
      </button>
    </>
  )
}

function App() {

  return (
    <main>
      <FollowMouse />
    </main>
  )
}

export default App
