import styled from 'styled-components';
import { motion } from 'framer-motion';

import { navbarVariants, logoHover } from './navbar.animations';

export const NavbarContainer = styled(motion.div).attrs(() => ({
  initial: 'hidden',
  variants: navbarVariants,
  whileHover: logoHover,
}))`
  width: 100%;
  height: 100px;
  background: ${({ color }) => color};
`;
