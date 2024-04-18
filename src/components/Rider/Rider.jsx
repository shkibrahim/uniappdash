import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { IoSearchOutline } from "react-icons/io5";
import { IoMdArrowDropdown } from "react-icons/io";
import { ActionIcon, Active, Filter } from "../SVGICONS/Icons";
import { FaArrowUpLong } from "react-icons/fa6";
import { FaArrowDownLong } from "react-icons/fa6";
import driverImage from "../../assets/img/tableimg.png";
import PieChart from "../../utils/PieChart";
import RideDetails from "../RideDetails/RideDetails";
const Rider = () => {
  const ranges = [
    {
      id: 1,
      name: "This Month",
      value: {
        start: new Date(new Date().getFullYear(), new Date().getMonth(), 1),
        end: new Date(),
      },
    },
    {
      id: 2,
      name: "Last 7 Days",
      value: {
        start: new Date(new Date().getTime() - 7 * 24 * 60 * 60 * 1000),
        end: new Date(),
      },
    },
    {
      id: 3,
      name: "Last 6 Months",
      value: {
        start: new Date(new Date().getFullYear(), new Date().getMonth() - 6, 1),
        end: new Date(),
      },
    },
    {
      id: 4,
      name: "This Year",
      value: {
        start: new Date(new Date().getFullYear(), 0, 1),
        end: new Date(),
      },
    },
  ];
  const tableData = [
    {
      id: 1,
      carno: 299,
      driver: {
        img: driverImage,
        name: "Alex Noman",
      },
      status: "Completed",
      earnings: 62,
    },
    {
      id: 2,
      carno: 299,
      driver: {
        img: driverImage,
        name: "Alex Noman",
      },
      status: "Completed",
      earnings: 62,
    },
    {
      id: 3,
      carno: 299,
      driver: {
        img: driverImage,
        name: "Alex Noman",
      },
      status: "Completed",
      earnings: 62,
    },
    {
      id: 4,
      carno: 299,
      driver: {
        img: driverImage,
        name: "Alex Noman",
      },
      status: "Completed",
      earnings: 62,
    },
    {
      id: 5,
      carno: 299,
      driver: {
        img: driverImage,
        name: "Alex Noman",
      },
      status: "Completed",
      earnings: 62,
    },
    {
      id: 5,
      carno: 299,
      driver: {
        img: driverImage,
        name: "Alex Noman",
      },
      status: "Completed",
      earnings: 62,
    },
    {
      id: 5,
      carno: 299,
      driver: {
        img: driverImage,
        name: "Alex Noman",
      },
      status: "Completed",
      earnings: 62,
    },
  ];
  const [activeRange, setActiveRange] = useState(ranges[0].name);
  const [showRange, setRange] = useState(false);
  const [showRideDetails, setShowRideDetails] = useState(false);
  const handleRangeSelect = (rangeName) => {
    setActiveRange(rangeName);
    setRange(false);
  };

  return (
    <main className="mx-10">
      <div className="flex my-10 flex-wrap items-center justify-between ">
        {showRideDetails && (
          <RideDetails setTrigger={setShowRideDetails} flag={showRideDetails} />
        )}
        <div className="">
          <div className="flex items-center space-x-4">
            <div className=" sm:text-xl text-lg md:text-2xl font-medium">
              All Rides
            </div>
            <div className="flex relative sm:w-[180px] w-[150px]  md:w-[200px] ">
              <div
                className="flex items-center space-x-4 cursor-pointer"
                onClick={() => setRange(!showRange)}
              >
                <div>{activeRange}</div>
                <div>
                  <IoIosArrowDown />
                </div>
              </div>
              {showRange && (
                <div className="absolute mt-4 top-2 bg-gray-100 rounded-md p-4">
                  <ul className="flex flex-col space-y-2">
                    {ranges.map((item) => {
                      if (item.name !== activeRange) {
                        return (
                          <li
                            className="cursor-pointer"
                            key={item.id}
                            onClick={() => handleRangeSelect(item.name)}
                          >
                            {item.name}
                          </li>
                        );
                      }
                      return null;
                    })}
                  </ul>
                </div>
              )}
            </div>
            <div></div>
          </div>
        </div>

        <div className=" sm:w-[300px] w-[250px] md:w-[400px]">
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
        <div>
          <div className="flex items-center space-x-2">
            <Filter />
            <div className="flex items-center space-x-2">
              <div >Sort By</div>
              <div>
                <IoMdArrowDropdown />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="my-10 md:flex justify-between ">
        <div>
          <div className="flex   flex-col items-center space-y-4">
            <div className="">
              <div className="flex flex-col space-y-4 p-4 border-2 border-gray-200 rounded-md shadow-md shadow-gray-300">
                <div className="flex  space-x-8">
                  <div className="text-gray-500 font-medium text-lg">
                    Hire Vs Cancel
                  </div>
                  <div className=" bg-gray-200 px-2 text-gray-600 text-sm p-1 rounded-md">
                    Today
                  </div>
                </div>
                <div className="flex justify-center">
                  <div className="">
                    <PieChart />
                  </div>
                </div>
                <div>
                  <div>
                    <div className="flex flex-col space-y-2">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center  space-x-1">
                          <div className=" bg-green-600 w-4 h-4 rounded-full" />
                          <div>Total Hired</div>
                        </div>
                        <div className="flex items-center space-x-2">
                          <div>54%</div>
                          <div>
                            <FaArrowUpLong className="text-green-500" />
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center  space-x-1">
                          <div className=" bg-red-600 w-4 h-4 rounded-full" />
                          <div>Total Canceled</div>
                        </div>
                        <div className="flex items-center space-x-2">
                          <div>20%</div>
                          <div>
                            <FaArrowUpLong className="text-red-500" />
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center  space-x-1">
                          <div className=" bg-primary w-4 h-4 rounded-full" />
                          <div>Total Pending</div>
                        </div>
                        <div className="flex items-center space-x-2">
                          <div>21%</div>
                          <div>
                            <FaArrowDownLong className="text-primary" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className="flex flex-col space-y-4 p-4  border-2 border-gray-200 rounded-md shadow-md shadow-gray-300">
                <div className="flex  justify-between">
                  <div className="text-gray-500 font-medium text-lg">
                    Income
                  </div>
                  <div className=" bg-gray-200 px-2 text-gray-600 text-sm p-1 rounded-md">
                    Today
                  </div>
                </div>
                <div>
                  <div>
                    <div className="flex flex-col space-y-2">
                      <div className="flex items-center justify-between">
                        <div className=" text-2xl font-semibold">$ 9460.00</div>
                        <div className="flex items-center">
                          <FaArrowDownLong className="text-red-500" />
                          <div className="text-red-500">1.5%</div>
                        </div>
                      </div>
                      <div className=" text-gray-500 text-sm">
                        Compared to $9940 yesterday
                      </div>
                      <div className="flex items-center w-[200px] justify-between">
                        <div className="text-gray-500 text-sm">
                          Last week Income
                        </div>
                        <div>$25658.00</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className="flex flex-col space-y-4 p-4  border-2 border-gray-200 rounded-md shadow-md shadow-gray-300">
                <div className="flex  justify-between">
                  <div className="text-gray-500 font-medium text-lg">
                    Active Drivers
                  </div>
                  <div className=" bg-gray-200 px-2 text-gray-600 text-sm p-1 rounded-md">
                    Today
                  </div>
                </div>
                <div>
                  <div>
                    <div className="flex flex-col space-y-2">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4">
                          <div className=" text-2xl font-semibold">340</div>
                          <div>
                            <Active />
                          </div>
                        </div>
                        <div className="flex items-center">
                          <FaArrowDownLong className="text-red-500" />
                          <div className="text-red-500">1.5%</div>
                        </div>
                      </div>
                      <div className=" text-gray-500 text-sm">
                        Compared to 440 yesterday{" "}
                      </div>
                      <div className="flex items-center w-[200px] justify-between">
                        <div className="text-gray-500 text-sm">
                          Already booked
                        </div>
                        <div>120</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="md:w-[70%]">
          <div className="text-center text-lg font-semibold my-10">
            Live Car Status
          </div>
          <div>
            <div>
              <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                  <thead className="text-xs text-gray-700 uppercase dark:text-gray-400">
                    <tr className="text-gray-800">
                      <th scope="col" className="px-6 py-3 ">
                        No.
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Car no.
                      </th>
                      <th scope="col" className="px-6 py-3 ">
                        Driver
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Status
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Earning
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Action
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {tableData?.map((item, index) => {
                      return (
                        <tr
                          key={index}
                          className="border-b border-gray-200 text-gray-800"
                        >
                          <td className="px-6 py-4">{index + 1}</td>
                          <td className="px-6 py-4 bg-gray-50">
                            {item?.carno}
                          </td>
                          <td className="px-6 py-4">
                            <div className="flex items-center space-x-2">
                              <div>{item?.driver?.name}</div>
                              <div>
                                <img
                                  className="w-6 h-6 rounded-full"
                                  src={item?.driver?.img}
                                  alt={item?.driver?.name}
                                />
                              </div>
                            </div>
                          </td>
                          <td className="px-6 py-4 flex space-x-2">
                            <div>
                              <Active />
                            </div>
                            <div>{item?.status}</div>
                          </td>
                          <td className="px-6 py-4 ">$ {item?.earnings}</td>
                          <td className="px-6 py-4 ">
                            <div className=" cursor-pointer" onClick={() => setShowRideDetails(true)}>
                            <ActionIcon />
                            </div>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
            <div id="PAGINATION" className="mt-10">
              <div className="flex items-center flex-wrap justify-between">
                <div>
                  <span className="text-sm text-gray-700 ">
                    Showing data<span className=" ml-2 font-semibold ">1</span>{" "}
                    to <span className="font-semibold ">10</span> of{" "}
                    <span className="font-semibold  ">100</span> entries
                  </span>
                </div>
                <div>
                  <ul className="flex  items-center space-x-4 h-10 text-base">
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
          </div>
        </div>
      </div>
    </main>
  );
};

export default Rider;
