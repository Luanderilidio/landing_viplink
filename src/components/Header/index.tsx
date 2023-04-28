import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";
import LogoViplink from "../../assets/logo_viplink.png";
import FlagBR from "../../assets/flags/BR.png";
import FlagUS from "../../assets/flags/US.png";

import { ArrowRight, CaretDown, List, Translate, X } from "phosphor-react";
import { useState } from "react";

export default function Header() {
  const [showMenu, setShowMenu] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  function toggleDrawer() {
    setIsOpen(!isOpen);
  }
  const handleMenu = () => setShowMenu(!showMenu);

  return (
    <>
      <div className="w-full flex items-center justify-between font-Inter p-6">
        <img alt="logo_viplink" className="w-28" src={LogoViplink} />
        <div className="flex items-center justify-center gap-10 ">
          <div className="hidden sm:block flex-col group hover:text-[#4F46E5] transition-all ease-in-out  active:scale-95">
            <button className=" py-1 text-sm font-Inter font-bold">
              For influencers
            </button>
            <div className="transition-all ease-in-out w-0 group-hover:w-full h-1 bg-[#4F46E5]" />
          </div>
          <div className=" hidden sm:block flex-col group hover:text-[#4F46E5] transition-all ease-in  active:scale-95">
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
          <button className=" hidden btn bg-violet-700 hover:bg-violet-600 active:bg-violet-700 shadow-lg shadow-violet-700/30 text-white rounded-xl sm:flex items-center gap-2 text-sm capitalize">
            Login
            <ArrowRight weight="bold" size={18} />
          </button>
          <button
            onClick={toggleDrawer}
            className="flex sm:hidden transition ease-in-out active:scale-95"
          >
            <List size={27} weight="bold" />
          </button>
        </div>
      </div>
      <Drawer
        open={isOpen}
        onClose={toggleDrawer}
        direction="right"
        className="w-full bg-black"
        size="100%"
        style={{ background: "#141943" }}
      >
        <div className="h-screen w-screen p-6 font-Inter">
          <div className="flex items-center justify-between">
            <img alt="logo_viplink" className="w-28" src={LogoViplink} />
            <X
              onClick={toggleDrawer}
              className="transition-colors ease-in-out hover:text-red-600"
              size={32}
              weight="bold"
            />
          </div>
          <div className="w-full flex h-screen flex-col items-center justify-evenly gap-5">
            <div />
            <div className="flex flex-col gap-6 items-center justify-center">
              <div className=" flex-col group hover:text-[#4F46E5] transition-all ease-in-out  active:scale-95">
                <button className=" py-1 text-2xl font-Inter font-bold">
                  For influencers
                </button>
                <div className="transition-all ease-in-out w-0 group-hover:w-full h-1 bg-[#4F46E5]" />
              </div>
              <div className="flex-col group hover:text-[#4F46E5] transition-all ease-in active:scale-95">
                <button className="py-1 text-2xl font-Inter font-bold">
                  About us
                </button>
                <div className="transition-all ease-in-out w-0 group-hover:w-full h-1 bg-[#4F46E5]" />
              </div>
            </div>
            <div className="w-full gap-7 flex flex-col items-center justify-center">
              <button className="btn btn-outline text-lg w-full border-violet-700 hover:border-violet-700 hover:bg-transparent active:bg-transparent shadow-lg hover:shadow-violet-700/40 shadow-violet-700/20 text-violet-700 rounded-xl sm:flex items-center gap-2 capitalize">
                Sign Up
              </button>
              <button className="btn  text-lg w-full bg-violet-700 border-violet-700 hover:bg-violet-600 active:bg-violet-700 shadow-lg hover:shadow-violet-700/40 shadow-violet-700/20 text-white rounded-xl sm:flex items-center gap-2 capitalize">
                Sign In
              </button>
            </div>
            <div />
          </div>
        </div>
      </Drawer>
    </>
  );
}
