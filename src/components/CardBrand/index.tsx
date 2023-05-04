import { ArrowRight, Eye, TrendUp } from "phosphor-react";
import Image1 from "../../assets/brands/image_6.png";
import { LineChart } from "../ContentBrand/teste";

export default function CardBrand() {
  return (
    <div className="grid grid-cols-12 mx-5 ">
      <div className="col-span-6 flex flex-col gap-2 ">
        <div className="flex  gap-2">
          <img className="w-16 h-16" src={Image1} />
          <div className="flex flex-col gap-1 items-start justify-start">
            <p className="text-md font-bold leading-none">
              Prime Video <br /> Brand Growth
            </p>
            <div className="rating rating-xs">
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
        </div>
        <div className="flex items-center text-[#04CE00] gap-2">
          <p className="font-semibold whitespace-nowrap	">CPM +18.34%</p>
          <TrendUp size={20} weight="bold" />
        </div>
      </div>
      <div className="col-span-6 w-full relative">
        <LineChart />
        <div className="flex items-center gap-1 absolute right-0 bottom-2 text-2xl font-bold">
          <p className="text-xl font-bold">+5M</p>
          <Eye size={20} weight="fill" />
        </div>
      </div>
      <div className="col-span-12  flex items-end justify-end">
        <button className="btn-xs	 btn w-2/4 btn-outline text-white border-2 border-white hover:border-white mt-2 hover:bg-transparent active:text-white hover:text-white gap-2 rounded-xl normal-case">
          Get The Same Results
          <ArrowRight size={20} weight="bold" />
        </button>
      </div>
    </div>
    // <div className="flex relative px-10">
    //   <div className="flex items-center w-full justify-between gap-2">
    //     <div className="flex items-start w-full justify-start gap-2">
    //       <img className="w-24" src={Image1} />
    //       <div className="flex flex-col gap-2">
    //         <p className="text-lg font-bold leading-none">
    //           Prime Video  Brand Growth
    //         </p>
    //         <div className="rating rating-sm">
    //           <input
    //             type="radio"
    //             name="rating-2"
    //             className="mask mask-star-2 bg-orange-400"
    //             checked
    //           />
    //           <input
    //             type="radio"
    //             name="rating-2"
    //             className="mask mask-star-2 bg-orange-400"
    //             checked
    //           />
    //           <input
    //             type="radio"
    //             name="rating-2"
    //             className="mask mask-star-2 bg-orange-400"
    //             checked
    //           />
    //           <input
    //             type="radio"
    //             name="rating-2"
    //             className="mask mask-star-2 bg-orange-400"
    //             checked
    //           />
    //           <input
    //             type="radio"
    //             name="rating-2"
    //             className="mask mask-star-2 bg-orange-400"
    //             checked
    //           />
    //         </div>
    //       </div>
    //     </div>
    //     <div className="flex items-end justify-end w-fit h-full">
    //       <div className="flex items-center gap-2">
    //         <p className="text-3xl font-bold">+5M</p>
    //         <Eye size={29} weight="fill" />
    //       </div>
    //     </div>
    //     <div className="ml-0 p-10 mt-12 w-full absolute">
    //       <LineChart />
    //     </div>
    //   </div>
    // </div>
  );
}
