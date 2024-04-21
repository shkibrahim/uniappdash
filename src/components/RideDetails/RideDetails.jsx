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
import RiderModal1img from "../../assets/img/ridermodal1.png"
import RiderModal2img from "../../assets/img/ridermodal2.png"
import Cross from "../../assets/img/cross.png"
import calendar from "../../assets/img/calendar.png"
import riderprofilemodal from "../../assets/img/riderprofilemodal.png"
import riderarrowmodal from "../../assets/img/riderarrowmodal.png"
import riderpicprofilemodal from "../../assets/img/riderpicprofilemodal.png"
const RideDetails = ({ setTrigger, current, status, flag }) => {
  return (
    <div className="fixed top-0 left-0 w-full h-screen flex  justify-center md:justify-end z-50 bg-black bg-opacity-10 ">
      <div className="relative p-4 md:p-9 bg-white rounded-lg flex flex-col items-center overflow-auto gap-7 md:w-[410px] ">
        <button
          className="absolute top-4 left-4 text-3xl md:flex hidden"
          onClick={() => setTrigger(false)}
        >
          <img src={Cross} alt="" className="bg-gray-100 p-2 rounded-full" />
        </button>
        <div className="relative">
          <button
            className="absolute top-4 left-4  text-3xl flex md:hidden"
            onClick={() => setTrigger(false)}
          >

            <img src={Cross} alt="" className="bg-gray-100 p-2 rounded-full" />
          </button>
          <img src={Maps} alt="" />
          <div className="absolute bottom-4 right-4 bg-white p-2 rounded-full shadow-custom">
            <HiMiniMagnifyingGlassPlus className="text-2xl text-gray-500" />
          </div>
          <div className="absolute top-4 right-4 bg-white p-3 rounded-full shadow-custom">
            {/* <FaDownload className="text-gray-500" /> */}
            <img src={RiderModal1img} alt="" className=" w-4" />
          </div>
        </div>
        <div className="flex justify-between items-center w-full ">
          <div>
            <img className="w-4 h-4" src={RiderModal2img} alt="" />
          </div>
          <div>
            <h2 className="sm:text-xl md:text-2xl font-extrabold font-primary">Ride Details</h2>
          </div>
          <div>
            <button className=" bg-primary p-2 text-white font-semibold font-primary rounded-md">
              in Route
            </button>
          </div>
        </div>
        <div className="flex shadow-custom py-3 px-5 flex-col rounded-md w-full">
          <div className="flex items-center justify-between gap-2">
            <div className="flex items-center gap-2">
              <div className="flex flex-col">
                <span className="text-[14px] font-[Poppins] font-semibold">Feb 27, 2024</span>
                <span className="text-[14px] font-[Poppins] font-semibold">10:00 AM</span>
              </div>
              <img src={calendar} className="w-5" alt="" />
              {/* <FaCalendarDay className="text-2xl" /> */}
              {current === 1 && <div className="text-black">{status}</div>}
            </div>
            <span className="py-2 px-3  bg-primary bg-opacity-30 rounded-3xl border-2 border-primary font-semibold shadow-custom text-base font-[Poppins]">
              $25.00
            </span>
          </div>
          <div className="flex flex-col mt-3">
            <p className="font-opensans text-xs font-bold">Pick Up</p>
            <div className="flex flex-col gap-5 border-l-2 border-dotted border-black">
              <div className="flex gap-2 items-center">
                <IoRadioButtonOn className="text-primary -translate-x-2 z-20" />
                <span className="text-sm font-opensans font-semibold">
                  104 William St, Chicago, US
                </span>
              </div>
              <hr />
              <div className="flex gap-2 items-center">
                <IoRadioButtonOn className="text-green-400 -translate-x-2 z-20" />
                <span className="text-sm font-opensans font-semibold">
                  104 William St, Chicago, US
                </span>
              </div>
              <hr />
              <div className="flex gap-2 items-center">
                <IoRadioButtonOn className="text-green-400 -translate-x-2 z-20" />
                <span className="text-sm font-opensans font-semibold">
                  104 William St, Chicago, US
                </span>
              </div>
              <hr />
              <div className="flex gap-2 items-center">
                <FaLocationPin className="text-red-500 -translate-x-2 z-20" />
                <span className="text-sm font-opensans font-semibold">
                  104 William St, Chicago, US
                </span>
              </div>
            </div>
            <p className="font-bold font-opensans  text-sm">Destination</p>
          </div>
          <div className="flex gap-3 mt-5 flex-wrap">
            <div className="flex gap-2 items-center py-1 px-3 bg-[#D8D8D8] bg-opacity-50  rounded-3xl border-2 border-[#ce94194d] font-semibold shadow-custom text-[14px]">
              {/* <FaUser /> */}
              <img src={riderprofilemodal} alt="" />
              <span>Private</span>
            </div>
            <div className="flex gap-2 items-center py-1 px-3 bg-[#D8D8D8] bg-opacity-50 rounded-3xl border-2 border-[#ce94194d] font-semibold shadow-custom text-[14px]">
              {/* <FaArrowDownUpAcrossLine /> */}
              <img src={riderarrowmodal} alt="" />
              <span>Round</span>
            </div>
            <div className="flex gap-2 items-center py-1 px-3 bg-[#D8D8D8] bg-opacity-50  rounded-3xl border-2 border-[#ce94194d] font-semibold shadow-custom text-[14px]">
              {/* <FaPerson /> */}
              <img src={riderpicprofilemodal} alt="" />
              <span>3</span>
            </div>
            <div className="flex gap-2 items-center py-1 px-3 bg-[#D8D8D8] bg-opacity-50  rounded-3xl border-2 border-[#ce94194d] font-semibold shadow-custom text-[14px]">
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
