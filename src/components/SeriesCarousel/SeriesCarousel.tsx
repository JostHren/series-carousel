import { useCarouselNavigation, useCarouselNavigationProps } from "../../hooks";
import { CarouselProps, CarouselSlideProps } from "../HeroCarousel";

const SeriesCarouselLabel = (): JSX.Element => {
  return (
    <div className="absolute border-red-900 border-4 rounded-md bg-slate-900 p-2 text-red-800 text-lg font-extrabold right-5 top-3 rotate-3 z-50 shadow-md">
      Everything else
    </div>
  );
};

const SeriesCarouselNavigation = ({
  nextSlide,
  prevSlide,
}: Partial<useCarouselNavigationProps>): JSX.Element | null => {
  if (!nextSlide || !prevSlide) return null;

  return (
    <>
      <button
        className="absolute bg-slate-800 bg-opacity-0 hover:bg-opacity-30 top-0 left-0 right-0 z-10 h-10"
        onClick={() => prevSlide()}
      >
        <svg
          className="ml-2"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="#F6E05E"
          height={"50%"}
        >
          <path d="M3.29 15.71c.39.39 1.02.39 1.41 0l7.29-7.29 7.29 7.29a.996 .996 0 1 0 1.41-1.41l-7.98-8.01c-.2-.2-.45-.29-.71-.29s-.51.1-.71.29l-8 8a1 1 0 0 0 0 1.41Z"></path>
        </svg>
      </button>
      <button
        className="absolute bg-slate-800 bg-opacity-0 hover:bg-opacity-30 bottom-0 left-0 right-0 h-10 z-10"
        onClick={() => nextSlide()}
      >
        <svg
          className="ml-2"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="#F6E05E"
          height={"50%"}
        >
          <path d="M20.71 8.29a1 1 0 0 0-1.41 0l-7.29 7.29-7.29-7.29A.996 .996 0 1 0 3.31 9.7l8 8c.2.2.45.29.71.29s.51-.1.71-.29l8-8a1 1 0 0 0 0-1.41Z"></path>
        </svg>
      </button>
    </>
  );
};

const SeriesCarouselSlide = ({ slide }: CarouselSlideProps): JSX.Element => {
  return (
    <div className="flex mb-1 p-2 flex-row h-[18vh] sm:h-[22vh] w-full bg-slate-700 rounded-lg">
      <div className="basis-1/4 sm:basis-1/3 flex-grow-0 flex-shrink-0">
        <img
          src={slide.show?.image?.original ?? "./not_found.png"}
          alt={slide.show?.name}
          className="h-full m-auto"
        />
      </div>
      <div className="basis-3/4 sm:basis-2/3 flex-grow-0 flex-shrink-0 pl-4 text-yellow-400 truncate">
        <div className="text-lg font-extrabold truncate">
          {slide.show?.name}
        </div>
        <div>
          {slide.score
            ? `Rating: ${Math.round(slide.score * 100) / 100}`
            : null}
        </div>
        <div>{slide.show?.status ? `Status: ${slide.show.status}` : null}</div>
      </div>
    </div>
  );
};

export const SeriesCarousel = ({
  data,
  slideInterval = 3000,
  slidesPerPage = 2,
}: CarouselProps): JSX.Element => {
  const { isErrorSlide, currentIndex, prevSlide, nextSlide } =
    useCarouselNavigation({
      data,
      slideInterval,
      slidesPerPage,
    });

  return (
    <div className="rounded-lg m-2 overflow-hidden relative h-[37vh] sm:h-[90vh]">
      {!isErrorSlide && <SeriesCarouselLabel />}
      <SeriesCarouselNavigation prevSlide={prevSlide} nextSlide={nextSlide} />
      <div
        className="flex flex-col transition-transform duration-500 p-1"
        style={{
          transform: `translateY(-${currentIndex * 14.25}%)`,
        }}
      >
        {data.map((slide) => (
          <SeriesCarouselSlide slide={slide} key={slide.show?.id} />
        ))}
      </div>
    </div>
  );
};
