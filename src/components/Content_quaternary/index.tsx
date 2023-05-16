import "animate.css";
import Logo1 from "../../assets/brands/1.png";
import {
  ArrowCircleRight,
  ArrowRight,
  ChartLineUp,
  FlowArrow,
  Handshake,
  PresentationChart,
  TrendUp,
  UsersThree,
} from "phosphor-react";
import Admin1 from "../../assets/admin/1.png";
import Admin2 from "../../assets/admin/2.png";
import Admin3 from "../../assets/admin/3.png";

import { useState } from "react";

export default function Content_Quaternary() {
  const [imageView, setImageView] = useState([true, false, false]);
  return (
    <div className="grid grid-cols-12 px-10 mt-52  gap-5">
      <div className="col-span-7 flex items-center justify-center">
        {imageView[0] && (
          <img
            className="w-11/12 animate__animated animate__fadeIn"
            src={Admin1}
          />
        )}
        {imageView[1] && (
          <img
            className="w-10/12 animate__animated animate__fadeIn  "
            src={Admin2}
          />
        )}
        {imageView[2] && (
          <img
            className="w-10/12 animate__animated animate__fadeIn  "
            src={Admin3}
          />
        )}
      </div>
      <div className="col-span-5 flex flex-col justify-center gap-5 relative  h-[500px]">
        {imageView[0] && (
          <p className="text-6xl text-center sm:text-left sm:text-6xl font-black leading-none font-Inter uppercase  animate__animated animate__fadeIn ">
            GO LIVE WITH BRAND READY{" "}
            <span className="relative z-50">
              VIDEOS
              <div className="h-10 w-full rounded-sm bg-default absolute bottom-0 -z-50" />
            </span>
          </p>
        )}

        {imageView[1] && (
          <p className="text-6xl text-center sm:text-left sm:text-6xl font-black leading-none font-Inter uppercase  animate__animated animate__fadeIn">
            CHECK CONSOLIDATED REAL TIME{" "}
            <span className="relative z-50">
              RESULTS
              <div className="h-10 w-full rounded-sm bg-default absolute bottom-0 -z-50" />
            </span>
          </p>
        )}

        {imageView[2] && (
          <p className="text-6xl text-center sm:text-left sm:text-6xl font-black leading-none font-Inter uppercase  animate__animated animate__fadeIn ">
            REAL TIME ROI{" "}
            <span className="relative z-50">
              ANALISIS
              <div className="h-10 w-full rounded-sm bg-default absolute bottom-0 -z-50" />
            </span>
          </p>
        )}

        <div className=" flex flex-col overflow-y-auto overscroll-contain scrollbar-hide">
          <div className="flex flex-col mt-10">
            <div
              onMouseEnter={() => setImageView([true, false, false])}
              className="flex  flex-col gap-6"
            >
              <div className="grid grid-cols-12 items-start">
                <FlowArrow className="col-span-1" size={32} weight="fill" />
                <p className="col-span-11">
                  Get creator content that fits your brand goals, within
                  briefing and budget.
                </p>
              </div>
              <div className="grid grid-cols-12 items-start">
                <FlowArrow className="col-span-1" size={32} weight="fill" />
                <p className="col-span-11">
                  Save +100 hours per month with our ready to go branded
                  content.
                </p>
              </div>
              <div className="grid grid-cols-12 items-start">
                <FlowArrow className="col-span-1" size={32} weight="fill" />
                <p className="col-span-11">
                  We analyze thousands of branded assets per month in only a few
                  hours. You just have to choose the best ones and they will go
                  live within 24 hours.
                </p>
              </div>
            </div>

            <div
              onMouseEnter={() => setImageView([false, true, false])}
              className="flex h-full flex-col gap-6"
            >
              <div className="grid grid-cols-12 items-start mt-20">
                <ArrowCircleRight
                  className="col-span-1"
                  size={32}
                  weight="fill"
                />
                <p className="col-span-11">
                  <strong>Branding KPIs:</strong> Seamlessly track KPIS using
                  most advanced Ai and official APIs.
                </p>
              </div>

              <div className="grid grid-cols-12 items-start">
                <ArrowCircleRight
                  className="col-span-1"
                  size={32}
                  weight="fill"
                />
                <p className="col-span-11">
                  <strong>Sentiment analysis:</strong> identify brand engagement
                  with our AI sentiment analysis on each post.
                </p>
              </div>
            </div>

            <div
              onMouseEnter={() => setImageView([false, false, true])}
              className="flex h-full mt-20 flex-col gap-6"
            >
              <div className="grid grid-cols-12 items-start">
                <TrendUp className="col-span-1" size={32} weight="fill" />
                <p className="col-span-11">
                  Campaign performance data ready for you.
                </p>
              </div>

              <div className="grid grid-cols-12 items-start">
                <TrendUp className="col-span-1" size={32} weight="fill" />
                <p className="col-span-11">
                  Check the return of the campaign and by each creator.
                </p>
              </div>

              <div className="grid grid-cols-12 items-start">
                <TrendUp className="col-span-1" size={32} weight="fill" />
                <p className="col-span-11">
                  Double down your investment on your top performing creator
                  partners.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}