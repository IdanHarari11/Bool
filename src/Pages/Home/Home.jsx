import React from "react";
import ScrollToTop from "../../Components/ScrollToTop/ScrollToTop";
import ContactComponent from "./components/ContactComponent/ContactComponent";
import CTAComponent from "./components/CTAComponent/CTAComponent";
import DownloadAppComponent from "./components/DownloadAppComponent/DownloadAppComponent";
import FeatureComponent from "./components/FeatureComponent/FeatureComponent";
import HeroComponent from "./components/HeroComponent/HeroComponent";
import JoinUsComponent from "./components/JoinUsComponent/JoinUsComponent";

const Home = () => {
  return (
    <>
      <HeroComponent></HeroComponent>
      <FeatureComponent></FeatureComponent>
      <CTAComponent></CTAComponent>
      <JoinUsComponent></JoinUsComponent>
      <DownloadAppComponent></DownloadAppComponent>
      <ContactComponent></ContactComponent>

      <ScrollToTop />
    </>
  );
};

export default Home;
