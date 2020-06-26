import React from "react";
import { PersonalInfoWrapper, Title, Image, Link } from "./PersonalInfoStyled";

function PersonalInfo() {
  return (
    <PersonalInfoWrapper>
      <Image>
        <img src="/images/profile_rnd.png" alt="Profile" />
      </Image>
      <Title>MUHAMMAD USMAN</Title>
      <Link href="https://linkedin.com" target="_blank">
        LinkedIn
      </Link>
      <Link href="https://github.com/MuhammadUsmanMushtaq" target="_blank">
        GitHub
      </Link>
      <Link href="mailto: usman820901@gmail.com" target="_blank">
        Email
      </Link>
    </PersonalInfoWrapper>
  );
}

export default PersonalInfo;
