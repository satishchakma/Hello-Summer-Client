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
      data-swiper-autoplay="2000"
      pagination={{
        clickable: true,
      }}
      modules={[Pagination, Autoplay]}
      className="mySwiper swiper-h "
      spaceBetween={50}
    >
      <SwiperSlide data-swiper-autoplay="2000">
        <img className="banner-img" src={banner1} alt="" />
        <div className="banner-contents">
          <h2 className="family-grand subheading">spend a great week with</h2>
          <h1 className="family-lucky heading mt-4">
            hello summer <br />
            Children camp
          </h1>
          <button className="family-aleo banner-btn mt-6">
            Register for Camp
          </button>
        </div>
      </SwiperSlide>
      <SwiperSlide data-swiper-autoplay="2000">
        <img className="banner-img" src={banner2} alt="" />
        <div className="banner-contents">
          <h2 className="family-grand subheading">children summer camp</h2>
          <h1 className="family-lucky heading mt-4">
            A chance to provide <br />
            formative experiences
          </h1>
          <button className="family-aleo banner-btn mt-6">
            Register for Camp
          </button>
        </div>
      </SwiperSlide>
      <SwiperSlide data-swiper-autoplay="2000">
        <img className="banner-img" src={banner3} alt="" />
        <div className="banner-contents">
          <h2 className="family-grand subheading">you will find</h2>
          <h1 className="family-lucky heading mt-4">
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
