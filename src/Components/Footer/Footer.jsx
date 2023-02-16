import React from "react";
import {
  DOWNLOAD_GROUP,
  DOWNLOAD_SUBTITLE,
  DOWNLOAD_TITLE,
  FOOTER_LINKS,
  FOOTER_TEXT,
} from "./Footer.config";

const Footer = () => {
  return (
    <div className=" bg-gray-900 mt-auto">
      <div className="max-w-7xl mx-auto text-white py-10">
        <div className="text-center">
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
        </div>
        <div className="flex flex-col md:flex-row md:justify-between items-center text-sm text-gray-400">
          <p className="order-2 md:order-1 mt-8 md:mt-0">{FOOTER_TEXT}</p>
          <div className="order-1 md:order-2 divide-x divide-gray-600">
            {FOOTER_LINKS.map((item) => (
              <span key={item.id} className="px-2">
                {item.title}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
