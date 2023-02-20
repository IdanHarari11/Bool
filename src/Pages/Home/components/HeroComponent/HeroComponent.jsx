import React from "react";
import {
  sideImage,
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
      className="border-b border-gray-200 dark:border-gray-700 shadow"
      style={{
        backgroundImage: "url(" + HERO_BG + ")",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="dark:bg-gray-800 py-20 md:py-24 px-5">
        <div className="max-w-7xl mx-auto h-full flex flex-col justify-center">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-0">
            <div
              className="order-2 md:order-1"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <img
                src={sideImage}
                alt=""
                className="max-w-lg mx-auto w-full object-contain hover:-translate-y-2 duration-300"
              />
            </div>

            <div className="flex flex-col justify-center gap-5 md:order-2 order-1 text-center md:text-left">
              <h1
                className="text-4xl md:text-5xl lg:text-6xl font-bold dark:text-gray-200"
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
                className="text-center md:text-justify dark:text-gray-300"
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
                    <span className="dark:text-gray-300">{feature.title}</span>
                  </div>
                ))}
              </div>

              <div
                className="mt-2 md:mt-5"
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                <p className="mb-3 font-semibold text-lg dark:text-gray-300">
                  {DOWNLOAD_TEXT}
                </p>
                <div className="flex items-center justify-center md:justify-start gap-3">
                  {DOWNLOAD_APP_BUTTONS.map((button) => (
                    <a
                      key={button._id}
                      href={button.link}
                      target="_blank"
                      rel="noreferrer"
                      title={button.title}
                      aria-label={button.title}
                      className="block overflow-hidden rounded-lg"
                    >
                      <img
                        src={button.icon}
                        className="w-auto h-14 hover:scale-110 duration-300"
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
    </div>
  );
};

export default HeroComponent;
