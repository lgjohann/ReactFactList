import React from 'react'
import logo from '../assets/react-icon-small.png'


export default function Navbar() {
    return (
        <nav className='navbar'>
            
            <img src={logo} className="logo" alt="react logo" />
            <h3 className='logo-text'>ReactFacts</h3>
            <h4 className='navbar-text'>React Course - Project 1</h4>
        </nav>
    )
}
