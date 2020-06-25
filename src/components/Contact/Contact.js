import React from "react";
import { ContactWrapper, Link } from "./ContactStyled";

function Contact() {
  return (
    <ContactWrapper>
      <Link href="https://linkedin.com">LinkedIn</Link>
      <Link href="https://github.com/MuhammadUsmanMushtaq" target="_blank">
        GitHub
      </Link>
      <Link href="mailto: usman820901@gmail.com" target="_blank">
        Email
      </Link>
    </ContactWrapper>
  );
}

export default Contact;
