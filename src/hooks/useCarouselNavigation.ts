import { useEffect, useState } from "react";
import { CarouselProps } from "../components";

interface useCarouselNavigationProps {
  currentIndex: number;
  isErrorSlide: boolean;
}

export const useCarouselNavigation = ({
  data,
  slideInterval,
}: CarouselProps): useCarouselNavigationProps => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const isErrorSlide = data.some((slide) => slide.show?.id === 0o0);

  useEffect(() => {
    const randomSlide = () => {
      const nextIndex = Math.floor(Math.random() * data.length);

      setCurrentIndex(nextIndex);
    };

    const timer = setInterval(randomSlide, slideInterval);

    return () => clearInterval(timer);
  }, [currentIndex, data.length, slideInterval]);

  return { currentIndex, isErrorSlide };
};
