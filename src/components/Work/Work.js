import React from "react";
import {
  WorkWrapper,
  Project,
  Project2,
  Project3,
  Project4,
  Project5,
  Project6,
  Description,
  ProjectImg,
  Button,
  DemoButton,
} from "./WorkStyled";

function Work() {
  return (
    <WorkWrapper>
      <Project>
        <Description>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin non
          ante id dui pretium tempus ac et elit. Morbi scelerisque lobortis
          sagittis. Curabitur lobortis placerat est, ut placerat metus
          scelerisque sed. Mauris sodales pellentesque ultricies. Praesent eu
          commodo augue. Mauris faucibus turpis libero, quis facilisis neque
          gravida in.
        </Description>
        <ProjectImg>
          <img src="images/kyh_page.png" alt="Image" />
        </ProjectImg>
        <Button>Link to Project</Button>
        <DemoButton>Demo</DemoButton>
      </Project>
      <Project2>
        <Description>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin non
          ante id dui pretium tempus ac et elit. Morbi scelerisque lobortis
          sagittis. Curabitur lobortis placerat est, ut placerat metus
          scelerisque sed.
        </Description>
        <ProjectImg>
          <img src="images/tp_easyweb.png" alt="Image" />
        </ProjectImg>
        <Button>Link to Project</Button>
      </Project2>
      <Project3>
        <Description>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin non
          ante id dui pretium tempus ac et elit. Morbi scelerisque lobortis
          sagittis. Curabitur lobortis placerat est, ut placerat metus
          scelerisque sed.
        </Description>
        <ProjectImg>
          <img src="images/weather_app.png" alt="Image" />
        </ProjectImg>
        <Button>Link to Project</Button>
      </Project3>
      <Project4>
        <Description>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin non
          ante id dui pretium tempus ac et elit. Morbi scelerisque lobortis
          sagittis. Curabitur lobortis placerat est, ut placerat metus
          scelerisque sed.
        </Description>
        <ProjectImg>
          <img src="images/tp_nutrition.png" alt="Image" />
        </ProjectImg>
        <Button>Link to Project</Button>
      </Project4>
      <Project5>
        <Description>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin non
          ante id dui pretium tempus ac et elit. Morbi scelerisque lobortis
          sagittis. Curabitur lobortis placerat est, ut placerat metus
          scelerisque sed.
        </Description>
        <ProjectImg>
          <img src="images/tp_note.png" alt="Image" />
        </ProjectImg>
        <Button>Link to Project</Button>
      </Project5>
      <Project6>
        <Description>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin non
          ante id dui pretium tempus ac et elit. Morbi scelerisque lobortis
          sagittis. Curabitur lobortis placerat est, ut placerat metus
          scelerisque sed.
        </Description>
        <ProjectImg>
          <img src="images/portfoliov1.png" alt="Image" />
        </ProjectImg>
        <Button>Link to Project</Button>
      </Project6>
    </WorkWrapper>
  );
}

export default Work;
