import React from "react";
import CTAComponent from "./components/CTAComponent/CTAComponent";
import DownloadAppComponent from "./components/DownloadAppComponent/DownloadAppComponent";
import FeatureComponent from "./components/FeatureComponent/FeatureComponent";
import HeroComponent from "./components/HeroComponent/HeroComponent";

const Home = () => {
  return (
    <>
      <HeroComponent></HeroComponent>
      <FeatureComponent></FeatureComponent>
      <CTAComponent></CTAComponent>
      <DownloadAppComponent></DownloadAppComponent>
    </>
  );
};

export default Home;
