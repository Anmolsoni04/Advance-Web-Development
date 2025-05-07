import React, { useEffect } from 'react'

const Navbar = ({color}) => {

    // case: 01 Runs on every render
    useEffect(() => {
        alert("Hello I will run on every render")
    }, [])

    // case:02 Runs only on 1st render
    useEffect(() => {
      alert("First render happens so i am running")
    }, [])

    // case:03 Runs only when any value will change
    useEffect(() => {
        alert("My color has change so i am running")
    }, [color])
    
    // Case: 04 Runs only when if the Component got remove or unmounted
    useEffect(() => {

        return()=>{
            alert("Component unmounted!")
        }

    }, [])  
    
  return (
    <div>
      Hey I am navbar with logout button and notification icon of color {color}.
    </div>
  )
}

export default Navbar
