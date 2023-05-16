import "animate.css";
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
    <div className="flex items-center flex-col gap-16 mt-24 sm:px-0 px-5">
      <div className="flex flex-col items-center gap-2">
        <p className="text-center font-bold capitalize text-3xl sm:text-5xl">
          How Viplink AI Works?
        </p>
        <div className="w-6/12 h-1 rounded-sm  bg-violet-700" />
      </div>

      <div className="w-full sm:w-9/12 grid grid-cols-4 gap-10 p-10   bg-white bg-opacity-10 rounded-2xl shadow-md backdrop-blur-md border border-white border-opacity-30">
        <div className="group col-span-4 sm:col-span-1 flex flex-col items-center justify-start gap-5">
          <Handshake
            size={80}
            className="transition-all group-hover:scale-105 ease-in-out group-hover:text-violet-600"
            weight="fill"
          />
          <p className="font-bold text-lg text-center">Set <br /> Objectives</p>
          <p className="font-normal text-md text-center">
            Define brand goals and audience
          </p>
        </div>
        <div className="group col-span-4 sm:col-span-1 flex flex-col items-center justify-start gap-5">
          <PresentationChart
            size={80}
            className="transition-all group-hover:scale-105 ease-in-out group-hover:text-violet-600"
            weight="fill"
          />
          <p className="font-bold text-lg text-center">
            Rank Branded <br />
            Assets
          </p>
          <p className="font-normal text-md text-center">
            The best ones will go live.
          </p>
        </div>
        <div className="group col-span-4 sm:col-span-1 flex flex-col items-center justify-start gap-5">
          <UsersThree
            size={80}
            className="transition-all group-hover:scale-105 ease-in-out group-hover:text-violet-600"
            weight="fill"
          />
          <p className="font-bold text-lg text-center">
            Follow Real <br /> Time Results
          </p>
          <p className="font-normal text-md text-center">
            Will can follow every single second of the campaign’s results.
          </p>
        </div>
        <div className="group col-span-4 sm:col-span-1 flex flex-col items-center justify-start gap-5">
          <ChartLineUp
            size={80}
            className="transition-all group-hover:scale-105 ease-in-out group-hover:text-violet-600"
            weight="fill"
          />
          <p className="font-bold text-lg text-center">
            Hands <br /> Free
          </p>
          <p className="font-normal text-md text-center">
            From audience management to creator reward payment, our ai will
            handle everything for you.
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
