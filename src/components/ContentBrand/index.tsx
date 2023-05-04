import { Eye, TiktokLogo, TrendUp } from "phosphor-react";
import Chart from "chart.js";

import Logo1 from "../../assets/brands/1.png";
import Gostosa from "../../assets/logo1.jpeg";
import Fall from "../../assets/fall.png";
import { LineChart } from "./teste";

export default function ContentBrand() {
  return (
    <div className="grid grid-cols-12  px-10">
      <div className="col-span-12 sm:col-span-6 flex">
        <div className="flex items-start justify-start gap-5 flex-col">
          <img className="ml-5 w-40" src={Logo1} />
          <div className="flex items-start gap-5 ">
            <img
              className="shadow-2xl w-1/5 sm:w-full shadow-black/70 transition-all ease-in-out cursor-pointer active:scale-95 hover:scale-105"
              src={Fall}
            />
            <div className="flex justify-start  h-full flex-col">
              <div className="flex flex-col gap-5">
                <p className="text-lg sm:text-4xl font-bold">
                  Prime Video <br /> Brand Growth
                </p>
                <div className="rating">
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-400"
                    checked
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-400"
                    checked
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-400"
                    checked
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-400"
                    checked
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-400"
                    checked
                  />
                </div>
              </div>
              <div className="flex gap-5 h-full ">
                <div className="flex 1/2 flex-col justify-end">
                  <p className="font-normal opacity-60 text-sm">Statistics</p>
                  <p className="font-semibold text-lg mb-10">Impressions</p>
                  <div className="flex items-center gap-2">
                    <p className="text-3xl font-bold">+5M</p>
                    <Eye size={29} weight="fill" />
                  </div>
                  <div className="flex items-center text-green-500 gap-2">
                    <p className="font-semibold whitespace-nowrap	">
                      CPM +18.34%
                    </p>
                    <TrendUp size={20} weight="bold" />
                  </div>
                </div>
                <div className="flex justify-end items-end">
                  <LineChart />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-span-6 ">
        <div className="flex h-full items-center justify-evenly">
          <div className="flex flex-col gap-5 sm:w-40">
            <video
              width="100%"
              height="100%"
              className="rounded-xl shadow-2xl shadow-black/70 transition-all ease-in-out cursor-pointer active:scale-95 hover:scale-105"
              src="https://tamovip-itens.s3.sa-east-1.amazonaws.com/extras/challenges/99moto_1.mp4"
              muted
              loop
              autoPlay
            />
            <div className="flex gap-2">
              <img className="w-12 rounded-full" src={Gostosa} />
              <div className="flex flex-col gap-2">
                <p className="text-sm font-bold">@LuanderIlidio</p>
                <div className="flex items-center gap-2">
                  <TiktokLogo size={18} weight="fill" />
                  <p className="text-sm font-medium">5K</p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col mb-14 gap-5 sm:w-40">
            <video
              width="100%"
              height="100%"
              className="rounded-xl shadow-2xl shadow-black/70 transition-all ease-in-out cursor-pointer active:scale-95 hover:scale-105"
              src="https://tamovip-itens.s3.sa-east-1.amazonaws.com/extras/challenges/99moto_1.mp4"
              muted
              loop
              autoPlay
            />
            <div className="flex gap-2">
              <img className="w-12 rounded-full" src={Gostosa} />
              <div className="flex flex-col gap-2">
                <p className="text-sm font-bold">@LuanderIlidio</p>
                <div className="flex items-center gap-2">
                  <TiktokLogo size={18} weight="fill" />
                  <p className="text-sm font-medium">5K</p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-5 sm:w-40">
            <video
              width="100%"
              height="100%"
              className="rounded-xl shadow-2xl shadow-black/70 transition-all ease-in-out cursor-pointer active:scale-95 hover:scale-105"
              src="https://tamovip-itens.s3.sa-east-1.amazonaws.com/extras/challenges/99moto_1.mp4"
              muted
              loop
              autoPlay
            />
            <div className="flex gap-2">
              <img className="w-12 rounded-full" src={Gostosa} />
              <div className="flex flex-col gap-2">
                <p className="text-sm font-bold">@LuanderIlidio</p>
                <div className="flex items-center gap-2">
                  <TiktokLogo size={18} weight="fill" />
                  <p className="text-sm font-medium">5K</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
