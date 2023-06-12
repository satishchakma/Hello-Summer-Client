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

const PopularInstructors = () => {
  const [axiosSecure] = useSecureAxios();

  const { data: instructors = [], refetch } = useQuery(
    ["instructors"],
    async () => {
      const res = await axiosSecure.get("/instructors");
      console.log(instructors);
      return res.data;
    }
  );
  return (
    <div className=" bg-[#fcc044] py-24">
      <h1 className="text-center mb-8 font-bold text-5xl family-lucky">
        Popular Instructors
      </h1>
      <p className="text-center w-1/2 mx-auto mb-6 family-aleo">
        Explore our selection of popular Instructors that are loved by our
        students. These classes cover a wide range of topics and provide
        valuable learning opportunities.
      </p>
      <Swiper
        slidesPerView={3}
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