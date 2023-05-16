import "animate.css";
import { ArrowRight } from "phosphor-react";
import Video1 from "../../assets/videos/eutatiele.mp4";
import Video2 from "../../assets/videos/lidiamub.mp4";

import LogoCarrousel from "../LogoCarrousel";

export default function Content_Primary() {
  return (
    <div className=" grid grid-cols-12 sm:px-10  mt-10">
      <div className="col-span-12 sm:col-span-6 flex flex-col justify-end gap-7 ">
        <h1 className="text-6xl text-center sm:text-left sm:text-8xl font-black uppercase font-Inter">
          Growth <br />
          for Gen-Z{" "}
          <span className="relative z-50">
            Brands
            <div className="h-10 w-full rounded-sm bg-default absolute bottom-0 -z-50" />
          </span>
          {/* Growth for
          <span className="animate-text bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent font-Inter text-6xl sm:text-8xl font-black">
            Gen-Z
          </span> */}
          <br />
        </h1>
        <div className="w-full flex items-center sm:justify-start justify-center">
          <p className="w-4/5 sm:text-left text-center text-md font-medium">
            <strong>Viplink's</strong> AI-powered managed service generates
            hundreds of user-generated branded videos tailored to your brand's
            needs.
          </p>
        </div>
        <div className="hidden sm:flex items-center justify-start gap-5 ">
          <button className="btn w-1/4 btn-active text-white bg-[#cb0041] hover:bg-transparent border-2 border-[#cb0041] hover:border-[#cb0041] active:border-2 active:border-[#cb0041] shadow-lg shadow-[#cb0041]/20 hover:shadow-[#cb0041]/40 rounded-xl capitalize">
            Contat Us
          </button>
          <button className="btn w-1/4 btn-outline text-white border-2 border-white hover:border-[#cb0041] hover:bg-transparent rounded-xl  capitalize">
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
              src={Video2}
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
              src={Video1}
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
              src="https://tamovip-itens.s3.sa-east-1.amazonaws.com/extras/challenges/fusion_1.mp4"
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
        </div>
      </div>
      <div className="col-span-12 flex mt-10 flex-col gap-10 w-full">
        <p className=" sm:w-full text-white text-center  font-bold text-sm uppercase">
          Powering Brand Growth For Companies <br className="sm:hidden" /> All
          Around The World
          {/* GROWTH FROM COMPANIES <br className="sm:hidden" /> ALL AROUND THE
          WORLD */}
        </p>
        <LogoCarrousel />
      </div>
    </div>
  );
}
