import { useRef } from "react";
import { useCountUp } from "react-countup";

export default function CardBrand({ creators, metrics, logo }: any) {
  const countUpRef = useRef(null);

  const { start, pauseResume, reset, update } = useCountUp({
    ref: countUpRef,
    start: 0,
    end: 1234567,
    delay: 1000,
    duration: 5,
    // onReset: () => console.log('Resetted!'),
    // onUpdate: () => console.log('Updated!'),
    // onPauseResume: () => console.log('Paused or resumed!'),
    // onStart: ({ pauseResume }) => console.log(pauseResume),
    // onEnd: ({ pauseResume }) => console.log(pauseResume),
  });

  return (
    <div className="flex justify-end flex-col gap-5">
      {/* <div className="w-full justify-center flex item-center ">
        <img src={logo} className="w-32" />
      </div> */}

      <div className="flex justify-center gap-10 ">
        {creators.map((item: any) => (
          <div className="bg-white transition ease-in-out hover:scale-105 shadow-2xl shadow-black/70 text-black flex flex-col items-center px-9 py-4 rounded-3xl">
            <img
              className="w-24 h-24 rounded-full shadow-md shadow-black/50"
              src={item.avatar}
            />
            <h1 className="text-xl font-Inter font-bold mt-2">{item.views}</h1>
            <p className="font-normal">Followers</p>
          </div>
        ))}
      </div>
      <div className="flex justify-center gap-12 items-center ">
        <div className="flex items-center flex-col">
          <h1 className="font-black font-Inter text-5xl">12M</h1>
          <p className="font-normal">Organic Views</p>
        </div>
        <div className="flex items-center flex-col">
          <h1 className="font-black font-Inter text-5xl">95</h1>
          <p className="font-normal">Posts</p>
        </div>
        <div className="flex items-center flex-col">
          <h1 className="font-black font-Inter text-5xl">116</h1>
          <p className="font-normal">Assets</p>
        </div>
        <div className="flex items-center flex-col">
          <h1 className="font-black font-Inter text-5xl">+200</h1>
          <p className="font-normal">Hours Saved</p>
        </div>
      </div>
    </div>
  );
}
