import { TiktokLogo } from "phosphor-react";
import Gostosa from "../../assets/logo1.jpeg";

export default function SliderCreators() {
  return (
    <div>
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
  );
}
