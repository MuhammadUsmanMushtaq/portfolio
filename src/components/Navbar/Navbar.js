import React from "react";
import { Menu, Link } from "./NavbarStyled";

function Navbar() {
  return (
    <Menu>
      <Link href="Home">Home</Link>
      <Link href="Work">Work</Link>
      <Link href="Contact">Contact</Link>
    </Menu>
  );
}
export default Navbar;
