import { useState } from "react";
import { useSearchParams } from "react-router";

const SEARCH_INPUT_PLACEHOLDER = "Search Here!";

export const SearchInput = (): JSX.Element => {
  const [searchParams, setSearchParams] = useSearchParams();
  const searchValue = searchParams.get("search") || "";
  const [internalValue, setInternalValue] = useState(searchValue);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInternalValue(event.target.value);

    const params = new URLSearchParams();
    params.set("search", event.target.value);
    setSearchParams(params, {
      preventScrollReset: true,
    });
  };

  return (
    <input
      className="mt-10 p-1 border-2"
      type="text"
      value={internalValue}
      onChange={handleInputChange}
      placeholder={SEARCH_INPUT_PLACEHOLDER}
    />
  );
};
