import React from 'react'
import logo from '../images/ag_logo.png'
import insta from '../images/insta.png'


class Navbar extends React.Component {
    render() {
        return (
            <nav className="navbar">
                <img src={logo} className="navbar--logo" alt="logo" />
                <p className="navbar--logo-text"></p>
                {/* <h1 className="navbar--logo-text">Australian Glass - Arts & Gifts</h1> */}
                <h4 className="navbar--item">About</h4>
                &nbsp; &nbsp;
                <h4 className="navbar--item">Contact</h4>
                &nbsp; &nbsp;
                <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/australianglass_sydney/" className="navbar--link"><img src={insta} className="navbar--insta" alt="logo" /></a>
                {/* <img src={insta} className="navbar--insta" alt="logo" /> */}
            </nav>
        )
    }
}

export { Navbar }
