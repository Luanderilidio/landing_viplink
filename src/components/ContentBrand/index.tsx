import { Eye, TiktokLogo, TrendUp } from "phosphor-react";
import Chart from "chart.js";

import Logo1 from "../../assets/brands/1.png";
import Gostosa from "../../assets/logo1.jpeg";
import Fall from "../../assets/fall.png";
import { LineChart } from "./teste";

export default function ContentBrand() {
  return (
    <div className="grid grid-cols-12  px-10">
      <div className="col-span-1" />
      <div className="col-span-10 flex flex-col gap-5">
        <img src={Logo1} className="w-32" />
        <p className="text-lg font-Inter">
          Influencers were encouraged to create a short video{" "}
          <strong>promoting a movie available on Amazon Prime Video</strong>.
          The Creators highlighted numerous reactions and feelings provoked by
          the film when{" "}
          <strong>publishing on their Instagram reel and Tiktok</strong>.
        </p>
        <div className="flex justify-center mt-5 gap-12">
          <div className="bg-white transition ease-in-out hover:scale-105 shadow-2xl shadow-black/70 text-black flex flex-col items-center px-9 py-4 rounded-3xl">
            <img className="w-24 rounded-full" src={Gostosa} />
            <h1 className="text-xl font-Inter font-bold mt-2">4.6M</h1>
            <p className="font-normal">Followers</p>
          </div>
          <div className="bg-white transition ease-in-out hover:scale-105 shadow-2xl shadow-black/70  text-black flex flex-col items-center px-9 py-4 rounded-3xl">
            <img className="w-24 rounded-full" src={Gostosa} />
            <h1 className="text-xl font-Inter font-bold mt-2">4.6M</h1>
            <p className="font-normal">Followers</p>
          </div>
          <div className="bg-white transition ease-in-out hover:scale-105 shadow-2xl shadow-black/70 text-black flex flex-col items-center px-9 py-4 rounded-3xl">
            <img className="w-24 rounded-full" src={Gostosa} />
            <h1 className="text-xl font-Inter font-bold mt-2">4.6M</h1>
            <p className="font-normal">Followers</p>
          </div>
        </div>
        <div className="flex justify-center items-center mt-5 gap-20">
          <div className="flex items-center flex-col">
            <h1 className="font-bold font-Inter text-6xl">12M</h1>
            <p className="font-normal">Organic Views</p>
          </div>
          <div className="flex items-center flex-col">
            <h1 className="font-bold font-Inter text-6xl">95</h1>
            <p className="font-normal">Posts</p>
          </div>
          <div className="flex items-center flex-col">
            <h1 className="font-bold font-Inter text-6xl">116</h1>
            <p className="font-normal">Assets</p>
          </div>
          <div className="flex items-center flex-col">
            <h1 className="font-bold font-Inter text-6xl">+200</h1>
            <p className="font-normal">Hours Saved</p>
          </div>
        </div>
      </div>
      <div className="col-span-1" />
    </div>
  );
}
