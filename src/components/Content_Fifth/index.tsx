import "animate.css";
import { InlineWidget } from "react-calendly";
import { useMediaQuery } from "react-responsive";
import SliderCreators from "../SliderCreators";

export default function Content_Fifth() {
  const isMobile = useMediaQuery({
    query: "(max-width: 767px)",
  });

  const value = isMobile ? 500 : 760;
  return (
    <div className=" flex flex-col gap-10 sm:gap-0 mt-24 px-5">
      <div className="flex flex-col items-center justify-center  gap-1">
        <p className="text-center w-full font-bold normal-case text-3xl sm:text-5xl">
          Make your brand go viral
          <br /> with thousands of creators
        </p>
        <div className="w-3/12 h-1 rounded-sm  bg-violet-700" />
      </div>
      <div className="flex items-center justify-center">
        <SliderCreators />
      </div>
    </div>
  );
}

// <button className="btn w-4/6 sm:w-1/6 flex items-center text-white justify-between btn-active bg-violet-700 hover:bg-violet-600 active:bg-violet-700 shadow-lg shadow-violet-700/30 rounded-2xl capitalize">
//   <p className="text-lg text-white ">Contat us</p>
//   <ArrowRight size={23} weight="bold" />
// </button>
