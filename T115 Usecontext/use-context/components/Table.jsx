import React, {useContext } from 'react'
import { counterContext } from '../context/context'

const Table = () => {
    const counter = useContext(counterContext)
  return (
    <div>
      I am {counter}
    </div>
  )
}

export default Table
