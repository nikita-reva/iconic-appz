import { IoConstruct } from 'react-icons/io5';
import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: calc(100vh - 100px);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 0 24px;
`;

export const Text = styled.h2`
  width: 100%;
  font-family: var(--basic);
  font-size: 2.5rem;
  text-align: center;
  color: var(--iconic-darkblue);
`;

export const Icon = styled(IoConstruct)`
  font-size: 5rem;
  color: var(--iconic-darkblue);
`;
