import React from "react";
import { FaBell, FaChevronLeft, FaPhone } from "react-icons/fa6";
import profile from "../../assets/img/profile.jpeg";
const DriverInformation = () => {
  return (
    <div className="p-7 flex flex-col bg-[#F9F9F9] min-h-[800px] font-primary gap-6">
      <div className="flex justify-between items-center">
        <div className="flex gap-2 items-center">
          <FaChevronLeft />
          <span className="text-xl font-semibold">Information</span>
        </div>
        <button className="text-white bg-primary px-5 py-2 rounded-md">
          Edit
        </button>
      </div>
      <div className="flex justify-between bg-white rounded-md shadow-custom p-6">
        <div className="flex gap-4">
          <div className="flex justify-center w-40 h-50 rounded-md overflow-hidden object-contain bg-gray-400 self-start">
            <img src={profile} alt="" className="w-full object-contain" />
          </div>
          <div className="flex">
            <table className="min-w-full">
              <tbody className="divide-y divide-gray-200">
                <tr>
                  <td className="px-4 py-2 font-semibold text-gray-600">
                    Name
                  </td>
                  <td className="px-4 py-2 text-gray-500">John Doe</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 font-semibold text-gray-600">
                    Email
                  </td>
                  <td className="px-4 py-2 text-gray-500">
                    john.doe@example.com
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-2 font-semibold text-gray-600">
                    Gender
                  </td>
                  <td className="px-4 py-2 text-gray-500">Male</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 font-semibold text-gray-600">
                    Date of Birth
                  </td>
                  <td className="px-4 py-2 text-gray-500">24-06-2000</td>
                </tr>

                <tr>
                  <td className="px-4 py-2 font-semibold text-gray-600">
                    Phone Number
                  </td>
                  <td className="px-4 py-2 text-gray-500">(99) 436-46-4666</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 font-semibold text-gray-600">
                    Country & City
                  </td>
                  <td className="px-4 py-2 text-gray-500">
                    United States, Chicago
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <span className="self-end">
          Verified By: <span className="text-gray-500">Max Holland</span>{" "}
        </span>
        <div className="flex flex-col items-center justify-between">
          <div className="flex gap-6">
            <button className="p-5 bg-gray-300 rounded-2xl shadow-md">
              <FaBell className="text-gray-500 text-xl" />
            </button>
            <button className="p-5 bg-gray-300 rounded-2xl shadow-md">
              <FaPhone className="text-gray-500 text-xl" />
            </button>
          </div>
          <div className="block">
            <button className="p-2 px-6 bg-gray-300 rounded-2xl shadow-md text-gray-500 text-xl">
              Show More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DriverInformation;
