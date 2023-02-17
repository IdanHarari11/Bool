import React from "react";
import { OUR_PROCESS_TITLE, STEP_DATA } from "./OurProcessComponent.config";

const OurProcessComponent = () => {
  return (
    <div className="max-w-5xl mx-auto text-center">
      <h2 className="text-3xl font-medium font-serif mb-10">
        {OUR_PROCESS_TITLE}
      </h2>

      <div className="relative grid grid-cols-1 md:grid-cols-4 gap-5 md">
        <div className="absolute border-t-2 border-gray-300 border-dashed h-1 w-2/3 inset-x-0 top-1/3  mx-auto hidden md:block"></div>

        {STEP_DATA.map((item) => (
          <div key={item._id} className="group cursor-default">
            <img
              src={item.icon}
              alt={item.title + "Icon"}
              className="w-[30%] md:w-[45%] h-auto mx-auto group-hover:scale-105 duration-500"
            />
            <span className="text-xs text-gray-500 uppercase block my-3">
              {item.step}
            </span>
            <h3 className="uppercase font-serif text-sm text-gray-700 tracking-wider">
              {item.title}
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurProcessComponent;
