import {useState} from "react";
import './App.css';

function App() {
  const [value, setValue] = useState(0);
  const number = () => {setValue(value + 1)}
  
  return (
    <div className="App">
      <div>{value}</div>
      <button onClick={number}>Click Here change the number</button>
    </div>
  );
}

export default App;
