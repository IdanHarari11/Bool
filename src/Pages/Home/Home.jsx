import React from "react";
import HeroComponent from "./components/HeroComponent/HeroComponent";
import { HEADER_TITLE } from "./Home.config";

const Home = () => {
  return (
    <>
      <h1>{HEADER_TITLE}</h1>
      <HeroComponent></HeroComponent>
    </>
  );
};

export default Home;
