import { useState, useEffect } from "react";
import './App.css'
import Navbar from "./components/Navbar";

function App() {
  const [data, setData] = useState([])

  // step: 01 create a function that fetching the data from API then we will use this function in useEffect hook

  const dataFetching = async () => {
    let api = await fetch('https://jsonplaceholder.typicode.com/posts')
    let response = await api.json()
    setData(response);
  }

  // step: 02 use the function here that we create above 
  useEffect(() => {
    dataFetching()
  }, [])

  return (
    <>
      < Navbar />
      {/*  using map function to display the things on UI */}
      <div className="container">
        {data.map((item) => {
          return <div key={item.id} className="card" >
            <span>{item.userId}</span>
            <h1>{item.title}</h1>
            <p>{item.body}</p>
          </div>
        })}
      </div>

    </>
  )
}
export default App;