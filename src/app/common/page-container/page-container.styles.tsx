import styled from 'styled-components';

interface ContainerProps {
  width: string;
}

export const Container = styled.div<ContainerProps>`
  width: ${({ width }) => (width ? width : '100%')};
  min-height: calc(100vh - 100px);
`;
