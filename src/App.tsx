import { SearchInput } from "./components";

function App() {
  return (
    <>
      <div className="flex flex-col sm:flex-row bg-gray-900 p-2 content-center">
        <div className="font-mono basis-1/4  bg-yellow-600 text-black  rounded drop-shadow-sm mb-1 sm:mb-0 mr-0 sm:mr-2">
          <div className="font-mono text-center	 text-gray-800 text-lg truncate font-bold p-1 pl-2 pointer-events-none">
            Series Carousel
          </div>
        </div>
        <SearchInput />
      </div>
      <div className="h-full bg-gray-950"></div>
    </>
  );
}

export default App;
