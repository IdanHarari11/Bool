import React from "react";
import ContactComponent from "./components/ContactComponent/ContactComponent";
import CTAComponent from "./components/CTAComponent/CTAComponent";
import DownloadAppComponent from "./components/DownloadAppComponent/DownloadAppComponent";
import FeatureComponent from "./components/FeatureComponent/FeatureComponent";
import HeroComponent from "./components/HeroComponent/HeroComponent";
import OurProcessComponent from "./components/OurProcessComponent/OurProcessComponent";

const Home = () => {
  return (
    <>
      <HeroComponent></HeroComponent>
      <FeatureComponent></FeatureComponent>
      <CTAComponent></CTAComponent>
      <OurProcessComponent></OurProcessComponent>
      <DownloadAppComponent></DownloadAppComponent>
      <ContactComponent></ContactComponent>
    </>
  );
};

export default Home;
