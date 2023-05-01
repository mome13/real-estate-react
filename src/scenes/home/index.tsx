import { container, primaryBtn } from "@/styles/common";
import BuyHome from "@/assets/home/Buy_a_home.webp";
import RentHome from "@/assets/home/Rent_a_home.webp";
import SellHome from "@/assets/home/Sell_a_home.webp";
import Agent from "@/assets/home/agent.svg";

type Props = {};

type CardProps = {
  title: string;
  description: string;
  button: string;
  imgSrc: any;
  imgAlt: string;
};
const Card = ({
  title,
  description,
  button,
  imgSrc,
  imgAlt = "",
}: CardProps) => {
  return (
    <a
      href="#"
      className="group flex max-w-sm cursor-pointer flex-col items-start rounded-xl border border-gray-200 bg-white shadow"
    >
      <img className="rounded-t-xl" src={imgSrc} alt={imgAlt} />

      <div className="flex grow flex-col items-start p-5">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
          {title}
        </h5>

        <p className="mb-6 font-normal text-gray-700">{description}</p>
        <a
          href="#"
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
  return (
    <div>
      {/* hero */}
      <section className="h-[30rem] bg-[url('./assets/home-hero-2.jpg')] bg-top bg-no-repeat">
        <div
          className={`${container} flex h-full flex-col items-center justify-center`}
        >
          <h1 className="mb-8 text-center text-5xl font-bold text-white">
            Find it. Tour it. Own it.
          </h1>
          <div className="flex w-full rounded-full bg-white px-8 py-4 sm:w-1/2">
            <input
              className="flex-grow text-ellipsis focus:outline-none"
              type="text"
              placeholder="Enter an address, neighborhood, city, or ZIP code"
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
              />
            </svg>
          </div>
        </div>
      </section>

      {/* cards */}
      <section className={`bg-gray-100 py-8`}>
        <div className={`${container} items-center`}>
          <article className="grid grid-cols-1 gap-4 sm:grid-cols-3">
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
      <section className="py-8 sm:pt-16 sm:pb-8">
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
            Useful Links
          </h2>
          <article className="grid grid-cols-1 gap-4 sm:grid-cols-3">
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
    </div>
  );
}
