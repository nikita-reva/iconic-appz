import styled from 'styled-components';
import { RiErrorWarningLine } from 'react-icons/ri';
import { capitalizeFirstLetter } from '../utils/helperFunctions';

const Message = styled.div`
  width: 100%;
  text-align: start;
  padding: 8px 0;
  font-family: 'Ubuntu', sans-serif;
  letter-spacing: 0.2px;
  font-size: 0.8rem;
  font-weight: 500;
  color: var(--iconic-darkorange);
  display: flex;
  align-items: center;
`;

const ErrorIcon = styled(RiErrorWarningLine)`
  margin-right: 2px;
  font-size: 1rem;
`;

interface ErrorMessageProps {
  content: string;
}

export const ErrorMessage: React.FC<ErrorMessageProps> = ({ content }) => {
  return (
    <Message>
      <ErrorIcon />
      {capitalizeFirstLetter(content)}
    </Message>
  );
};
