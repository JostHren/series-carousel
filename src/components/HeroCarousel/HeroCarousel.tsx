import { useCarouselNavigation, useCarouselNavigationProps } from "../../hooks";
import { TvMazeSeries } from "../../store/services/types";

export interface CarouselProps {
  data: Partial<TvMazeSeries>[];
  slideInterval?: number;
  slidesPerPage?: number;
}

export interface CarouselSlideProps {
  slide: Partial<TvMazeSeries>;
}

const HeroCarouselLabel = (): JSX.Element => {
  return (
    <div className="absolute border-red-900 border-4 rounded-md bg-slate-900 p-2 text-red-800 text-lg font-extrabold left-5 top-3 -rotate-6 z-50 shadow-md">
      Random 3
    </div>
  );
};

const HeroCarouselNavigation = ({
  nextSlide,
  prevSlide,
}: Partial<useCarouselNavigationProps>): JSX.Element | null => {
  if (!nextSlide || !prevSlide) return null;

  return (
    <>
      <button
        className="absolute bg-slate-800 bg-opacity-0 hover:bg-opacity-30 top-0 bottom-0 left-0 z-10 w-20"
        onClick={() => prevSlide()}
      >
        <svg
          className="m-auto"
          width={"50%"}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="#F6E05E"
        >
          <path d="M15.71 20.71a1 1 0 0 0 0-1.41l-7.29-7.29 7.29-7.29a.996 .996 0 1 0-1.41-1.41l-8.01 7.98c-.2.2-.29.45-.29.71s.1.51.29.71l8 8c.39.39 1.02.39 1.41 0Z"></path>
        </svg>
      </button>
      <button
        className="absolute bg-slate-800 bg-opacity-0 hover:bg-opacity-30 top-0 bottom-0 right-0 w-20 z-10"
        onClick={() => nextSlide()}
      >
        <svg
          className="m-auto"
          width={"50%"}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="#F6E05E"
        >
          <path d="M8.29 3.29a1 1 0 0 0 0 1.41l7.29 7.29-7.29 7.29a.996.996 0 1 0 1.41 1.41l8-8c.2-.2.29-.45.29-.71s-.1-.51-.29-.71L9.71 3.29a1 1 0 0 0-1.41 0Z"></path>
        </svg>
      </button>
    </>
  );
};

const HeroCarouselSlide = ({ slide }: CarouselSlideProps): JSX.Element => {
  return (
    <div
      className="min-w-full h-[50vh] sm:h-[90vh] relative"
      key={slide.show?.id}
    >
      <div className="min-w-full relative">
        <div className="absolute bottom-0 m-2 text-yellow-400">
          <div className="bg-black text-lg font-extrabold mb-2 p-1 z-30 ">
            {slide.show?.name}
          </div>
          <div className="bg-black w-min truncate mb-1 p-1 z-30 ">
            {slide.score
              ? `Rating: ${Math.round(slide.score * 100) / 100}`
              : null}
          </div>
          <div className="bg-black w-min truncate p-1 z-30">
            {slide.show?.status ? `Status: ${slide.show.status}` : null}{" "}
          </div>
        </div>
        <div
          className="m-auto h-[50vh] sm:h-[90vh]"
          style={{
            backgroundImage: `url(${
              slide.show?.image?.original ?? "./not_found.png"
            })`,
            backgroundPosition: "center",
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
          }}
        ></div>
      </div>
    </div>
  );
};

export const HeroCarousel = ({
  data,
  slideInterval = 3000,
  slidesPerPage = 1,
}: CarouselProps): JSX.Element => {
  const { isErrorSlide, currentIndex, nextSlide, prevSlide } =
    useCarouselNavigation({
      data,
      slideInterval,
      slidesPerPage,
    });

  return (
    <div className="sm:m-auto basis-full sm:basis-4/6 relative bg-black overflow-hidden">
      {!isErrorSlide && <HeroCarouselLabel />}
      <HeroCarouselNavigation prevSlide={prevSlide} nextSlide={nextSlide} />
      <div
        className="flex min-w-full transition-transform duration-500"
        style={{
          transform: `translateX(-${currentIndex * 100}%)`,
        }}
      >
        {data.map((slide) => (
          <HeroCarouselSlide slide={slide} key={slide.show?.id} />
        ))}
      </div>
    </div>
  );
};
