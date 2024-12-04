import { SearchInput } from "./components";

function App() {
  return (
    <div className="max-w-full flex justify-around">
      <div className="flex flex-col place-self-center">
        <h1 className="text-3xl font-bold underline">Series Carousel</h1>
        <SearchInput />
      </div>
    </div>
  );
}

export default App;
