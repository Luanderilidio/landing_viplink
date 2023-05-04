import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import "./styles.css";

// import required modules
import { Pagination } from "swiper";
import CardBrand from "./index";

export default function SliderCard() {
  return (
    <>
      <Swiper
        pagination={true}
        modules={[Pagination]}
        loop={true}
        className="mySwiper pb-10"
      >
        <SwiperSlide>
          <CardBrand />
        </SwiperSlide>
        <SwiperSlide>
          <CardBrand />
        </SwiperSlide>
        <SwiperSlide>
          <CardBrand />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
