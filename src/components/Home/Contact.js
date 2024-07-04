// components/Contact.js

import React from 'react';
import styled from 'styled-components';

const ContactContainer = styled.section`
  background-color: #333;
  color: #fff;
  padding: 20px 10px;
  text-align: center;
  border-radius:10px
`;

const Contact = () => {
  return (
    <ContactContainer>
      <h2>Contact Us</h2>
      <div class="row">
        <div class="col-2"></div>
        <div class="col-4 card m-2 p-2">
          +91-9943339565
          <br/>
          mail@gmail.com
        </div>
        <div class="col-4 card m-2 p-2">

          +91-7979993080
          <br/>
          mail@gmail.com
        </div>

      </div>
      {/* Add a contact form or other contact information */}
    </ContactContainer>
  );
}

export default Contact;
