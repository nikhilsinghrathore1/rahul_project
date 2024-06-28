import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Landing from './components/Landing'
import Second from './components/Second'
import Third from './components/Third'
import Fourth from './components/Fourth'
import Fifth from './components/Fifth'
import Sixth from './components/Sixth'
import Seventh from './components/Seventh'
import Eighth from './components/Eight'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
              <Landing/>
              <Second/>
              <Third/>
              <Fourth/>
              <Fifth/>
              <Sixth/>
              <Seventh/>
              <Eighth/>
              <Footer/>
    </>
  )
}

export default App
