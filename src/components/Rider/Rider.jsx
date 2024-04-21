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
    <main className="sm:mx-8 mx-4 md:mx-10 mb-10">
      <div className="grid md:grid-cols-[1fr_3fr] md:gap-x-8 mt-10">
        <section className="mb-10 md:mb-0" id="1">
          {showRideDetails && (
            <RideDetails setTrigger={setShowRideDetails} flag={showRideDetails} />
          )}
          <div className="mb-8">
            <div className="flex items-center justify-between mx-4 md:mx-0 ">
              <div className=" sm:text-xl text-lg md:text-2xl text-[#48525B]  font-semibold font-primary">
                All Rides
              </div>
              <div className="flex relative  ">
                <div
                  className="flex items-center space-x-4 cursor-pointer"
                  onClick={() => setRange(!showRange)}
                >
                  <div className="text-[#343A40 text-sm">{activeRange}</div>
                  <div>
                    <IoIosArrowDown />
                  </div>
                </div>
                {showRange && (
                  <div className="absolute mt-4 top-2 bg-gray-100 rounded-xl p-4">
                    <ul className="flex flex-col  text-[#343A40] space-y-2">
                      {ranges.map((item) => {
                        if (item.name !== activeRange) {
                          return (
                            <li
                              className="cursor-pointer text-sm"
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

            </div>
          </div>
          <div>
            <div className="flex   flex-col items-center space-y-4">
              <div className="">
                <div className="flex flex-col space-y-4 p-4 border-2 border-[#F5F5F5] rounded-xl shadow-md shadow-gray-300">
                  <div className="flex  space-x-8">
                    <div className="text-[#656575] font-medium font-primary text-lg">
                      Hire Vs Cancel
                    </div>
                    <div className="  px-2 text-[#656575] text-sm p-1 rounded-xl">
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
                            <div className="text-[#1A1919] font-primary">Total Hired</div>
                          </div>
                          <div className="flex items-center space-x-2">
                            <div className="text-[#1A1919]  font-inter">54%</div>
                            <div>
                              <FaArrowUpLong className="text-green-500" />
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center  space-x-1">
                            <div className=" bg-red-600  w-4 h-4 rounded-full" />
                            <div className="text-[#1A1919] font-primary">Total Canceled</div>
                          </div>
                          <div className="flex items-center space-x-2">
                            <div className="text-[#1A1919]  font-inter">20%</div>
                            <div>
                              <FaArrowUpLong className="text-red-500" />
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center  space-x-1">
                            <div className=" bg-primary w-4 h-4 rounded-full" />
                            <div className="text-[#1A1919] font-primary">Total Pending</div>
                          </div>
                          <div className="flex items-center space-x-2">
                            <div className="text-[#1A1919]  font-inter">21%</div>
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
                <div className="flex flex-col space-y-4 p-4  border-2 border-[#F5F5F5] rounded-xl shadow-md shadow-gray-300">
                  <div className="flex  justify-between">
                    <div className="text-[#656575] font-inter font-medium text-lg">
                      Income
                    </div>
                    <div className="  px-2 text-[#656575] text-sm ">
                      Today
                    </div>
                  </div>
                  <div>
                    <div>
                      <div className="flex flex-col space-y-2">
                        <div className="flex items-center justify-between">
                          <div className="sm:text-xl   md:text-2xl font-semibold text-[#01150C] font-inter">$ 9460.00</div>
                          <div className="flex items-center">
                            <FaArrowDownLong className="text-red-500" />
                            <div className="text-red-500 font-inter">1.5%</div>
                          </div>
                        </div>
                        <div className=" text-gray-800 font-thin text-sm">
                          Compared to $9940 yesterday
                        </div>
                        <div className="flex items-center w-[200px] justify-between">
                          <div className="text-[#525256] text-sm">
                            Last week Income
                          </div>
                          <div className="text-[#525256] font-inter  "> $25658.00</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <div className="flex flex-col space-y-4 p-4  border-2 border-[#F5F5F5] rounded-xl shadow-md shadow-gray-300">
                  <div className="flex  justify-between">
                    <div className="text-[#656575] font-inter font-medium text-lg">
                      Active Drivers
                    </div>
                    <div className="   text-[#656575] text-sm ">
                      Today
                    </div>
                  </div>
                  <div>
                    <div>
                      <div className="flex flex-col space-y-2">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-4">
                            <div className=" text-2xl font-semibold font-inter text-[#01150C]">340</div>
                            <div>
                              <Active />
                            </div>
                          </div>
                          <div className="flex items-center">
                            <FaArrowDownLong className="text-red-500" />
                            <div className="text-red-500 font-inter ">1.5%</div>
                          </div>
                        </div>
                        <div className=" text-[#48525B] font-thin text-sm">
                          Compared to 440 yesterday{" "}
                        </div>
                        <div className="flex items-center w-[200px] justify-between">
                          <div className="text-[#525256]  font-inter text-sm">
                            Already booked
                          </div>
                          <div className="font-inter text-[#525256] text-sm">120</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="2">
          <div className="flex justify-between  items-center ">


            <div className=" sm:w-[350px] w-[200px] md:w-[400px]">
              <div className="relative w-full">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                  <IoSearchOutline className=" text-[#AFAFAF]  text-xl" />
                </div>
                <input
                  type="text"
                  className="bg-white  shadow-md    text-sm  text-[#48525B] rounded-xl  placeholder:text-[#AFAFAF] focus:outline-none  block w-full ps-10 p-2.5  "
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
                  <div className=" text-[#343A40] font-primary sm:text-base text-sm font-semibold" >Sort By</div>
                  <div>
                    <IoMdArrowDropdown />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className=" my-6 sm:my-8 md:my-10   ">

            <div className=" bg-white rounded-xl shadow-md ">
              <div className="text-center  text-[#1A1919] font-primary text-lg font-semibold my-10">
                Live Car Status
              </div>
              <div>
                <div>
                  <div className="relative overflow-x-auto w-[100vw] md:w-auto  sm:rounded-lg">
                    <table className=" overflow-auto  text-sm text-left rtl:text-right ">
                      <thead className="  ">
                        <tr className=" font-normal font-primary">
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
                              className="border-b  font-inter text-[#1A1919]"
                            >
                              <td className="px-6 py-4">{index + 1}</td>
                              <td className="px-6 py-4 ">
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
                                <div className="text-[#656575] font-light">{item?.status}</div>
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

              </div>
            </div>
            <div id="PAGINATION" className="  mt-10 ">
              <div className="flex items-center flex-wrap justify-between">
                <div>
                  <span className="text-sm text-[#48525B] font-[Poppins] ">
                    Showing data<span className=" ml-2  ">1</span>{" "}
                    to <span className=" ">10</span> of{" "}
                    <span className="">100</span> entries
                  </span>
                </div>
                <div>
                  <ul className="flex  items-center space-x-4 h-10 text-base">
                    <li>
                      <a
                        href="#"
                        className="flex items-center justify-center px-4 h-10 ms-0 leading-tight text-[#656575]  hover:text-[#48525B] "
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
                        className="flex items-center justify-center px-2 h-10 leading-tight text-white rounded-xl bg-primary border  "
                      >
                        1
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="flex items-center justify-center px-2 h-10 leading-tight text-[#656575] rounded-xl bg-[#F5F5F5] hover:bg-primary transition-all duration-300 hover:text-white"
                      >
                        2
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="flex items-center justify-center px-2 h-10 leading-tight text-[#656575] rounded-xl bg-[#F5F5F5] hover:bg-primary transition-all duration-300 hover:text-white"
                      >
                        3
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="flex items-center justify-center px-2 h-10 leading-tight text-[#656575] rounded-xl bg-[#F5F5F5] hover:bg-primary transition-all duration-300 hover:text-white"
                      >
                        ..
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="flex items-center justify-center px-2 h-10 leading-tight text-[#656575] rounded-xl bg-[#F5F5F5] hover:bg-primary transition-all duration-300 hover:text-white"
                      >
                        40
                      </a>
                    </li>

                    <li>
                      <a
                        href="#"
                        className="flex items-center justify-center px-4 h-10 leading-tight text-[#656575] hover:text-[#48525B]"
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
        </section>
      </div>

    </main>
  );
};

export default Rider;
