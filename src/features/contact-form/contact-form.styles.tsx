import { Form } from 'formik';
import styled from 'styled-components';

export const ContactFormHeading = styled.h2`
  width: 100%;
  text-align: center;
  font-family: 'Kaushan Script', sans-serif;
  color: var(--iconic-paleblue);
`;

export const ContactFormContainer = styled(Form)`
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (min-width: 992px) {
    width: 60vw;
  }
`;

export const ButtonContainer = styled.div`
  margin-top: 36px;
`;
