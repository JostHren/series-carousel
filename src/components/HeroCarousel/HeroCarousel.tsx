import { useCarouselNavigation } from "../../hooks";
import { TvMazeSeries } from "../../store/services/types";

export interface CarouselProps {
  data: Partial<TvMazeSeries>[];
  slideInterval?: number;
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

const SeriesCarouselSlide = ({ slide }: CarouselSlideProps): JSX.Element => {
  return (
    <div
      className="min-w-full h-[50vh] sm:h-[90vh] relative"
      key={slide.show?.id}
    >
      <div className="min-w-full relative">
        <div className="absolute bottom-0 m-2 text-yellow-400">
          <div className="bg-black text-lg font-extrabold mb-2 p-1 z-10 ">
            {slide.show?.name}
          </div>
          <div className="bg-black w-min truncate mb-1 p-1 z-10 ">
            {slide.score
              ? `Rating: ${Math.round(slide.score * 100) / 100}`
              : null}
          </div>
          <div className="bg-black w-min truncate p-1 z-10">
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
}: CarouselProps): JSX.Element => {
  const { isErrorSlide, currentIndex } = useCarouselNavigation({
    data,
    slideInterval,
  });

  return (
    <div className="sm:m-auto basis-full sm:basis-4/6 relative bg-black overflow-hidden">
      {!isErrorSlide && <HeroCarouselLabel />}
      <div
        className="flex min-w-full transition-transform duration-500"
        style={{
          transform: `translateX(-${currentIndex * 100}%)`,
        }}
      >
        {data.map((slide) => (
          <SeriesCarouselSlide slide={slide} key={slide.show?.id} />
        ))}
      </div>
    </div>
  );
};
