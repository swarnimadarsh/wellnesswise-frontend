// components/Benefits.js

import React from 'react';
import styled from 'styled-components';

const BenefitsContainer = styled.section`
  padding: 40px 20px;
  text-align: center;
`;

const BenefitItem = styled.div`
  margin-bottom: 20px;
`;

const BenefitTitle = styled.h3`
  color: #4CAF50;
`;

const Benefits = () => {
  return (
    <BenefitsContainer>
      <h2>Benefits of Health Education</h2>
      <BenefitItem>
        <BenefitTitle>Improved Physical Well-being</BenefitTitle>
        <p>Learn about maintaining a healthy lifestyle, nutrition, and physical activity.</p>
      </BenefitItem>
      <BenefitItem>
        <BenefitTitle>Mental Health Awareness</BenefitTitle>
        <p>Understand the importance of mental well-being and strategies for stress management.</p>
      </BenefitItem>
      {/* Add more benefit items */}
    </BenefitsContainer>
  );
}

export default Benefits;
    