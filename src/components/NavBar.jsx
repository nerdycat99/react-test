import React from 'react';
import styled from 'styled-components';

import logo from '../assets/ag_logo.png';

import menu from '../assets/hamburger.png';

// export default function Navbar() {
//   return (
//     <nav className="navbar">
//       <img src={menu} className="navbar--logo-text navbar-left-icon" alt="menu" />
//       <p className="navbar--item-left">Products</p>
//       {/* <p className="navbar--logo-text">Products Artists</p> */}
//       <img src={logo} className="navbar--logo" alt="logo" /> 
//       <h1 className="navbar--logo-text">Australian Glass - Arts & Gifts</h1>
//       <h4 className="navbar--item">About</h4>
//       &nbsp; &nbsp;
//       <h4 className="navbar--item">Contact</h4>
//       &nbsp; &nbsp;
//       {/* <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/australianglass_sydney/" className="navbar--link"><img src={insta} className="navbar--insta" alt="logo" /></a> */}
//     </nav>
//   )
// }

const Nav = styled.nav`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 1030;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #fff;
  color: #333;
  padding: 1rem;
`;

const NavItem = styled.li`
  list-style: none;
  margin: 0 1rem;

  a {
    color: #333;
    text-decoration: none;
    transition: all 0.3s ease;

    &:hover {
      color: #bada55;
    }
  }
`;

const Logo = styled.h1`
  font-size: 1.5rem;
  margin: 0;
`;

const MobileNavToggle = styled.button`
  display: block;
  background-color: transparent;
  border: none;
  color: #333;
  font-size: 1.5rem;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    color: #bada55;
  }

  @media (min-width: 768px) {
    display: none;
  }
`;

const DesktopNav = styled.ul`
  display: flex;
  flex-direction: row;

  @media (max-width: 767px) {
    display: none;
  }
`;

const MobileNav = styled.ul`
  display: none;
  flex-direction: column;
  margin: 0;
  padding: 0;

  @media (max-width: 767px) {
    display: flex;
  }
`;

const NavBar = () => {
  const [isMobileNavOpen, setIsMobileNavOpen] = React.useState(false);

  return (
    <Nav>
      <Logo>
        <img src={logo} className="navbar--logo" alt="logo" /> 
      </Logo>
      <MobileNavToggle onClick={() => setIsMobileNavOpen(!isMobileNavOpen)}>
        {isMobileNavOpen ? '' : '='}
      </MobileNavToggle>
      <DesktopNav>
        <NavItem><a href="/">Home</a></NavItem>
        <NavItem><a href="/products">Products</a></NavItem>
        <NavItem><a href="/designers">Designers</a></NavItem>
        <NavItem><a href="/contact">Contact</a></NavItem>
      </DesktopNav>
      <MobileNav style={{ display: isMobileNavOpen ? 'flex' : 'none' }}>
        <NavItem><a href="/">Home</a></NavItem>
        <NavItem><a href="/products">Products</a></NavItem>
        <NavItem><a href="designers">Designers</a></NavItem>
        <NavItem><a href="/contact">Contact</a></NavItem>
      </MobileNav>
    </Nav>
  );
};

export default NavBar;