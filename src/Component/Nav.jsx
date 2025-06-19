import React from 'react'
import {Link} from 'react-router-dom'
import logo from '../assets/logo.png'

const Nav = () => {
  return (
    <nav>
        <div className='logo'>
            <img src={logo} alt="logo" />
            <span>GFG</span>
        </div>
        <ul>
            <li><Link to ="/">Home</Link></li>
            <li><Link to ="/About">About Us</Link></li>
            <li><Link to ="/Gallery">Gallery</Link></li>
            <li><Link to="Contact">Contact us</Link></li>
        </ul>
    </nav>
  )
}

export default Nav