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
    <WorkWrapper id="Work">
      <Project>
        <ProjectImg>
          <img src="images/waitcure.png" alt="waitcure" />
        </ProjectImg>
        <Content>
          <ProjectTitle>WaitCure Prototype</ProjectTitle>
          <Description>
            WaitCure by CodeZyme is a web application to improve patient waiting times. Patients can reschedule, get earlier times or cancel their appointments through a simple UI. 
          </Description>
             <Tools>
                User research, wireframing with Excalidraw and Prototyping with figma, React/typescript, Graphql, apollo-client.
              </Tools>
          <Button
            href="https://www.figma.com/proto/ylTFLMybDSfNI8ccGbg0BX/Waitcure-Prototype?node-id=2%3A1&viewport=496%2C431%2C0.14515800774097443&scaling=scale-down&page-id=0%3A1"
            target="_blank">
            Link to prototype &#10132;
          </Button>
        </Content>
      </Project>
      
      <Project>
        <ProjectImg>
          <img src="images/EuBike.png" alt="EU-bikes prototype" />
        </ProjectImg>
        <Content>
          <ProjectTitle>UX Review for EU-Bikes</ProjectTitle>
          <Description>
             The main aim of this project was to analyze the user experience of
            the EU bike service and to recommend improvements to satisfy both
            the user goals and the business goals. 
          </Description>
             <Tools>
                User research, User story mapping, user testing, wireframing with Figma and Photoshop 
              </Tools>
          <Button
            href="https://www.figma.com/proto/k60XBI2Tr0mefJXT2Q60jw/EU-BIKE?node-id=1%3A2&viewport=444%2C412%2C0.5&scaling=scale-down"
            target="_blank">
            Link to prototype &#10132;
          </Button>
        </Content>
      </Project>
      
      <Project>
        <ProjectImg>
          <img src="images/codezyme.png" alt="waitcure" />
        </ProjectImg>
        <Content>
          <ProjectTitle>CodeZyme Landing Page</ProjectTitle>
          <Description>
              Design of the landing page for CodeZyme
          </Description>
             <Tools>
                Webflow
              </Tools>
          
        </Content>
      </Project>

      <Project>
        <ProjectImg>
          <img src="images/soup.png" alt="SoupOnline" />
        </ProjectImg>
        <Content>
          <ProjectTitle>Online Soup Shop</ProjectTitle>
          <Description>
             An online soup shop where users can order and pay for the soup to get it delivered at home
          </Description>
          <Tools>React hooks, styled components, firebase authentication, gmail signin, UX methodology- user storymapping, wireframing, user testing, mobile first approach </Tools>

          <Button
            href="https://github.com/MuhammadUsmanMushtaq/soup-online" target="_blank"
          >
            Link to GitHub &#10132;
          </Button>
        </Content>
      </Project>
      
      <Project>
        <ProjectImg>
          <img src="images/starwars_swapi2.png" alt="starwars_SWAPI" />
        </ProjectImg>
        <Content>
          <ProjectTitle>Starwars character search</ProjectTitle>
          <Description>
            A star war characters information search app and it uses SWAPI API
          </Description>
          <Tools>React hooks, styled components  </Tools>

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
      </Project>
      
      <Project>
        <ProjectImg>
          <img src="images/kyh_page.png" alt="KYH landing page" />
        </ProjectImg>
        <Content>
          <ProjectTitle>KYH Course Landing Page Redesign</ProjectTitle>
          <Description>
            Redesign of the frontend program page of KYH
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
      </Project>
      
      <Project>
        <ProjectImg>
          <img src="images/tp_easyweb.png" alt="Easyweb site" />
        </ProjectImg>
        <Content>
          <ProjectTitle>Easyweb by Sphinxly</ProjectTitle>
          <Description>
            Redesign suggestion for Easyweb by Sphinxly
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
      </Project>
      
      <Project>
        <ProjectImg>
          <img src="images/tp_nutrition.png" alt="Nutrition app" />
        </ProjectImg>
        <Content>
          <ProjectTitle>B-E-V Nutrition tracker</ProjectTitle>
          <Description>
            Nutrition tracker application using data from an external API
          </Description>
          <Tools>React, styled componenets, chart.js, firebase authentication </Tools>
          <Button href="https://github.com/AD757/fe19tp2_lemon" target="_blank">
            Link to GitHub &#10132;
          </Button>
        </Content>
      </Project>
      
      <Project>
        <ProjectImg>
          <img src="images/tp_note.png" alt="Note app" />
        </ProjectImg>
        <Content>
          <ProjectTitle>Quire Note Taking App</ProjectTitle>
          <Description>
            A note taking web application to easily add, delete, star and manage notes
          </Description>
          <Tools>HTML5, CSS, Vanilla JavaScript, Local storage </Tools>
          <Button
            href="https://github.com/AD757/fe19tp1_TeamStaple"
            target="_blank"
          >
            Link to GitHub &#10132;
          </Button>
        <Button href="https://quire-notes.netlify.app/" target="_blank">
            Link to app &#10132;
          </Button>   
        </Content>
      </Project>

      
    </WorkWrapper>
  );
}

export default Work;
