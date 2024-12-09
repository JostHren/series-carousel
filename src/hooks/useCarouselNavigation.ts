import { useEffect, useState } from "react";
import { CarouselProps } from "../components";

export interface useCarouselNavigationProps {
  currentIndex: number;
  isErrorSlide: boolean;
  nextSlide: () => void;
  prevSlide: () => void;
}

export const useCarouselNavigation = ({
  data,
  slideInterval = 3000,
  slidesPerPage = 1,
}: CarouselProps): useCarouselNavigationProps => {
  const [isRandom, setIsRandom] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);
  const isErrorSlide = data.some((slide) => slide.show?.id === 0o0);

  const nextSlide = () => {
    if (currentIndex === Number(data.length) - slidesPerPage) return;

    setCurrentIndex(currentIndex + 1);

    if (isRandom) setIsRandom(false);
  };

  const prevSlide = () => {
    if (currentIndex === 0) return;

    setCurrentIndex(currentIndex - 1);

    if (isRandom) setIsRandom(false);
  };

  useEffect(() => {
    const randomSlide = () => {
      const nextIndex = Math.floor(Math.random() * data.length);

      setCurrentIndex(nextIndex);
    };

    const timer = setInterval(randomSlide, slideInterval);

    if (!isRandom) clearInterval(timer);

    return () => clearInterval(timer);
  }, [currentIndex, data.length, isRandom, slideInterval]);

  return { currentIndex, isErrorSlide, nextSlide, prevSlide };
};
