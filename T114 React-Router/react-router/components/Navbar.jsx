import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className='flex justify-start items-center list-none gap-8 p-12 bg-orange-900 text-white font-bold'>
         <Link to = "/"><li>Home</li></Link>      
         <Link to = "/about"><li>About</li></Link>     
         <Link to = "/contact"><li>Contact</li></Link>     
         <Link to = "/user/:myname"><li>User</li></Link>
    </nav>
  )
}

export default Navbar
