import React from "react";
import banner1 from "../../../assets/banner1.jpeg";
import banner2 from "../../../assets/banner2.jpeg";
import banner3 from "../../../assets/banner3.jpeg";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";

// import "./styles.css";

// import required modules
import { Autoplay, Pagination } from "swiper";

const Banner = () => {
  return (
    <Swiper
      autoplay={{
        delay: 2500, // Autoplay delay in milliseconds
      }}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination, Autoplay]}
      className="mySwiper swiper-h "
      spaceBetween={50}
    >
      <SwiperSlide>
        <img className="banner-img" src={banner1} alt="" />
        <div className="banner-contents">
          <h2 className="family-grand subheading">spend a great week with</h2>
          <h1 className="family-lucky heading mt-4 text-[40px] lg:text-[100px] leading-10 lg:leading-[90px]">
            hello summer <br />
            Children camp
          </h1>
          <button className="family-aleo banner-btn mt-6">
            Register for Camp
          </button>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <img className="banner-img" src={banner2} alt="" />
        <div className="banner-contents">
          <h2 className="family-grand subheading">children summer camp</h2>
          <h1 className="family-lucky heading mt-4 text-[40px] lg:text-[100px] leading-10 lg:leading-[90px]">
            A chance to provide <br />
            formative experiences
          </h1>
          <button className="family-aleo banner-btn mt-6">
            Register for Camp
          </button>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <img className="banner-img" src={banner3} alt="" />
        <div className="banner-contents">
          <h2 className="family-grand subheading">you will find</h2>
          <h1 className="family-lucky heading mt-4 text-[40px] lg:text-[100px] leading-10 lg:leading-[90px]">
            challenges and <br />
            new relationships
          </h1>
          <button className="family-aleo banner-btn mt-6">
            Register for Camp
          </button>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default Banner;
