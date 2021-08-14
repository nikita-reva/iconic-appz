import { Form } from 'formik';
import styled from 'styled-components';
import { motion } from 'framer-motion';

export const ContactFormHeading = styled.h2`
  width: 100%;
  text-align: center;
  font-family: var(--caption);
  color: var(--iconic-paleblue);
`;

export const ContactFormContainer = styled(Form)`
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ButtonContainer = styled(motion.div)`
  margin-top: 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Feedback = styled(motion.div)`
  width: 100%;
  margin-bottom: 12px;
  text-align: center;
  font-family: var(--caption);
  color: var(--iconic-green);
`;
