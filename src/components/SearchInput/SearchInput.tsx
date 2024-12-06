import { useEffect, useMemo, useState } from "react";
import { debounce } from "lodash-es";
import { useSearchParams } from "react-router";
import { useDispatch } from "react-redux";
import { updateSeriesQueryName } from "../../store/series/seriesSlice";

const SEARCH_INPUT_PLACEHOLDER = "Search Here!";
const DEBOUNCE_TIME = 600;

export const SearchInput = (): JSX.Element => {
  const [searchParams, setSearchParams] = useSearchParams();
  const searchValue = searchParams.get("search") || "";
  const [internalValue, setInternalValue] = useState(searchValue);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(updateSeriesQueryName(searchValue));
  }, [dispatch, searchValue]);

  const handleInputChange = useMemo(
    () =>
      debounce((value: string) => {
        const params = new URLSearchParams();
        params.set("search", value);
        setSearchParams(params, {
          preventScrollReset: true,
        });

        dispatch(updateSeriesQueryName(value));
      }, DEBOUNCE_TIME),
    [dispatch, setSearchParams]
  );

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInternalValue(event.target.value);
    handleInputChange(event.target.value);
  };

  return (
    <div className="w-full max-w-2xl relative">
      <input
        className="h-full pl-2 min-h-9 w-full max-w-2xl border-3 rounded focus:outline-none focus:ring focus:ring-yellow-400"
        type="text"
        value={internalValue}
        onChange={onChange}
        placeholder={SEARCH_INPUT_PLACEHOLDER}
      />
      <div className="absolute inset-y-1 end-2 flex items-center pointer-events-none">
        <svg
          className="w-4 h-4 text-gray-500 dark:text-gray-400"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 20 20"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
          />
        </svg>
      </div>
    </div>
  );
};
