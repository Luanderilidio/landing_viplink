import "animate.css";
import { LineChart } from "./LineChart";

export default function Content_Octave() {
  return (
    <div className="  flex flex-col gap-10 sm:gap-0 px-5 mt-24">
      <div className="">
        <div className="flex flex-col items-center gap-2">
          <p className="text-center font-bold capitalize text-3xl sm:text-5xl">
            Track Your Campaign <br className="sm:hidden" /> in Real Time
          </p>
          <div className="w-3/12 h-1 rounded-sm  bg-violet-700" />
        </div>
      </div>
      <div className="sm:p-24 ">
        <div className="bg-violet-700 rounded-xl p-5 sm:p-10">
          <p className="w-full font-bold mb-5 ">Views Metrics</p>
          <div className="grid grid-cols-12 gap-5">
            <div className="col-span-12 sm:col-span-2 flex sm:flex-col justify-between gap-3">
              <div className="bg-gray-200 shadow-lg w-1/3 sm:w-full flex  flex-col items-center justify-center rounded-xl p-2 sm:p-5 text-black  ">
                <p className="text-sm sm:text-lg font-normal">Views</p>
                <p className="text-md sm:text-2xl font-bold">4.8 M</p>
              </div>
              <div className="bg-gray-200 shadow-lg flex flex-col w-1/3 sm:w-full items-center justify-center rounded-xl p-5 text-black  ">
                <p className="text-sm sm:text-lg font-normal">$CPM</p>
                <p className="text-md sm:text-2xl font-bold">$1.4</p>
              </div>
              <div className="bg-gray-200 shadow-lg flex flex-col w-1/3 sm:w-full items-center justify-center rounded-xl p-5 text-black  ">
                <p className="text-sm sm:text-lgfont-normal">$CPV</p>
                <p className="text-md sm:text-2xl font-bold">$0.001</p>
              </div>
            </div>
            <div className="col-span-12 sm:col-span-10 flex flex-col ">
              <p className="sm:text-lg text-sm">Statistics</p>
              <p className="font-bold text-lg sm:text-2xl mb-5">
                Payment received.
              </p>
              <LineChart />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
