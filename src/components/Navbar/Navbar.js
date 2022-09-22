import React from 'react';
// import { Spiral as Hamburger } from 'hamburger-react';
import { Menu, Logo } from './NavbarStyled';
import { Link } from 'react-scroll';

function Navbar() {
  return (
    <Menu>
      <Logo>
        <img src='images/logo.png' alt='logo' />
      </Logo>

      {/* <Links>
        <Link
          activeClass='active'
          to='Home'
          spy={true}
          smooth={true}
          duration={1000}
        >
          <MenuItems>Home</MenuItems>
        </Link>

        <Link
          activeClass='active'
          to='Skills'
          spy={true}
          smooth={true}
          duration={1000}
        >
          <MenuItems>Skills</MenuItems>
        </Link>
        <Link
          activeClass='active'
          to='Work'
          spy={true}
          smooth={true}
          duration={1000}
        >
          <MenuItems>Work</MenuItems>
        </Link>
      </Links> */}
      {/* <Hamburger direction='right' color='#FFF' /> */}
    </Menu>
  );
}
export default Navbar;
