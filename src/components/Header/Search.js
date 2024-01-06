import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

export const Search = () => (
  <div className="hidden sm:flex w-[60%] h-10 items-center bg-yellow-300 hover:bg-yellow-400 rounded-md cursor-pointer">
    <input
      type="text"
      className="w-6 h-full p-2 rounded-l-md flex-grow flex-shrink outline-none"
    />
    <MagnifyingGlassIcon className="h-12 p-4" />
  </div>
);
