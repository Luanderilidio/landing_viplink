import "animate.css";
import { ArrowRight, ArrowSquareOut, CheckCircle } from "phosphor-react";

export default function Content_important1() {
  return (
    <div className="sm:grid sm:grid-cols-12 flex flex-col mt-24  px-5">
      <div className="hidden sm:block col-span-1" />
      <div className="col-span-12 sm:col-span-7 flex flex-col items-center justify-center  gap-5">
        <p className="text-center w-full sm:text-left font-bold capitalize text-3xl sm:text-7xl">
          Our brand partners
          <br /> get 234% more <br />
          awareness
        </p>
        {/* <button className="hidden sm:block btn w-2/4 btn-outline text-white border-2 border-white hover:border-white hover:bg-transparent rounded-xl normal-case">
          Schedule a Call
        </button> */}
      </div>

      <div className="col-span-12 sm:col-span-3 flex flex-col items-center justify-start gap-10">
        <div className="w-24 sm:w-72 animate__animated animate__fadeIn animate__slower relative">
          <video
            width="100%"
            height="100%"
            className="rounded-xl shadow-2xl shadow-black/70 transition-all ease-in-out cursor-pointer active:scale-95 hover:scale-105"
            src="https://tamovip-itens.s3.sa-east-1.amazonaws.com/extras/challenges/99moto_1.mp4"
            muted
            loop
            autoPlay
          />
          <div className=" flex gap-5 items-center absolute bottom-14 -left-40">
            <p className="text-5xl font-bold ">130</p>
            <p className="bg-white text-black rounded-sm p-2 text-xl font-medium">
              Number of video assets received <br /> monthly by our brand
              partners
            </p>
          </div>
        </div>
      </div>
      <div className="hidden sm:block col-span-1" />
    </div>
  );
}

// <button className="btn w-4/6 sm:w-1/6 flex items-center text-white justify-between btn-active bg-violet-700 hover:bg-violet-600 active:bg-violet-700 shadow-lg shadow-violet-700/30 rounded-2xl capitalize">
//   <p className="text-lg text-white ">Contat us</p>
//   <ArrowRight size={23} weight="bold" />
// </button>
