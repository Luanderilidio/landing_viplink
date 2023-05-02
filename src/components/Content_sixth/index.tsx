import "animate.css";
import {
  ArrowRight,
  ArrowSquareOut,
  ChartLineUp,
  Handshake,
  PresentationChart,
  UsersThree,
} from "phosphor-react";

export default function Content_Sixth() {
  return (
    <div className="flex items-center flex-col gap-16 mt-24">
      <div className="flex flex-col items-center gap-2">
        <p className="text-center font-bold capitalize text-3xl sm:text-5xl">
          Pay Only For The Metrics That Matter
        </p>
        <div className="w-1/12 h-1 rounded-sm  bg-violet-700" />
      </div>

      <div className="w-9/12 grid grid-cols-3 gap-16  ">
        <div className="col-span-4 p-10 h-80 sm:col-span-1 flex flex-col items-center justify-between bg-white bg-opacity-10 rounded-2xl shadow-md backdrop-blur-md border border-white border-opacity-30">
          <div className="flex flex-col items-center justify-center gap-5">
            <p className="font-bold text-4xl">CPV</p>
            <p className="font-bold text-lg text-violet-600">Cost per Views</p>
            <p className="font-normal text-md text-center">
              Boost your effectiveness by measuring the people fully engaged
              with your content.
            </p>
          </div>
          <button className="flex items-center justify-center gap-3 ">
            <p className="font-bold text-gray-500">More info </p>
            <ArrowSquareOut className="text-gray-500" size={20} weight="bold" />
          </button>
        </div>
        <div className="col-span-4 p-10 h-80 sm:col-span-1 flex flex-col items-center justify-between bg-white bg-opacity-10 rounded-2xl shadow-md backdrop-blur-md border border-white border-opacity-30">
          <div className="flex flex-col items-center justify-center gap-5">
            <p className="font-bold text-4xl">CPM</p>
            <p className="font-bold text-lg text-center text-violet-600">
              Cost per 1000 Impressions
            </p>
            <p className="font-normal text-md text-center">
              Increase your brand visibility and make every impression count in
              zero ad-waste space.
            </p>
          </div>
          <button className="flex items-center justify-center gap-3 mt-3">
            <p className="font-bold text-gray-500">More info </p>
            <ArrowSquareOut className="text-gray-500" size={20} weight="bold" />
          </button>
        </div>
        <div className="col-span-4 p-10 h-80 sm:col-span-1 flex flex-col items-center justify-between  bg-white bg-opacity-10 rounded-2xl shadow-md backdrop-blur-md border border-white border-opacity-30">
          <div className="flex flex-col items-center justify-center gap-5">
            <p className="font-bold text-4xl">CPV</p>
            <p className="font-bold text-lg text-violet-600">CPE</p>
            <p className="font-normal text-md text-center">
              Invest only in meaningful interactions.
            </p>
          </div>
          <button className="flex items-center justify-center gap-3 mt-3">
            <p className="font-bold text-gray-500">More info </p>
            <ArrowSquareOut className="text-gray-500" size={20} weight="bold" />
          </button>
        </div>
      </div>
      <button className="btn w-4/6 sm:w-1/6 flex items-center text-white justify-between btn-active bg-violet-700 hover:bg-violet-600 active:bg-violet-700 shadow-lg shadow-violet-700/30 rounded-2xl capitalize">
        <p className="text-lg text-white ">Contat us</p>
        <ArrowRight size={23} weight="bold" />
      </button>
    </div>
  );
}
