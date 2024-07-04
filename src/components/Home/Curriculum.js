// components/Curriculum.js

import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const CurriculumContainer = styled.section`
  background-color: #fff;
  padding: 40px 20px;
  text-align: center;
`;

const Curriculum = () => {
  return (
    <CurriculumContainer>
      <h2>Our Curriculum</h2>
      <button class="btn btn-dark"><Link to="/syllabus" className='nav-link'style={{fontFamily:'cursive', color:'#7a9695'}} > Curriculum</Link></button>
    </CurriculumContainer>
  );
}

export default Curriculum;
