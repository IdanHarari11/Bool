import React from "react";
import {
  FOOTER_LINKS,
  FOOTER_SOCIAL_LINKS,
  FOOTER_TEXT,
} from "./Footer.config";

const Footer = () => {
  return (
    <div className=" bg-gray-900 mt-auto">
      <div className="max-w-7xl mx-auto text-white py-5">
        {/* <div className="text-center">
          <h3 className="text-3xl mb-3">{DOWNLOAD_TITLE}</h3>
          <p>{DOWNLOAD_SUBTITLE}</p>
          <div className="flex flex-col items-center md:flex-row justify-center my-10 gap-4">
            {DOWNLOAD_GROUP.map((item) => (
              <a
                key={item.id}
                href={item.link}
                className="flex items-center border rounded-lg px-4 py-2 w-auto cursor-pointer hover:bg-secondary duration-300 hover:border-secondary"
                target="_blank"
                rel="noreferrer"
              >
                <img src={item.icon} className="w-7 md:w-8" alt="" />
                <div className="text-left ml-3">
                  <p className="text-xs text-gray-200">{item.downloadText}</p>
                  <p className="text-sm md:text-base">{item.storeName}</p>
                </div>
              </a>
            ))}
          </div>
        </div> */}
        <div className="grid justify-center lg:justify-between">
          <div className="flex flex-col self-center text-sm text-center md:block lg:col-start-1 md:space-x-6  text-gray-400">
            <span className="order-2 md:order-1 mt-8 md:mt-0">
              {FOOTER_TEXT}
            </span>
            <div className="inline divide-x divide-gray-600">
              {FOOTER_LINKS.map((item) => (
                <span key={item.id} className="px-2">
                  {item.title}
                </span>
              ))}
            </div>
          </div>
          <div className="flex justify-center pt-4 space-x-4 lg:pt-0 lg:col-end-13">
            {FOOTER_SOCIAL_LINKS.map((item) => (
              <a
                key={item._id}
                rel="noopener noreferrer"
                href={item.link}
                title={item.title}
                target="_blank"
                className="flex items-center justify-center w-10 h-10 rounded-full bg-secondary hover:bg-primary duration-300 text-gray-50"
              >
                {item.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
