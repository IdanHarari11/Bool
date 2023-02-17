import React from "react";
import { HiOutlineChevronRight } from "react-icons/hi";
import { JOIN_US_DATA } from "./JoinUsComponent.config";

const JoinUsComponent = () => {
  return (
    <div className="py-32 px-5" id="join">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-medium mb-10 text-center">
          Join Us Today
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 place-items-center">
          {JOIN_US_DATA.map((item) => (
            <div
              className="flex flex-col justify-center items-start gap-5 rounded-xl shadow-lg hover:shadow-xl duration-300 px-12 py-10 border border-gray-200 hover:border-primary max-w-xl"
              key={item._id}
            >
              <img
                src={item.icon}
                alt={item.title + "Icon"}
                className="w-20 h-20"
              />
              <h3 className="uppercase text-xl font-semibold text-gray-800 tracking-wider">
                {item.title}
              </h3>
              <p className="text-gray-500">{item.description}</p>

              <button className="bg-primary text-white px-6 py-2.5 rounded-md hover:bg-secondary duration-300 inline-flex justify-center items-center gap-2">
                {item.buttonTitle} <HiOutlineChevronRight />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default JoinUsComponent;
