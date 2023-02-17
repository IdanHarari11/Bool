import React from "react";
import { HiOutlineChevronUp } from "react-icons/hi";
import ContactComponent from "./components/ContactComponent/ContactComponent";
import CTAComponent from "./components/CTAComponent/CTAComponent";
import DownloadAppComponent from "./components/DownloadAppComponent/DownloadAppComponent";
import FeatureComponent from "./components/FeatureComponent/FeatureComponent";
import HeroComponent from "./components/HeroComponent/HeroComponent";
import JoinUsComponent from "./components/JoinUsComponent/JoinUsComponent";
import "./Home.css";

const Home = () => {
  const [showScroll, setShowScroll] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => {
      if (window.pageYOffset > 300) {
        setShowScroll(true);
      } else {
        setShowScroll(false);
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <HeroComponent></HeroComponent>
      <FeatureComponent></FeatureComponent>
      <CTAComponent></CTAComponent>
      <JoinUsComponent></JoinUsComponent>
      <DownloadAppComponent></DownloadAppComponent>
      <ContactComponent></ContactComponent>

      <div>
        <button
          className={`fixed right-5 bottom-5 z-50 p-2 bg-transparent border-2 shadow-md border-primary hover:bg-primary duration-300 text-primary hover:text-white ${
            showScroll ? "fade-in active" : "fade-in"
          }`}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <HiOutlineChevronUp className="text-xl" />
        </button>
      </div>
    </>
  );
};

export default Home;
