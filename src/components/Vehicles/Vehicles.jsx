import React from "react";
import { FaCar, FaPerson } from "react-icons/fa6";
import profile from "../../assets/img/profile.jpeg";
const Vehicles = () => {
  return (
    <div className="flex gap-10 md:flex-row flex-col">
      <div className="bg-white rounded-md p-5 pl-7 pr-20 flex flex-col justify-center gap-2 shadow-custom self-start">
        <h1 className="text-xl font-semibold text-center">Listed Vehicles</h1>
        <div className="flex gap-2 items-center">
          <div className="bg-gray-400 p-4 rounded-full">
            <FaCar className="text-white text-3xl" />
          </div>
          <div className="flex flex-col">
            <span>BMW x class</span>
            <span className="text-primary font-semibold">ACTIVE</span>
            <div className="flex gap-1 items-center">
              <FaPerson /> <span>3</span>
            </div>
          </div>
        </div>
        <div className="flex gap-2 items-center">
          <div className="bg-gray-400 p-4 rounded-full">
            <FaCar className="text-white text-3xl" />
          </div>
          <div className="flex flex-col">
            <span>BMW x class</span>
            <span className="text-primary font-semibold">REQUEST PENDING</span>
            <div className="flex gap-1 items-center">
              <FaPerson /> <span>3</span>
            </div>
          </div>
        </div>

        <div className="flex gap-2 items-center">
          <div className="bg-gray-400 p-4 rounded-full">
            <FaCar className="text-white text-3xl" />
          </div>
          <div className="flex flex-col">
            <span>BMW x class</span>
            <span className="text-primary font-semibold">REQUEST PENDING</span>
            <div className="flex gap-1 items-center">
              <FaPerson /> <span>3</span>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col p-5 flex-1 bg-white rounded-md shadow-custom">
        <div className="flex flex-col md-1150:flex-row justify-between items-center gap-2">
          <div className="flex">
            <table className="min-w-full">
              <tbody className="divide-y divide-gray-200">
                <tr>
                  <td className="px-4 py-2 font-semibold text-gray-600">
                    Car Name
                  </td>
                  <td className="px-4 py-2 text-gray-500">BMW X Class</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 font-semibold text-gray-600">
                    Car Number
                  </td>
                  <td className="px-4 py-2 text-gray-500">123 XYZ</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 font-semibold text-gray-600">
                    Car Color
                  </td>
                  <td className="px-4 py-2 text-gray-500">Black</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 font-semibold text-gray-600">
                    Seat Capacity
                  </td>
                  <td className="px-4 py-2 text-gray-500">4</td>
                </tr>

                <tr>
                  <td className="px-4 py-2 font-semibold text-gray-600">
                    Car Year
                  </td>
                  <td className="px-4 py-2 text-gray-500">2017</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 font-semibold text-gray-600">
                    Insurance
                  </td>
                  <td className="px-4 py-2 text-gray-500">Yes</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="flex flex-col gap-2">
            <h1 className="font-semibold">Insurance Document Image:</h1>
            <div className="bg-gray-200 overflow-hidden rounded-md cursor-pointer">
              <img
                src={profile}
                alt=""
                className="w-[330px] h-[150px] object-contain"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col md-1150:flex-row items-center justify-between mt-3 gap-2">
          <div className="flex flex-col gap-2">
            <h1 className="font-semibold">Car Front Image:</h1>
            <div className="bg-gray-200 overflow-hidden rounded-md cursor-pointer">
              <img
                src={profile}
                alt=""
                className="w-[330px] h-[150px] object-contain"
              />
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <h1 className="font-semibold">Car Back Image:</h1>
            <div className="bg-gray-200 overflow-hidden rounded-md cursor-pointer">
              <img
                src={profile}
                alt=""
                className="w-[330px] h-[150px] object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Vehicles;
