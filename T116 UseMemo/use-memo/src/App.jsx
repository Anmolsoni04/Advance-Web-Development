import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useMemo } from 'react'

const nums = new Array(20_000_000).fill(0).map((_,i) => {
  return {
    index: i,
    isMagical: i === 19_000_000
  }
})
function App() {
  const [count, setCount] = useState(0)
  const [number, setNumber] = useState(nums)

  // const magical_number = number.find(item=>item.isMagical===true) // High/expensive computation line .

  // To solve this issue we have to use 'useMemo' hook.

  const magical_number = useMemo(() => number.find(item => item.isMagical), [number])  

  return (
    <>
      <div>
        <span>
          Magical number is {magical_number.index}
        </span>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => {setCount((count) => count + 1);
          if(count == 5) {
            setNumber(new Array(20_000_000).fill(0).map((_,i) => {
              return {
                index: i,
                isMagical: i === 15_000_000
              }
          }))
        }
      }}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
