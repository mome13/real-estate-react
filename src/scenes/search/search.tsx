import SearchBar from "@/components/searchBar";
import { container, separator } from "@/styles/common";
import Dropdown from "@/components/dropdown";
import { useEffect, useState } from "react";
import { primaryBtn } from "@/styles/common";
import { HouseIcon, BathIcon, BedIcon } from "@/assets/house";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { useNavigate, useSearchParams } from "react-router-dom";
import { IProperty } from "../property";
import { useSearchQuery } from "@/hooks/useSearchQuery";

type Props = {};

const FilterContent = ({
  title,
  children,
  style,
  headerStyle,
  bodyStyle,
}: {
  title: string;
  children: JSX.Element | JSX.Element[];
  style?: string;
  headerStyle?: string;
  bodyStyle?: string;
}) => {
  return (
    <div className={`flex flex-col ${style}`}>
      <div
        className={`mb-2 w-full rounded-t-md bg-gray-200 px-4 py-2 text-gray-500 ${headerStyle}`}
      >
        {title}
      </div>
      <div className={`${bodyStyle}`}>{children}</div>
    </div>
  );
};
const PriceRangeFilter = ({
  searchParams,
  setSearchParams,
}: {
  searchParams: URLSearchParams;
  setSearchParams: (data: any) => void;
}) => {
  const [minRent, setMinRent] = useState(
    searchParams.get("minRent") as string | ""
  );
  const [maxRent, setMaxRent] = useState(
    searchParams.get("maxRent") as string | ""
  );

  //     minRent,
  //     maxRent,
  //     minPrice,
  //     maxPrice,
  const applyPriceRange = () => {
    if (minRent) {
      searchParams.set("minRent", minRent);
    } else {
      searchParams.delete("minRent");
    }

    if (maxRent) {
      searchParams.set("maxRent", maxRent);
    } else {
      searchParams.delete("maxRent");
    }
    setSearchParams(searchParams);
  };

  return (
    <FilterContent title="Rent">
      <div className="flex flex-col px-4 pb-2">
        <label htmlFor="min-price">Min Rent($):</label>
        <input
          type="text"
          placeholder="200"
          id="min-price"
          className="mb-4 rounded-md border-[1px] border-gray-200 px-2 py-1 focus:outline-none"
          onChange={(event) => setMinRent(event.target.value)}
          defaultValue={minRent}
        />

        <label htmlFor="max-price">Max Rent($):</label>
        <input
          type="text"
          placeholder="500"
          id="max-price"
          className="mb-4 rounded-md border-[1px] border-gray-200 px-2 py-1 focus:outline-none"
          onChange={(event) => setMaxRent(event.target.value)}
          defaultValue={maxRent}
        />

        <div className="mb-4 w-full">
          <button
            onClick={applyPriceRange}
            className={`${primaryBtn} w-full justify-center py-3`}
          >
            Apply
          </button>
        </div>
      </div>
    </FilterContent>
  );
};

const HorizontalSelect = ({
  selectButtons,
  selected,
  setSelected,
}: {
  selectButtons: Array<{ text: string }>;
  selected: any;
  setSelected: (index: number) => void;
}) => {
  return (
    <div className="w-min-56 flex w-max rounded-md border-[1px] border-gray-200 bg-white">
      {selectButtons.map((buttonDetail, index) => {
        return (
          <button
            onClick={() => setSelected(index === selected ? -1 : index)}
            className={`px-4 py-3 hover:bg-gray-100 ${
              index === selected ? "bg-gray-100" : "bg-transparent"
            }`}
            key={index}
          >
            {buttonDetail.text}
          </button>
        );
      })}
    </div>
  );
};

const SaleOrRent = ({
  searchParams,
  setSearchParams,
}: {
  searchParams: URLSearchParams;
  setSearchParams: (data: any) => void;
}) => {
  const selectButtons: Array<{ text: string }> = [
    {
      text: "Any",
    },
    {
      text: "Sale",
    },
    {
      text: "Rent",
    },
  ];
  const typeSearchParams = searchParams.get("type");
  const defaultValue = selectButtons.findIndex(({ text }) => {
    return text.toLowerCase() === (typeSearchParams ?? "").toLowerCase();
  });

  const [selected, setSelected] = useState(
    defaultValue >= 0 ? defaultValue : 0
  );
  return (
    <div>
      <FilterContent title="Contract Type" style="pb-4" bodyStyle="px-4 mt-1">
        <HorizontalSelect
          selectButtons={selectButtons}
          selected={selected}
          setSelected={setSelected}
        />
      </FilterContent>
      <div className="mb-4 w-full px-4">
        <button
          onClick={() => {
            if (selected > 0) {
              searchParams.set(
                "type",
                selectButtons[selected].text.toLowerCase()
              );
            } else {
              searchParams.delete("type");
            }
            setSearchParams(searchParams);
          }}
          className={`${primaryBtn} w-full justify-center py-3`}
        >
          Apply
        </button>
      </div>
    </div>
  );
};

const BedsBathFilter = ({
  searchParams,
  setSearchParams,
}: {
  searchParams: URLSearchParams;
  setSearchParams: (data: any) => void;
}) => {
  const [bedSelected, setBedSelected] = useState(
    (() => {
      const defaultBedrooms = searchParams.get("bedrooms");
      if (defaultBedrooms && +defaultBedrooms > 0 && +defaultBedrooms < 6) {
        return +defaultBedrooms;
      } else {
        return 0;
      }
    })()
  );
  const [bathSelected, setBathSelected] = useState(
    (() => {
      const defaultBathrooms = searchParams.get("bathrooms");
      if (defaultBathrooms && +defaultBathrooms > 0 && +defaultBathrooms < 6) {
        return +defaultBathrooms;
      } else {
        return 0;
      }
    })()
  );
  const selectButtons: Array<{ text: string }> = [
    {
      text: "Any",
    },
    {
      text: "+1",
    },
    {
      text: "+2",
    },
    {
      text: "+3",
    },
    {
      text: "+4",
    },
    {
      text: "+5",
    },
  ];

  const applyBedsAndBath = () => {
    if (bedSelected > 0) {
      searchParams.set(
        "bedrooms",
        selectButtons[bedSelected].text.substring(1)
      );
    } else {
      searchParams.delete("bedrooms");
    }

    if (bathSelected > 0) {
      searchParams.set(
        "bathrooms",
        selectButtons[bathSelected].text.substring(1)
      );
    } else {
      searchParams.delete("bathrooms");
    }

    setSearchParams(searchParams);
  };

  return (
    <div>
      <FilterContent
        title="Number of Bedrooms"
        style="pb-4"
        bodyStyle="px-4 mt-1"
      >
        <h4 className="mb-1 text-black">Bedrooms</h4>
        <HorizontalSelect
          selectButtons={selectButtons}
          selected={bedSelected}
          setSelected={setBedSelected}
        />
      </FilterContent>

      <FilterContent
        title="Number of Baths"
        headerStyle="rounded-t-none"
        style="pb-4"
        bodyStyle="px-4 mt-1"
      >
        <h4 className="text-black">Baths</h4>
        <HorizontalSelect
          selectButtons={selectButtons}
          selected={bathSelected}
          setSelected={setBathSelected}
        />
      </FilterContent>

      <div className="mb-4 w-full px-4">
        <button
          onClick={applyBedsAndBath}
          className={`${primaryBtn} w-full justify-center py-3`}
        >
          Apply
        </button>
      </div>
    </div>
  );
};

const SearchItem = (property: IProperty) => {
  const { price, imgUrl, area, address, bedrooms, bathrooms, parkings, _id } =
    property;
  const navigate = useNavigate();

  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,

    // These options are needed to round to whole numbers if that's what you want.
    //minimumFractionDigits: 0, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
    //maximumFractionDigits: 0, // (causes 2500.99 to be printed as $2,501)
  });

  const formatterSqm = new Intl.NumberFormat("en-US", {
    style: "decimal",
    maximumFractionDigits: 0,

    // These options are needed to round to whole numbers if that's what you want.
    //minimumFractionDigits: 0, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
    //maximumFractionDigits: 0, // (causes 2500.99 to be printed as $2,501)
  });

  return (
    <article
      onClick={() => {
        navigate(`/property/${_id}`, {
          state: property,
        });
      }}
      className=" flex min-h-[20rem] max-w-[30rem] cursor-pointer flex-col items-stretch rounded-xl border-[1px] border-gray-200 bg-inherit p-4 transition-all hover:border-gray-400"
    >
      <div className=" grow">
        <div className="">
          <img className=" w-full rounded-xl" src={imgUrl} alt="" />
        </div>
        <h3 className="my-2 font-bold text-black">{address}</h3>
        <span className="font-semibold text-blue-500">
          {formatter.format(price)}
        </span>
        <span className="text-sm font-medium">/mo</span>
      </div>
      <div className={`${separator}`}></div>
      <div className="flex justify-between">
        <span className="flex items-baseline gap-2 text-gray-500">
          <BedIcon />
          <span className="text-gray-500">{bedrooms} bedroom</span>
        </span>
        <span className="flex items-center gap-2">
          <BathIcon />
          <span className="text-gray-500">{bathrooms} bathroom</span>
        </span>
        <span className="flex items-center gap-2">
          <HouseIcon />
          <span className="text-gray-500">{formatterSqm.format(area)} sqm</span>
        </span>
      </div>
    </article>
  );
};

const Search = (props: Props) => {
  let [searchParams, setSearchParams] = useSearchParams();
  const { isLoading, data } = useSearchQuery(searchParams.toString());
  const [address, setAddress] = useState(
    searchParams.get("address") as string | ""
  );

  const applySearchAddress = () => {
    if (address) {
      searchParams.set("address", address);
    } else {
      searchParams.delete("address");
    }

    setSearchParams(searchParams);
  };

  const searchResult: Array<IProperty> = [
    {
      price: 2500,
      imgUrl:
        "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&h=350",
      area: 313,
      address: "St Colin Primo 287",
      bedrooms: 3,
      bathrooms: 4,
      rent: 250,
      parkings: 2,
    },
    {
      price: 3100,
      imgUrl:
        "https://images.pexels.com/photos/3288102/pexels-photo-3288102.png?auto=compress&cs=tinysrgb&h=350",
      area: 812,
      address: "Miracle the Louwis 316",
      bedrooms: 5,
      bathrooms: 6,
      rent: 310,
      parkings: 3,
    },
    {
      price: 4000,
      imgUrl:
        "https://images.pexels.com/photos/3288103/pexels-photo-3288103.png?auto=compress&cs=tinysrgb&h=350",
      area: 1200,
      address: "Jacob SD ART 231",
      bedrooms: 6,
      bathrooms: 9,
      rent: 400,
      parkings: 4,
    },
    {
      price: 1200,
      imgUrl:
        "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&h=350",
      area: 108,
      address: "Marquest M2 257",
      bedrooms: 2,
      bathrooms: 2,
      rent: 120,
      parkings: 2,
    },
    {
      price: 5500,
      imgUrl:
        "https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&h=350",
      area: 1430,
      address: "Robin Jql 112",
      bedrooms: 5,
      bathrooms: 6,
      rent: 550,
      parkings: 5,
    },
    {
      price: 3100,
      imgUrl:
        "https://images.pexels.com/photos/210617/pexels-photo-210617.jpeg?auto=compress&cs=tinysrgb&h=350",
      area: 980,
      address: "KMS louise 11",
      bedrooms: 5,
      bathrooms: 12,
      rent: 310,
      parkings: 2,
    },
  ];

  return (
    <div>
      <Navbar />
      <div className="pt-8">
        {/* Search & Filters */}
        <section
          className={`${container} flex-col flex-wrap gap-y-4 sm:justify-between md:flex-row `}
        >
          <SearchBar
            searchValue={address ?? ""}
            setSearchValue={setAddress}
            applySearch={applySearchAddress}
            classStyle="px-4 py-0 border-[1px] border-gray-200 hover:border-gray-300 h-12"
          />
          {/* Filters */}
          <Dropdown title="Contract Type">
            <SaleOrRent
              searchParams={searchParams}
              setSearchParams={setSearchParams}
            />
          </Dropdown>

          <Dropdown title="Price Range">
            <PriceRangeFilter
              searchParams={searchParams}
              setSearchParams={setSearchParams}
            />
          </Dropdown>

          <Dropdown title="Beds & Baths" placement="bottom-left">
            <BedsBathFilter
              searchParams={searchParams}
              setSearchParams={setSearchParams}
            />
          </Dropdown>
        </section>

        <main className={`${container} py-8`}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))",
              width: "100%",
              gap: "2rem",
            }}
            className="items-stretch justify-start gap-8"
          >
            {isLoading ? (
              <div className=" min-h-[100px] w-full">
                <p>loading...</p>
              </div>
            ) : (
              data &&
              data.map(
                (
                  {
                    _id,
                    price,
                    rent,
                    imgUrl,
                    area,
                    address,
                    bedrooms,
                    bathrooms,
                    parkings,
                  },
                  index
                ) => {
                  return (
                    <SearchItem
                      _id={_id}
                      key={`${address}-${index}`}
                      price={price}
                      rent={rent}
                      imgUrl={imgUrl}
                      area={area}
                      address={address}
                      bedrooms={bedrooms}
                      bathrooms={bathrooms}
                      parkings={parkings}
                    />
                  );
                }
              )
            )}
          </div>
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default Search;
