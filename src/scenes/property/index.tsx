import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import {
  container,
  separator,
  primaryBtn,
  secondaryBtn,
} from "@/styles/common";
import { MoneyIcon, ParkingIcon, AreaIcon } from "@/assets/commonIcons";
import { HouseIcon, BathIcon, BedIcon } from "@/assets/house";
import IconInterface from "@/assets/commonIcons";
import estimationImg from "@/assets/price-estimation.png";

type Props = {};
interface IPropertyFeature {
  title: string;
  IconComponent: React.FC<IconInterface>;
  value: string;
}

interface IProperty {
  price: number;
  rent: number;
  imgUrl: string;
  area: number;
  address: string;
  bedrooms: number;
  bathrooms: number;
  parkings: number;
}
const PropertyFeature = ({ title, IconComponent, value }: IPropertyFeature) => {
  return (
    <div>
      <div className="flex gap-1">
        <IconComponent width={18} />
        <span className="text-sm">{title}</span>
      </div>
      <p className={"text-gray-900"}>{value}</p>
    </div>
  );
};

const Property = (props: Props) => {
  const property = {
    price: 3100,
    imgUrl:
      "https://images.pexels.com/photos/3288102/pexels-photo-3288102.png?auto=compress&cs=tinysrgb&h=350",
    area: 812,
    address: "Miracle the Louwis 316",
    bedrooms: 5,
    bathrooms: 6,
    parking: 1,
  };
  return (
    <div>
      <Navbar />
      <main className="bg-slate-50 py-8">
        <section className={`${container} flex-col`}>
          <div
            className={` w-full rounded-xl border-[1px] border-slate-200 bg-white px-4 py-4`}
          >
            <div className={`flex flex-col gap-4 sm:flex-row`}>
              <div className=" w-auto sm:w-[350px]">
                <img className=" rounded-xl" src={property.imgUrl} alt="" />
              </div>
              <div className="flex grow flex-col ">
                <h1 className="text-2xl font-bold text-black">
                  {property.address}
                </h1>

                <div className="mt-4 grid grid-flow-row grid-cols-2 gap-y-4 lg:grid-cols-3 lg:grid-rows-2">
                  <PropertyFeature
                    title={"Price"}
                    IconComponent={MoneyIcon}
                    value={"$100,200"}
                  />
                  <PropertyFeature
                    title={"Rent"}
                    IconComponent={MoneyIcon}
                    value={"$390"}
                  />
                  <PropertyFeature
                    title={"Area"}
                    IconComponent={AreaIcon}
                    value={property.area.toString()}
                  />
                  <PropertyFeature
                    title={"Bedroom"}
                    IconComponent={BedIcon}
                    value={property.bedrooms.toString()}
                  />
                  <PropertyFeature
                    title={"Bathroom"}
                    IconComponent={BathIcon}
                    value={property.bathrooms.toString()}
                  />
                  <PropertyFeature
                    title={"Parking"}
                    IconComponent={ParkingIcon}
                    value={property.parking.toString()}
                  />
                </div>

                <div className={`${separator}`} />

                <div className="flex grow items-stretch justify-between sm:items-center">
                  <button className={`${secondaryBtn}`}>Share</button>
                  <button className={`${secondaryBtn}`}>Add to Wishlist</button>
                  <button className={`${primaryBtn}`}>Contact Agent</button>
                </div>
              </div>
            </div>
          </div>

          <div className=" my-20 flex flex-col items-center">
            <h2 className="mb-4 text-center text-3xl font-bold text-black">
              {"Price Estimation"}
            </h2>
            <p className="mb-8 text-black">
              {"Estimate Potential value of a property in long term"}
            </p>
            <div className="relative">
              <img
                className="mx-auto w-1/2 opacity-40"
                src={estimationImg}
                alt=""
              />
              <p className=" absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-3xl font-bold text-black">
                Coming Soon...
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Property;
export type { IProperty };
