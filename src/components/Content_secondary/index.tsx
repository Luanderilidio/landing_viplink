import "animate.css";
import { ArrowRight } from "phosphor-react";
import { useMediaQuery } from "react-responsive";
import SliderCard from "../CardBrand/SliderCard";
import SliderBrandStatistics from "../ContentBrand/SlideBrandStatistics";

export default function Content_Secondary() {
  const isMobile = useMediaQuery({
    query: "(max-width: 767px)",
  });
  return (
    <div className="flex flex-col gap-20 mt-32">
      <div className="col-span-12 flex flex-col items-center gap-2">
        <p className="text-center font-bold capitalize text-3xl sm:text-5xl">
          Brands drive growth <br className="sm:hidden" /> with creators
        </p>
        <div className="w-3/12 h-1 rounded-sm  bg-violet-700" />
      </div>
      <div className="col-span-12">
        {isMobile ? <SliderCard /> : <SliderBrandStatistics />}
      </div>
    </div>
  );
}
