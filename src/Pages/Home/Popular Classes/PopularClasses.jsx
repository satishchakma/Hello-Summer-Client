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
import { useState } from "react";
import { useEffect } from "react";

const PopularClasses = () => {
  const [axiosSecure] = useSecureAxios();
  const [slidesPerView, setSlidesPerView] = useState(getSlidesPerView());

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

  const { data: classes = [], refetch } = useQuery(["classes"], async () => {
    const res = await axiosSecure.get("/classes");
    console.log(classes);
    return res.data;
  });
  const approvedClasses = classes.filter((item) => item.status === "approved");
  console.log(approvedClasses, "this is approved classes");

  return (
    <div className="container mx-auto my-24 overflow-hidden">
      <h1 className="text-center mb-8 font-bold text-5xl family-lucky">
        Popular Classes
      </h1>
      <p className="text-center lg:w-1/2 w-full mx-auto mb-6 family-aleo">
        Explore our selection of popular classes that are loved by our students.
        These classes cover a wide range of topics and provide valuable learning
        opportunities.
      </p>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={slidesPerView}
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

        {approvedClasses.map((singleClass) => (
          <SwiperSlide
            key={singleClass.id}
            className="border border-yellow-400 rounded-lg p-6 family-aleo"
          >
            <img className=" rounded-lg" src={singleClass.classImg} />
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
