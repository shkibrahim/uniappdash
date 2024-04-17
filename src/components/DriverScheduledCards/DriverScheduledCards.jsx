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
  FaStar,
  FaUser,
} from "react-icons/fa6";
import { BsFillStoplightsFill } from "react-icons/bs";
const DriverScheduledCards = ({ status, current, onClick }) => {
  return (
    <div
      className="bg-primary shadow-custom p-5 rounded-md flex gap-3 justify-between flex-wrap cursor-pointer"
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
            <span className="text-white font-semibold">ALI ABBAS</span>
            <div className="flex gap-1 text-white">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>
          </div>
          {current === 1 && (
            <div
              className={`flex rounded-3xl items-center justify-center p-2 ${
                status === "completed" ? "bg-white" : "bg-red-600 text-white"
              }`}
            >
              {status}
            </div>
          )}
        </div>
        <div className="flex flex-col text-white ml-4 gap-4">
          <div className="flex items-center gap-2">
            <FaCircle className="text-white" />
            <div className="flex flex-col">
              <h1 className="font-semibold">PICKUP</h1>
              <p>104 William St,chicago, US</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <FaCircle className="text-white" />
            <div className="flex flex-col">
              <h1 className="font-semibold">DROP-OFF</h1>
              <p>104 William St,chicago, US</p>
            </div>
          </div>
        </div>
        <div className="flex md:gap-1 flex-wrap gap-2">
          <div className="flex gap-1 bg-white rounded-3xl items-center p-2">
            <FaUser />
            <span>Shared</span>
          </div>
          <div className="flex gap-1 bg-white rounded-3xl items-center p-2">
            <FaArrowRightLong />
            <span>One way</span>
          </div>
          <div className="flex gap-1 bg-white rounded-3xl items-center p-2">
            <FaPerson />
            <span>3</span>
          </div>
          <div className="flex gap-1 bg-white rounded-3xl items-center p-2">
            <BsFillStoplightsFill />
            <span>2 Stops</span>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-between items-center gap-3">
        <div className="flex flex-col gap-2 ">
          <div className="flex gap-1 bg-white rounded-3xl items-center justify-center p-2 ">
            <FaCalendar />
            <span>25-02-2024</span>
          </div>
          <div className="flex gap-1 bg-white rounded-3xl items-center justify-center p-2">
            <FaClock />
            <span>10:00 AM</span>
          </div>
          <div className="flex gap-1 bg-white rounded-3xl items-center justify-center p-2">
            <FaLocationArrow />
            <span>20 Miles</span>
          </div>
        </div>
        <div className="flex gap-1 bg-white rounded-3xl items-center justify-center p-2 ">
          <FaDollarSign className="font-semibold text-xl " />
          <span className="font-semibold text-xl ">25$</span>
        </div>
      </div>
    </div>
  );
};

export default DriverScheduledCards;
