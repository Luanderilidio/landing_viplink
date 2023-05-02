import "animate.css";
import "./style2.css";
import Logo1 from "../../assets/brands/1.png";
import { ArrowRight } from "phosphor-react";

export default function Content_Tertiary() {
  return (
    <div className="flex flex-col gap-16 mt-24">
      <div className="flex flex-col items-center gap-2">
        <p className="text-center font-bold capitalize text-3xl sm:text-5xl">
          Trusted By The <br className="sm:hidden" /> Best Brands
        </p>
        <div className="w-3/12 h-1 rounded-sm  bg-violet-700" />
      </div>

      <div className="w-full">
        <div className="w-full logosBrands">
          <div className="w-screen logos-slideBrands flex gap-14">
            <div className=" flex flex-col gap-4 items-center justify-center">
              <p className="w-full text-7xl -mb-10">”</p>
              <p className="w-[500px] font-normal italic text-lg text-center ">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s,
              </p>
              <p className="font-bold">CTO</p>
              <img className="w-20" src={Logo1} />
            </div>
            <div className=" flex flex-col gap-4 items-center justify-center">
              <p className="w-full text-7xl -mb-10">”</p>
              <p className="w-[500px] font-normal italic text-lg text-center ">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s,
              </p>
              <p className="font-bold">CTO</p>
              <img className="w-20" src={Logo1} />
            </div>
            <div className=" flex flex-col gap-4 items-center justify-center">
              <p className="w-full text-7xl -mb-10">”</p>
              <p className="w-[500px] font-normal italic text-lg text-center ">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s,
              </p>
              <p className="font-bold">CTO</p>
              <img className="w-20" src={Logo1} />
            </div>
            <div className=" flex flex-col gap-4 items-center justify-center">
              <p className="w-full text-7xl -mb-10">”</p>
              <p className="w-[500px] font-normal italic text-lg text-center ">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s,
              </p>
              <p className="font-bold">CTO</p>
              <img className="w-20" src={Logo1} />
            </div>
            <div className=" flex flex-col gap-4 items-center justify-center">
              <p className="w-full text-7xl -mb-10">”</p>
              <p className="w-[500px] font-normal italic text-lg text-center ">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s,
              </p>
              <p className="font-bold">CTO</p>
              <img className="w-20" src={Logo1} />
            </div>
          </div>
        </div>
      </div>
      <div className="w-full flex items-center justify-center">
        <button className="btn w-4/6 sm:w-1/6 flex items-center text-white justify-between btn-active bg-violet-700 hover:bg-violet-600 active:bg-violet-700 shadow-lg shadow-violet-700/30 rounded-2xl capitalize">
          <p className="text-lg text-white ">Contat us</p>
          <ArrowRight size={23} weight="bold" />
        </button>
      </div>
    </div>
  );
}
