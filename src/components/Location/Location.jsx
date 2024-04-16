import React, { useState } from "react";
import { data } from "../../../data";
import { FaPlusCircle, FaSearch } from "react-icons/fa";
import { FaTrash } from "react-icons/fa6";
import AddLocation from "../AddLocation/AddLocation";

const Location = () => {
  const entriesPerPage = 5;
  const totalEntries = 100; //this will be later changed dynamically
  const pages = Math.ceil(totalEntries / entriesPerPage);
  const [currentPage, setCurrentPage] = useState(1);
  const [accessed, setAccessed] = useState(true);
  const [flag, setFlag] = useState(false);

  return (
    <div className="flex flex-col font-primary">
      {flag && <AddLocation setTrigger={setFlag} />}
      <div className="flex flex-col md:flex-row w-full shadow-custom rounded-md p-6 bg-white items-center gap-5 md:gap-14 mt-10 mb-5 ">
        <h2>Select Country</h2>
        <select
          name="country"
          id=""
          className="border-2 border-[#FFB000] outline-[#FFB000] rounded-lg py-3 px-5 my-2 w-[300px] md:w-auto "
          required
        >
          {data.map((item, index) => {
            return (
              <option key={index} value={item.name}>
                {item.name}
              </option>
            );
          })}
        </select>
      </div>

      <div className="flex gap-10 mb-5">
        <h1
          onClick={() => setAccessed(true)}
          className={`text-xl font-semibold ${
            accessed ? "text-primary" : "text-gray-500"
          } cursor-pointer`}
        >
          Location Access
        </h1>
        <h1
          onClick={() => setAccessed(false)}
          className={`text-xl font-semibold ${
            !accessed ? "text-primary" : "text-gray-500"
          } cursor-pointer`}
        >
          Restricted
        </h1>
      </div>
      {accessed ? (
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
              Add New Accessible Location
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
                    Allowed Access
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    City
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    State
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Pincode
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
                    Some Street Address
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">City Name</td>
                  <td className="px-6 py-4 whitespace-nowrap">State Name</td>
                  <td className="px-6 py-4 whitespace-nowrap">123456</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <FaTrash className="text-primary" />
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap">
                    Some Street Address
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">City Name</td>
                  <td className="px-6 py-4 whitespace-nowrap">State Name</td>
                  <td className="px-6 py-4 whitespace-nowrap">123456</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <FaTrash className="text-primary" />
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap">
                    Some Street Address
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">City Name</td>
                  <td className="px-6 py-4 whitespace-nowrap">State Name</td>
                  <td className="px-6 py-4 whitespace-nowrap">123456</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <FaTrash className="text-primary" />
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap">
                    Some Street Address
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">City Name</td>
                  <td className="px-6 py-4 whitespace-nowrap">State Name</td>
                  <td className="px-6 py-4 whitespace-nowrap">123456</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <FaTrash className="text-primary" />
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
      ) : (
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
              Add New Restricted Location
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
                    Allowed Access
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    City
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    State
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Pincode
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
                    Some Restricted Street Address
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">City Name</td>
                  <td className="px-6 py-4 whitespace-nowrap">State Name</td>
                  <td className="px-6 py-4 whitespace-nowrap">123456</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <FaTrash className="text-primary" />
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap">
                    Some Restricted Street Address
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">City Name</td>
                  <td className="px-6 py-4 whitespace-nowrap">State Name</td>
                  <td className="px-6 py-4 whitespace-nowrap">123456</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <FaTrash className="text-primary" />
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap">
                    Some Restricted Street Address
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">City Name</td>
                  <td className="px-6 py-4 whitespace-nowrap">State Name</td>
                  <td className="px-6 py-4 whitespace-nowrap">123456</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <FaTrash className="text-primary" />
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

export default Location;
