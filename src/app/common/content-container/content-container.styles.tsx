import styled from 'styled-components';

interface ContainerProps {
  width?: string;
}

export const Container = styled.div<ContainerProps>`
  margin: 0 auto;
  width: ${({ width }) => (width ? width : '88%')};

  @media screen and (min-width: 601px) {
    width: ${({ width }) => (width ? width : '80%')};
  }

  @media screen and (min-width: 1201px) {
    width: ${({ width }) => (width ? width : '60%')};
  }
`;
