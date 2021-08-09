import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

interface NavbarContainerProps {
  bgColor: string;
}

export const NavContainer = styled(motion.div)<NavbarContainerProps>`
  width: 100%;
  height: 100px;
  background: ${({ bgColor }) => bgColor};
  z-index: 1000;
  position: sticky;
  top: 0;
`;

export const Nav = styled.nav`
  width: 88%;

  @media screen and (min-width: 601px) {
    width: 80%;
  }

  @media screen and (min-width: 1201px) {
    width: 60%;
  }

  height: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const NavLink = styled(Link)`
  display: grid;
  place-items: center;
  text-decoration: none;
  color: unset;
`;

export const NavLogo = styled(motion.img)`
  height: 80px;
  width: auto;
  border-radius: 50%;
  box-shadow: 0 0 4px 0px rgba(0, 0, 0, 0.3);
`;

export const NavElements = styled.ul`
  width: 60%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  list-style: none;
`;

export const NavElement = styled.li`
  color: var(--iconic-paleblue);
  font-family: 'Kaushan Script', sans-serif !important;
  font-weight: 500;
  font-size: 1.8rem;
`;

export const Hamburger = styled(motion.div)`
  display: flex;
  width: 40px;
  height: 35px;
  padding: 5px;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  border-radius: 5px;
  cursor: pointer;
`;

export const Bar = styled(motion.div)`
  width: 100%;
  height: 5px;
  background: var(--iconic-red);
`;
