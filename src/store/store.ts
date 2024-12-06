import { configureStore } from "@reduxjs/toolkit";
import seriesQueryReducer from "./series/seriesSlice";
import { seriesApi } from "./services/series";

export const store = configureStore({
  reducer: {
    [seriesApi.reducerPath]: seriesApi.reducer,
    seriesQuery: seriesQueryReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(seriesApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
