import LogoViplink from "../../assets/logo_viplink.png";
import FlagBR from "../../assets/flags/BR.png";
import FlagUS from "../../assets/flags/US.png";

import { ArrowRight, CaretDown, Translate } from "phosphor-react";
import { useState } from "react";

export default function Header() {
  const [showMenu, setShowMenu] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  function toggleDrawer() {
    setIsOpen(!isOpen);
  }
  const handleMenu = () => setShowMenu(!showMenu);

  return (
    <div className="w-full flex items-center justify-between font-Inter p-6">
      <img alt="logo_viplink" className="w-28" src={LogoViplink} />
      <div className="flex items-center justify-center gap-10 ">
        <div className="flex flex-col group hover:text-[#4F46E5] transition-all ease-in-out  active:scale-95">
          <button className=" py-1 text-sm font-Inter font-bold">
            For influencers
          </button>
          <div className="transition-all ease-in-out w-0 group-hover:w-full h-1 bg-[#4F46E5]" />
        </div>
        <div className="flex flex-col group hover:text-[#4F46E5] transition-all ease-in  active:scale-95">
          <button className="py-1 text-sm font-Inter font-bold">
            About us
          </button>
          <div className="transition-all ease-in-out w-0 group-hover:w-full h-1 bg-[#4F46E5]" />
        </div>

        <div className="dropdown dropdown-hover dropdown-bottom dropdown-end">
          <div className="transition ease-in-out flex items-center text-white hover:text-[#4F46E5]">
            <Translate size={22} weight="bold" tabIndex={0} />
            <CaretDown size={12} weight="bold" />
          </div>
          <div
            className=" text-black  p-2 shadow bg-base-100 rounded-lg  flex flex-col  dropdown-content menu w-32"
            tabIndex={0}
          >
            <button className=" transition-colors flex items-center  gap-2 rounded-lg   hover:bg-slate-100 p-3 active:bg-slate-200">
              <img src={FlagUS} />
              <p className="w-full font-Inter text-left font-medium text-xs">
                English
              </p>
            </button>
            <button className=" transition-colors flex items-center gap-2 rounded-lg  hover:bg-slate-100 p-3 active:bg-slate-200">
              <img src={FlagBR} />
              <p className="w-full font-Inter text-left font-medium text-xs">
                Portuguese
              </p>
            </button>
          </div>
        </div>
        <button className="btn bg-violet-700 hover:bg-violet-600 active:bg-violet-700 shadow-lg shadow-violet-700/30 text-white  rounded-xl flex items-center gap-2 text-sm capitalize">
          Login
          <ArrowRight weight="bold" size={18} />
        </button>
      </div>
    </div>
  );
}
