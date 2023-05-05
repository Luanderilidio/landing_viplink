import "animate.css";
import { ArrowRight, ArrowSquareOut, CheckCircle } from "phosphor-react";

export default function Content_Seventh() {
  return (
    <div className="sm:grid sm:grid-cols-12 flex flex-col gap-10 sm:gap-16 mt-24  px-5">
      <div className="hidden sm:block col-span-1" />
      <div className="col-span-12 sm:col-span-5 flex flex-col items-start justify-start  gap-5">
        <p className="text-center w-full sm:text-left font-bold capitalize text-3xl sm:text-5xl">
          Pay Only For The <br /> Metrics That Matter
        </p>
        <button className="hidden sm:block btn w-2/4 btn-outline text-white border-2 border-white hover:border-white hover:bg-transparent rounded-xl normal-case">
          Schedule a Call
        </button>
      </div>

      <div className="col-span-12 sm:col-span-5 flex flex-col items-center justify-start gap-10">
        <div className="w-full  flex flex-col sm:flex-row  gap-2 items-start">
          <CheckCircle
            className="mt-1 text-violet-700"
            size={25}
            weight="fill"
          />
          <div className="w-fit  flex flex-col items-start justify-start">
            <div className="flex flex-col">
              <p className="text-left font-bold leading-none capitalize  text-2xl sm:text-3xl">
                Pay Per Results
              </p>
              <div className="w-full h-1 rounded-sm  bg-violet-700" />
            </div>
            <p className="mt-3 w-full sm:w-3/5">
              Invest in content performance, forget paying for content and
              'Hopium'.
            </p>
          </div>
        </div>
        <div className="w-full flex flex-col sm:flex-row  gap-2 items-start">
          <CheckCircle
            className="mt-1 text-violet-700"
            size={25}
            weight="fill"
          />
          <div className="w-fit   flex flex-col items-start justify-start">
            <div className="flex flex-col">
              <p className="text-left font-bold w-fit leading-none capitalize text-2xl sm:text-3xl">
                No Third party placement
              </p>
              <div className="w-full h-1 rounded-sm  bg-violet-700" />
            </div>
            <p className="mt-3  sm:w-4/5">
              Direct access to the verified creators you need. reduced risk of
              communication between various parties. Lower overall cost.
            </p>
          </div>
        </div>
        <div className="w-full  flex flex-col sm:flex-row  gap-2 items-start">
          <CheckCircle
            className="mt-1 text-violet-700"
            size={25}
            weight="fill"
          />
          <div className="w-fit  flex flex-col items-start justify-start">
            <div className="flex flex-col">
              <p className="text-center font-bold leading-none capitalize text-2xl sm:text-3xl">
                Predictable Results
              </p>
              <div className="w-full h-1 rounded-sm  bg-violet-700" />
            </div>
            <p className="mt-3 w-full sm:w-3/5">
              Reliable performance and expected outcomes, allowing for effective
              decision-making.
            </p>
          </div>
        </div>
        <div className="w-full flex flex-col sm:flex-row  gap-2 items-start justify-start">
          <CheckCircle
            className="mt-1 text-violet-700"
            size={25}
            weight="fill"
          />
          <div className="w-fit  flex flex-col items-start justify-start">
            <div className="flex flex-col">
              <p className="text-center font-bold leading-none capitalize text-2xl sm:text-3xl">
                Higly Scalable
              </p>
              <div className="w-full h-1 rounded-sm  bg-violet-700" />
            </div>
            <p className="mt-3 w-full sm:w-3/5">
              +700 creators working simultaneosly with your brand.
            </p>
          </div>
        </div>
        {/* <div className="w-fit flex gap-1 items-start">
          <CheckCircle
            className="mt-1 text-violet-700"
            size={25}
            weight="fill"
          />
          <div className="w-fit  flex flex-col items-start justify-start">
            <div className="flex flex-col">
              <p className="text-center font-bold leading-none capitalize text-3xl sm:text-xl">
                Higly Scalable
              </p>
              <div className="w-full h-1 rounded-sm  bg-violet-700" />
            </div>
            <p className="mt-3 w-3/5">
              +700 creators working simultaneosly with your brand.
            </p>
          </div>
        </div> */}
      </div>
      <div className="hidden sm:block col-span-1" />
    </div>
  );
}

// <button className="btn w-4/6 sm:w-1/6 flex items-center text-white justify-between btn-active bg-violet-700 hover:bg-violet-600 active:bg-violet-700 shadow-lg shadow-violet-700/30 rounded-2xl capitalize">
//   <p className="text-lg text-white ">Contat us</p>
//   <ArrowRight size={23} weight="bold" />
// </button>
