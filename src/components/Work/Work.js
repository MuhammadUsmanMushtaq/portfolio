import React from "react";
import {
  WorkWrapper,
  Project,
  Content,
  Tools,
  Description,
  ProjectImg,
  Button,
  ProjectTitle,
} from "./WorkStyled";

function Work() {
  return (
    <WorkWrapper>
      <Project>
        <Content>
          <ProjectTitle>Starwars character search</ProjectTitle>
          <Description>
           This project is about searching star wars characters using SWAPI API.
          </Description>
          <Tools>React, styled components  </Tools>

          <Button
            href="https://github.com/MuhammadUsmanMushtaq/starWars-SWAPI" target="_blank"
          >
            Link to GitHub &#10132;
          </Button>
          <Button
            href="https://starwars-swapi-usman.netlify.app/" target="_blank"
          >
            Link to app &#10132;
          </Button>
        </Content>
        <ProjectImg>
          <img src="images/starwars_SWAPI.png" alt="starwars_SWAPI" />
        </ProjectImg>
    </Project>
      <Project>
        <Content>
          <ProjectTitle>KYH Course Landing Page Redesign</ProjectTitle>
          <Description>
            School project to redesign the landing page of Front-end program at
            KYH.
          </Description>
          <Tools>HTML5, CSS, Vanilla JavaScript</Tools>
          <Button
            href="https://github.com/MuhammadUsmanMushtaq/frontend_kyh_landing_page" target="_blank"
          >
            Link to GitHub &#10132;
          </Button>
          <Button
            href="https://muhammadusmanmushtaq.github.io/frontend_kyh_landing_page/"
            target="_blank"
          >
            Link to site &#10132;
          </Button>
        </Content>
        <ProjectImg>
          <img src="images/kyh_page.png" alt="KYH landing page" />
        </ProjectImg>
      </Project>
      <Project>
        <Content>
          <ProjectTitle>Easyweb by Sphinxly</ProjectTitle>
          <Description>
            A school team project for Easyweb by Sphinxly.
          </Description>
          <Tools>Next.js, styled components</Tools>
          <Button
            href="https://github.com/NataliaWiman/fe19tp3_easyweb"
            target="_blank"
          >
            Link to GitHub &#10132;
          </Button>
          <Button href="https://fe19tp3-easyweb.now.sh/" target="_blank">
            Link to app &#10132;
          </Button>
        </Content>
        <ProjectImg>
          <img src="images/tp_easyweb.png" alt="Easyweb site" />
        </ProjectImg>
      </Project>
      <Project>
        <Content>
          <ProjectTitle>Weather App</ProjectTitle>
          <Description>A simple weather application.</Description>
          <Tools>HTML5, CSS, Vanilla JavaScript</Tools>
          <Button
            href="https://github.com/MuhammadUsmanMushtaq/weatherapp"
            target="_blank"
          >
            Link to GitHub &#10132;
          </Button>
        </Content>
        <ProjectImg>
          <img src="images/weather_app.png" alt="Weather app" />
        </ProjectImg>
      </Project>
      <Project>
        <Content>
          <ProjectTitle>B-E-V Nutrition tracker</ProjectTitle>
          <Description>
            School team project to create a nutrition tracker application using
            data from an external API.
          </Description>
          <Tools>React, styled componenets, chart.js </Tools>
          <Button href="https://github.com/AD757/fe19tp2_lemon" target="_blank">
            Link to GitHub &#10132;
          </Button>
        </Content>
        <ProjectImg>
          <img src="images/tp_nutrition.png" alt="Nutrition app" />
        </ProjectImg>
      </Project>
      <Project>
        <Content>
          <ProjectTitle>Quire Note Taking App</ProjectTitle>
          <Description>
            School team project to create a note taking application.
          </Description>
          <Tools>HTML5, CSS, Vanilla JavaScript </Tools>
          <Button
            href="https://github.com/AD757/fe19tp1_TeamStaple"
            target="_blank"
          >
            Link to GitHub &#10132;
          </Button>
        </Content>
        <ProjectImg>
          <img src="images/tp_note.png" alt="Note app" />
        </ProjectImg>
      </Project>
      <Project>

        <Content>
          <ProjectTitle>UX Review for EU-Bikes</ProjectTitle>
          <Description>
            The main aim of this project is to analyze the user experience of
            the EU bike service and to recommend improvements to satisfy both
            the user goals and the business goals.
          </Description>
          <Tools>Figma, Photoshop </Tools>
          <Button
            href="https://www.figma.com/proto/k60XBI2Tr0mefJXT2Q60jw/EU-BIKE?node-id=1%3A2&viewport=444%2C412%2C0.5&scaling=scale-down"
            target="_blank"
          >
            Link to prototype &#10132;
          </Button>
        </Content>
        <ProjectImg>
          <img src="images/EuBike.png" alt="EU-bikes prototype" />
        </ProjectImg>
      </Project>
   </WorkWrapper>
  );
}

export default Work;
