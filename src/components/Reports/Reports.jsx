import React from "react";
import { IoSearchOutline } from "react-icons/io5";
import { Filter } from "../SVGICONS/Icons";
import { IoMdArrowDropdown } from "react-icons/io";
import ReportsData from "./ReportsData";
import RideDetails from "../RideDetails/RideDetails"; //will be used in/ shown above this component when the user presses the action button from the reportsData component
const Reports = () => {
  return (
    <main className="m-10">
      <div>
        <div className=" flex space-x-8 items-center">
          <div className=" text-2xl underline-offset-[10px] decoration-primary decoration-[4px]    underline ">
            All Users
          </div>
          <div className="text-gray-500 text-xl">Analytics</div>
        </div>
      </div>
      <div className=" my-4  items-center flex justify-between">
        <div>
          <div className="text-gray-500 text-xl font-semibold">Reports</div>
        </div>
        <div>
          <div className="w-[400px]">
            <div className="relative w-full">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <IoSearchOutline className=" text-gray-900 text-xl" />
              </div>
              <input
                type="text"
                id="voice-search"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary focus:border-primary block w-full ps-10 p-2.5  "
                placeholder="Search ..."
                required
              />
              <button
                type="button"
                className="absolute inset-y-0 end-0 flex items-center pe-3"
              ></button>
            </div>
          </div>
        </div>
        <div>
          <div className="flex items-center space-x-2">
            <Filter />
            <div className="flex items-center space-x-2">
              <div>Sort By</div>
              <div>
                <IoMdArrowDropdown />
              </div>
            </div>
          </div>
        </div>
      </div>
      <ReportsData />
      <div id="PAGINATION" className="mt-10">
        <div className="flex items-center justify-between">
          <div>
            <span className="text-sm text-gray-700 ">
              Showing data<span className=" ml-2 font-semibold ">1</span> to{" "}
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
    </main>
  );
};

export default Reports;
