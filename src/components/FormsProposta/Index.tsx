import "animate.css";
import {
  ArrowRight,
  ArrowSquareOut,
  ChatCircleDots,
  CheckCircle,
  EnvelopeSimple,
  User,
  CaretDown,
  PaperPlaneRight,
} from "phosphor-react";

export default function FormsProposta() {
  return (
    <div className="sm:grid sm:grid-cols-12 flex flex-col gap-10 sm:gap-16 mt-24  px-5">
      <div className="hidden sm:block col-span-1" />

      <div className="col-span-12 sm:col-span-5 flex flex-col items-center justify-start gap-10">
        <div className="bg-white text-black w-5/6 flex flex-col gap-5 p-10 rounded-2xl shadow-2xl shadow-black/70">
          <h1 className="text-2xl font-bold text-center text-zinc-800">
            Request a Proposal
          </h1>

          <div className="relative w-full">
            <input
              type="text"
              placeholder="Your Name"
              className="input rounded-xl w-full font-semibold bg-transparent text-black border-2 border-default focus:border-default focus:shadow-md focus:shadow-default/30 pl-10 pr-4 py-2"
            />
            <div className="absolute inset-y-0 left-0 flex items-center pl-3">
              <User size={22} className="text-default" />
            </div>
          </div>
          <div className="relative w-full">
            <input
              type="text"
              placeholder="Bussines Email *"
              className="input rounded-xl w-full font-semibold bg-transparent text-black border-2 border-default focus:border-default focus:shadow-md focus:shadow-default/30 pl-10 pr-4 py-2"
            />
            <div className="absolute inset-y-0 left-0 flex items-center pl-3">
              <EnvelopeSimple size={22} className="text-default" />
            </div>
          </div>
          <div className="relative w-full">
            <input
              type="text"
              placeholder="Comments"
              className="input rounded-xl w-full font-semibold bg-transparent text-black border-2 border-default focus:border-default focus:shadow-md focus:shadow-default/30 pl-10 pr-4 py-2"
            />
            <div className="absolute inset-y-0 left-0 flex items-center pl-3">
              <ChatCircleDots size={22} className="text-default" />
            </div>
          </div>
          <div className="relative w-full">
            <select className="select w-full font-semibold bg-transparent text-black border-2 border-default focus:border-default focus:shadow-md focus:shadow-default/30 ">
              <option disabled selected>
                I consent to receive emails from Viplink
              </option>
              <option>Yes</option>
              <option>After</option>
            </select>
            {/* <div className="absolute inset-y-0 left-0 flex items-center pl-3">
              <CaretDown size={22}className="text-default" />
            </div> */}
          </div>
          <button className="btn w-full flex items-center gap-2 btn-active border-2 border-default text-white bg-default hover:bg-default shadow-lg shadow-default/30 rounded-xl capitalize">
            SUBMIT
            <PaperPlaneRight size={16} weight="fill" />
          </button>
          <p className="font-bold text-zinc-800">
            Questions? Call us at (877)525-123 Viplink.ai or email us at{" "}
            <span className="text-default">creators@viplink.ai</span>
          </p>
        </div>
      </div>
      <div className="col-span-12 sm:col-span-5 flex flex-col items-start justify-start  gap-5">
        <p className="text-center font-Inter w-full sm:text-left font-black capitalize text-xl sm:text-7xl">
          NO HOURLY
          <br /> FEES. NO <br />
          RETAINERS
        </p>
        <p className="text-lg font-semibold mt-5">
          <strong>Viplink</strong> is buit for brands and agencies.
        </p>
        <p className="text-sm">
          We provide marketing services, but we are not an agency. With Vipink,
          everthing is priced upfront, so yuo know the exact cost of we will
          deliver.
        </p>
        <p className="text-lg font-semibold">
          Safe and compliant partnerships.
        </p>
        <p className="text-sm">
          Viplink in-house legal team helps our customers sucessfuly navigate
          the complexities of influencer marketing in highly-regulared
          industries from insurance finance and phamarceuticals, to gaming,
          crypto, alcohol and more.
        </p>
      </div>
      <div className="hidden sm:block col-span-1" />
    </div>
  );
}

// <button className="btn w-4/6 sm:w-1/6 flex items-center text-white justify-between btn-active bg-default hover:bg-violet-600 active:bg-default shadow-lg shadow-default/30 rounded-2xl capitalize">
//   <p className="text-lg text-white ">Contat us</p>
//   <ArrowRight size={23}className="text-default" />
// </button>
