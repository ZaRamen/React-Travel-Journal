import React from 'react'
import './navbar.css'
import earth from '/src/assets/earth.png'

const Navbar = (props) => {
  return (
    <div className='navbar'>
        <div className='logo'>
            <img src={earth} alt="earth" />
        </div>
        <div className='title'>{props.title}</div>
    </div>
  )
}

export default Navbar