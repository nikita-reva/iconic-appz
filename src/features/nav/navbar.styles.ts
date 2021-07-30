import styled from 'styled-components';
import { motion } from 'framer-motion';

import { navbarVariants, logoHover } from './navbar.animations';

interface NavbarContainerProps {
  bgColor: string;
}

export const NavbarContainer = styled(motion.div).attrs(() => ({
  initial: 'hidden',
  variants: navbarVariants,
  whileHover: logoHover,
}))<NavbarContainerProps>`
  width: 100%;
  height: 100px;
  background: ${({ bgColor }) => bgColor};
`;
