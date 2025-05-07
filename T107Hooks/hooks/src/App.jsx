import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(20)

  return (
    <>
      <p>The value of count is {count}</p>
      <button onClick={() => setCount(count + 10)}>Update Count</button>
    </>
  )
}

export default App
