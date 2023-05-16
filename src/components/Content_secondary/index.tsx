import "animate.css";
import { ArrowRight } from "phosphor-react";
import { useMediaQuery } from "react-responsive";
import SliderCard from "../CardBrand/SliderCard";
import SliderBrandStatistics from "../ContentBrand/SlideBrandStatistics";
import ContentBrand from "../ContentBrand";

export default function Content_Secondary() {
  const isMobile = useMediaQuery({
    query: "(max-width: 767px)",
  });
  return (
    <div className="flex flex-col gap-20 mt-32">
      <div className="col-span-12 flex flex-col items-center gap-2">
        <ContentBrand />
      </div>
      {/* <div className="col-span-12">
        {isMobile ? <SliderCard /> : <SliderBrandStatistics />}
      </div> */}
    </div>
  );
}
