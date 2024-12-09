import { selectSeriesQuery } from "../../store/series/seriesSlice";
import { TvMazeSeries } from "../../store/services/types";
import { useGetSeriesByNameQuery } from "../../store/services/series";
import { useSelector } from "react-redux";
import { getRandomFromArray } from "../../helpers";
import { useMemo } from "react";
import { HeroCarousel } from "../HeroCarousel/HeroCarousel";
import { SeriesCarousel } from "../SeriesCarousel/SeriesCarousel";
import {
  LOADING,
  ERROR,
  NO_SEARCH_QUERY,
  NO_RESULTS,
  NOT_POPULAR,
} from "./constants";

export const CarouselArea = (): JSX.Element => {
  const query = useSelector(selectSeriesQuery());
  const { error, isLoading, data, isFetching } = useGetSeriesByNameQuery(
    query ?? ""
  );

  const threeRandomSeries: TvMazeSeries[] = useMemo(
    () => getRandomFromArray(data ?? [], 3),
    [data]
  );

  const restOfSeries = useMemo(
    () =>
      data?.filter((show) => {
        const checkForSameSeriesId = (series: TvMazeSeries): boolean =>
          series.show.id === show.show.id;

        return !threeRandomSeries.some(checkForSameSeriesId);
      }),
    [data, threeRandomSeries]
  );

  if (isFetching || isLoading) return <HeroCarousel data={LOADING} />;
  if (error) return <HeroCarousel data={ERROR} />;
  if (!query || query === "") return <HeroCarousel data={NO_SEARCH_QUERY} />;
  if (!data || data.length === 0) return <HeroCarousel data={NO_RESULTS} />;

  return (
    <div className="flex flex-col sm:flex-row justify-between min-w-fit">
      <HeroCarousel data={threeRandomSeries} />
      <SeriesCarousel
        data={
          !restOfSeries || restOfSeries?.length === 0
            ? NOT_POPULAR
            : restOfSeries
        }
      />
    </div>
  );
};
