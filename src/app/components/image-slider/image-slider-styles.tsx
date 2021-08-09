import styled, { css } from 'styled-components';
import { motion } from 'framer-motion';

export const ImageSliderContainer = styled(motion.div)`
  width: 100%;
  overflow: hidden;
  position: relative;
  border-radius: 8px;
  background: var(--iconic-darkblue);
  touch-action: none;
  box-shadow: 0 0 6px rgba(0, 0, 0, 0.25);
`;

export const ImagesContainer = styled(motion.div)`
  will-change: transform;
  display: flex;
  align-items: center;
  flex-direction: row;
  will-change: transform;
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
  font-size: clamp(1.5rem, 3vw, 3rem);

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

export const ImagesCounterContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  bottom: 4%;
  left: 50%;
  transform: translateX(-50%);
`;

export const ImagesCounterElement = styled(motion.div)<{ $width: number }>`
  position: relative;
  border-radius: 50%;
  margin: ${({ $width }) =>
    $width < 800 ? `${0.01 * $width}px` : `${0.006 * $width}px`};
  cursor: pointer;
  height: ${({ $width }) =>
    $width < 800 ? `${0.03 * $width}px` : `${0.02 * $width}px`};
  width: ${({ $width }) =>
    $width < 800 ? `${0.03 * $width}px` : `${0.02 * $width}px`};
  background: var(--iconic-yellow);
  transition: background 0.2s ease-in;

  @media (hover: hover) and (pointer: fine) {
    &:hover {
      background: var(--iconic-darkorange);
    }
  }
`;

export const ImagesCounterElementOutline = styled(motion.div)<{
  $width: number;
}>`
  position: absolute;
  top: -25%;
  left: -25%;
  right: -25%;
  bottom: -25%;
  background: var(--iconic-darkblue);
  z-index: -1;
  border-radius: 50%;
`;
