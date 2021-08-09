export const sliderVariants = {
  moveToNext: {},
  moveToCurrent: (imageWidth: number, index: number) => ({
    x: -imageWidth * index,
    transition: { type: 'spring', duration: 0.8, bounce: 0.2 },
  }),
  moveToPrevious: {},
};
