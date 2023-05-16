import {
  InstagramLogo,
  LinkedinLogo,
  TiktokLogo,
  TwitterLogo,
  YoutubeLogo,
} from "phosphor-react";
import { useMediaQuery } from "react-responsive";

import LogoViplink from "../../assets/logo_viplink.png";

export default function Footer() {
  const isMobile = useMediaQuery({
    query: "(max-width: 767px)",
  });
  return (
    <>
      {isMobile ? (
        <footer className="footer footer-center p-10 bg-[#0E1135] text-white rounded mt-20">
          <div className="grid grid-flow-col gap-4">
            <a className="link link-hover">About us</a>
            <a className="link link-hover">Contact</a>
            <a className="link link-hover">Terms Of Use</a>
          </div>
          <div>
            <div className="flex items-center gap-4">
              <InstagramLogo
                className="transition ease-in-out hover:text-rose-500 cursor-pointer"
                size={32}
                weight="bold"
              />
              <LinkedinLogo
                className="transition ease-in-out hover:text-blue-800 cursor-pointer"
                size={32}
                weight="bold"
              />
              <TwitterLogo
                className="transition ease-in-out hover:text-cyan-500 cursor-pointer"
                size={32}
                weight="bold"
              />
              <YoutubeLogo
                className="transition ease-in-out hover:text-red-600 cursor-pointer"
                size={32}
                weight="bold"
              />
              <TiktokLogo
                className="transition ease-in-out hover:text-pink-600 cursor-pointer"
                size={32}
                weight="bold"
              />
            </div>
          </div>
          <div>
            <p className="w-full text-centers sm:text-right text-xs italic">
              ©️ VIPlink 2023. All rights reserved. Check out Terms of Service
              and Privacy Policy.
            </p>
          </div>
        </footer>
      ) : (
        <footer className="grid grid-cols-12 p-10 bg-[#0E1135] text-white mt-20">
          <div className="col-span-2 flex flex-col">
            <img
              alt="logo_viplink"
              className="w-20 sm:w-28"
              src={LogoViplink}
            />
          </div>
          <div className="col-span-2 flex flex-col">
            <span className="footer-title">Viplink Inc</span>
            <a className="link link-hover">16192 Coastal </a>
            <a className="link link-hover">Highway Lewes</a>
            <a className="link link-hover">DE, USA</a>
          </div>
          <div className="col-span-2 flex flex-col">
            <span className="footer-title">Viplink Europe</span>
            <a className="link link-hover">Arturo Soria 93</a>
            <a className="link link-hover">Madrid, Spain</a>
            <a className="link link-hover"></a>
            <a className="link link-hover"></a>
          </div>
          <div className="col-span-3 flex flex-col">
            <span className="footer-title">Viplink Limited</span>
            <a className="link link-hover">Av. Pedroso de Moraes, 2117</a>
            <a className="link link-hover">Vila Madalena, SP, Brazil</a>
          </div>
          <div className="col-span-3  flex flex-col">
            <span className="footer-title">Newsletter</span>
            <div className="form-control w-80">
              <label className="label">
                <span className="label-text text-white">
                  Enter your email address
                </span>
              </label>
              <div className="relative">
                <input
                  type="text"
                  placeholder="username@site.com"
                  className="input input-bordered text-black w-full pr-16"
                />
                <button className="btn bg-default absolute top-0 right-0 rounded-l-none">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
          <div className="col-span-12 flex justify-between items-center mt-10">
            <div className="flex items-center gap-4">
              <InstagramLogo
                className="transition ease-in-out hover:text-rose-500 cursor-pointer"
                size={32}
                weight="bold"
              />
              <LinkedinLogo
                className="transition ease-in-out hover:text-blue-800 cursor-pointer"
                size={32}
                weight="bold"
              />
              <TwitterLogo
                className="transition ease-in-out hover:text-cyan-500 cursor-pointer"
                size={32}
                weight="bold"
              />
              <YoutubeLogo
                className="transition ease-in-out hover:text-red-600 cursor-pointer"
                size={32}
                weight="bold"
              />
              <TiktokLogo
                className="transition ease-in-out hover:text-pink-600 cursor-pointer"
                size={32}
                weight="bold"
              />
            </div>
            <p className="w-full text-right text-xs italic">
              ©️ VIPlink 2023. All rights reserved. Check out Terms of Service
              and Privacy Policy.
            </p>
          </div>
        </footer>
      )}
    </>
  );
}
