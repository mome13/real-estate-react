import { container, primaryBtn } from "@/styles/common";
import BuyHome from "@/assets/home/Buy_a_home.webp";
import RentHome from "@/assets/home/Rent_a_home.webp";
import SellHome from "@/assets/home/Sell_a_home.webp";
import Agent from "@/assets/home/agent.svg";
import SearchBar from "@/components/searchBar";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { useState } from "react";
import { createSearchParams, useNavigate } from "react-router-dom";

type Props = {};

type CardProps = {
  title: string;
  description: string;
  button: string;
  imgSrc: any;
  imgAlt: string;
  link: string;
};
const Card = ({
  title,
  description,
  button,
  imgSrc,
  imgAlt = "",
  link,
}: CardProps) => {
  return (
    <a
      href={link}
      className="group flex max-w-sm cursor-pointer flex-col items-start rounded-xl border border-gray-200 bg-white shadow"
    >
      <img className="rounded-t-xl" src={imgSrc} alt={imgAlt} />

      <div className="flex grow flex-col items-start p-5">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
          {title}
        </h5>

        <p className="mb-6 font-normal text-gray-700">{description}</p>
        <a
          href={link}
          className={`${primaryBtn} mt-auto inline-flex items-center px-3 text-center group-hover:bg-blue-600`}
        >
          {button}
          <svg
            aria-hidden="true"
            className="-mr-1 ml-2 h-4 w-4"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </a>
      </div>
    </a>
  );
};

export default function Home({}: Props) {
  const navigate = useNavigate();
  const [address, setAddress] = useState("");
  const applySearch = () => {
    navigate({
      pathname: "search",
      search: createSearchParams({
        address,
      }).toString(),
    });
  };
  return (
    <div>
      <Navbar />
      {/* hero */}
      <section className="h-[30rem] bg-[url('./assets/home-hero-2.jpg')] bg-top bg-no-repeat">
        <div
          className={`${container} flex h-full flex-col items-center justify-center`}
        >
          <h1 className="mb-8 text-center text-5xl font-bold text-white">
            Find it. Tour it. Own it.
          </h1>
          <SearchBar
            searchValue={address}
            setSearchValue={setAddress}
            applySearch={applySearch}
          />
        </div>
      </section>

      {/* cards */}
      <section className={`bg-gray-100 py-8`}>
        <div className={`${container} items-center justify-between`}>
          <article className="grid grid-cols-1 justify-between gap-4 sm:grid-cols-3 sm:gap-12">
            <Card
              title="Buy a home"
              description="Find your place with an immersive photo experience and the most listings, including things you won’t find anywhere else."
              button="Browse homes"
              imgSrc={BuyHome}
              imgAlt=""
            />
            <Card
              title="Sell a home"
              description="No matter what path you take to sell your home, we can help you navigate a successful sale."
              button="See your options"
              imgSrc={RentHome}
              imgAlt=""
            />
            <Card
              title="Rent a home"
              description="We’re creating a seamless online experience – from shopping on the largest rental network, to applying, to paying rent."
              button="Find rentals"
              imgSrc={SellHome}
              imgAlt=""
            />
          </article>
        </div>
      </section>

      {/* find agent */}
      <section className="py-8 sm:pb-8 sm:pt-16">
        <div
          className={`${container} flex-col items-center justify-start sm:flex-row`}
        >
          <div className="sm:w-1/2 ">
            <h2 className="mb-4 text-3xl font-bold text-gray-900">
              Need Help?
            </h2>
            <p className="mb-6 text-gray-900">
              There are more than 10,000 registered agents in our company. Find
              an agent who offers you homes with competitive prices.
            </p>
            <button className={`${primaryBtn}`}>Find Agents</button>
          </div>
          <div className="sm:w-1/2 ">
            <img
              className="mx-auto w-2/3 sm:ml-auto"
              src={Agent}
              alt="real estate agent"
            />
          </div>
        </div>
      </section>

      {/* useful links */}
      <section className="py-8 sm:pt-8">
        <div className={`${container} flex-col`}>
          <h2 className="mb-4 text-3xl font-bold text-gray-900">
            {"Useful Links"}
          </h2>
          <article className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            <Card
              link="https://capitalbankmd.com/homeloans/resources/home-loans-101-blog/first-time-homebuyer/first-time-home-buyer-tips-solving-for-the-two-top-challenges"
              title="First Time Home Buyer Tips"
              description="Here are 21 tips to help you get ready to buy a home."
              button="Read More"
              imgSrc={
                "https://images.pexels.com/photos/4259140/pexels-photo-4259140.jpeg?cs=srgb&dl=pexels-august-de-richelieu-4259140.jpg&fm=jpg&w=640&h=427&"
              }
              imgAlt=""
            />
            <Card
              link="https://www.realtor.com/advice/finance/everyones-talking-about-home-equity-heres-what-yours-means-in-todays-market/"
              title="Home Equity"
              description="Home ownership has long been tied to building wealth—and for good reason. Instead of throwing rent money out the window each month, owning a home allows you to build home equity."
              button="Read More"
              imgSrc={
                "https://images.pexels.com/photos/5899215/pexels-photo-5899215.jpeg?cs=srgb&dl=pexels-karolina-grabowska-5899215.jpg&fm=jpg&w=640&h=427"
              }
              imgAlt=""
            />
            <Card
              link="https://www.architecturaldigest.com/home-renovation-guide"
              title="Home Remodeling & Renovation Ideas"
              description="Whether you're revamping a space to make it more functional or simply more beautiful, this handy guide is your one-stop shop for all things home renovation."
              button="Read More"
              imgSrc={
                "https://images.pexels.com/photos/8293699/pexels-photo-8293699.jpeg?cs=srgb&dl=pexels-rdne-stock-project-8293699.jpg&fm=jpg&w=640&h=427"
              }
              imgAlt=""
            />
          </article>
        </div>
      </section>
      <Footer />
    </div>
  );
}
