import { AnimateSharedLayout } from 'framer-motion';
import { useEffect, useState } from 'react';
import { useClickOutsideRef } from '../../app/hooks';
import {
  barOneVariants,
  barThreeVariants,
  barTwoVariants,
  logoHover,
  navbarVariants,
} from './navbar.animations';
import {
  NavContainer,
  Nav,
  NavLogoLink,
  NavLink,
  NavLogo,
  NavLinks,
  NavElement,
  Hamburger,
  Bar,
  NavWrapper,
  NavSeparator,
  ActiveLinkMarker,
} from './navbar.styles';

interface NavbarProps {}

const navVariants = {
  closeNav: {
    height: 'auto',
    transition: { delayChildren: 0.2, staggerChildren: 0.2 },
  },
  openNav: {
    height: 0,
    transition: {
      when: 'afterChildren',
      staggerChildren: 0.2,
      staggerDirection: -1,
    },
  },
};

const navElementVariants = {
  closeNav: { x: 0, opacity: 1 },
  openNav: { x: -50, opacity: 0 },
};

export const Navbar: React.FC<NavbarProps> = (props) => {
  const [open, setOpen] = useState<boolean>(true);
  const [selected, setSelected] = useState<number>(0);
  const clickOutsideRef = useClickOutsideRef(() => {
    if (clickOutsideRef.current && clickOutsideRef.current.clientWidth <= 1024)
      setOpen(false);
  });

  const links = [
    { title: 'Home', to: '/' },
    { title: 'Team', to: '/team' },
    { title: 'Work', to: '/work' },
    { title: 'Blog', to: '/blog' },
  ];

  useEffect(() => {
    if (
      clickOutsideRef.current &&
      clickOutsideRef.current.clientWidth >= 1024
    ) {
      setOpen(true);
    }
  }, [clickOutsideRef]);

  window.onresize = () => {
    if (
      clickOutsideRef.current &&
      clickOutsideRef.current.clientWidth >= 1025
    ) {
      setOpen(true);
    } else {
      setOpen(false);
    }
  };

  return (
    <Nav
      ref={clickOutsideRef}
      variants={navbarVariants}
      initial="hidden"
      animate="visible"
    >
      <NavWrapper>
        <NavContainer>
          <NavSeparator>
            <NavLogoLink to="/">
              <NavLogo
                whileHover={logoHover}
                src="/assets/logo.png"
                alt="Iconic Appz Logo"
              />
            </NavLogoLink>
            <Hamburger
              onClick={() => {
                setOpen(!open);
              }}
            >
              <Bar
                initial={false}
                variants={barOneVariants}
                animate={open ? 'navOpen' : 'navClosed'}
              />
              <Bar
                initial={false}
                variants={barTwoVariants}
                animate={open ? 'navOpen' : 'navClosed'}
              />
              <Bar
                variants={barThreeVariants}
                animate={open ? 'navOpen' : 'navClosed'}
              />
            </Hamburger>
          </NavSeparator>
          <NavLinks
            initial={false}
            animate={open ? 'closeNav' : 'openNav'}
            variants={navVariants}
          >
            <AnimateSharedLayout>
              {links.map((link, index) => (
                <NavElement
                  key={index}
                  variants={navElementVariants}
                  onClick={() => setSelected(index)}
                >
                  {selected === index && <ActiveLinkMarker layoutId="marked" />}
                  <NavLink to={link.to}>{link.title}</NavLink>
                </NavElement>
              ))}
            </AnimateSharedLayout>
          </NavLinks>
        </NavContainer>
      </NavWrapper>
    </Nav>
  );
};
