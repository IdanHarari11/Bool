import React from "react";
import heroBG from "../../../../assets/images/background/heroBG.jpg";
import { IoLogoGooglePlaystore } from "react-icons/io5";
import { AiFillApple, AiFillHighlight } from "react-icons/ai";
import ProductCard from "../../../../Components/Card/ProductCard/ProductCard";
import { ImSpoonKnife } from "react-icons/im";
import { SlDrop } from "react-icons/sl";
import { TbLeaf } from "react-icons/tb";
import playStore from "../../../../assets/images/icons/google-play-badge.png";
import appStore from "../../../../assets/images/icons/play-store.png";

const HeroComponent = () => {
  return (
    <div
      className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 shadow py-20 md:py-24 px-5"
      style={{
        backgroundImage: "url(" + heroBG + ")",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="max-w-7xl mx-auto h-full flex flex-col justify-center">
        {/* <div className="flex flex-col items-center justify-center gap-5 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary">
            Order Food Anytime
          </h1>

          <div>
            <p className="mb-3">AVAILABLE ON</p>
            <div className="flex items-center justify-center gap-3">
              <a
                href="/"
                className="bg-primary px-3 py-1 rounded-2xl shadow hover:scale-105 hover:bg-secondary duration-300 hover:shadow-xl"
              >
                <div className="flex items-center justify-center gap-2 text-lg">
                  <IoLogoGooglePlaystore className="text-white" />
                  <span className="text-white font-medium">Google Play</span>
                </div>
              </a>
              <a
                href="/"
                className="bg-primary px-3 py-1 rounded-2xl shadow hover:scale-105 hover:bg-secondary duration-300 hover:shadow-xl"
              >
                <div className="flex items-center justify-center gap-2 text-lg">
                  <AiFillApple className="text-white" />
                  <span className="text-white font-medium">Apple Store</span>
                </div>
              </a>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 xl:grid-cols-4 gap-4">
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div> */}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-0">
          <div className="order-2 md:order-1">
            <img
              src="https://templatekit.jegtheme.com/burgry/wp-content/uploads/sites/132/2021/07/N2HMMGN-2.png"
              alt=""
              className="max-w-md mx-auto w-full object-contain hover:-translate-y-2 duration-300"
            />
          </div>

          <div className="flex flex-col justify-center gap-5 md:order-2 order-1 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
              Order Food Anytime
            </h1>
            <span className="mx-auto md:mx-0 h-1 w-32 bg-primary block mb-1"></span>

            <p className="text-center md:text-justify">
              Test our best food and enjoy your meal with your family and
              friends.
            </p>

            <div className="flex items-center gap-10 justify-center md:justify-start">
              <div>
                <ImSpoonKnife className="text-primary text-5xl" />
                <span>Delicious</span>
              </div>
              <div>
                <SlDrop className="text-primary text-5xl" />
                <span>Fresh</span>
              </div>
              <div>
                <TbLeaf className="text-primary text-5xl" />
                <span>Organic</span>
              </div>
            </div>

            <div className="mt-2 md:mt-5">
              <p className="mb-3 font-semibold text-lg">
                Download BOOL Mobile App.
              </p>
              <div className="flex items-center justify-center md:justify-start gap-3">
                <a href="/">
                  <img src={playStore} alt="" className="h-14" />
                </a>
                <a href="/">
                  <img src={appStore} alt="" className="h-14" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroComponent;
