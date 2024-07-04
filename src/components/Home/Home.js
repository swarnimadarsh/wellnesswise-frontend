
import React from 'react';
import styled from 'styled-components';

import Benefits from './Benefits';
import Curriculum from './Curriculum';
import Contact from './Contact';

import Introduction from './Introduction';
import Header from './Header';

const HomeContainer = styled.div`
  font-family: 'Roboto', sans-serif;
`;

function Home() {
  return (
    <HomeContainer>
      <Header />
      <Introduction />
      <Benefits />
      <Curriculum />
      <Contact/>
    </HomeContainer>
  );
}

export default Home;
