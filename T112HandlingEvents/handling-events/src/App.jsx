import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [input, setInput] = useState({name:"", mail: ""});

  const handleClick = () => {
    alert('I am clicked')
  }

  const handleMouse = () => {
    alert('I am hovered successfully')
  }

  const handleEditInput = (i) => {
    setInput({...input, [i.target.name] : i.target.value})
  }


    
  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={handleClick}>
          click me
        </button>
        <div className='area' onMouseEnter={handleMouse}>
          Hover mouse on me.
        </div>
        <input type='text' name = 'name' value={input.name}  onChange={handleEditInput} />
        <input type='text' name = 'mail' value={input.mail}  onChange={handleEditInput} />
      </div>
    </>
  )
}

export default App
