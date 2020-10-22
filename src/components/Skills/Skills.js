import React from "react";
import {
  SkillsWrapper,
  SkillsList,
  Skill
} from "./SkillsStyled";

function Skills() {
  return (
    <SkillsWrapper id="Skills" >
      <h1>Skills</h1>
      <SkillsList>
        <Skill>
          Frontend
          <span>JavaScript,</span>
          <span>Html,</span>
      </Skill>
        <Skill>
          UX/UI
      </Skill>
      </SkillsList>
    </SkillsWrapper>
  );
}

export default Skills;
