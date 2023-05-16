import "animate.css";
import { InlineWidget } from "react-calendly";
import { useMediaQuery } from "react-responsive";

export default function Content_Ninth() {
  const isMobile = useMediaQuery({
    query: "(max-width: 767px)",
  });

  const value = isMobile ? 500 : 760
  return (
    <div className=" flex flex-col gap-10 sm:gap-0 mt-52 px-5">
      <div className="flex flex-col items-center justify-center  gap-1">
        <p className="text-center w-full font-black text-3xl uppercase sm:text-7xl">
          Schedule a Call
        </p>
        <div className="w-2/12 h-1 rounded-sm  bg-default" />
      </div>
      <div className="flex items-center justify-center">
        <div className="w-full h-full rounded-lg">
          <InlineWidget
            styles={{
              width: "100%",
              borderRadius: 12,
              height: value,
            }}
            url="https://calendly.com/bcviplink/30?hide_gdpr_banner=1"
          />
        </div>
      </div>
    </div>
  );
}

// <button className="btn w-4/6 sm:w-1/6 flex items-center text-white justify-between btn-active bg-violet-700 hover:bg-violet-600 active:bg-violet-700 shadow-lg shadow-violet-700/30 rounded-2xl capitalize">
//   <p className="text-lg text-white ">Contat us</p>
//   <ArrowRight size={23} weight="bold" />
// </button>
