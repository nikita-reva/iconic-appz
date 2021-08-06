export const buttonVariants = {
  confirm: {
    scale: [1, 0.8, 1.1, 1],
    transition: {
      type: 'spring',
      duration: 0.8,
      bounce: 1,
    },
  },
};

export const feedbackVariants = {
  initial: { opacity: 0, y: 24 },
  appear: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1.2,
    },
  },
  disappear: {
    opacity: 0,
    y: 24,
    transition: {
      duration: 0.8,
    },
  },
};
