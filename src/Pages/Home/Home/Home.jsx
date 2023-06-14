import React from "react";
import Banner from "../Banner/Banner";
import Countdown from "../Countdown/Countdown";
import PopularClasses from "../Popular Classes/PopularClasses";
import PopularInstructors from "../Popular Instructors/PopularInstructors";
import Recommendations from "./Recommendations/Recommendations";
import WhyChooseUs from "./Why Choose Us/WhyChooseUs";
// framer motion

import { motion, useScroll } from "framer-motion";
import DayNight from "../../../Day night toggle/DayNight";

const Home = () => {
  const { scrollYProgress } = useScroll();
  return (
    <div>
      <motion.div
        className="progress-bar"
        style={{ scaleX: scrollYProgress }}
      />
      <DayNight></DayNight>
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
