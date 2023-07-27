import { useState } from "react";

type Props = {
  classStyle?: string;
  placeholder?: string;
  searchValue?: string;
  setSearchValue?: (searchValue: string) => void;
  applySearch?: () => void;
};

const searchBar = ({
  searchValue,
  setSearchValue,
  applySearch,
  classStyle = "px-8 py-4",
  placeholder,
}: Props) => {
  const [localSearchValue, setLocalSearchValue] = useState(searchValue);
  return (
    <div
      className={`flex w-full items-center rounded-full bg-white sm:w-1/2 ${classStyle}`}
    >
      <input
        className="flex-grow text-ellipsis bg-transparent focus:outline-none"
        type="text"
        placeholder={
          placeholder || "Enter an address, neighborhood, city, or ZIP code"
        }
        onChange={(event) =>
          setSearchValue && setSearchValue(event.target.value)
        }
        value={searchValue}
      />
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className={`h-6 w-6 cursor-pointer hover:text-blue-500`}
        onClick={() => {
          applySearch && applySearch();
        }}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
        />
      </svg>
    </div>
  );
};

export default searchBar;
