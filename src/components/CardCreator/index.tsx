import { TiktokLogo } from "phosphor-react";
import Gostosa from "../../assets/logo1.jpeg";

export default function CardCreator() {
  return (
    <div className="transition-all ease-in-out flex sm:hover:scale-125 sm:py-5 items-start h-full w-full">
      <div className="flex w-full">
        <img
          className="transition cursor-pointer ease-in-out shadow-black drop-shadow-2xl sm:hover:scale-150  w-52 rounded-full border"
          src={Gostosa}
        />
      </div>
      <div className="flex flex-col gap-1">
        <p className="text-sm font-bold cursor-pointer transition ease-in-out sm:hover:scale-125 ">
          @LuanderIlidio
        </p>
        <div className="flex items-center gap-2">
          <TiktokLogo
            size={18}
            weight="fill"
            className=" transition ease-in-out sm:hover:scale-150 cursor-pointer"
          />
          <p className="text-sm font-medium transition ease-in-out sm:hover:scale-150 cursor-pointer">
            5K
          </p>
        </div>
      </div>
    </div>
  );
}
