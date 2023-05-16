import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import CardBrand from "./index";
import ContentBrand from "./index";

export default function SliderBrandStatistics() {
  return (
    <>
      <Swiper
        spaceBetween={20}
        pagination={{
          dynamicBullets: true,
        }}
        loop={true}
        modules={[Pagination]}
        className="mySwiper pb-10"
      >
        <SwiperSlide>
          <ContentBrand />
        </SwiperSlide>
        <SwiperSlide>
          <ContentBrand />
        </SwiperSlide>
        <SwiperSlide>
          <ContentBrand />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
