import React from 'react'
import { useState, useEffect } from "react";

import './Navbar.css'

const Navbar = () => {
  const [show, setShow] = useState(false)

  const transitionNavbar = () => {
    if (window.scrollY> 100) {
      setShow(true)
    } else {
      setShow(false)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', transitionNavbar)
  
    return () => {
      window.removeEventListener('scroll', transitionNavbar)
    }
  }, [])
  

  return (
    <div className={`nav ${show && "nav-black"}`}>
        <div  className='nav-content'>

            <img className='nav-logo' src='/netflix logo.png'alt=''/>
            <img className='nav-avatar' src='/avatar.png' alt=''/>
        </div>

    </div>
  )
}

export default Navbar