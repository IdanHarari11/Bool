import React from "react";
import FeatureCard from "../../../../Components/Card/FeatureCard/FeatureCard";
import { FEATURE_DATA, SECTION_BG } from "./FeatureComponent.config";

const FeatureComponent = () => {
  return (
    <div
      className="scrollMarginTop"
      id="features"
      style={{
        backgroundImage: `url(${SECTION_BG})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="py-10 mx-auto max-w-7xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 items-center gap-5 place-content-center self-center px-5">
        {FEATURE_DATA.map((item) => (
          <FeatureCard key={item._id} data={item}></FeatureCard>
        ))}
      </div>
    </div>
  );
};

export default FeatureComponent;
