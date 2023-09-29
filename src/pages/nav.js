import React from 'react';
import styled from 'styled-components';

// Styled Components
const NavbarWrapper = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background-color: #0a192f;
  color: #a8b2d1;
`;

const Logo = styled.div`
  font-size: 24px;
  font-weight: bold;
`;

const NavLinks = styled.ul`
  list-style: none;
  display: flex;
 justify-content:space-around;
 align-items:center;
  gap: 20px;
  font-size:smaller;
`;

const Span = styled.span`
color:#64ffda;
`
const NavLink = styled.li`
  cursor: pointer;
`;

const Button =  styled.button`
border:1px solid #64ffda;
color:#64ffda;
width:100px;
height:40px;
border-radius:4px;
`

// Navbar Component
const Navbar = () => {
  return (
    <NavbarWrapper>
      <Logo>Your Logo</Logo>
      <NavLinks>
        <NavLink> <Span>01.</Span> About</NavLink>
        <NavLink><Span>02.</Span> Experience </NavLink>
        <NavLink><Span>03.</Span> Work</NavLink>
        <NavLink><Span>04.</Span> contact</NavLink>
        <Button>Resume</Button>
      </NavLinks>
    </NavbarWrapper>
  );
};

export default Navbar;
