import React from "react";
import Banner from "../Banner/Banner";
import Countdown from "../Countdown/Countdown";
import PopularClasses from "../Popular Classes/PopularClasses";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Countdown></Countdown>
      <PopularClasses></PopularClasses>
    </div>
  );
};

export default Home;
