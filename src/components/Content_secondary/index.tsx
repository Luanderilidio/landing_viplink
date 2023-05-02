import "animate.css";
import { ArrowRight } from "phosphor-react";
import LogoCarrousel from "../LogoCarrousel";
import ContentSlideBrand from "../ContentSlideBrand";

export default function Content_Secondary() {
  return (
    <div className=" grid grid-cols-12 sm:px-10 sm:p mt-24">
      <div className="col-span-12 flex flex-col items-center gap-2">
        <p className="text-center font-bold capitalize text-3xl sm:text-5xl">
          brands drive growth through partnerships with creators
        </p>
        <div className="w-1/12 h-1 rounded-sm  bg-violet-700" />
      </div>
      <div className="col-span-12">
        <ContentSlideBrand />
      </div>
    </div>
  );
}
