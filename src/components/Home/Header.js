// components/Header.js

import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.header`
  background-color: #ffffff;
  color: black;
  padding: 20px;
  text-align: center;
`;

const Header = () => {
  return (
    <HeaderContainer>
      <h1 style={{ color: 'black', fontFamily: 'cursive' }} >Health Education Integration</h1>
      <nav>
        {/* Add navigation links if needed */}
      </nav>
    </HeaderContainer>
  );
}

export default Header;
