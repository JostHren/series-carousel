import { useMemo, useState } from "react";
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
    <input
      className="mt-10 p-1 border-2"
      type="text"
      value={internalValue}
      onChange={onChange}
      placeholder={SEARCH_INPUT_PLACEHOLDER}
    />
  );
};
