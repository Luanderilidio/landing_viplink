import "animate.css";
import "./style2.css";
import Logo1 from "../../assets/brands/1.png";
import {
  ArrowRight,
  ChartLineUp,
  Handshake,
  PresentationChart,
  UsersThree,
} from "phosphor-react";

export default function Content_Quaternary() {
  return (
    <div className="flex  items-center flex-col gap-16 mt-24">
      <div className="flex flex-col items-center gap-2">
        <p className="text-center font-bold capitalize text-3xl sm:text-5xl">
          How to Works
        </p>
        <div className="w-1/12 h-1 rounded-sm  bg-violet-700" />
      </div>

      <div className="w-9/12 grid grid-cols-4 gap-10 p-10  bg-white bg-opacity-10 rounded-2xl shadow-md backdrop-blur-md border border-white border-opacity-30">
        <div className="col-span-4 sm:col-span-1 flex flex-col items-center justify-start gap-5">
          <Handshake size={80} weight="fill" />
          <p className="font-bold text-lg">Brand alignment</p>
          <p className="font-normal text-md text-center">
            Consultants will help you define the perfect target audience and
            creator profile to achieve your brand goals.
          </p>
        </div>
        <div className="col-span-4 sm:col-span-1 flex flex-col items-center justify-start gap-5">
          <PresentationChart size={80} weight="fill" />
          <p className="font-bold text-lg">Setup and Launch</p>
          <p className="font-normal text-md text-center">
            AI will get the best available bidding price for you to go VIRAL.
          </p>
        </div>
        <div className="col-span-4 sm:col-span-1 flex flex-col items-center justify-start gap-5">
          <UsersThree size={80} weight="fill" />
          <p className="font-bold text-lg">Brand Safety</p>
          <p className="font-normal text-md text-center">
            Curated and aligned creators deliver AMAZING branded content to
            millions of consumers.
          </p>
        </div>
        <div className="col-span-4 sm:col-span-1 flex flex-col items-center justify-start gap-5">
          <ChartLineUp size={80} weight="fill" />
          <p className="font-bold text-lg">Hands free results</p>
          <p className="font-normal text-md text-center">
            From audience management to creator reward payments.
          </p>
        </div>
      </div>
      <button className="btn w-4/6 sm:w-1/6 flex items-center text-white justify-between btn-active bg-violet-700 hover:bg-violet-600 active:bg-violet-700 shadow-lg shadow-violet-700/30 rounded-2xl capitalize">
        <p className="text-lg text-white ">Contat us</p>
        <ArrowRight size={23} weight="bold" />
      </button>
    </div>
  );
}
