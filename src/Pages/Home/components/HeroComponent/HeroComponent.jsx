import React from "react";
import {
  BURGER,
  DOWNLOAD_APP_BUTTONS,
  DOWNLOAD_TEXT,
  HERO_BG,
  HERO_FEATURES,
  HERO_SUBTITLE,
  HERO_TITLE,
} from "./HeroComponent.config";

const HeroComponent = () => {
  return (
    <div
      id="home"
      className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 shadow py-20 md:py-24 px-5"
      style={{
        backgroundImage: "url(" + HERO_BG + ")",
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
          <div
            className="order-2 md:order-1"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <img
              src={BURGER}
              alt=""
              className="max-w-md mx-auto w-full object-contain hover:-translate-y-2 duration-300"
            />
          </div>

          <div className="flex flex-col justify-center gap-5 md:order-2 order-1 text-center md:text-left">
            <h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              {HERO_TITLE}
            </h1>
            <span
              className="mx-auto md:mx-0 h-1 w-32 bg-primary block mb-1"
              data-aos="fade-up"
              data-aos-duration="1000"
            ></span>

            <p
              className="text-center md:text-justify"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              {HERO_SUBTITLE}
            </p>

            <div
              className="flex items-center gap-10 justify-center md:justify-start"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              {HERO_FEATURES.map((feature) => (
                <div key={feature._id}>
                  {feature.icon}
                  <span>{feature.title}</span>
                </div>
              ))}
            </div>

            <div
              className="mt-2 md:mt-5"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <p className="mb-3 font-semibold text-lg">{DOWNLOAD_TEXT}</p>
              <div className="flex items-center justify-center md:justify-start gap-3">
                {DOWNLOAD_APP_BUTTONS.map((button) => (
                  <a
                    key={button._id}
                    href={button.link}
                    target="_blank"
                    rel="noreferrer"
                    title={button.title}
                    aria-label={button.title}
                    className="block overflow-hidden"
                  >
                    <img
                      src={button.icon}
                      className="w-auto h-14"
                      alt={button.title + " badge"}
                    />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroComponent;
