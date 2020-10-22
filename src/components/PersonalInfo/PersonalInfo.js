import React from "react";
import { PersonalInfoWrapper, Title, Image, LinkContact, MyWork } from "./PersonalInfoStyled";
import { Link } from 'react-scroll';

function PersonalInfo() {
  return (
    <PersonalInfoWrapper id="Home">
      <Image>
        <img src="/images/profile_rnd.png" alt="Profile" />
      </Image>
      <Title>Hi, I am Muhammad Usman, a frontend developer with a passion for UX and clean code</Title>
      <LinkContact
        href="https://www.linkedin.com/in/muhammad-usman-78491149/"
        target="_blank"
      >
        LinkedIn
      </LinkContact>
      <LinkContact href="https://github.com/MuhammadUsmanMushtaq" target="_blank">
        GitHub
      </LinkContact>
      <LinkContact href="mailto: usman820901@gmail.com" target="_blank">
        Email
      </LinkContact>
      <MyWork>
        <Link activeClass="active" to="Work" spy={true} smooth={true} duration={1000}>
          My work
        </Link>
      </MyWork>
    </PersonalInfoWrapper>
  );
}

export default PersonalInfo;
