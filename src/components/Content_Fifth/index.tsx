import "animate.css";
import { InlineWidget } from "react-calendly";
import { useMediaQuery } from "react-responsive";
import SliderCreatorsLeftRight from "../SliderCreatorsLeftRight";
import SliderCreatorsRightLeft from "../SliderCreatorsRightLeft";

export default function Content_Fifth() {
  const isMobile = useMediaQuery({
    query: "(max-width: 767px)",
  });

  const value = isMobile ? 500 : 760;
  return (
    <div className=" flex flex-col gap-14 sm:gap-10 mt-52 mb-40">
      <div className="flex flex-col items-center justify-center  gap-1 px-5">
        <p className="text-center font-Inter w-full sm:text-center font-black uppercase text-xl sm:text-7xl">
          Make your brand go viral
          <br className="hidden sm:block" />
          with{" "}
          <span className="relative z-50">
            thousands
            <div className="h-10 w-full rounded-sm bg-default absolute left-0 bottom-0 -z-50" />
          </span>{" "}
          <br className="sm:hidden" />
          of creators
        </p>
      </div>
      <div className="flex flex-col gap-5 items-center mt-15 justify-center">
        <SliderCreatorsLeftRight />
        <SliderCreatorsRightLeft />
      </div>
    </div>
  );
}

// <button className="btn w-4/6 sm:w-1/6 flex items-center text-white justify-between btn-active bg-violet-700 hover:bg-violet-600 active:bg-violet-700 shadow-lg shadow-violet-700/30 rounded-2xl capitalize">
//   <p className="text-lg text-white ">Contat us</p>
//   <ArrowRight size={23} weight="bold" />
// </button>
