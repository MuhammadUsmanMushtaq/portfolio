import React from "react";
import styled from "styled-components";
import Navbar from "./components/Navbar/Navbar";
import PersonalInfo from "./components/PersonalInfo/PersonalInfo";
import Work from "./components/Work/Work";
import "./App.css";

const Wrapper = styled.section`
  padding: 16px;
`;

function App() {
  return (
    <Wrapper>
      <Navbar />
      <PersonalInfo />
      <Work />
    </Wrapper>
  );
}

export default App;
