import React, { useState } from "react";
import { data } from "../../../data";
import { FaPlusCircle, FaSearch } from "react-icons/fa";
import Delete from "../../assets/icons/Delete.png";
import Pen from "../../assets/img/Pen.png";
import { FaCar, FaPlus, FaTrash, FaUser } from "react-icons/fa6";
import SafetyTip from "../SafetyTip/SafetyTip";

const Content = () => {
  const entriesPerPage = 5;
  const totalEntries = 100; //this will be later changed dynamically
  const pages = Math.ceil(totalEntries / entriesPerPage);
  const [currentPage, setCurrentPage] = useState(1);
  const [current, setCurrent] = useState(1);
  const [flag, setFlag] = useState(false);

  return (
    <div className="flex flex-col my-10 gap-6">
      {flag && current === 1 && (
        <SafetyTip setTrigger={setFlag}>
          <h1 className="text-xl text-center font-semibold">
            Create New Legal Document
          </h1>
          <form action="" className="flex flex-col w-full gap-3">
            <label htmlFor="select" className=" font-bold">
              Select Audience:
            </label>
            <div className="flex gap-3 flex-col md:flex-row">
              <div className="flex px-3 py-2 bg-gray-100 rounded-3xl border-2 border-solid border-primary gap-2 items-center justify-between flex-1">
                <FaCar />
                <span className="font-semibold">Driver</span>
                <input type="radio" name="audience" id="driver" />
              </div>
              <div className="flex px-3 py-2 bg-gray-100 rounded-3xl border-2 border-solid border-primary gap-2 items-center justify-between flex-1">
                <FaUser />
                <span className="font-semibold">Users</span>
                <input type="radio" name="audience" id="user" />
              </div>
              <div className="flex px-3 py-2 bg-gray-100 rounded-3xl border-2 border-solid border-primary gap-2 items-center justify-between flex-1">
                <FaUser />
                <span className="font-semibold">Everyone</span>
                <input type="radio" name="audience" id="everyone" />
              </div>
            </div>
            <label htmlFor="type" className=" font-bold">
              Choose Legal Document Type
            </label>
            <div className="flex gap-3">
              <div className="flex px-3 py-2 bg-gray-100 rounded-3xl border-2 border-solid border-primary gap-2 items-center">
                <span className="font-semibold">Terms & Conditions</span>
                <input type="radio" name="type" id="terms" />
              </div>
              <div className="flex px-3 py-2 bg-gray-100 rounded-3xl border-2 border-solid border-primary gap-2 items-center">
                <span className="font-semibold">Privacy Policy</span>
                <input type="radio" name="type" id="privacy" />
              </div>
            </div>

            <label className="flex items-center justify-between">
              <span className=" font-bold">Upload Image:(Optional)</span>
              <div className="bg-primary p-2 rounded-full">
                <FaPlus className="text-white bg-primary " />
              </div>
            </label>
            <label htmlFor="promotion" className=" font-bold">
              What do you want to promote?
            </label>
            <textarea
              name="promotion"
              id=""
              cols="10"
              rows="4"
              className="border border-solid border-gray-300 rounded-sm p-3"
              placeholder="Note"
            ></textarea>
            <button className=" bg-primary items-center justify-center px-2 py-3 rounded-md text-white shadow-custom">
              Publish
            </button>
          </form>
        </SafetyTip>
      )}
      {flag && current === 2 && (
        <SafetyTip setTrigger={setFlag}>
          <h1 className="text-xl text-center font-semibold">
            Create New Safety Tip
          </h1>
          <form action="" className="flex flex-col w-full gap-3">
            <label htmlFor="select" className=" font-bold">
              Select Audience:
            </label>
            <div className="flex gap-3 flex-col md:flex-row">
              <div className="flex px-3 py-2 bg-gray-100 rounded-3xl border-2 border-solid border-primary gap-2 items-center justify-between flex-1">
                <FaCar />
                <span className="font-semibold">Driver</span>
                <input type="radio" name="audience" id="driver" />
              </div>
              <div className="flex px-3 py-2 bg-gray-100 rounded-3xl border-2 border-solid border-primary gap-2 items-center justify-between flex-1">
                <FaUser />
                <span className="font-semibold">Users</span>
                <input type="radio" name="audience" id="user" />
              </div>
              <div className="flex px-3 py-2 bg-gray-100 rounded-3xl border-2 border-solid border-primary gap-2 items-center justify-between flex-1">
                <FaUser />
                <span className="font-semibold">Everyone</span>
                <input type="radio" name="audience" id="everyone" />
              </div>
            </div>

            <label className="flex items-center justify-between">
              <span className=" font-bold">Upload Image:(Optional)</span>
              <div className="bg-primary p-2 rounded-full">
                <FaPlus className="text-white bg-primary " />
              </div>
            </label>
            <label htmlFor="promotion" className=" font-bold">
              What do you want to promote?
            </label>
            <textarea
              name="promotion"
              id=""
              cols="10"
              rows="4"
              className="border border-solid border-gray-300 rounded-sm p-3"
              placeholder="Note"
            ></textarea>
            <button className=" bg-primary items-center justify-center px-2 py-3 rounded-md text-white shadow-custom">
              Publish
            </button>
          </form>
        </SafetyTip>
      )}
      <h1 className="text-2xl font-semibold">Content Management</h1>
      <div className="flex gap-12 mb-5">
        <h1
          onClick={() => setCurrent(1)}
          className={`text-xl font-semibold ${
            current === 1
              ? " text-2xl underline-offset-[10px] decoration-primary decoration-[4px] underline"
              : "text-gray-500"
          } cursor-pointer`}
        >
          Legal
        </h1>
        <h1
          onClick={() => setCurrent(2)}
          className={`text-xl font-semibold ${
            current === 2
              ? " text-2xl underline-offset-[10px] decoration-primary decoration-[4px] underline"
              : "text-gray-500"
          } cursor-pointer`}
        >
          Safety
        </h1>
        <h1
          onClick={() => setCurrent(3)}
          className={`text-xl font-semibold ${
            current === 3
              ? " text-2xl underline-offset-[10px] decoration-primary decoration-[4px] underline"
              : "text-gray-500"
          } cursor-pointer`}
        >
          FAQS
        </h1>
      </div>
      {current === 1 && (
        <>
          <div className="flex flex-col md:flex-row gap-5 justify-between mb-5 ">
            <div className="flex gap-2 bg-white p-3 items-center rounded-md shadow-custom">
              <FaSearch className="text-gray-400" />
              <input
                type="text"
                placeholder="Search"
                className="bg-transparent w-[350px] outline-none"
              />
            </div>

            <button
              onClick={() => setFlag(true)}
              className="flex gap-2 bg-primary items-center justify-center px-2 py-3 rounded-md text-white shadow-custom"
            >
              Create New Legal Doc
              <FaPlusCircle className="text-white text-xl" />
            </button>
          </div>
          <div className="flex overflow-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-white">
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Description
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Type
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Date
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Nostrum
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    Terms & Conditions
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    September 9 2023
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap flex gap-3">
                    <img src={Delete} alt="" />
                    <img src={Pen} alt="" />
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Nostrum
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    Terms & Conditions
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    September 9 2023
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap flex gap-3">
                    <img src={Delete} alt="" />
                    <img src={Pen} alt="" />
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Nostrum
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    Privacy Policy
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    September 9 2023
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap flex gap-3">
                    <img src={Delete} alt="" />
                    <img src={Pen} alt="" />
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Nostrum
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    Privacy Policy
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    September 9 2023
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap flex gap-3">
                    <img src={Delete} alt="" />
                    <img src={Pen} alt="" />
                  </td>
                </tr>
                <tr>
                  <td colSpan="5" className="px-6 py-4 whitespace-nowrap">
                    <div id="PAGINATION" className="  mt-10 ">
                      <div className="flex items-center flex-wrap justify-between">
                        <div>
                          <span className="text-sm text-[#48525B] font-[Poppins] ">
                            Showing data<span className=" ml-2  ">1</span> to{" "}
                            <span className=" ">10</span> of{" "}
                            <span className="">100</span> entries
                          </span>
                        </div>
                        <div>
                          <ul className="flex  items-center space-x-4 h-10 text-base">
                            <li>
                              <a
                                href="#"
                                className="flex items-center justify-center px-4 h-8 ms-0 leading-tight text-[#48525B]  hover:text-[#48525B] "
                              >
                                <span className="sr-only">Previous</span>
                                <svg
                                  className="w-3 h-3 rtl:rotate-180"
                                  aria-hidden="true"
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="none"
                                  viewBox="0 0 6 10"
                                >
                                  <path
                                    stroke="currentColor"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M5 1 1 5l4 4"
                                  />
                                </svg>
                              </a>
                            </li>
                            <li>
                              <a
                                href="#"
                                className="flex items-center justify-center px-2 h-7 leading-tight text-white rounded-md bg-primary border  "
                              >
                                1
                              </a>
                            </li>
                            <li>
                              <a
                                href="#"
                                className="flex items-center justify-center px-2 h-7 leading-tight text-[#48525B] rounded-md bg-[#F5F5F5] hover:bg-primary transition-all duration-300 hover:text-white"
                              >
                                2
                              </a>
                            </li>
                            <li>
                              <a
                                href="#"
                                className="flex items-center justify-center px-2 h-7 leading-tight text-[#48525B] rounded-md bg-[#F5F5F5] hover:bg-primary transition-all duration-300 hover:text-white"
                              >
                                3
                              </a>
                            </li>
                            <li>
                              <a
                                href="#"
                                className="flex items-center justify-center px-2 h-7 leading-tight text-[#48525B] rounded-md bg-[#F5F5F5] hover:bg-primary transition-all duration-300 hover:text-white"
                              >
                                ..
                              </a>
                            </li>
                            <li>
                              <a
                                href="#"
                                className="flex items-center justify-center px-2 h-7 leading-tight text-[#48525B] rounded-md bg-[#F5F5F5] hover:bg-primary transition-all duration-300 hover:text-white"
                              >
                                40
                              </a>
                            </li>

                            <li>
                              <a
                                href="#"
                                className="flex items-center justify-center px-4 h-7 leading-tight text-[#48525B] hover:text-[#48525B]"
                              >
                                <span className="sr-only">Next</span>
                                <svg
                                  className="w-3 h-3 rtl:rotate-180"
                                  aria-hidden="true"
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="none"
                                  viewBox="0 0 6 10"
                                >
                                  <path
                                    stroke="currentColor"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="m1 9 4-4-4-4"
                                  />
                                </svg>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </>
      )}
      {current === 2 && (
        <>
          <div className="flex flex-col md:flex-row gap-5 justify-between mb-5 ">
            <div className="flex gap-2 bg-white p-3 items-center rounded-md shadow-custom">
              <FaSearch className="text-gray-400" />
              <input
                type="text"
                placeholder="Search"
                className="bg-transparent w-[350px] outline-none"
              />
            </div>

            <button
              onClick={() => setFlag(true)}
              className="flex gap-2 bg-primary items-center justify-center px-2 py-3 rounded-md text-white shadow-custom"
            >
              Create New Safety Tip
              <FaPlusCircle className="text-white text-xl" />
            </button>
          </div>
          <div className="flex overflow-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-white">
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Description
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Type
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Date
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Nostrum
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    Terms & Conditions
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    September 9 2023
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap flex gap-3">
                    <img src={Delete} alt="" />
                    <img src={Pen} alt="" />
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Nostrum
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    Terms & Conditions
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    September 9 2023
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap flex gap-3">
                    <img src={Delete} alt="" />
                    <img src={Pen} alt="" />
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Nostrum
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    Privacy Policy
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    September 9 2023
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap flex gap-3">
                    <img src={Delete} alt="" />
                    <img src={Pen} alt="" />
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Nostrum
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    Privacy Policy
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    September 9 2023
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap flex gap-3">
                    <img src={Delete} alt="" />
                    <img src={Pen} alt="" />
                  </td>
                </tr>
                <tr>
                  <td colSpan="5" className="px-6 py-4 whitespace-nowrap">
                    <div id="PAGINATION" className="  mt-10 ">
                      <div className="flex items-center flex-wrap justify-between">
                        <div>
                          <span className="text-sm text-[#48525B] font-[Poppins] ">
                            Showing data<span className=" ml-2  ">1</span> to{" "}
                            <span className=" ">10</span> of{" "}
                            <span className="">100</span> entries
                          </span>
                        </div>
                        <div>
                          <ul className="flex  items-center space-x-4 h-10 text-base">
                            <li>
                              <a
                                href="#"
                                className="flex items-center justify-center px-4 h-8 ms-0 leading-tight text-[#48525B]  hover:text-[#48525B] "
                              >
                                <span className="sr-only">Previous</span>
                                <svg
                                  className="w-3 h-3 rtl:rotate-180"
                                  aria-hidden="true"
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="none"
                                  viewBox="0 0 6 10"
                                >
                                  <path
                                    stroke="currentColor"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M5 1 1 5l4 4"
                                  />
                                </svg>
                              </a>
                            </li>
                            <li>
                              <a
                                href="#"
                                className="flex items-center justify-center px-2 h-7 leading-tight text-white rounded-md bg-primary border  "
                              >
                                1
                              </a>
                            </li>
                            <li>
                              <a
                                href="#"
                                className="flex items-center justify-center px-2 h-7 leading-tight text-[#48525B] rounded-md bg-[#F5F5F5] hover:bg-primary transition-all duration-300 hover:text-white"
                              >
                                2
                              </a>
                            </li>
                            <li>
                              <a
                                href="#"
                                className="flex items-center justify-center px-2 h-7 leading-tight text-[#48525B] rounded-md bg-[#F5F5F5] hover:bg-primary transition-all duration-300 hover:text-white"
                              >
                                3
                              </a>
                            </li>
                            <li>
                              <a
                                href="#"
                                className="flex items-center justify-center px-2 h-7 leading-tight text-[#48525B] rounded-md bg-[#F5F5F5] hover:bg-primary transition-all duration-300 hover:text-white"
                              >
                                ..
                              </a>
                            </li>
                            <li>
                              <a
                                href="#"
                                className="flex items-center justify-center px-2 h-7 leading-tight text-[#48525B] rounded-md bg-[#F5F5F5] hover:bg-primary transition-all duration-300 hover:text-white"
                              >
                                40
                              </a>
                            </li>

                            <li>
                              <a
                                href="#"
                                className="flex items-center justify-center px-4 h-7 leading-tight text-[#48525B] hover:text-[#48525B]"
                              >
                                <span className="sr-only">Next</span>
                                <svg
                                  className="w-3 h-3 rtl:rotate-180"
                                  aria-hidden="true"
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="none"
                                  viewBox="0 0 6 10"
                                >
                                  <path
                                    stroke="currentColor"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="m1 9 4-4-4-4"
                                  />
                                </svg>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </>
      )}
    </div>
  );
};

export default Content;
