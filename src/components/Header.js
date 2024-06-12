import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import ThemeToggle from './ThemeToggle';

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: linear-gradient(35deg, rgb(6, 0, 151) 0%, rgb(130, 4, 255) 73%, rgb(193, 15, 255) 100%);
  color: #fff;
  padding: 1em;
`;

const Logo = styled.div`
  font-size: 1.5em;
  font-weight: bold;
`;

const NavLinks = styled.div`
  display: flex;
  align-items: center;
`;

const NavLink = styled(Link)`
  color: #fff;
  margin: 0 1em;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

function Header() {
  return (
    <>
    <Nav>
      <Logo><img src='https://cdn.shortpixel.ai/spai/ret_img/wpastra.com/wp-content/uploads/2019/05/astra-logo.svg' alt='Logo'/></Logo>
      <NavLinks>
        <NavLink to="/"> Home</NavLink>
        <NavLink to="/contact">Contact Us</NavLink>
        <NavLink to="/task">Task Page</NavLink>
        <ThemeToggle/>
      </NavLinks>
    </Nav>
    </>
  );
}

export default Header;
