import React, { useState } from "react";
import profile from "../../assets/img/profile.jpeg";
import { FaPen } from "react-icons/fa6";
import EditProfile from "../EditProfile/EditProfile";

const Profile = () => {
  const [flag, setFlag] = useState(false);
  return (
    <div className="flex my-10">
      {flag && <EditProfile setTrigger={setFlag} />}
      <div className="flex md:flex-row flex-col gap-6 shadow-custom rounded-md justify-between w-full p-4 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-[130px] bg-gradient-to-r from-orange-400 to-yellow-400"></div>
        <div className="flex flex-col">
          <img
            src={profile}
            alt=""
            className="w-[120px] rounded-full bg-center mt-12 mb-4 ml-4 z-10 border-solid border-white border-[3px] shadow-custom"
          />
          <table className="min-w-full">
            <tbody className="divide-y divide-gray-200">
              <tr>
                <td className="px-4 py-2 font-semibold text-gray-600">Name</td>
                <td className="px-4 py-2">John Doe</td>
              </tr>
              <tr>
                <td className="px-4 py-2 font-semibold text-gray-600">Email</td>
                <td className="px-4 py-2">john.doe@example.com</td>
              </tr>
              <tr>
                <td className="px-4 py-2 font-semibold text-gray-600">
                  Gender
                </td>
                <td className="px-4 py-2">Male</td>
              </tr>
              <tr>
                <td className="px-4 py-2 font-semibold text-gray-600">
                  Date of Birth
                </td>
                <td className="px-4 py-2">January 1, 1990</td>
              </tr>
              <tr>
                <td className="px-4 py-2 font-semibold text-gray-600">
                  Phone Number
                </td>
                <td className="px-4 py-2">123-456-7890</td>
              </tr>
              <tr>
                <td className="px-4 py-2 font-semibold text-gray-600">
                  Country
                </td>
                <td className="px-4 py-2">United States</td>
              </tr>
              <tr>
                <td className="px-4 py-2 font-semibold text-gray-600">Role</td>
                <td className="px-4 py-2">Admin</td>
              </tr>
            </tbody>
          </table>
        </div>
        <button
          onClick={() => setFlag(true)}
          className="flex gap-3 bg-primary text-white items-center justify-center self-start  py-2 px-3 rounded-md shadow-custom md:translate-y-32 "
        >
          Edit profile <FaPen />
        </button>
      </div>
    </div>
  );
};

export default Profile;
