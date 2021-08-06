import { useAnimation } from 'framer-motion';
import { useEffect, useState } from 'react';
import { useRef } from 'react';
import { CgArrowRightR, CgArrowLeftR } from 'react-icons/cg';

import {
  Image,
  ImagesContainer,
  ImageSliderContainer,
  NextImage,
  PreviousImage,
} from './image-slider-styles';

interface ImageSliderProps {}

const images = [
  '/assets/images/img1.jpg',
  '/assets/images/img2.jpg',
  '/assets/images/img3.jpg',
];

export const ImageSlider: React.FC<ImageSliderProps> = () => {
  const imagesControls = useAnimation();
  const imageRef = useRef<HTMLImageElement | null>(null);
  const [imageWidth, setImageWidth] = useState<number>(0);
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  useEffect(() => {
    const resizeHandler = () => {
      setImageWidth(
        imageRef.current?.clientWidth ? imageRef.current?.clientWidth : 0
      );
      imagesControls.start({
        x: -imageWidth * currentIndex,
        transition: { type: 'tween', duration: 0 },
      });
    };

    window.addEventListener('resize', resizeHandler);

    return () => window.removeEventListener('resize', resizeHandler);
  }, [imageRef.current?.clientWidth, imageWidth, currentIndex, imagesControls]);

  return (
    <ImageSliderContainer>
      <ImagesContainer animate={imagesControls}>
        {images.map((image, index) => (
          <Image
            key={index}
            onLoad={(e) => setImageWidth(e.currentTarget.clientWidth)}
            ref={imageRef}
            src={image}
          />
        ))}
      </ImagesContainer>
      <PreviousImage
        onClick={() => {
          if (currentIndex === 0) return;
          setCurrentIndex(currentIndex - 1);
          imagesControls.start({
            x: -imageWidth * (currentIndex - 1),
            transition: { type: 'spring', duration: 1, bounce: 0.5 },
          });
        }}
      >
        <CgArrowLeftR />
      </PreviousImage>
      <NextImage
        onClick={() => {
          if (currentIndex === images.length - 1) return;
          setCurrentIndex(currentIndex + 1);
          imagesControls.start({
            x: -imageWidth * (currentIndex + 1),
            transition: { type: 'spring', duration: 1, bounce: 0.5 },
          });
        }}
      >
        <CgArrowRightR />
      </NextImage>
    </ImageSliderContainer>
  );
};
