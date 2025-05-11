import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [showButton, setShowButton] = useState(false);
  const [artist, setArtist] = useState([ 
    {
      title:"Anmol soni",
      Album: "Teri Meri Dosti",
      description: "This is a friendship song"
    },
    {
      title:"Geet yadav",
      Album: "Tere Har Gam Se",
      description: "This is a Soulful song"
    },
    {
      title:"Usama Khan",
      Album: "Baat Purani",
      description: "This is a Betrayal song"
    }
  ])

  // create new component in App.jsx 

  const Music = ({musician}) => {
    return (
      <>
      <ul>
        <li><div>{musician.title}</div></li>
        <div>{musician.Album}</div>
        <div>{musician.description}</div> 
      </ul>
      </>
    )
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
      {showButton ? <button>I am true </button> : <button>I am false</button>}
      {/* {showButton && <button>I am temporoary</button> } */}
      <div className="card">
        <button onClick={() => setShowButton(!showButton)}>
          count is {count}
        </button>
        {/* using map function to display Music component */}
        {artist.map(musician => {
          return ( <Music key={musician.title} musician = {musician}/>)
        })}
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
