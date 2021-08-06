import styled, { css } from 'styled-components';
import { motion } from 'framer-motion';

export const ImageSliderContainer = styled.div`
  width: 100%;
  overflow: hidden;
  position: relative;
  border-radius: 8px;
`;

export const ImagesContainer = styled(motion.div)`
  display: flex;
  align-items: center;
  flex-direction: row;
`;

export const Image = styled(motion.img)`
  width: 100%;
  object-fit: cover;
`;

const controlsStyles = css`
  position: absolute;
  display: grid;
  place-items: center;
  width: 15%;
  height: 100%;
  background: transparent;
  border: none;
  transition: background 0.1s linear;
  color: transparent;
  font-size: 4vw;

  &:hover {
    color: rgba(255, 255, 255, 0.4);
    background: rgba(255, 255, 255, 0.2);
  }
`;

export const PreviousImage = styled.button`
  ${controlsStyles}

  top: 0;
  left: 0;
`;

export const NextImage = styled.button`
  ${controlsStyles}

  top: 0;
  right: 0;
`;
