import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";

import useSecureAxios from "../../../hooks/useSecureAxios";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { useEffect } from "react";

const PopularInstructors = () => {
  const [axiosSecure] = useSecureAxios();
  const [slidesPerView, setSlidesPerView] = useState(getSlidesPerView());

  const { data: instructors = [], refetch } = useQuery(
    ["instructors"],
    async () => {
      const res = await axiosSecure.get("/instructors");
      console.log(instructors);
      return res.data;
    }
  );

  useEffect(() => {
    // Update slides per view on window resize
    const handleResize = () => {
      setSlidesPerView(getSlidesPerView());
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  function getSlidesPerView() {
    // Determine the number of slides per view based on screen size
    if (window.innerWidth < 768) {
      return 1; // Show 1 slide per view on mobile
    } else {
      return 3; // Show 3 slides per view on larger screens
    }
  }

  return (
    <div className=" bg-[#fcc044] py-24">
      <h1 className="text-center mb-8 font-bold text-5xl family-lucky">
        Popular Instructors
      </h1>
      <p className="text-center lg:w-1/2 w-full px-3 mx-auto mb-6 family-aleo">
        Explore our selection of popular Instructors that are loved by our
        students. These classes cover a wide range of topics and provide
        valuable learning opportunities.
      </p>
      <Swiper
        slidesPerView={slidesPerView}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper container mx-auto"
      >
        {instructors.map((instructor) => (
          <SwiperSlide key={instructor._id}>
            <div className="p-4 border-yellow-300">
              <img
                src={instructor.photo}
                className="h-[400px] object-cover w-full rounded-2xl "
              />
              <h1 className="my-6 font-bold text-xl text-center">
                {instructor.name}
              </h1>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default PopularInstructors;
