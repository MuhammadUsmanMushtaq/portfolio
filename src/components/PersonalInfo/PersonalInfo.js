import React from "react";
import { PersonalInfoWrapper, Info, Image } from "./PersonalInfoStyled";

function PersonalInfo() {
  return (
    <PersonalInfoWrapper>
      <Info>
        I'm Muhammad Usman, front end developer and student at KYH Stockholm. I
        love to design and build inclusive and usable digital products.
      </Info>
      <Image>
        <img src="/images/profile_img.png" alt="Image" />
      </Image>
    </PersonalInfoWrapper>
  );
}

export default PersonalInfo;
