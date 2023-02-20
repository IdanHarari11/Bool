import React from "react";
import {
  APP_MOCKUP_ILLUSTRATION,
  DOWNLOAD_APP_BUTTONS,
  DOWNLOAD_APP_SUBTITLE,
  DOWNLOAD_APP_TITLE,
} from "./DownloadAppComponent.config";

const DownloadAppComponent = () => {
  return (
    <div
      id="download"
      className="bg-primary/10 dark:bg-gray-900 py-20 scrollMarginTop"
    >
      <div className="max-w-7xl m-auto space-y-8 px-6 md:px-12 lg:px-20">
        <div className="items-center justify-center gap-16 text-center md:flex md:text-left">
          <div className="order-last mb-6 space-y-6 md:mb-0 md:w-7/12 lg:w-6/12">
            <h1 className="text-4xl font-bold text-primary md:text-5xl dark:text-white">
              {DOWNLOAD_APP_TITLE}
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              {DOWNLOAD_APP_SUBTITLE}
            </p>
            <div className="flex flex-wrap justify-center gap-4 md:justify-start lg:gap-6">
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
          <img
            src={APP_MOCKUP_ILLUSTRATION}
            width="832"
            height="608"
            className="m-auto md:w-5/12"
            loading="lazy"
            alt="mobility_illustration"
          />
        </div>
      </div>
    </div>
  );
};

export default DownloadAppComponent;
