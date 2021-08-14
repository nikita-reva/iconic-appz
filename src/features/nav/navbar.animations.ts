// Hover
export const logoHover = {
  boxShadow: '0 0 6px 1px rgba(0, 0, 0, 0.3)',
  scale: 1.04,
};

// Variants
export const navbarVariants = {
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 1.2, easing: 'ease-in' },
  },
  hidden: {
    y: -100,
    opacity: 0,
  },
};

export const barOneVariants = {
  navClosed: {
    rotateZ: 0,
    y: 0,
    transition: {
      type: 'spring',
      duration: 0.5,
      stiffness: 200,
    },
  },
  navOpen: {
    rotateZ: 45,
    y: 10,
    transition: {
      type: 'spring',
      stiffness: 200,
      delay: 0.2,
    },
  },
};

export const barTwoVariants = {
  navClosed: {
    scaleX: 1,
    transition: {
      type: 'spring',
      duration: 0.6,
      delay: 0.2,
      stiffness: 120,
    },
  },
  navOpen: {
    scaleX: 0,
    transition: {
      ease: 'linear',
      duration: 0.3,
    },
  },
};

export const barThreeVariants = {
  navClosed: {
    rotateZ: 0,
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 200,
    },
  },
  navOpen: {
    rotateZ: -45,
    y: -10,
    transition: {
      type: 'spring',
      stiffness: 200,
      delay: 0.2,
    },
  },
};
