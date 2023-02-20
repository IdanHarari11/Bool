import React from "react";
const FeatureCard = ({ data }) => {
  return (
    <div className="flex flex-col w-full justify-center items-center text-center p-5 border border-gray-300 dark:border-gray-700 rounded-lg backdrop-blur-sm hover:border-primary dark:hover:border-primary  duration-300 cursor-default">
      <img src={data.icon} alt="" className="mb-2 dark:invert" />
      <h2 className="text-lg dark:text-gray-300">{data.title}</h2>
      <p className="text-gray-500 dark:text-gray-400">{data.description}</p>
    </div>
  );
};

export default FeatureCard;
