import { useState } from 'react';
import { useClickOutsideRef } from '../../app/hooks';
import { NavbarContainer } from './navbar.styles';

interface NavbarProps {}

export const Navbar: React.FC<NavbarProps> = (props) => {
  const [open, setOpen] = useState<boolean>(true);
  const clickOutsideRef = useClickOutsideRef(() => setOpen(false));

  return (
    <NavbarContainer
      color={open ? 'var(--iconic-darkblue)' : 'var(--iconic-red)'}
      ref={clickOutsideRef}
      animate="visible"
    >
      {open ? 'Open' : 'Not Open'}
    </NavbarContainer>
  );
};
