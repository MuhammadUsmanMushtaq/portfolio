import React from "react";
import {
  WorkWrapper,
  Project,
  Project2,
  Project3,
  Project4,
  Project5,
  Button,
  DemoButton,
} from "./WorkStyled";

function Work() {
  return (
    <WorkWrapper>
      <Project>
        <Button>Link to Project</Button>
        <DemoButton>Demo</DemoButton>
      </Project>
      <Project2>
        <Button>Link to Project</Button>
      </Project2>
      <Project3>
        <Button>Link to Project</Button>
      </Project3>
      <Project4>
        <Button>Link to Project</Button>
      </Project4>
      <Project5>
        <Button>Link to Project</Button>
      </Project5>
    </WorkWrapper>
  );
}

export default Work;
