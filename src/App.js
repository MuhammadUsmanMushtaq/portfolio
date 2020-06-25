import React from "react";
import styled from "styled-components";
import PersonalInfo from "./components/PersonalInfo/PersonalInfo";
import Work from "./components/Work/Work";
import Contact from "./components/Contact/Contact";
import "./App.css";

const Wrapper = styled.section`
  padding: 16px;
`;

function App() {
  return (
    <Wrapper>
      <PersonalInfo />
      <Work />
      <Contact />
    </Wrapper>
  );
}

export default App;
