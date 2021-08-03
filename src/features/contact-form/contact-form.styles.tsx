import styled from 'styled-components';

export const ContactFormContainer = styled.form`
  width: 100%;
  margin: 0 auto;

  @media screen and (min-width: 992px) {
    width: 60vw;
  }
`;

export const ContactFormHeading = styled.h2`
  width: 100%;
  text-align: center;
  font-family: 'Kaushan Script', sans-serif;
  color: var(--iconic-paleblue);
`;
