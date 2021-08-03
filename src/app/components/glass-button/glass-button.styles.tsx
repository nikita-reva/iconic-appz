import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

type Btn = 'button' | 'reset' | 'submit' | undefined;

export interface GlassButtonProps {
  onClick?: () => void;
  linkTo?: string;
  beamColor?: string;
  type?: Btn;
  content?: string;
  disabled?: boolean;
}

export const GlassButtonContainer = styled.div<GlassButtonProps>`
  position: relative;
  width: 155px;
  height: 50px;

  &:before {
    content: '';
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translateX(-50%) translateY(-50%);
    width: 10px;
    height: 10px;
    border-radius: 50%;
    transition: 0.5s;
    background: ${({ beamColor }) =>
      beamColor ? beamColor : 'var(--iconic-blue)'};
    box-shadow: 0 0 4px
        ${({ beamColor }) => (beamColor ? beamColor : 'var(--iconic-blue)')},
      0 0 12px
        ${({ beamColor }) => (beamColor ? beamColor : 'var(--iconic-blue)')},
      0 0 24px
        ${({ beamColor }) => (beamColor ? beamColor : 'var(--iconic-blue)')},
      0 0 48px
        ${({ beamColor }) => (beamColor ? beamColor : '#var(--iconic-blue)')};
  }

  &:hover {
    &:before {
      bottom: 0;
      height: 50%;
      width: 75%;
      border-radius: 30px;
      transition-delay: 0.5s;
    }
  }
`;

const ButtonStyles = css`
  position: absolute;
  font-family: 'Ubuntu', sans-serif;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(255, 255, 255, 0.05);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 30px;
  color: #fff;
  z-index: 1;
  font-size: 1.2rem;
  font-weight: 600;
  letter-spacing: 1px;
  text-decoration: none;
  overflow: hidden;
  transition: 0.5s;
  backdrop-filter: blur(15px);

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 50%;
    height: 100%;
    background: linear-gradient(
      to left,
      rgba(255, 255, 255, 0.15),
      transparent
    );
    transform: skewX(45deg) translateX(0);
    transition: 0.5s;
  }

  &:hover {
    letter-spacing: 3px;

    &:before {
      transform: skewX(45deg) translateX(200%);
    }
  }
`;

export const GlassButtonLink = styled(Link)<GlassButtonProps>`
  ${ButtonStyles}
`;

export const GlassButtonBtn = styled.button<GlassButtonProps>`
  cursor: pointer;
  border: none;

  ${ButtonStyles}
`;
