import React, { useState } from "react";
import { data } from "../../../data";
import { FaPlusCircle, FaSearch } from "react-icons/fa";
import { FaTrash } from "react-icons/fa6";
import Delete from "../../assets/icons/Delete.png";
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
          className="border-2 border-[#FFB000] outline-[#FFB000] rounded-3xl py-3 px-5 my-2 w-[200px] max-w-screen-sm bg-gray-100"
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
            accessed
              ? "text-2xl underline-offset-[10px] decoration-primary decoration-[4px] underline"
              : "text-gray-500"
          } cursor-pointer`}
        >
          Location Access
        </h1>
        <h1
          onClick={() => setAccessed(false)}
          className={`text-xl font-semibold ${
            !accessed
              ? "text-2xl underline-offset-[10px] decoration-primary decoration-[4px] underline"
              : "text-gray-500"
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
              className="flex gap-2 bg-primary items-center justify-center px-5 py-3 rounded-md text-white shadow-custom"
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
                    <img src={Delete} alt="" />
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
                    <img src={Delete} alt="" />
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
                    <img src={Delete} alt="" />
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
                    <img src={Delete} alt="" />
                  </td>
                </tr>
                <tr>
                  <td colSpan="5" className="px-6 py-4 whitespace-nowrap">
                    {/* <div className="flex flex-col md:flex-row gap-3 items-center justify-between flex-1">
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
                                ? "bg-primary text-white rounded-md"
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
                              currentPage < pages
                                ? currentPage + 1
                                : currentPage
                            )
                          }
                          className="px-3 py-1 bg-gray-200 rounded-md "
                        >
                          Next
                        </button>
                      </div>
                    </div> */}
                    <div id="PAGINATION" className="mt-10">
                      <div className="flex flex-col md:flex-row items-center justify-between">
                        <div>
                          <span className="text-sm text-gray-700 ">
                            Showing data
                            <span className=" ml-2 font-semibold ">
                              1
                            </span> to{" "}
                            <span className="font-semibold ">10</span> of{" "}
                            <span className="font-semibold  ">100</span> entries
                          </span>
                        </div>
                        <div>
                          <ul className="flex items-center space-x-4 h-10 text-base">
                            <li>
                              <a
                                href="#"
                                className="flex items-center justify-center px-4 h-10 ms-0 leading-tight text-gray-500  hover:text-gray-700 "
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
                                className="flex items-center justify-center px-2 h-10 leading-tight text-white rounded-md bg-primary border  "
                              >
                                1
                              </a>
                            </li>
                            <li>
                              <a
                                href="#"
                                className="flex items-center justify-center px-2 h-10 leading-tight text-gray-500 rounded-md bg-white hover:bg-primary transition-all duration-300 hover:text-white"
                              >
                                2
                              </a>
                            </li>
                            <li>
                              <a
                                href="#"
                                className="flex items-center justify-center px-2 h-10 leading-tight text-gray-500 rounded-md bg-white hover:bg-primary transition-all duration-300 hover:text-white"
                              >
                                3
                              </a>
                            </li>
                            <li>
                              <a
                                href="#"
                                className="flex items-center justify-center px-2 h-10 leading-tight text-gray-500 rounded-md bg-white hover:bg-primary transition-all duration-300 hover:text-white"
                              >
                                ..
                              </a>
                            </li>
                            <li>
                              <a
                                href="#"
                                className="flex items-center justify-center px-2 h-10 leading-tight text-gray-500 rounded-md bg-white hover:bg-primary transition-all duration-300 hover:text-white"
                              >
                                40
                              </a>
                            </li>

                            <li>
                              <a
                                href="#"
                                className="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 hover:text-gray-700"
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
              className="flex gap-2 bg-primary items-center justify-center px-5 py-3 rounded-md text-white shadow-custom"
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
                    <img src={Delete} alt="" />
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
                    <img src={Delete} alt="" />
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
                    <img src={Delete} alt="" />
                  </td>
                </tr>
                <tr>
                  <td colSpan="5" className="px-6 py-4 whitespace-nowrap">
                    <div id="PAGINATION" className="mt-10">
                      <div className="flex flex-col md:flex-row items-center justify-between">
                        <div>
                          <span className="text-sm text-gray-700 ">
                            Showing data
                            <span className=" ml-2 font-semibold ">
                              1
                            </span> to{" "}
                            <span className="font-semibold ">10</span> of{" "}
                            <span className="font-semibold  ">100</span> entries
                          </span>
                        </div>
                        <div>
                          <ul className="flex items-center space-x-4 h-10 text-base">
                            <li>
                              <a
                                href="#"
                                className="flex items-center justify-center px-4 h-10 ms-0 leading-tight text-gray-500  hover:text-gray-700 "
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
                                className="flex items-center justify-center px-2 h-10 leading-tight text-white rounded-md bg-primary border  "
                              >
                                1
                              </a>
                            </li>
                            <li>
                              <a
                                href="#"
                                className="flex items-center justify-center px-2 h-10 leading-tight text-gray-500 rounded-md bg-white hover:bg-primary transition-all duration-300 hover:text-white"
                              >
                                2
                              </a>
                            </li>
                            <li>
                              <a
                                href="#"
                                className="flex items-center justify-center px-2 h-10 leading-tight text-gray-500 rounded-md bg-white hover:bg-primary transition-all duration-300 hover:text-white"
                              >
                                3
                              </a>
                            </li>
                            <li>
                              <a
                                href="#"
                                className="flex items-center justify-center px-2 h-10 leading-tight text-gray-500 rounded-md bg-white hover:bg-primary transition-all duration-300 hover:text-white"
                              >
                                ..
                              </a>
                            </li>
                            <li>
                              <a
                                href="#"
                                className="flex items-center justify-center px-2 h-10 leading-tight text-gray-500 rounded-md bg-white hover:bg-primary transition-all duration-300 hover:text-white"
                              >
                                40
                              </a>
                            </li>

                            <li>
                              <a
                                href="#"
                                className="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 hover:text-gray-700"
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

export default Location;
