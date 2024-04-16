import React, { useState } from "react";
import { data } from "../../../data";
import { FaPlusCircle, FaSearch } from "react-icons/fa";
import { FaCar, FaTrash, FaUser } from "react-icons/fa6";
import { FaPen } from "react-icons/fa6";
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
            <label htmlFor="select" className="text-primary font-bold">
              Select Audience:
            </label>
            <div className="flex gap-3 flex-col md:flex-row">
              <div className="flex px-3 py-2 bg-gray-100 rounded-3xl border-2 border-solid border-primary gap-2 items-center justify-between flex-1">
                <FaCar />
                <span>Driver</span>
                <input type="radio" name="audience" id="driver" />
              </div>
              <div className="flex px-3 py-2 bg-gray-100 rounded-3xl border-2 border-solid border-primary gap-2 items-center justify-between flex-1">
                <FaUser />
                <span>Users</span>
                <input type="radio" name="audience" id="user" />
              </div>
              <div className="flex px-3 py-2 bg-gray-100 rounded-3xl border-2 border-solid border-primary gap-2 items-center justify-between flex-1">
                <FaUser />
                <span>Everyone</span>
                <input type="radio" name="audience" id="everyone" />
              </div>
            </div>
            <label htmlFor="type" className="text-primary font-bold">
              Choose Legal Document Type
            </label>
            <div className="flex gap-3">
              <div className="flex px-3 py-2 bg-gray-100 rounded-3xl border-2 border-solid border-primary gap-2 items-center">
                <span>Terms & Conditions</span>
                <input type="radio" name="type" id="terms" />
              </div>
              <div className="flex px-3 py-2 bg-gray-100 rounded-3xl border-2 border-solid border-primary gap-2 items-center">
                <span>Privacy Policy</span>
                <input type="radio" name="type" id="privacy" />
              </div>
            </div>

            <label className="flex items-center justify-between">
              <span className="text-primary font-bold">
                Upload Image:(Optional)
              </span>
              <input
                type="file"
                accept="image/*"
                className="hidden"
                onChange={(e) => console.log(e.target.files[0])} // Handle file selection
              />
              <div className="mt-2 flex items-center justify-center bg-gray-100 border border-gray-300 rounded-md cursor-pointer p-1">
                <svg
                  className="w-6 h-6 text-gray-600"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M12 5v14m-4-4H8a2 2 0 012-2V9a2 2 0 00-2-2H6V5h2zm10 0v14m-4-4h2a2 2 0 00-2-2V9a2 2 0 012-2h.5V5h-.5z"></path>
                </svg>
                <span className="ml-2 text-gray-600">Select an image</span>
              </div>
            </label>
            <label htmlFor="promotion" className="text-primary font-bold">
              What do you want to promote?
            </label>
            <textarea
              name="promotion"
              id=""
              cols="30"
              rows="10"
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
            <label htmlFor="select" className="text-primary font-bold">
              Select Audience:
            </label>
            <div className="flex gap-3 flex-col md:flex-row">
              <div className="flex px-3 py-2 bg-gray-100 rounded-3xl border-2 border-solid border-primary gap-2 items-center justify-between flex-1">
                <FaCar />
                <span>Driver</span>
                <input type="radio" name="audience" id="driver" />
              </div>
              <div className="flex px-3 py-2 bg-gray-100 rounded-3xl border-2 border-solid border-primary gap-2 items-center justify-between flex-1">
                <FaUser />
                <span>Users</span>
                <input type="radio" name="audience" id="user" />
              </div>
              <div className="flex px-3 py-2 bg-gray-100 rounded-3xl border-2 border-solid border-primary gap-2 items-center justify-between flex-1">
                <FaUser />
                <span>Everyone</span>
                <input type="radio" name="audience" id="everyone" />
              </div>
            </div>

            <label className="flex items-center justify-between">
              <span className="text-primary font-bold">
                Upload Image:(Optional)
              </span>
              <input
                type="file"
                accept="image/*"
                className="hidden"
                onChange={(e) => console.log(e.target.files[0])} // Handle file selection
              />
              <div className="mt-2 flex items-center justify-center bg-gray-100 border border-gray-300 rounded-md cursor-pointer p-1">
                <svg
                  className="w-6 h-6 text-gray-600"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M12 5v14m-4-4H8a2 2 0 012-2V9a2 2 0 00-2-2H6V5h2zm10 0v14m-4-4h2a2 2 0 00-2-2V9a2 2 0 012-2h.5V5h-.5z"></path>
                </svg>
                <span className="ml-2 text-gray-600">Select an image</span>
              </div>
            </label>
            <label htmlFor="promotion" className="text-primary font-bold">
              What do you want to promote?
            </label>
            <textarea
              name="promotion"
              id=""
              cols="30"
              rows="10"
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
            current === 1 ? "text-primary" : "text-gray-500"
          } cursor-pointer`}
        >
          Legal
        </h1>
        <h1
          onClick={() => setCurrent(2)}
          className={`text-xl font-semibold ${
            current === 2 ? "text-primary" : "text-gray-500"
          } cursor-pointer`}
        >
          Safety
        </h1>
        <h1
          onClick={() => setCurrent(3)}
          className={`text-xl font-semibold ${
            current === 3 ? "text-primary" : "text-gray-500"
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
                    <FaTrash className="text-primary" />
                    <FaPen className="text-primary" />
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
                    <FaTrash className="text-primary" />
                    <FaPen className="text-primary" />
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
                    <FaTrash className="text-primary" />
                    <FaPen className="text-primary" />
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
                    <FaTrash className="text-primary" />
                    <FaPen className="text-primary" />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="flex flex-col md:flex-row gap-3 mt-5 items-center justify-around">
            <span>
              Current Page: {currentPage} of {pages}
            </span>
            <div className="flex gap-3 mt-5 items-center justify-around">
              <button
                onClick={() =>
                  setCurrentPage(
                    currentPage <= 1 ? currentPage : currentPage - 1
                  )
                }
                className="px-3 py-1 bg-gray-200 rounded-md "
              >
                Prev
              </button>
              {Array.from({ length: Math.min(pages, 4) }, (_, i) => (
                <button
                  key={i}
                  className={`px-3 py-1 ${
                    i + 1 === currentPage
                      ? "bg-gray-500 text-white rounded-md"
                      : "bg-gray-200 rounded-md"
                  }`}
                  onClick={() => setCurrentPage(i + 1)}
                >
                  {i + 1}
                </button>
              ))}
              {pages > pages - 1 && currentPage == pages ? (
                <button className="px-3 py-1 bg-gray-500 rounded-md text-white">
                  {pages}
                </button>
              ) : (
                <button className="px-3 py-1 bg-gray-200 rounded-md ">
                  ...
                </button>
              )}
              <button
                onClick={() =>
                  setCurrentPage(
                    currentPage < pages ? currentPage + 1 : currentPage
                  )
                }
                className="px-3 py-1 bg-gray-200 rounded-md "
              >
                Next
              </button>
            </div>
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
                    <FaTrash className="text-primary" />
                    <FaPen className="text-primary" />
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
                    <FaTrash className="text-primary" />
                    <FaPen className="text-primary" />
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
                    <FaTrash className="text-primary" />
                    <FaPen className="text-primary" />
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
                    <FaTrash className="text-primary" />
                    <FaPen className="text-primary" />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="flex flex-col md:flex-row gap-3 mt-5 items-center justify-around">
            <span>
              Current Page: {currentPage} of {pages}
            </span>
            <div className="flex gap-3 mt-5 items-center justify-around">
              <button
                onClick={() =>
                  setCurrentPage(
                    currentPage <= 1 ? currentPage : currentPage - 1
                  )
                }
                className="px-3 py-1 bg-gray-200 rounded-md "
              >
                Prev
              </button>
              {Array.from({ length: Math.min(pages, 4) }, (_, i) => (
                <button
                  key={i}
                  className={`px-3 py-1 ${
                    i + 1 === currentPage
                      ? "bg-gray-500 text-white rounded-md"
                      : "bg-gray-200 rounded-md"
                  }`}
                  onClick={() => setCurrentPage(i + 1)}
                >
                  {i + 1}
                </button>
              ))}
              {pages > pages - 1 && currentPage == pages ? (
                <button className="px-3 py-1 bg-gray-500 rounded-md text-white">
                  {pages}
                </button>
              ) : (
                <button className="px-3 py-1 bg-gray-200 rounded-md ">
                  ...
                </button>
              )}
              <button
                onClick={() =>
                  setCurrentPage(
                    currentPage < pages ? currentPage + 1 : currentPage
                  )
                }
                className="px-3 py-1 bg-gray-200 rounded-md "
              >
                Next
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Content;
