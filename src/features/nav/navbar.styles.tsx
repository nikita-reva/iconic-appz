import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export const NavContainer = styled(motion.div)`
  width: 100%;
  background: var(--iconic-darkblue);
  z-index: 1000;
  position: sticky;
  top: 0;
  padding: 10px 0;
`;

export const Nav = styled.nav`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;

  @media screen and (min-width: 1025px) {
    align-items: center;
  }
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

export const NavElements = styled(motion.ul)`
  width: 100%;
  height: 0;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  list-style: none;

  @media screen and (min-width: 1025px) {
    width: 60%;
    height: auto;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    background: none;
  }
`;

export const NavElement = styled.li`
  color: var(--iconic-paleblue);
  font-family: 'Kaushan Script', sans-serif !important;
  font-weight: 500;
  font-size: 1.8rem;
  margin: 12px 0;

  @media screen and (min-width: 1025px) {
    margin: 0;
  }
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

  @media screen and (min-width: 1025px) {
    display: none;
  }
`;

export const Bar = styled(motion.div)`
  width: 100%;
  height: 5px;
  background: var(--iconic-red);
`;
