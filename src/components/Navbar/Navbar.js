import React from 'react'
import './Navbar.css'

const Navbar = () => {
  return (
    <div className='nav'>
        <div  className='nav-content'>

            <img className='nav-logo' src='/netflix logo.png' width={115} height={40} alt=''/>
            <img className='nav-avatar' src='/avatar.png' width={40} height={40} alt=''/>
        </div>

        <h1>this is the navbar</h1>
    </div>
  )
}

export default Navbar