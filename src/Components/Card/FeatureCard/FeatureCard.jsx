import React from "react";
const FeatureCard = ({ data }) => {
  return (
    <div className="flex flex-col w-full justify-center items-center text-center p-5 border border-gray-300 rounded-lg backdrop-blur-sm hover:border-primary duration-300 cursor-default">
      <img src={data.icon} alt="" className="mb-2" />
      <h2 className="text-lg">{data.title}</h2>
      <p className="text-gray-500">{data.description}</p>
    </div>
  );
};

export default FeatureCard;
