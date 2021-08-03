import styled, { css } from 'styled-components';

export const FormFieldContainer = styled.div`
  width: 100%;
  padding: 4px 8px;
`;

export const FormFieldLabel = styled.label`
  color: var(--iconic-blue);
  font-family: 'Poppins', sans-serif;
  letter-spacing: 0.2px;
  font-size: 1rem;
  font-weight: 500;
`;

export const CommonStyles = css`
  width: 100%;
  padding: 8px;
  margin-top: 4px;
  outline: none;
  border: 1px solid var(--iconic-blue);
  border-radius: 4px;
  background: var(--iconic-blue);
  color: var(--iconic-darkblue);
  letter-spacing: 0.2px;
  font-size: 1rem;
  font-family: 'Poppins', sans-serif;
  transition: border 0.2s;

  &::placeholder {
    color: var(--iconic-darkblue);
    transition: color 0.2s;
    font-family: 'Poppins', sans-serif;
    letter-spacing: 0.1px;
    font-size: 0.8rem;
  }

  &:focus {
    border: 1px solid var(--iconic-lightblue);
  }

  &:focus::placeholder {
    color: transparent;
  }
`;
