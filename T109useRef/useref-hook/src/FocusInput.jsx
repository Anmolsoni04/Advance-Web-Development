import React from 'react'
import { useRef } from 'react';
import './App.jsx'

const FocusInput = () => {
    const ref = useRef(null);
    function handleFocus() {
        ref.current.focus();
    }

  return (
    <div>
      <input ref={ref} />
      <button onClick={handleFocus}>Focus the input</button>
    </div>
  )
}

export default FocusInput













