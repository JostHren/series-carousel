import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { TvMazeSeries } from "./types";

export const seriesApi = createApi({
  reducerPath: "seriesApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://api.tvmaze.com/search/" }),
  endpoints: (builder) => ({
    getSeriesByName: builder.query<TvMazeSeries[], string>({
      query: (name) => `shows?q=/${name}`,
    }),
  }),
});

export const { useGetSeriesByNameQuery } = seriesApi;
