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
import { BsFillStoplightsFill } from "react-icons/bs";
const DriverScheduledCards = ({ status, current, onClick }) => {
  return (
    <div
      className="bg-primary shadow-custom p-3 md:p-5 rounded-md flex gap-3 justify-between cursor-pointer"
      onClick={onClick}
    >
      <div className="flex flex-col gap-3">
        <div className="flex gap-2">
          <img
            src={profile}
            alt=""
            className="w-12 rounded-full object-contain bg-center border-2 border-solid border-white"
          />
          <div className="flex flex-col gap-1">
            <span className="text-white font-semibold text-xs md:text-base">
              ALI ABBAS
            </span>
            <div className="flex gap-1 text-white text-xs md:text-base">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>
          </div>
          {current === 1 && (
            <div
              className={`flex rounded-3xl items-center justify-center p-1 self-center text-xs md:text-base ${
                status === "completed" ? "bg-white" : "bg-red-600 text-white"
              }`}
            >
              {status}
            </div>
          )}
        </div>
        <div className="flex flex-col text-white ml-4 gap-4 relative">
          <div className="absolute top-[15px] md:top-[24px] left-[7px] bg-white h-6 md:h-9 w-[0.5px]"></div>
          <div className="flex items-center gap-2">
            <FaRegCircle className="text-white -translate-y-3 " />

            <div className="flex flex-col">
              <h1 className="font-semibold text-xs md:text-base">PICKUP</h1>
              <p className="text-xs md:text-base">104 William St,chicago, US</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <FaRegCircle className="text-white -translate-y-3" />

            <div className="flex flex-col">
              <h1 className="font-semibold text-xs md:text-base">DROP-OFF</h1>
              <p className="text-xs md:text-base">104 William St,chicago, US</p>
            </div>
          </div>
        </div>
        <div className="flex md:gap-1 flex-wrap gap-2">
          <div className="flex gap-1 bg-white rounded-3xl items-center p-1 md:p-2 py-1 text-xs md:text-base">
            <FaUser />
            <span>Shared</span>
          </div>
          <div className="flex gap-1 bg-white rounded-3xl items-center p-1 md:p-2 py-1 text-xs md:text-base">
            <FaArrowRightLong />
            <span>One way</span>
          </div>
          <div className="flex gap-1 bg-white rounded-3xl items-center p-1 md:p-2 py-1 text-xs md:text-base">
            <FaPerson />
            <span>3</span>
          </div>
          <div className="flex gap-1 bg-white rounded-3xl items-center p-1 md:p-2 py-1 text-xs md:text-base">
            <BsFillStoplightsFill />
            <span>2 Stops</span>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-between items-center gap-3">
        <div className="flex flex-col gap-2 ">
          <div className="flex gap-1 bg-white rounded-3xl items-center justify-center p-1 md:p-2  py-1 text-xs md:text-base w-[90px] md:w-auto">
            <FaCalendar />
            <span>25-02-2024</span>
          </div>
          <div className="flex gap-1 bg-white rounded-3xl items-center justify-center p-1 md:p-2 py-1 text-xs md:text-base">
            <FaClock />
            <span>10:00 AM</span>
          </div>
          <div className="flex gap-1 bg-white rounded-3xl items-center justify-center p-1 md:p-2 py-1 text-xs md:text-base">
            <FaLocationArrow />
            <span>20 Miles</span>
          </div>
        </div>
        <div className="flex gap-1 bg-white rounded-3xl items-center justify-center p-1 md:p-2  py-1 text-base md:text-xl">
          <FaDollarSign className="font-semibold" />
          <span className="font-semibold ">25$</span>
        </div>
      </div>
    </div>
  );
};

export default DriverScheduledCards;
