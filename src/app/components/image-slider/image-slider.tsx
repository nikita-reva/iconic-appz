import { AnimateSharedLayout, PanInfo, useAnimation } from 'framer-motion';
import { useEffect, useState, useRef, Fragment } from 'react';
import { CgArrowRightR, CgArrowLeftR } from 'react-icons/cg';

import {
  Image,
  ImagesContainer,
  ImagesCounterContainer,
  ImagesCounterElement,
  ImagesCounterElementOutline,
  ImageSliderContainer,
  NextImage,
  PreviousImage,
} from './image-slider-styles';

interface ImageSliderProps {
  aspectRatio?: number;
  rounded?: boolean;
}

const images = [
  '/assets/images/img1.jpg',
  '/assets/images/img2.jpg',
  '/assets/images/img3.jpg',
];

export const ImageSlider: React.FC<ImageSliderProps> = ({
  aspectRatio = 0,
  rounded = false,
}) => {
  const imagesControls = useAnimation();
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [imageWidth, setImageWidth] = useState<number>(0);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [hovered, setHovered] = useState<boolean>(false);

  // Handling resize
  useEffect(() => {
    const resizeHandler = () => {
      setImageWidth(
        containerRef.current?.clientWidth
          ? containerRef.current?.clientWidth
          : 0
      );
      setCurrentIndex(0);
      imagesControls.start({
        x: -imageWidth * currentIndex,
        transition: { type: 'tween', duration: 0 },
      });
    };

    window.addEventListener('resize', resizeHandler);

    return () => window.removeEventListener('resize', resizeHandler);
  }, [
    containerRef.current?.clientWidth,
    imageWidth,
    currentIndex,
    imagesControls,
  ]);

  // Slide navigation
  const switchImage = (direction: number, index: number = 0) => {
    switch (direction) {
      case 0:
        setCurrentIndex(index);
        return imagesControls.start({
          x: -imageWidth * index,
          transition: { type: 'spring', duration: 0.8, bounce: 0.2 },
        });

      case -1:
        if (currentIndex === 0) return;
        setCurrentIndex(currentIndex - 1);
        return imagesControls.start({
          x: -imageWidth * (currentIndex - 1),
          transition: { type: 'spring', duration: 0.8, bounce: 0.3 },
        });

      case 1:
        if (currentIndex >= images.length - 1) return;
        setCurrentIndex(currentIndex + 1);
        return imagesControls.start({
          x: -imageWidth * (currentIndex + 1),
          transition: { type: 'spring', duration: 0.8, bounce: 0.3 },
        });
      default:
        return;
    }
  };

  // Keyboard controls
  const keyHandler = (event: any) => {
    if (hovered) {
      if (event.code === 'ArrowRight') switchImage(1);
      if (event.code === 'ArrowLeft') switchImage(-1);
    }
  };
  document.onkeydown = keyHandler;

  // Touch controls
  const onPanEnd = (
    event: MouseEvent | TouchEvent | PointerEvent,
    info: PanInfo
  ) => {
    info.velocity.x > 0 ? switchImage(-1) : switchImage(1);
  };

  return (
    <ImageSliderContainer
      ref={containerRef}
      onPanEnd={onPanEnd}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      $rounded={rounded}
    >
      <ImagesContainer
        animate={imagesControls}
        layout
        drag="x"
        dragConstraints={{ left: 0, right: 0 }}
        dragElastic={0.1}
      >
        {images.map((image, index) => (
          <Image
            key={index}
            onLoad={(e) => setImageWidth(e.currentTarget.clientWidth)}
            src={image}
            $heigth={imageWidth * (1 / aspectRatio)}
          />
        ))}
      </ImagesContainer>
      <PreviousImage
        onClick={() => {
          switchImage(-1);
        }}
      >
        <CgArrowLeftR />
      </PreviousImage>
      <NextImage
        onClick={() => {
          switchImage(1);
        }}
      >
        <CgArrowRightR />
      </NextImage>
      <ImagesCounterContainer>
        <AnimateSharedLayout>
          {images.map((image, index) => (
            <Fragment key={index}>
              <ImagesCounterElement
                $width={imageWidth}
                onClick={() => switchImage(0, index)}
              >
                {index === currentIndex && (
                  <ImagesCounterElementOutline
                    $width={imageWidth}
                    layoutId="outline"
                    initial={false}
                    transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                  />
                )}
              </ImagesCounterElement>
            </Fragment>
          ))}
        </AnimateSharedLayout>
      </ImagesCounterContainer>
    </ImageSliderContainer>
  );
};
