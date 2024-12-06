import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

export interface SeriesQueryState {
  name?: string;
}

const initialState: SeriesQueryState = {};

export const seriesQuerySlice = createSlice({
  name: "seriesQuery",
  initialState,
  reducers: {
    updateSeriesQueryName: (state, action: PayloadAction<string>) => {
      state.name = action.payload;

      return state;
    },
  },
});

export const { updateSeriesQueryName } = seriesQuerySlice.actions;

export const selectSeriesQuery = () => (state: RootState) =>
  state.seriesQuery.name;

export default seriesQuerySlice.reducer;
