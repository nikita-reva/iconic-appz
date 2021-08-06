import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';
import { motion } from 'framer-motion';
import { RiFileDownloadLine } from 'react-icons/ri';

interface StyleProps {
  $btnSize?: 'small' | 'medium' | 'large';
  btnType?: 'download' | 'link' | 'routerLink' | 'action';
  $btnLook?: 'emphasized' | 'primary' | 'secondary';
  $bgColor?: string;
  $inverted?: boolean;
  $rounded?: boolean;
  $loading?: boolean;
}

const IconicButtonStyles = css<StyleProps>`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${({ $btnSize }) =>
    $btnSize === 'small'
      ? '6px 12px'
      : $btnSize === 'medium'
      ? '8px 16px'
      : $btnSize === 'large'
      ? '12px 24px'
      : '8px'};
  border: ${({ $btnLook, $btnSize, $inverted }) =>
    $btnLook === 'primary'
      ? 'none'
      : `${$btnSize === 'small' ? '2px' : '3px'} solid ${
          $inverted ? 'var(--iconic-paleblue)' : 'var(--iconic-darkblue)'
        }`};
  border-radius: ${({ $rounded }) => ($rounded ? '6px' : '0px')};
  background: ${({ $btnLook, $bgColor }) =>
    $btnLook === 'secondary' ? 'transparent' : $bgColor};
  color: ${({ $inverted }) =>
    $inverted ? 'var(--iconic-paleblue)' : 'var(--iconic-darkblue)'};
  font-family: 'Ubuntu', sans-serif;
  font-weight: ${({ $btnSize }) =>
    $btnSize === 'small'
      ? 500
      : $btnSize === 'medium'
      ? 600
      : $btnSize === 'large'
      ? 700
      : 600};
  font-size: ${({ $btnSize }) =>
    $btnSize === 'small'
      ? '12px'
      : $btnSize === 'medium'
      ? '18px'
      : $btnSize === 'large'
      ? '24px'
      : '18px'};
  letter-spacing: 0.2px;
`;

export const IconicButtonContainer = styled(motion.span)`
  margin: 0 12px;
  display: inline-block;
`;

export const IconicButtonBtn = styled.button<StyleProps>`
  ${IconicButtonStyles}

  cursor: pointer;
`;

export const IconicButtonLink = styled.a<StyleProps>`
  ${IconicButtonStyles}

  text-decoration: none;
`;

export const IconicButtonRouterLink = styled(Link)<StyleProps>`
  ${IconicButtonStyles}

  text-decoration: none;
`;

export const Icon = styled(RiFileDownloadLine)`
  margin-right: 4px;
  transform: translateY(-3%);
  font-size: 1em;
`;

export const Loader = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const Content = styled.span<StyleProps>`
  opacity: ${({ $loading }) => ($loading ? 0 : 1)};
  transition: opacity 0.15s linear;
`;
