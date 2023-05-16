import { Eye, TiktokLogo, TrendUp } from "phosphor-react";
import Chart from "chart.js";

import Logo1 from "../../assets/brands/1.png";
import Logo2 from "../../assets/brands/3.png";
import Logo3 from "../../assets/brands/15.png";

import Creator1 from "../../assets/creators/1.png";
import Creator2 from "../../assets/creators/2.png";
import Creator3 from "../../assets/creators/3.png";
import Creator4 from "../../assets/creators/4.png";
import Creator5 from "../../assets/creators/5.png";
import Creator6 from "../../assets/creators/6.png";
import Creator7 from "../../assets/creators/7.jpeg";
import Creator8 from "../../assets/creators/8.jpeg";
import Creator9 from "../../assets/creators/9.jpeg";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import CardBrand from "../CardBrand";
import { useState } from "react";

export default function ContentBrand() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleSlideChange = (swiper: any) => {
    setCurrentIndex(swiper.realIndex);
  };

  const cases = [
    {
      logo: Logo1,
      paragraph_first: (
        <>
          The Creators were encouraged to make a short video promoting the
          release of a movie on <strong>Amazon Prime Video</strong>.
        </>
      ),
      paragraph_secundary: (
        <>
          The Creators used <strong>Instagram Reels and TikTok </strong>to
          highlight various reactions and feelings elicited by the film.
        </>
      ),
    },
    {
      logo: Logo2,
      paragraph_first: (
        <>
          The Creators were encouraged to do a popular dance showing the
          delicious drink while riding the wave of a <strong>TikTok </strong>{" "}
          trend.
        </>
      ),
      paragraph_secundary: (
        <>
          They also encouraged everyone to join in the fun by posting videos on{" "}
          <strong>Instagram Reels and TikTok</strong>.
        </>
      ),
    },
    {
      logo: Logo3,
      paragraph_first: (
        <>
          Creators provided branded content showing a humorous moment in their
          daily lives while <strong>playing Clash of Clans</strong>.
        </>
      ),
      paragraph_secundary: (
        <>
          They made TikTok videos in order to get the{" "}
          <strong>most views</strong>.
        </>
      ),
    },
  ];

  const data = [
    {
      logo: Logo1,
      creators: [
        {
          avatar: Creator1,
          views: "4.3M",
        },
        {
          avatar: Creator2,
          views: "2.3M",
        },
        {
          avatar: Creator3,
          views: "1.3M",
        },
      ],

      metrics: ["12M", "95", "116", "+200"],
    },
    {
      logo: Logo2,
      creators: [
        {
          avatar: Creator4,
          views: "4M",
        },
        {
          avatar: Creator5,
          views: "2.3M",
        },
        {
          avatar: Creator6,
          views: "1.2M",
        },
      ],

      metrics: ["6M", "46", "55", "+130"],
    },
    {
      logo: Logo3,
      creators: [
        {
          avatar: Creator7,
          views: "2.7M",
        },
        {
          avatar: Creator8,
          views: "2.1M",
        },
        {
          avatar: Creator9,
          views: "1.3M",
        },
      ],

      metrics: ["5M", "14", "45", "+90"],
    },
  ];

  return (
    <div className="grid grid-cols-12 px-10">
      <div className="col-span-5 flex flex-col justify-center gap-5 relative">
        <div className="flex flex-col">
          <p className="text-6xl text-center sm:text-left sm:text-7xl font-black leading-none font-Inter uppercase">
            Awareness Where Your{" "}
            <span className="relative z-50">
              Customers
              <div className="h-10 w-full rounded-sm bg-default absolute bottom-0 -z-50" />
            </span>
            Are
          </p>
        </div>
      </div>
      <div className="col-span-7  ">
        <Swiper
          spaceBetween={20}
          pagination={{
            dynamicBullets: true,
          }}
          loop={true}
          modules={[Pagination]}
          onSlideChange={handleSlideChange}
          className="mySwiper py-10"
        >
          {data.map((item, index) => (
            <SwiperSlide key={index}>
              <CardBrand
                index={index}
                creators={item.creators}
                metrics={item.metrics}
                logo={item.logo}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
