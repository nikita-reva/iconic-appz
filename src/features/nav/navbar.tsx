import { useState } from 'react';
import { useClickOutsideRef } from '../../app/hooks';
import {
  barOneVariants,
  barThreeVariants,
  barTwoVariants,
  hamburgerHover,
  logoHover,
  navbarVariants,
} from './navbar.animations';
import {
  NavContainer,
  Nav,
  NavLink,
  NavLogo,
  NavElements,
  NavElement,
  Hamburger,
  Bar,
} from './navbar.styles';

interface NavbarProps {}

export const Navbar: React.FC<NavbarProps> = (props) => {
  const [open, setOpen] = useState<boolean>(false);
  const clickOutsideRef = useClickOutsideRef(() => setOpen(false));

  return (
    <NavContainer
      ref={clickOutsideRef}
      bgColor={'var(--iconic-darkblue)'}
      variants={navbarVariants}
      initial="hidden"
      animate="visible"
    >
      <Nav>
        <NavLink to="/">
          <NavLogo whileHover={logoHover} src="/assets/logo.png" />
        </NavLink>
        <NavElements>
          <NavElement>
            <NavLink to="/">Home</NavLink>
          </NavElement>
          <NavElement>
            <NavLink to="/team">Team</NavLink>
          </NavElement>
          <NavElement>
            <NavLink to="/work">Work</NavLink>
          </NavElement>
          <NavElement>
            <NavLink to="/blog">Blog</NavLink>
          </NavElement>
        </NavElements>
        <Hamburger whileHover={hamburgerHover} onClick={() => setOpen(!open)}>
          <Bar
            variants={barOneVariants}
            animate={open ? 'active' : 'inactive'}
          />
          <Bar
            variants={barTwoVariants}
            animate={open ? 'active' : 'inactive'}
          />
          <Bar
            variants={barThreeVariants}
            animate={open ? 'active' : 'inactive'}
          />
        </Hamburger>
      </Nav>
    </NavContainer>
  );
};
