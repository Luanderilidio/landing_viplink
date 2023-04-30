import "animate.css";
import { ArrowRight } from "phosphor-react";
import LogoCarrousel from "../LogoCarrousel";

export default function Content_Primary() {
  return (
    <div className=" grid grid-cols-12 sm:p-10 mt-2">
      <div className="col-span-12 sm:col-span-6 flex flex-col gap-7">
        <h1 className="text-6xl text-center sm:text-left sm:text-8xl font-bold font-Inter	">
          Brand
          <br />
          Growth for
          <br />
          <span className="animate-text bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent font-Inter text-6xl sm:text-8xl font-black">
            Gen-Z
          </span>
        </h1>
        <div className="w-full flex items-center sm:justify-start justify-center">
          <p className="w-4/5 sm:text-left text-center text-md font-medium">
            <strong>Viplink.ai</strong> is a brand growth platform that uses
            proprietary dynamic pricing and a broad network of professional
          </p>
        </div>
        <div className="hidden sm:flex items-center justify-start gap-5 ">
          <button className="btn w-1/4 btn-active text-white bg-violet-700 hover:bg-violet-600 active:bg-violet-700 shadow-lg shadow-violet-700/30 rounded-xl capitalize">
            Contat Us
          </button>
          <button className="btn w-1/4 btn-outline text-white border-2 border-white hover:border-white hover:bg-transparent rounded-xl  capitalize">
            Explore More
          </button>
        </div>
      </div>
      <div className="col-span-12 sm:col-span-6 gap-10 mt-10 sm:mt-0 flex flex-col justify-center ">
        <div className="flex gap-5 justify-center">
          <div className="w-24 sm:w-60 mt-5 sm:mt-20 animate__animated animate__fadeIn animate__slower">
            <video
              width="100%"
              height="100%"
              className="rounded-xl shadow-2xl shadow-black/70 transition-all ease-in-out cursor-pointer active:scale-95 hover:scale-105"
              src="https://tamovip-itens.s3.sa-east-1.amazonaws.com/extras/challenges/99moto_1.mp4"
              muted
              loop
              autoPlay
            />
          </div>
          <div className="w-24 sm:w-60  animate__animated animate__fadeIn  animate__slower">
            <video
              width="100%"
              height="100%"
              className="rounded-xl shadow-2xl shadow-black/70 transition-all ease-in-out cursor-pointer active:scale-95 hover:scale-105"
              src="https://tamovip-itens.s3.sa-east-1.amazonaws.com/extras/challenges/fusion_1.mp4"
              muted
              loop
              autoPlay
            />
          </div>
          <div className="w-24 sm:w-60 mt-5 sm:mt-20 animate__animated animate__fadeIn animate__slower">
            <video
              width="100%"
              height="100%"
              className="rounded-xl shadow-2xl shadow-black/70 transition-all ease-in-out cursor-pointer active:scale-95 hover:scale-105"
              src="https://tamovip-itens.s3.sa-east-1.amazonaws.com/extras/challenges/wpt_1.mp4"
              muted
              loop
              autoPlay
            />
          </div>
        </div>
        <div className="flex sm:hidden items-center justify-evenly gap-5 ">
          <button className="btn w-5/6 flex items-center text-white justify-between btn-active bg-violet-700 hover:bg-violet-600 active:bg-violet-700 shadow-lg shadow-violet-700/30 rounded-2xl capitalize">
            <p className="text-lg text-white ">Contat Us</p>
            <ArrowRight size={23} weight="bold" />
          </button>
          {/* <button className="btn w-1/3 btn-outline border-2 border-white hover:border-white hover:bg-transparent rounded-xl text-white  capitalize">
            Explore More
          </button> */}
        </div>
      </div>
      <div className="col-span-12">
        <LogoCarrousel />
      </div>
    </div>
  );
}
