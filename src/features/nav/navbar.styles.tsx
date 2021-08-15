import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export const Nav = styled(motion.nav)`
  width: 100%;
  background: var(--iconic-lightblue);
  z-index: 1000;
  position: sticky;
  top: 0;
  touch-action: pan-x;

  &:before {
    content: '';
    position: absolute;
    background: var(--iconic-darkblue);
    top: 0;
    left: 0;
    right: 0;
    height: 100px;
    z-index: -10;
  }
`;

export const NavWrapper = styled.div`
  display: flex;
  margin: 0 auto;
  width: 88%;

  @media only screen and (min-width: 601px) {
    width: 80%;
  }

  @media only screen and (min-width: 1601px) {
    width: 60%;
  }
`;

export const NavContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  @media only screen and (min-width: 1025px) {
    flex-direction: row;
  }
`;

export const NavSeparator = styled.div`
  display: flex;
  width: 100%;
  padding: 10px 0;
  align-items: center;
  justify-content: space-between;

  @media only screen and (min-width: 1025px) {
    width: auto;
  }
`;

export const NavLogoLink = styled(Link)`
  display: grid;
  place-items: center;
  text-decoration: none;
  color: unset;
`;

export const NavLogo = styled(motion.img)`
  height: 80px;
  border-radius: 50%;
  box-shadow: 0 0 4px 0px rgba(0, 0, 0, 0.3);
`;

export const NavLinks = styled(motion.ul)`
  width: 100%;
  display: flex;
  overflow: hidden;
  height: 0;
  flex-direction: column;
  background: var(--iconic-lightblue);
  list-style: none;

  @media only screen and (min-width: 1025px) {
    width: auto;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    background: none;
  }
`;

export const NavElement = styled(motion.li)`
  display: flex;
  color: var(--iconic-darkblue);
  font-family: var(--caption);
  font-weight: 500;
  font-size: 1.8rem;
  margin: 12px auto;
  position: relative;
  width: 120px;
  justify-content: center;
  align-items: center;

  &:first-child {
    margin-top: 36px;
  }

  &:last-child {
    margin-bottom: 36px;
  }

  @media only screen and (min-width: 1025px) {
    color: var(--iconic-lightblue);
    margin: 0 24px;

    &:last-child {
      margin-right: 2px;
      margin-bottom: 0;
    }

    &:first-child {
      margin-top: 0;
    }
  }
`;

export const NavLink = styled(Link)`
  display: grid;
  place-items: center;
  text-decoration: none;
  color: unset;
  z-index: 1;
  padding: 8px 16px;

  &:focus {
    outline: none;
  }
`;

export const NavLinkContent = styled(motion.span)``;

export const ActiveLinkMarker = styled(motion.div)`
  position: absolute;
  overflow: hidden;
  box-shadow: 2px 2px 4x rgba(0, 0, 0, 0.2);
  border-radius: 30px;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  border-left: 1px solid rgba(255, 255, 255, 0.1);
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  border-right: 1px solid rgba(0, 0, 0, 0.1);
  background: rgba(255, 255, 255, 0.12);
  backdrop-filter: blur(10px);

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0.5;

    background-image: radial-gradient(
        circle at 40% 91%,
        rgba(251, 251, 251, 0.04) 0%,
        rgba(251, 251, 251, 0.04) 50%,
        rgba(229, 229, 229, 0.04) 50%,
        rgba(229, 229, 229, 0.04) 100%
      ),
      radial-gradient(
        circle at 66% 97%,
        rgba(36, 36, 36, 0.04) 0%,
        rgba(36, 36, 36, 0.04) 50%,
        rgba(46, 46, 46, 0.04) 50%,
        rgba(46, 46, 46, 0.04) 100%
      ),
      radial-gradient(
        circle at 86% 7%,
        rgba(40, 40, 40, 0.04) 0%,
        rgba(40, 40, 40, 0.04) 50%,
        rgba(200, 200, 200, 0.04) 50%,
        rgba(200, 200, 200, 0.04) 100%
      ),
      radial-gradient(
        circle at 15% 16%,
        rgba(99, 99, 99, 0.04) 0%,
        rgba(99, 99, 99, 0.04) 50%,
        rgba(45, 45, 45, 0.04) 50%,
        rgba(45, 45, 45, 0.04) 100%
      ),
      radial-gradient(
        circle at 75% 99%,
        rgba(243, 243, 243, 0.04) 0%,
        rgba(243, 243, 243, 0.04) 50%,
        rgba(37, 37, 37, 0.04) 50%,
        rgba(37, 37, 37, 0.04) 100%
      ),
      linear-gradient(90deg, rgb(34, 222, 237), rgb(135, 89, 215));

    @media only screen and (min-width: 1025px) {
      opacity: 0.3;
    }
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
  cursor: pointer;

  &:hover {
    & > div {
      background: var(--iconic-red);
    }
  }

  @media only screen and (min-width: 1025px) {
    display: none;
  }
`;

export const Bar = styled(motion.div)`
  width: 100%;
  height: 5px;
  background: var(--iconic-yellow);
  transition: background 0.2s linear;
`;
