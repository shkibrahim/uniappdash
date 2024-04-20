import React, { useState } from "react";
import { FaMagnifyingGlass, FaPen, FaTrash } from "react-icons/fa6";
import { FaPlusCircle } from "react-icons/fa";
import profile from "../../assets/img/profile.jpeg";
import AssignRole from "../AssignRole/AssignRole";
import ConfirmDelete from "../ConfirmDelete/ConfirmDelete";
import Profile from "../Profile/Profile";
import Payment from "../Payment/Payment";
import Language from "../Language/Language";
import Location from "../Location/Location";
import Content from "../Content/Content";
import { Filter } from "../SVGICONS/Icons";

const Settings = () => {
  const [active, setActive] = useState(0);
  const [flag, setFlag] = useState(false);
  const [confirmDelete, setConfirmDelete] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  return (
    <>
      {flag && <AssignRole trigger={flag} setTrigger={setFlag} />}
      {confirmDelete && (
        <ConfirmDelete trigger={confirmDelete} setTrigger={setConfirmDelete} />
      )}
      <div className="p-7 flex flex-col bg-[#F9F9F9] min-h-[800px] font-primary">
        <div className="flex md:gap-12 gap-4 flex-wrap text-xl font-semibold">
          <a
            href="#"
            className={`${
              active === 0
                ? "text-primary text-2xl underline-offset-[10px] decoration-primary decoration-[4px] underline"
                : "text-gray-400"
            } `}
            onClick={() => setActive(0)}
          >
            Profile
          </a>
          <a
            href="#"
            className={`${
              active === 1
                ? "text-primary text-2xl underline-offset-[10px] decoration-primary decoration-[4px] underline"
                : "text-gray-400"
            }`}
            onClick={() => setActive(1)}
          >
            User and Roles
          </a>
          <a
            href="#"
            className={`${
              active === 2
                ? "text-primary text-2xl underline-offset-[10px] decoration-primary decoration-[4px] underline"
                : "text-gray-400"
            }`}
            onClick={() => setActive(2)}
          >
            Payment
          </a>
          <a
            href="#"
            className={`${
              active === 3
                ? "text-primary text-2xl underline-offset-[10px] decoration-primary decoration-[4px] underline"
                : "text-gray-400"
            }`}
            onClick={() => setActive(3)}
          >
            Language
          </a>
          <a
            href="#"
            className={`${
              active === 4
                ? "text-primary text-2xl underline-offset-[10px] decoration-primary decoration-[4px] underline"
                : "text-gray-400"
            }`}
            onClick={() => setActive(4)}
          >
            Location
          </a>
          <a
            href="#"
            className={`${
              active === 5
                ? "text-primary text-2xl underline-offset-[10px] decoration-primary decoration-[4px] underline"
                : "text-gray-400"
            }`}
            onClick={() => setActive(5)}
          >
            Content
          </a>
        </div>
        <div className="w-full">
          {active === 0 && (
            <>
              <Profile />
            </>
          )}
          {active === 1 && (
            <>
              <div className="flex flex-col md:flex-row items-center justify-between my-9">
                <h2 className="text-xl font-semibold">User Role Management</h2>
                <div className="flex gap-3 items-center shadow-custom p-3 rounded-md md:w-[500px] bg-white mt-4 md:mt-auto sm:w-[350px]">
                  <FaMagnifyingGlass />
                  <input
                    type="text"
                    placeholder="Search"
                    className="outline-none mx-2"
                  />
                </div>
                <div className="flex items-center gap-5 mt-4 md:mt-auto">
                  <div className="flex items-center gap-3 ml-2">
                    <Filter />
                    <span className="text-xl  font-semibold">Sort By</span>
                  </div>
                  <button
                    className="flex items-center gap-3 bg-primary py-2 px-3 rounded-md text-white shadow-custom font-semibold"
                    onClick={() => setFlag(true)}
                  >
                    Create new Role <FaPlusCircle />{" "}
                  </button>
                </div>
              </div>
              <div className="max-w-full ">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider sm:px-6"
                      >
                        Profile
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider sm:px-6"
                      >
                        Name
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider sm:px-6"
                      >
                        Email
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider sm:px-6"
                      >
                        Role Assigned
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider sm:px-6"
                      >
                        User Role
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider sm:px-6"
                      >
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <img
                          src={profile}
                          alt=""
                          className="w-10 h-10 rounded-full object-cover bg-center"
                        />
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">John Doe</td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        johndoe@example.com
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        9 September 2013
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">Admin</td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex gap-5">
                          <FaTrash
                            className="text-gray-400 cursor-pointer"
                            onClick={() => setConfirmDelete(true)}
                          />
                          <div className="relative">
                            <FaPen
                              className="text-gray-400 cursor-pointer"
                              onClick={() => setShowMenu(!showMenu)}
                            />
                            {showMenu && (
                              <div className="absolute blur-0 right-0 bg-white shadow-custom rounded-md flex flex-col gap-2 p-2">
                                <h2>Super Admin</h2>
                                <h2>Admin</h2>
                                <h2>Manager</h2>
                              </div>
                            )}
                          </div>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </>
          )}
          {active === 2 && <Payment />}
          {active === 3 && <Language />}
          {active === 4 && <Location />}
          {active === 5 && <Content />}
        </div>
      </div>
    </>
  );
};

export default Settings;
