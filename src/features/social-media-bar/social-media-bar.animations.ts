export const containerVariants = {
  initial: {
    x: 60,
    y: '-50%',
  },
  hoverStart: {
    x: 0,
    transition: {
      type: 'tween',
      duration: 0.5,
    },
  },
  hoverEnd: {
    x: 60,
    transition: {
      type: 'tween',
      duration: 0.5,
      delay: 0.5,
    },
  },
};

export const beamVariants = {
  hoverStart: {
    left: 8,
    height: '88%',
    width: '80%',
    borderRadius: '30px',
    boxShadow:
      'box-shadow: 0 0 5px var(--beam-color), 0 0 15px var(--beam-color), 0 0 30px var(--beam-color), 0 0 45px var(--beam-color)',
    transition: {
      type: 'tween',
      duration: 0.5,
      ease: 'easeOut',
      delay: 0.5,
    },
  },
  hoverEnd: {
    left: -12,
    height: 60,
    width: 24,
    borderRadius: '30px',
  },
};

export const reflectionVariants = {
  initial: { skewY: '45deg', y: 0 },
  hoverStart: {
    y: '-200%',
    transition: {
      duration: 0.4,
      delay: 0.6,
    },
  },
  hoverEnd: {
    y: 0,
    transition: {
      duration: 0.4,
    },
  },
};

export const iconHover = {
  scale: 1.2,
  transition: {
    type: 'spring',
    damping: 0.8,
    stiffness: 120,
    mass: 0.8,
  },
};
