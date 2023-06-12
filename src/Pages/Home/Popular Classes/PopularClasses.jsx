import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

// import required modules
import { EffectCoverflow, Pagination } from "swiper";
import useSecureAxios from "../../../hooks/useSecureAxios";
import { useQuery } from "@tanstack/react-query";

const PopularClasses = () => {
  const [axiosSecure] = useSecureAxios();

  const { data: classes = [], refetch } = useQuery(["classes"], async () => {
    const res = await axiosSecure.get("/classes");
    console.log(classes);
    return res.data;
  });
  return (
    <div className="container mx-auto my-24 overflow-hidden">
      <h1 className="text-center mb-8 font-bold text-5xl family-lucky">
        Popular Classes
      </h1>
      <p className="text-center w-1/2 mx-auto mb-6 family-aleo">
        Explore our selection of popular classes that are loved by our students.
        These classes cover a wide range of topics and provide valuable learning
        opportunities.
      </p>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={3}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper  "
      >
        {/* <SwiperSlide>
          <img
            className="h-full"
            src="https://swiperjs.com/demos/images/nature-1.jpg"
          />
        </SwiperSlide> */}

        {classes.map((singleClass) => (
          <SwiperSlide
            key={singleClass.id}
            className="border border-yellow-400 rounded-lg p-6 family-aleo"
          >
            <img className="h-full rounded-lg" src={singleClass.classImg} />
            <h1 className="font-bold my-4">{singleClass.className}</h1>
            <h2 className="font-semibold">
              Instructor: {singleClass.instructorName}
            </h2>
            <h2 className="font-semibold">Price: ${singleClass.price}</h2>
            <h2 className="font-semibold">
              Seats Available: {singleClass.seats}
            </h2>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default PopularClasses;
