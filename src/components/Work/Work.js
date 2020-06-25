import React from "react";
import {
  WorkWrapper,
  Project,
  Description,
  ProjectImg,
  Button,
  ProjectTitle,
} from "./WorkStyled";

function Work() {
  return (
    <WorkWrapper>
      <Project>
        <Description>
          <ProjectTitle>KYH Course Landing Page Redesign</ProjectTitle>
          <Button
            href="https://github.com/MuhammadUsmanMushtaq/frontend_kyh_landing_page"
            target="_blank"
          >
            Link to GitHub
          </Button>
          <Button
            href="https://muhammadusmanmushtaq.github.io/frontend_kyh_landing_page/"
            target="_blank"
          >
            Link to site
          </Button>
        </Description>
        <ProjectImg>
          <img src="images/kyh_page.png" alt="Image" />
        </ProjectImg>
      </Project>
      <Project>
        <Description>
          <ProjectTitle>Easyweb by Sphinxly</ProjectTitle>
          <Button
            href="https://github.com/NataliaWiman/fe19tp3_easyweb"
            target="_blank"
          >
            Link to GitHub
          </Button>
          <Button href="https://fe19tp3-easyweb.now.sh/" target="_blank">
            Link to app
          </Button>
        </Description>
        <ProjectImg>
          <img src="images/tp_easyweb.png" alt="Image" />
        </ProjectImg>
      </Project>
      <Project>
        <Description>
          <ProjectTitle>Weather App</ProjectTitle>
          <Button
            href="https://github.com/MuhammadUsmanMushtaq/weatherapp"
            target="_blank"
          >
            Link to GitHub
          </Button>
        </Description>
        <ProjectImg>
          <img src="images/weather_app.png" alt="Image" />
        </ProjectImg>
      </Project>
      <Project>
        <Description>
          <ProjectTitle>Nutrition Fact Checker</ProjectTitle>
          <Button href="https://github.com/AD757/fe19tp2_lemon" target="_blank">
            Link to GitHub
          </Button>
        </Description>
        <ProjectImg>
          <img src="images/tp_nutrition.png" alt="Image" />
        </ProjectImg>
      </Project>
      <Project>
        <Description>
          <ProjectTitle>Quire Note Taking App</ProjectTitle>
          <Button
            href="https://github.com/AD757/fe19tp1_TeamStaple"
            target="_blank"
          >
            Link to GitHub
          </Button>
        </Description>
        <ProjectImg>
          <img src="images/tp_note.png" alt="Image" />
        </ProjectImg>
      </Project>
      <Project>
        <Description>
          <ProjectTitle>UX Review for EU-Bikes</ProjectTitle>
          <Button
            href="https://www.figma.com/proto/k60XBI2Tr0mefJXT2Q60jw/EU-BIKE?node-id=1%3A2&viewport=444%2C412%2C0.5&scaling=scale-down"
            target="_blank"
          >
            Link to prototype
          </Button>
        </Description>
        <ProjectImg>
          <img src="images/EuBike.png" alt="Image" />
        </ProjectImg>
      </Project>
    </WorkWrapper>
  );
}

export default Work;
