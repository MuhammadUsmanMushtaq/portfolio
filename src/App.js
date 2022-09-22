import React from 'react';
import styled from 'styled-components';
import PersonalInfo from './components/PersonalInfo/PersonalInfo';
import Work from './components/Work/Work';
import Contact from './components/Contact/Contact';
import Navbar from './components/Navbar/Navbar';
import './App.css';

const Wrapper = styled.section`
  // padding: 16px;
  // margin: 0 auto;
  // max-width: 1200px;
`;

function App() {
  return (
    <Wrapper>
      <Navbar />
      <PersonalInfo />
      <Work />
      <Contact />
    </Wrapper>
  );
}

export default App;
