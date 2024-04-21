import React from "react";
import Maps from "../../assets/img/Maps.png";
import {
  FaArrowDownUpAcrossLine,
  FaCalendarDay,
  FaCashRegister,
  FaDownload,
  FaLocationPin,
  FaPerson,
  FaPhone,
  FaRegStar,
  FaStar,
} from "react-icons/fa6";
import { HiMiniMagnifyingGlassPlus } from "react-icons/hi2";
import { IoRadioButtonOn } from "react-icons/io5";
import { FaUser } from "react-icons/fa";
import profile from "../../assets/img/profile.jpeg";

const RideDetails = ({ setTrigger, current, status, flag }) => {
  return (
    <div className="fixed top-0 left-0 w-full h-screen flex  justify-center md:justify-end z-50 bg-black bg-opacity-75">
      <div className="relative p-4 md:p-9 bg-white rounded-lg flex flex-col items-center overflow-auto gap-7 md:w-[410px] ">
        <button
          className="absolute top-4 left-4 text-3xl md:flex hidden"
          onClick={() => setTrigger(false)}
        >
          &times;
        </button>
        <div className="relative">
          <button
            className="absolute top-4 left-4 text-3xl flex md:hidden"
            onClick={() => setTrigger(false)}
          >
            &times;
          </button>
          <img src={Maps} alt="" />
          <div className="absolute bottom-4 right-4 bg-white p-2 rounded-full shadow-custom">
            <HiMiniMagnifyingGlassPlus className="text-2xl text-gray-500" />
          </div>
          <div className="absolute top-4 right-4 bg-white p-2 rounded-full shadow-custom">
            <FaDownload className="text-gray-500" />
          </div>
        </div>
        <h1 className="text-2xl font-semibold">Ride Details</h1>
        <div className="flex shadow-custom py-3 px-5 flex-col rounded-md w-full">
          <div className="flex items-center justify-between gap-2">
            <div className="flex items-center gap-2">
              <div className="flex flex-col">
                <span className="text-[14px] font-semibold">Feb 27, 2024</span>
                <span className="text-[14px] font-semibold">10:00 AM</span>
              </div>
              <FaCalendarDay className="text-2xl" />
              {current === 1 && <div className="text-black">{status}</div>}
            </div>
            <span className="py-2 px-3 bg-[#FFB0004D] rounded-3xl border-2 border-[#ce94194d] font-semibold shadow-custom text-base">
              $25.00
            </span>
          </div>
          <div className="flex flex-col mt-3">
            <p className="font-semibold">Pick Up</p>
            <div className="flex flex-col gap-5 border-l-2 border-dotted border-black">
              <div className="flex gap-2 items-center">
                <IoRadioButtonOn className="text-primary -translate-x-2 z-20" />
                <span className="text-base font-semibold">
                  104 William St, Chicago, US
                </span>
              </div>
              <hr />
              <div className="flex gap-2 items-center">
                <IoRadioButtonOn className="text-green-400 -translate-x-2 z-20" />
                <span className="text-base font-semibold">
                  104 William St, Chicago, US
                </span>
              </div>
              <hr />
              <div className="flex gap-2 items-center">
                <IoRadioButtonOn className="text-green-400 -translate-x-2 z-20" />
                <span className="text-base font-semibold">
                  104 William St, Chicago, US
                </span>
              </div>
              <hr />
              <div className="flex gap-2 items-center">
                <FaLocationPin className="text-red-500 -translate-x-2 z-20" />
                <span className="text-base font-semibold">
                  104 William St, Chicago, US
                </span>
              </div>
            </div>
            <p className="font-semibold">Destination</p>
          </div>
          <div className="flex gap-3 mt-5 flex-wrap">
            <div className="flex gap-2 items-center py-1 px-3 bg-[#FFB0004D] rounded-3xl border-2 border-[#ce94194d] font-semibold shadow-custom text-[14px]">
              <FaUser />
              <span>Private</span>
            </div>
            <div className="flex gap-2 items-center py-1 px-3 bg-[#FFB0004D] rounded-3xl border-2 border-[#ce94194d] font-semibold shadow-custom text-[14px]">
              <FaArrowDownUpAcrossLine />
              <span>Round</span>
            </div>
            <div className="flex gap-2 items-center py-1 px-3 bg-[#FFB0004D] rounded-3xl border-2 border-[#ce94194d] font-semibold shadow-custom text-[14px]">
              <FaPerson />
              <span>3</span>
            </div>
            <div className="flex gap-2 items-center py-1 px-3 bg-[#FFB0004D] rounded-3xl border-2 border-[#ce94194d] font-semibold shadow-custom text-[14px]">
              <FaCashRegister />
              <span>Cash</span>
            </div>
          </div>
        </div>
        <div className="flex shadow-custom py-3 px-5 flex-col rounded-md w-full gap-5">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <img
                src={profile}
                alt=""
                className="w-10 h-10 rounded-full object-cover bg-center"
              />
              <div className="flex flex-col w-[150px]">
                <h2 className="font-semibold ">Ali Abbas</h2>
                <h2 className="font-semibold">Suzuki Alto (LX-340)</h2>
              </div>
            </div>
            <div className="flex gap-1">
              <FaStar className="text-primary" />
              <FaRegStar className="text-primary" />
              <FaRegStar className="text-primary" />
              <FaRegStar className="text-primary" />
              <FaRegStar className="text-primary" />
            </div>
            {flag && (
              <div className="block">
                <FaPhone className="text-gray-400" />
              </div>
            )}
          </div>
          {!flag && (
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste
              blanditiis doloribus atque magnam, quis porro quaerat maiores
              eveniet quidem cupiditate fuga quasi sapiente impedit repellat, ea
              beatae non minus. Expedita.
            </p>
          )}
        </div>
        {flag && (
          <div className="flex shadow-custom py-3 px-5 flex-col rounded-md w-full gap-5">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <img
                  src={profile}
                  alt=""
                  className="w-10 h-10 rounded-full object-cover bg-center"
                />
                <div className="flex flex-col w-[150px]">
                  <h2 className="font-semibold">Ali Abbas</h2>
                  <h2 className="font-semibold">Passenger</h2>
                </div>
              </div>
              <div className="flex gap-1">
                <FaStar className="text-primary" />
                <FaRegStar className="text-primary" />
                <FaRegStar className="text-primary" />
                <FaRegStar className="text-primary" />
                <FaRegStar className="text-primary" />
              </div>
              <div className="block">
                <FaPhone className="text-gray-400" />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default RideDetails;
