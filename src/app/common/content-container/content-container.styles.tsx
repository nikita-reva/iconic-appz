import styled from 'styled-components';

interface ContainerProps {
  width?: string;
}

export const Container = styled.div<ContainerProps>`
  width: ${({ width }) => (width ? width : '80%')};
  margin: 0 auto;
`;
