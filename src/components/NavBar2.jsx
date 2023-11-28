import React, { useState } from 'react';
import logo from '../assets/kangaroo.png';
import './NavBar2.css'

export default function NavBar2() {

    const [showNav, setShowNav] = useState(false)

    const toggleNavItems = () => {
        setShowNav(!showNav)
    }

  return ( 
    <nav className="navbar2">
      <div className="container">
        <div className="logo">
            <img src={logo} className="navbar--logo" alt="logo" />
        </div>
        <div className="nav-elements">
            <ul>
                <li>
                    <a href="/">Home</a>
                </li>
                <li>
                    <a href="/blog">Blog</a>
                </li>
                <li>
                    <a href="/projects">Projects</a>
                </li>
                <li>
                    <a href="/about">About</a>
                </li>
                <li>
                    <a href="/contact">Contact</a>
                </li>
                </ul>
            </div>
      </div>
    </nav>
  )
}
