import { useCarouselNavigation } from "../../hooks";
import { CarouselProps, CarouselSlideProps } from "../HeroCarousel";

const SeriesCarouselLabel = (): JSX.Element => {
  return (
    <div className="absolute border-red-900 border-4 rounded-md bg-slate-900 p-2 text-red-800 text-lg font-extrabold right-5 top-3 rotate-3 z-50 shadow-md">
      Everything else
    </div>
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
}: CarouselProps): JSX.Element => {
  const { isErrorSlide, currentIndex } = useCarouselNavigation({
    data,
    slideInterval,
  });

  return (
    <div className="rounded-lg m-2 overflow-hidden relative h-[37vh] sm:h-[90vh]">
      {!isErrorSlide && <SeriesCarouselLabel />}
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