import styled from 'styled-components';

interface ContainerProps {
  bgColor?: string;
}

export const Container = styled.div<ContainerProps>`
  width: 100%;
  padding: 12px;
  background: ${({ bgColor }) => (bgColor ? bgColor : 'var(--iconic-blue)')};
`;
