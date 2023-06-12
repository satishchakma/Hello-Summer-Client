import React from "react";
import Banner from "../Banner/Banner";
import Countdown from "../Countdown/Countdown";
import PopularClasses from "../Popular Classes/PopularClasses";
import PopularInstructors from "../Popular Instructors/PopularInstructors";
import Recommendations from "./Recommendations/Recommendations";
import WhyChooseUs from "./Why Choose Us/WhyChooseUs";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Countdown></Countdown>
      <PopularClasses></PopularClasses>
      <PopularInstructors></PopularInstructors>
      <WhyChooseUs></WhyChooseUs>
      <Recommendations></Recommendations>
    </div>
  );
};

export default Home;
