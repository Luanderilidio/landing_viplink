import "animate.css";
import {
  EnvelopeSimple,
  PaperPlaneRight,
  InstagramLogo,
  LinkedinLogo,
  TiktokLogo,
  TwitterLogo,
  YoutubeLogo,
} from "phosphor-react";
import LogoXL from "../../assets/logo-XL.png";
import { useMediaQuery } from "react-responsive";

export default function Content_Tenth() {
  const isMobile = useMediaQuery({
    query: "(max-width: 767px)",
  });

  const value = isMobile ? 500 : 760;
  return (
    <div className="sm:grid sm:grid-cols-12 flex flex-col gap-10 sm:gap-16 mt-24  px-5">
      <div className="hidden sm:block col-span-1" />
      <div className="col-span-12 sm:col-span-5 flex flex-col items-start justify-start">
        <p className="text-left font-bold w-fit leading-none capitalize text-2xl sm:text-[2.8rem]">
          JOIN 26,367 CREATORS
        </p>
        <p className="text-left font-bold w-fit leading-none capitalize text-2xl sm:text-2xl">
          GETTING SPONSORSHIP APPORTUNITIES
        </p>
        <p className="text-left font-medium w-fit leading-none capitalize text-2xl sm:text-sm mt-2">
          <span className="text-lg">”</span>I have made over $17,000 from brand
          deals I found through Justin's newsletter. His list not only makes me
          money on a regular basis, but it also provides tips and information
          that saves me time and energy when pitching and working with brands. I
          cannot believe he gives all of this away for free!
          <span className="text-lg">”</span>
        </p>

        <div className="flex flex-col gap-2">
          <p className="text-left font-bold w-fit leading-none capitalize text-2xl sm:text-lg mt-5">
            Hits Yout Inbox Every Monday & Thursday @ 7AM EST.
          </p>
          <div className="relative w-full">
            <input
              type="text"
              placeholder="Your Email Adress"
              className="input rounded-xl w-full font-semibold bg-transparent text-white border-2 border-default focus:border-default focus:shadow-md focus:shadow-default/30 pl-10 pr-4 py-2"
              // className="pl-10 pr-4 py-2 border border-gray-300 rounded-md"
            />
            <div className="absolute inset-y-0 left-0 flex items-center pl-3">
              <EnvelopeSimple size={22} weight="bold" />
            </div>
          </div>
          <button className="btn w-full flex items-center gap-2 btn-active border-2 border-default text-white bg-default hover:bg-default shadow-lg shadow-default/30 rounded-xl capitalize">
            SEND NEW OPPORTUNITIES
            <PaperPlaneRight size={16} weight="fill" />
          </button>
        </div>
      </div>

      <div className="col-span-12 sm:col-span-5 flex flex-col items-center justify-start gap-10">
        <div className="w-full flex flex-col items-end justify-end">
          <img src={LogoXL} className="w-52" alt="logoXl" />
          <p className="text-left font-bold w-fit leading-none capitalize text-2xl sm:text-xl mt-2 tracking-normal	">
            FOLLOW US ON
            <br />
            <span className="text-2xl sm:text-3xl">SOCIAL MEDIA</span>
          </p>
          <p className="text-left font-bold w-fit leading-none capitalize text-2xl sm:text-3xl"></p>
          <div className="flex items-center gap-4 mt-2">
            <InstagramLogo
              className="transition ease-in-out hover:text-rose-500 cursor-pointer"
              size={32}
              weight="bold"
            />
            <LinkedinLogo
              className="transition ease-in-out hover:text-blue-800 cursor-pointer"
              size={32}
              weight="bold"
            />
            <TwitterLogo
              className="transition ease-in-out hover:text-cyan-500 cursor-pointer"
              size={32}
              weight="bold"
            />
            <YoutubeLogo
              className="transition ease-in-out hover:text-red-600 cursor-pointer"
              size={32}
              weight="bold"
            />
            <TiktokLogo
              className="transition ease-in-out hover:text-pink-600 cursor-pointer"
              size={32}
              weight="bold"
            />
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
