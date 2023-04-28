import "animate.css";

export default function Content_Primary() {
  return (
    <div className="grid grid-cols-12 gap-10 font-Inter mt-10 px-10">
      <div className="col-span-5 flex flex-col gap-6">
        <h1 className="text-8xl font-bold font-Inter	">
          Brand
          <br />
          Growth for
          <br />
          <span className="animate-text bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent font-Inter text-8xl font-black">
            Gen-Z
          </span>
        </h1>
        <p>
          <strong>Viplink.ai</strong> is a brand growth platform that uses
          proprietary dynamic pricing and a broad network of professional
          creators to help marketers and their agencies successfully drive brand
          growth across social media platforms.
        </p>
        <div className="flex gap-5">
          <button className="btn btn-active bg-violet-700 hover:bg-violet-600 active:bg-violet-700 shadow-lg shadow-violet-700/30 rounded-xl capitalize">
            Contat Us
          </button>
          <button className="btn btn-outline border-2 border-white hover:border-white hover:bg-transparent rounded-xl text-white  capitalize">
            Explore More
          </button>
        </div>
      </div>
      <div className="col-span-7 flex w-full justify-center items-start  gap-5 rounded-xl ">
        <div className="w-52 mt-32 animate__animated animate__fadeIn animate__slower">
          <video
            width="100%"
            height="100%"
            className="rounded-xl shadow-2xl shadow-black/70 transition-all ease-in-out cursor-pointer active:scale-95 hover:scale-105"
            src="https://tamovip-itens.s3.sa-east-1.amazonaws.com/extras/challenges/99moto_1.mp4"
            muted
            loop
            autoPlay
          />
        </div>
        <div className="w-60 animate__animated animate__fadeIn  animate__slower">
          <video
            width="100%"
            height="100%"
            className="rounded-xl shadow-2xl shadow-black/70 transition-all ease-in-out cursor-pointer active:scale-95 hover:scale-105"
            src="https://tamovip-itens.s3.sa-east-1.amazonaws.com/extras/challenges/fusion_1.mp4"
            muted
            loop
            autoPlay
          />
        </div>
        <div className="w-52 mt-32 animate__animated animate__fadeIn animate__slower">
          <video
            width="100%"
            height="100%"
            className="rounded-xl shadow-2xl shadow-black/70 transition-all ease-in-out cursor-pointer active:scale-95 hover:scale-105"
            src="https://tamovip-itens.s3.sa-east-1.amazonaws.com/extras/challenges/wpt_1.mp4"
            muted
            loop
            autoPlay
          />
        </div>
      </div>
    </div>
  );
}
