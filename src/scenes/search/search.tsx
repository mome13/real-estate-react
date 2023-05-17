import SearchBar from "@/components/searchBar";
import { container } from "@/styles/common";
import Dropdown from "@/components/dropdown";
import { ReactComponentElement, useState } from "react";
import { primaryBtn } from "@/styles/common";
import { HouseIcon, BathIcon, BedIcon } from "@/assets/house";

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
const PriceRangeFilter = (props: {}) => {
  return (
    <FilterContent title="Price">
      <div className="flex flex-col px-4 pb-2">
        <label htmlFor="min-price">Min Price($):</label>
        <input
          type="text"
          placeholder="200"
          id="min-price"
          className="mb-4 rounded-md border-[1px] border-gray-200 px-2 py-1 focus:outline-none"
        />

        <label htmlFor="max-price">Max Price($):</label>
        <input
          type="text"
          placeholder="500"
          id="max-price"
          className="mb-4 rounded-md border-[1px] border-gray-200 px-2 py-1 focus:outline-none"
        />

        <div className="mb-4 w-full">
          <button className={`${primaryBtn} w-full justify-center py-3`}>
            Apply
          </button>
        </div>
      </div>
    </FilterContent>
  );
};

const HorizontalSelect = ({
  selectButtons,
  defaultSelect,
}: {
  selectButtons: Array<{ text: string }>;
  defaultSelect?: number;
}) => {
  const [selected, setSelected] = useState(defaultSelect ?? -1);

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

const SaleOrRent = (props: {}) => {
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
  return (
    <div>
      <FilterContent title="Contract Type" style="pb-4" bodyStyle="px-4 mt-1">
        <HorizontalSelect selectButtons={selectButtons} defaultSelect={0} />
      </FilterContent>
      <div className="mb-4 w-full px-4">
        <button className={`${primaryBtn} w-full justify-center py-3`}>
          Apply
        </button>
      </div>
    </div>
  );
};

const BedsBathFilter = (props: {}) => {
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

  return (
    <div>
      <FilterContent
        title="Number of Bedrooms"
        style="pb-4"
        bodyStyle="px-4 mt-1"
      >
        <h4 className="mb-1 text-black">Bedrooms</h4>
        <HorizontalSelect selectButtons={selectButtons} defaultSelect={0} />
      </FilterContent>

      <FilterContent
        title="Number of Baths"
        headerStyle="rounded-t-none"
        style="pb-4"
        bodyStyle="px-4 mt-1"
      >
        <h4 className="text-black">Baths</h4>
        <HorizontalSelect selectButtons={selectButtons} defaultSelect={0} />
      </FilterContent>

      <div className="mb-4 w-full px-4">
        <button className={`${primaryBtn} w-full justify-center py-3`}>
          Apply
        </button>
      </div>
    </div>
  );
};

const SearchItem = ({
  price,
  imgUrl,
  area,
  address,
  bedrooms,
  bathrooms,
}: {
  price: string;
  imgUrl: string;
  address: string;
  bedrooms: number;
  bathrooms: number;
  area: string;
}) => {
  return (
    <article className=" flex min-h-[20rem] cursor-pointer flex-col items-stretch rounded-xl border-[1px] border-gray-200 bg-inherit p-4 transition-all hover:border-gray-400">
      <div className=" grow">
        <div className="">
          <img className=" rounded-xl" src={imgUrl} alt="" />
        </div>
        <h3 className="my-2 font-bold text-black">{address}</h3>
        <span className="font-semibold text-blue-500">{price}</span>
        <span className="text-sm font-medium">/mo</span>
      </div>
      <div className=" my-4 h-[1px] bg-slate-200"></div>
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
          <span className="text-gray-500">{area} sqm</span>
        </span>
      </div>
    </article>
  );
};

const Search = (props: Props) => {
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

  const searchResult = [
    {
      price: 2500,
      imgUrl:
        "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&h=350",
      area: 313,
      address: "St Colin Primo 287",
      bedrooms: 3,
      bathrooms: 4,
    },
    {
      price: 3100,
      imgUrl:
        "https://images.pexels.com/photos/3288102/pexels-photo-3288102.png?auto=compress&cs=tinysrgb&h=350",
      area: 812,
      address: "Miracle the Louwis 316",
      bedrooms: 5,
      bathrooms: 6,
    },
    {
      price: 4000,
      imgUrl:
        "https://images.pexels.com/photos/3288103/pexels-photo-3288103.png?auto=compress&cs=tinysrgb&h=350",
      area: 1200,
      address: "Jacob SD ART 231",
      bedrooms: 6,
      bathrooms: 9,
    },
    {
      price: 1200,
      imgUrl:
        "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&h=350",
      area: 108,
      address: "Marquest M2 257",
      bedrooms: 2,
      bathrooms: 2,
    },
    {
      price: 5500,
      imgUrl:
        "https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&h=350",
      area: 1430,
      address: "Robin Jql 112",
      bedrooms: 5,
      bathrooms: 6,
    },
    {
      price: 3100,
      imgUrl:
        "https://images.pexels.com/photos/210617/pexels-photo-210617.jpeg?auto=compress&cs=tinysrgb&h=350",
      area: 980,
      address: "KMS louise 11",
      bedrooms: 5,
      bathrooms: 12,
    },
  ];

  return (
    <div className="pt-8">
      {/* Search & Filters */}
      <section className={`${container} justify-between`}>
        <SearchBar classStyle="px-4 py-0 border-[1px] border-gray-200 hover:border-gray-300 h-12" />
        {/* Filters */}
        <Dropdown title="Contract Type">
          <SaleOrRent />
        </Dropdown>

        <Dropdown title="Price Range">
          <PriceRangeFilter />
        </Dropdown>

        <Dropdown title="Beds & Baths" placement="bottom-left">
          <BedsBathFilter />
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
          className="items-start justify-start gap-8"
        >
          {searchResult.map(
            ({ price, imgUrl, area, address, bedrooms, bathrooms }, index) => {
              return (
                <SearchItem
                  key={`${address}-${index}`}
                  price={formatter.format(price)}
                  imgUrl={imgUrl}
                  area={formatterSqm.format(area)}
                  address={address}
                  bedrooms={bedrooms}
                  bathrooms={bathrooms}
                />
              );
            }
          )}
        </div>
      </main>
    </div>
  );
};

export default Search;
