import styled from 'styled-components';
import { motion } from 'framer-motion';

import { iconHover } from './social-media-bar.animations';

export const SocialMediaBarContainer = styled(motion.div)`
  position: fixed;
  top: 50vh;
  right: 0px;
  width: 60px;
  height: auto;
  border-radius: 12px 0 0 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2000;
`;

interface BeamProps {
  beamColor?: string;
}

export const Beam = styled(motion.div)<BeamProps>`
  --beam-color: ${({ beamColor }) =>
    beamColor ? beamColor : 'var(--iconic-paleblue)'};
  position: absolute;
  left: -12px;
  top: 50%;
  transform: translateY(-50%);
  width: 24px;
  height: 60px;
  border-radius: 8px;
  background: var(--beam-color);
`;

export const SocialMediaBarElements = styled.div`
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 100%;
  border-radius: 12px 0 0 12px;
  z-index: 1;
  display: flex;
  justify-content: space-around;
  padding: 12px 0;
  align-items: center;
  flex-direction: column;
  box-shadow: 0 0px 10px rgba(0, 0, 0, 0.1);
  background: var(--iconic-darkblue);

  @supports (
    (-webkit-backdrop-filter: blur(15px)) or (backdrop-filter: blur(15px))
  ) {
    border-left: 1px solid rgba(255, 255, 255, 0.1);
    background: rgba(255, 255, 255, 0.06);
    -webkit-backdrop-filter: blur(15px);
    backdrop-filter: blur(15px);
  }
`;

export const Reflection = styled(motion.div)`
  position: absolute;
  bottom: 0;
  width: 400%;
  height: 50%;
  background: linear-gradient(to top, transparent, rgba(255, 255, 255, 0.12));
`;

export const IconContainer = styled(motion.a).attrs(() => ({
  whileHover: iconHover,
}))`
  color: #fff;
  font-size: 2rem;
  cursor: pointer;
  margin: 8px 0px;
  text-decoration: none;
`;
