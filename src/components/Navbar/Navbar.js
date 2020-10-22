import React from "react";
import { Menu, Logo } from "./NavbarStyled";


function Navbar() {
  return (
    <Menu>
      <Logo>
      <img src="images/logo.png" alt="KYH landing page" />
      </Logo>
      {/* <Links>
        <Link activeClass="active" to="Home" spy={true} smooth={true} duration={1000}>
          Home
        </Link>
        <Link activeClass="active" to="Skills" spy={true} smooth={true} duration={1000}>
          Skills
        </Link>
        <Link activeClass="active" to="Work" spy={true} smooth={true} duration={1000}>
          Work
        </Link>
        </Links> */}
    </Menu>
  );
}
export default Navbar;
