import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Quickstart from './Quickstart';
import News from './News';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="container">
          <div className="quickstart">
            <Quickstart />
          </div>
          <div className="news">
            <News />
          </div>
      </div>
    </>
  )
}

export default App
