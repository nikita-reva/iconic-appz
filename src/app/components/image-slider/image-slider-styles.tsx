import styled, { css } from 'styled-components';
import { motion } from 'framer-motion';

export const ImagesSliderWrapper = styled(motion.div)`
  width: 100%;
  display: flex;
  flex-direction: column-reverse;
`;

export const ImagesCounterContainer = styled.div`
  display: flex;
  width: 100%;
  height: 10%;
  border-top: 12px solid var(--iconic-darkblue);
  transform: translateY(-12px);
  align-items: flex-end;
  justify-content: center;
  border-radius: 0 0 12px 12px;
  background: var(--iconic-darkblue);
`;

export const ImagesCounterElement = styled(motion.div)<{ $width: number }>`
  position: relative;
  border-radius: 50%;
  margin: ${({ $width }) => `${0.01 * $width}px`};
  cursor: pointer;
  height: ${({ $width }) => `${0.02 * $width}px`};
  width: ${({ $width }) => `${0.02 * $width}px`};
  background: var(--iconic-blue);
  box-shadow: 0 0 2px rgba(0, 0, 0, 0.6);
  transition: background 0.2s ease-in;

  @media (hover: hover) and (pointer: fine) {
    &:hover {
      background: var(--iconic-paleblue);
    }
  }
`;

export const ImagesCounterElementOutline = styled(motion.div)<{
  $width: number;
}>`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: var(--iconic-paleblue);
  border-radius: 50%;
`;

export const ImageSliderContainer = styled(motion.div)<{ $rounded?: boolean }>`
  width: 100%;
  overflow: hidden;
  position: relative;
  border-radius: ${({ $rounded }) => ($rounded ? '12px' : 0)};
  background: var(--iconic-darkblue);
  touch-action: pan-y;
  box-shadow: 0 0 6px rgba(0, 0, 0, 0.25);
`;

export const ImagesContainer = styled(motion.div)`
  will-change: transform;
  display: flex;
  align-items: center;
  flex-direction: row;
  will-change: transform;
`;

export const Image = styled(motion.img)<{ $heigth?: number }>`
  width: 100%;
  height: ${({ $heigth }) => ($heigth ? `${$heigth}px` : 'auto')};
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

  &:focus {
    outline: none;
  }

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
