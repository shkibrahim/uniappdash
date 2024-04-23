import React from "react";
import profile from "../../assets/img/profile.jpeg";
import {
  FaArrowRightLong,
  FaCalendar,
  FaCircle,
  FaClock,
  FaDollarSign,
  FaLocationArrow,
  FaPerson,
  FaRegCircle,
  FaStar,
  FaUser,
} from "react-icons/fa6";
import OneWay from "../../assets/img/oneway.svg";
import Stop from "../../assets/img/stop.svg";
import Shared from "../../assets/img/shared.svg";
import Cash from "../../assets/img/Cash.svg";
import calender from "../../assets/img/CAL.svg";
import Star from "../../assets/img/star.png";
import { BsFillStoplightsFill } from "react-icons/bs";
const DriverScheduledCards = ({ status, current, onClick }) => {
  return (
    <div
      className="bg-primary shadow-custom p-2 rounded-md flex gap-3 justify-between cursor-pointer max-w-[323px] mx-auto md:mx-5 md-1150:mx-10"
      onClick={onClick}
    >
      <div className="flex flex-col gap-3">
        <div className="flex gap-1">
          <img
            src={profile}
            alt=""
            className="w-8 rounded-full object-contain bg-center border-2 border-solid border-white"
          />
          <div className="flex flex-col">
            <span className="text-white font-semibold text-xs text-[10px]">
              ALI ABBAS
            </span>
            <div className="flex text-white text-xs">
              <img src={Star} alt="" className="text-xs" />
              <img src={Star} alt="" className="text-xs" />
              <img src={Star} alt="" className="text-xs" />
              <img src={Star} alt="" className="text-xs" />
            </div>
          </div>
          {current === 1 && (
            <div
              className={`flex rounded-3xl items-center justify-center py-1 px-3 self-center text-[10px] font-inter -translate-y-1 ${
                status === "Complete"
                  ? "bg-white text-primary"
                  : "bg-red-600 text-white"
              }`}
            >
              {status}
            </div>
          )}
        </div>
        <div className="flex flex-col text-white ml-4 gap-2 relative">
          <div className="absolute top-[19px] md:top-[19px] left-[7px] bg-white h-4 w-[0.5px]"></div>
          <div className="flex items-center gap-2 font-opensans">
            <FaRegCircle className="text-white -translate-y-2" />

            <div className="flex flex-col">
              <h1 className="font-semibold text-[10px]">PICKUP</h1>
              <p className="text-xs md:text-xs">104 William St,chicago, US</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <FaRegCircle className="text-white -translate-y-2" />

            <div className="flex flex-col">
              <h1 className="font-semibold text-[10px]">DROP-OFF</h1>
              <p className="text-xs md:text-xs">104 William St,chicago, US</p>
            </div>
          </div>
        </div>
        <div className="flex md:gap-1 flex-wrap gap-2">
          <div className="flex gap-1 bg-white rounded-3xl items-center p-1 text-[10px]">
            <img src={Shared} alt="" />
            <span>Shared</span>
          </div>
          <div className="flex gap-1 bg-white rounded-3xl items-center p-1 text-[10px]">
            <img src={OneWay} alt="" />
            <span>One way</span>
          </div>
          <div className="flex gap-1 bg-white rounded-3xl items-center p-1 text-[10px]">
            <FaUser />
            <span>3</span>
          </div>
          <div className="flex gap-1 bg-white rounded-3xl items-center p-1 text-[10px]">
            <img src={Stop} alt="" />
            <span>2 Stops</span>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-between items-center gap-3">
        <div className="flex flex-col gap-2 ">
          <div className="flex gap-1 bg-white rounded-3xl items-center justify-center py-1 text-[10px] md:w-[73px]">
            <img src={calender} alt="" />
            <span>25-02-2024</span>
          </div>
          <div className="flex gap-1 bg-white rounded-3xl items-center justify-center py-1 text-[10px] ">
            <FaClock />
            <span>10:00 AM</span>
          </div>
          <div className="flex gap-1 bg-white rounded-3xl items-center justify-center py-1 text-[10px] ">
            <FaLocationArrow />
            <span>20 Miles</span>
          </div>
        </div>
        <div className="flex gap-1 bg-white rounded-3xl items-center justify-center p-1 text-[10px] ">
          <img src={Cash} alt="" />
          <span className="font-semibold ">25$</span>
        </div>
      </div>
    </div>
  );
};

export default DriverScheduledCards;
