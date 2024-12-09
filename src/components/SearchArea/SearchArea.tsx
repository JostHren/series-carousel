import { SearchInput } from "../SearchInput";

export const SearchArea = (): JSX.Element => {
  return (
    <div className="flex flex-col sm:flex-row bg-gray-900 p-2 content-center">
      <div className="basis-1/4  bg-yellow-400 text-black  rounded  mb-1 sm:mb-0 mr-0 sm:mr-2">
        <div className="text-center	 text-gray-800 text-lg truncate font-bold p-1 pl-2 pointer-events-none">
          Series Carousel
        </div>
      </div>
      <SearchInput />
    </div>
  );
};
