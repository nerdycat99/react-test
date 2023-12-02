import React from 'react';
import styled from 'styled-components';

import australianGlassArtsAndGiftsLogo from '../assets/australian_glass_arts_and_gifts_logo.png';

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

const homeNavigationElementStructuredData = {
  "@context": "https://schema.org",
  "@type": "SiteNavigationElement",
  name: "Home",
  url: "/",
  description: "Home page for unique glass art works by leading Australian and New Zealand glass artists.",
};

const contactNavigationElementStructuredData = {
  "@context": "https://schema.org",
  "@type": "SiteNavigationElement",
  name: "Contact",
  url: "/contact",
  description: "Contact Australian Glass Art and Gifts to find out more about unique glass art works by leading Australian and New Zealand glass artists.",
};

const designersNavigationElementStructuredData = {
  "@context": "https://schema.org",
  "@type": "SiteNavigationElement",
  name: "Designers",
  url: "/designers",
  description: "Find out more about the leading Australian and New Zealand glass artists whose work is sold by Australian Glass Art and Gifts.",
};

const productsNavigationElementStructuredData = {
  "@context": "https://schema.org",
  "@type": "SiteNavigationElement",
  name: "Products",
  url: "/products",
  description: "See the unique Australian and New Zealand glass art works and products sold by Australian Glass Art and Gifts.",
};

const NavBar = () => {
  const [isMobileNavOpen, setIsMobileNavOpen] = React.useState(false);

  return (
    <Nav>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(homeNavigationElementStructuredData),
          __html: JSON.stringify(contactNavigationElementStructuredData),
          __html: JSON.stringify(productsNavigationElementStructuredData),
          __html: JSON.stringify(designersNavigationElementStructuredData),
        }}
      />
      <Logo>
        <img src={australianGlassArtsAndGiftsLogo} className="navbar--logo" alt="Australian Glass Art and Gifts Logo" /> 
      </Logo>
      <MobileNavToggle onClick={() => setIsMobileNavOpen(!isMobileNavOpen)}>
        {isMobileNavOpen ? '' : '='}
      </MobileNavToggle>
      <DesktopNav>
        <NavItem><a href={homeNavigationElementStructuredData.url}>{homeNavigationElementStructuredData.name}</a></NavItem>
        <NavItem><a href={productsNavigationElementStructuredData.url}>{productsNavigationElementStructuredData.name}</a></NavItem>
        <NavItem><a href={designersNavigationElementStructuredData.url}>{designersNavigationElementStructuredData.name}</a></NavItem>
        <NavItem><a href={contactNavigationElementStructuredData.url}>{contactNavigationElementStructuredData.name}</a></NavItem>
      </DesktopNav>
      <MobileNav style={{ display: isMobileNavOpen ? 'flex' : 'none' }}>
        <NavItem><a href={homeNavigationElementStructuredData.url}>{homeNavigationElementStructuredData.name}</a></NavItem>
        <NavItem><a href={productsNavigationElementStructuredData.url}>{productsNavigationElementStructuredData.name}</a></NavItem>
        <NavItem><a href={designersNavigationElementStructuredData.url}>{designersNavigationElementStructuredData.name}</a></NavItem>
        <NavItem><a href={contactNavigationElementStructuredData.url}>{contactNavigationElementStructuredData.name}</a></NavItem>
      </MobileNav>
    </Nav>
  );
};

export default NavBar;