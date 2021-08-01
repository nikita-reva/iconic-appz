import styled from 'styled-components';

export const SocialMediaBarContainer = styled.div`
  position: fixed;
  background: var(--iconic-yellow);
  top: 50vh;
  right: 0px;
  transform: translateY(-50%);
  width: 100px;
  height: 100px;

  &:before {
    content: '';
    position: absolute;
    top: -100px;
    left: 0;
    background: var(--iconic-yellow);
    width: 100px;
    height: 100px;
    border-radius: 50% 0 0 0;
  }

  &:after {
    content: '';
    position: absolute;
    left: 0;
    bottom: -100px;
    background: var(--iconic-yellow);
    width: 100px;
    height: 100px;
    border-radius: 0 0 0 50%;
  }
`;
