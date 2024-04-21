import React, { useState } from "react";
import { Driver, Earnings, PieChart2, Rides, Users } from "../SVGICONS/Icons";
import { IoIosArrowDown, IoMdTrendingUp } from "react-icons/io";
import BarChart from "../Charts/BarChart";
import img from "../../assets/img/tableimg.png";
import LineChart from "../../utils/LineChart";
const Dashboard = () => {
  const stats = [
    {
      id: 1,
      name: "No of Rides",
      value: 400,
    },
    {
      id: 2,
      name: "Cancelled Rides",
      value: 122,
    },
    {
      id: 3,
      name: "Reports",
      value: 20,
    },
    {
      id: 4,
      name: "Safety Issues",
      value: 3,
    },
  ];

  const topDrivers = [
    {
      id: 1,
      name: "Espresso Cafe",
      earnings: 320,
      img: img,
      rides: 200,
      rating: 5,
    },
    {
      id: 2,
      name: "Espresso Cafe",
      earnings: 320,
      img: img,
      rides: 200,
      rating: 5,
    },
    {
      id: 3,
      name: "Espresso Cafe",
      earnings: 320,
      img: img,
      rides: 200,
      rating: 5,
    },
    {
      id: 4,
      name: "Espresso Cafe",
      earnings: 320,
      img: img,
      rides: 200,
      rating: 5,
    },
  ];
  const [showTimeFrame, setShowTimeFrame] = useState(false);
  return (
    <div className="sm:m-6 m-4 md:m-10">
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 md:gap-4">
        <div className=" p-2 pl-8 my-2 md:my-4 md:pr-12 border-2 border-gray-100 shadow-md shadow-gray-300 rounded-md">
          <div className="flex space-x-5">
            <div>
              <Earnings color={"#FFB000"} size={40} />
            </div>
            <div>
              <div className="font-dmsans text-sm text-[#A3AED0]">Earnings</div>
              <div className=" font-dmsans sm:text-lg md:text-2xl   text-[#48525B] font-semibold">$350.4</div>
            </div>
          </div>
        </div>
        <div className=" p-2 pl-8 my-2 md:my-4 pr-12 border-2 border-gray-100 shadow-md shadow-gray-300 rounded-md">
          <div className="flex space-x-5">
            <div>
              <Users color={"#FFB000"} size={40} />
            </div>
            <div>
              <div className="font-dmsans text-sm text-[#A3AED0]">Total Users</div>
              <div className="   font-dmsans sm:text-lg md:text-2xl   text-[#48525B]  font-semibold">1200</div>
            </div>
          </div>
        </div>
        <div className=" my-2 md:my-4 p-2 pl-8 pr-12 border-2 border-gray-100 shadow-md shadow-gray-300 rounded-md">
          <div className="flex space-x-5">
            <div>
              <Driver color={"#FFB000"} size={40} />
            </div>
            <div>
              <div className="font-dmsans text-sm text-[#A3AED0]">Drivers</div>
              <div className="font-dmsans sm:text-lg md:text-2xl   text-[#48525B] font-semibold">1000</div>
            </div>
          </div>
        </div>
        <div className="md:my-4 my-2 p-2 pl-8 pr-12 border-2 border-gray-100 shadow-md shadow-gray-300 rounded-md">
          <div className="flex space-x-5">
            <div>
              <Rides color={"#FFB000"} size={40} />
            </div>
            <div>
              <div className="font-dmsans text-sm text-[#A3AED0]">Rides</div>
              <div className="font-dmsans sm:text-lg md:text-2xl   text-[#48525B] font-semibold">700</div>
            </div>
          </div>
        </div>
      </div>

      <div className="sm:mt-8 mt-6 md:mt-10 flex  justify-between  items-center ">
        <div className="flex items-center space-x-4 md:space-x-8">
          <div className=" text-xs sm:text-lg md:text-xl  text-[#48525B] font-primary font-semibold">
            Total Revenue
          </div>
          <div className="text-xs sm:text-base text-[#48525B]">
            Mar 2022 - Oct 2022
          </div>
          <div className="relative">
            <IoIosArrowDown
              onClick={() => setShowTimeFrame(!showTimeFrame)}
              className={`text-[#48525B] text-sm md:text-base ${showTimeFrame ? "rotate-180" : ""
                } cursor-pointer`}
            />
            {showTimeFrame && (
              <div className="absolute -bottom-56 z-50 -right-40 md:-right-32 flex flex-col shadow-custom bg-white p-3 items-center justify-center w-auto rounded-md gap-4">
                <h2 className="sm:text-base text-sm font-primary text-[#00261C] md:text-xl">Select time frame</h2>
                <div className="flex gap-3 items-center">
                  <h2 className=" font-primary  text-[#00261C] font-semibold w-10">From</h2>
                  <select
                    name="month"
                    id=""
                    className="bg-gray-100 px-3 py-1 rounded-3xl outline-none font-semibold  font-dmsans text-primary"
                  >
                    <option value="01">January</option>
                    <option value="02">February</option>
                    <option value="03">March</option>
                    <option value="04">April</option>
                    <option value="05">May</option>
                    <option value="06">June</option>
                    <option value="07">July</option>
                    <option value="08">August</option>
                    <option value="09">September</option>
                    <option value="10">October</option>
                    <option value="11">November</option>
                    <option value="12">December</option>
                  </select>
                  <select
                    name="year"
                    id=""
                    className="border-[#A3AED0] px-3 py-1 rounded-3xl border-2 font-semibold  font-dmsans text-[#A3AED0] outline-none"
                  >
                    <option value="2024">2024</option>
                    <option value="2023">2023</option>
                    <option value="2022">2022</option>
                    <option value="2021">2021</option>
                    <option value="2020">2020</option>
                    <option value="2019">2019</option>
                    <option value="2018">2018</option>
                    <option value="2017">2017</option>
                    <option value="2016">2016</option>
                    <option value="2015">2015</option>
                  </select>
                </div>
                <div className="flex gap-3 items-center">
                  <h1 className="font-semibold w-10">To</h1>
                  <select
                    name="month"
                    id=""
                    className="bg-gray-100 px-3 py-1 rounded-3xl  outline-none font-semibold  font-dmsans text-primary"
                  >
                    <option value="01">January</option>
                    <option value="02">February</option>
                    <option value="03">March</option>
                    <option value="04">April</option>
                    <option value="05">May</option>
                    <option value="06">June</option>
                    <option value="07">July</option>
                    <option value="08">August</option>
                    <option value="09">September</option>
                    <option value="10">October</option>
                    <option value="11">November</option>
                    <option value="12">December</option>
                  </select>
                  <select
                    name="year"
                    id=""
                    className="border-[#A3AED0] px-3 py-1 rounded-3xl border-2 font-semibold  font-dmsans text-[#A3AED0] outline-none"
                  >
                    <option value="2024">2024</option>
                    <option value="2023">2023</option>
                    <option value="2022">2022</option>
                    <option value="2021">2021</option>
                    <option value="2020">2020</option>
                    <option value="2019">2019</option>
                    <option value="2018">2018</option>
                    <option value="2017">2017</option>
                    <option value="2016">2016</option>
                    <option value="2015">2015</option>
                  </select>
                </div>
                <button className="p-2 text-sm sm:text-base bg-primary font-primary rounded-xl px-5 text-white font-semibold">
                  Apply
                </button>
              </div>
            )}
          </div>
        </div>
        <div className="flex  space-x-4 md:space-x-8 items-center ">
          <div className="flex space-x-1 md:space-x-2 items-center">
            <div className="bg-primary rounded-full h-2  md:h-4 w-2  p-1 md:p-2 md:w-4" />
            <div className="text-xs sm:text-base text-[#48525B] font-inter">Last 6 months</div>
          </div>
          <div className="flex md:space-x-2 space-x-1 items-center">
            <div className="bg-gray-300  rounded-full h-2  md:h-4 w-2  p-1 md:p-2 md:w-4" />
            <div className="text-xs text-[#48525B] font-inter sm:text-base">Same period last year</div>
          </div>
        </div>
      </div>
      <div className="flex items-center mt-4 space-x-4 md:space-x-8 font-Manrope">
        <div className="  md:text-3xl text-[#48525B] font-primary sm:text-2xl text-xl lg:text-4xl font-semibold ">
          $30.6K
        </div>
        <div className="flex items-center  space-x-2 text-sm sm:text-base  md:text-lg">
          <div className=" text-primary  font-semibold font-primary">6% than last month</div>
          {/* <IoMdTrendingUp className="text-primary" /> */}
        </div>
      </div>
      <div className="bg-white p-2 my-4 rounded-xl shadow-md">
        <BarChart />
      </div>
      <div className=" my-10  grid md:grid-cols-[3fr_1fr] gap-x-4">
        <section className=" bg-white rounded-xl py-2 px-4 my-4 shadow-md ">
          <LineChart />
        </section>
        <section
          id="stats "
          className="border-2 my-4 border-gray-200 shadow-lg shadow-gray-200 p-4  rounded-xl  "
        >
          <div className=" flex items-center justify-around space-x-2 sm:space-x-4 md:space-x-8 font-Manrope">
            <div className="text-[#48525B] sm:text-lg  font-semibold font-primary">
              Other Stats
            </div>
            <div className="flex space-x-2 items-center">
              <div className="text-[#AFAFAF] text-xs">This Week</div>
              <div>
                <IoIosArrowDown className=" text-sm" />
              </div>
            </div>
          </div>
          <ul className="flex flex-col my-4 items-center font-Manrope">
            {stats?.map((item, index) => {
              return (
                <li key={index}>
                  <ul className="flex flex-col items-center space-y-2">
                    <li className="text-[#AFAFAF]">{item?.name}</li>
                    <li className=" text-[#48525B] sm:text-base text-sm md:text-lg">
                      {item?.value}
                    </li>
                  </ul>
                </li>
              );
            })}
          </ul>
        </section>
      </div>
      <div className="my-10  grid md:grid-cols-[3fr_1fr] gap-y-8 gap-x-4 ">
        <section className=" bg-white rounded-xl py-2 px-4 shadow-md ">
          <LineChart />
        </section>
        <section className="">
          <div className="flex flex-col items-center border-2 border-gray-200 shadow-lg shadow-gray-200 p-2 px-8 rounded-xl space-y-8 font-Manrope">
            <div className="flex flex-col items-center">
              <div className="flex flex-col items-center -space-y-1">
                <div className="text-2xl font-semibold text-[#48525B]">Success Rate</div>
                <div className="text-[#AFAFAF] text-xs ">Per Ride</div>
              </div>
              <div className="text-4xl mb-1 font-semibold mt-2 text-[#48525B]">
                93%
              </div>
              <div className="flex space-x-4">
                <div className="text-[#AFAFAF] text-sm">Total Miles Driven</div>
                <div className="text-[#48525B]">43000</div>
              </div>
            </div>
          </div>
          <div className="flex flex-col mt-5 items-center border-2 border-gray-200 shadow-lg shadow-gray-200 p-2 px-8 rounded-xl space-y-8 font-Manrope">
            <div className="flex flex-col  space-y-4 items-center">
              <div className="text-xl text-[#48525B] font-primary font-semibold">Average Ratings</div>

              <div>
                <PieChart2 />
              </div>
              <div className="flex justify-between   w-[150px] ">
                <div className="flex items-center">
                  <div className="flex flex-col -space-y-2 items-center">
                    <div className="flex items-center space-x-2">
                      <div className="bg-[#48525B] w-2 rounded-full h-2" />
                      <div className="text-[#AFAFAF]  text-sm ">Driver</div>
                    </div>
                    <div className=" font-semibold text-lg text-[#48525B]">4.7</div>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="flex flex-col -space-y-2 items-center">
                    <div className="flex items-center space-x-2">
                      <div className="bg-primary w-2 rounded-full h-2" />
                      <div className="text-[#AFAFAF]  text-sm ">Rider</div>
                    </div>
                    <div className=" font-semibold text-lg text-[#48525B]">4.2</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <div className="my-12  md:gap-x-8  md:grid grid-cols-2 font-Manrope ">
        <div className="">
          <div className="flex justify-between ">
            <div className="text-xl font-semibold font-primary  text-[#48525B]">Top Drivers</div>
            <div>
              <button className="bg-primary text-sm font-[Poppins] text-white rounded-full p-1 px-4">
                See All
              </button>
            </div>
          </div>
          <div class="relative overflow-x-auto md:m-0 my-4 md:w-10/12 bg-white shadow-md  rounded-xl ">
            <table className=" ">
              <thead className="text-xs text-[#48525B] uppercase  ">
                <tr>
                  <th scope="col" className="px-6 text-[#AFAFAF] py-3">
                    <span className="text-[#AFAFAF] italic">#</span>
                  </th>
                  <th scope="col" className="px-6 text-[#AFAFAF] py-3">
                    Image
                  </th>
                  <th scope="col" className="px-6 text-[#AFAFAF] py-3">
                    Name
                  </th>
                  <th scope="col" className="px-6 text-[#AFAFAF] py-3">
                    Earnings
                  </th>
                  <th scope="col" className="px-6 text-[#AFAFAF] py-3">
                    Rides
                  </th>
                  <th scope="col" className="px-6 text-[#AFAFAF] py-3">
                    Ratings
                  </th>
                </tr>
              </thead>
              <tbody>
                {topDrivers?.map((item, index) => {
                  return (
                    <tr key={index} className=" ">
                      <td className="px-6 py-4">{index + 1}</td>
                      <td className="px-6 py-4">
                        <img
                          className="w-10 h-10 rounded-full"
                          src={item?.img}
                          alt={item?.name}
                        />
                      </td>
                      <td className="text-[#48525B]  font-primary font-semibold text-sm px-6 py-4">{item?.name}</td>
                      <td className="text-[#48525B]  font-primary font-semibold text-sm px-6 py-4">{item?.earnings}</td>
                      <td className="text-[#48525B]  font-primary font-semibold text-sm px-6 py-4">{item?.rides}</td>
                      <td className="text-[#48525B]  font-primary font-semibold text-sm px-6 py-4">{item?.rating}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
        <div className=" ">
          <div className="flex justify-between">
            <div className="text-xl font-semibold font-primary  text-[#48525B]">Top Riders</div>
            <div>
              <button className="bg-primary text-sm text-white font-[Poppins] rounded-full p-1 px-4">
                See All
              </button>
            </div>
          </div>
          <div class="relative overflow-x-auto md:m-0 my-4 md:w-10/12 bg-white shadow-md  rounded-xl ">
            <table className=" ">
              <thead className="text-xs text-[#48525B] uppercase  ">
                <tr>
                  <th scope="col" className="px-6 text-[#AFAFAF] py-3">
                    <span className="text-[#AFAFAF] italic">#</span>
                  </th>
                  <th scope="col" className="px-6 text-[#AFAFAF] py-3">
                    Image
                  </th>
                  <th scope="col" className="px-6 text-[#AFAFAF] py-3">
                    Name
                  </th>
                  <th scope="col" className="px-6 text-[#AFAFAF] py-3">
                    Earnings
                  </th>
                  <th scope="col" className="px-6 text-[#AFAFAF] py-3">
                    Rides
                  </th>
                  <th scope="col" className="px-6 text-[#AFAFAF] py-3">
                    Ratings
                  </th>
                </tr>
              </thead>
              <tbody >
                {topDrivers?.map((item, index) => {
                  return (
                    <tr key={index} className=" ">
                      <td className="px-6 py-4">{index + 1}</td>
                      <td className="px-6 py-4">
                        <img
                          className="w-10 h-10 rounded-full"
                          src={item?.img}
                          alt={item?.name}
                        />
                      </td>
                      <td className="px-6 py-4 text-[#48525B]  font-primary font-semibold text-sm">{item?.name}</td>
                      <td className="px-6 py-4 text-[#48525B]  font-primary font-semibold text-sm">{item?.earnings}</td>
                      <td className="px-6 py-4 text-[#48525B]  font-primary font-semibold text-sm">{item?.rides}</td>
                      <td className="px-6 py-4 text-[#48525B]  font-primary font-semibold text-sm">{item?.rating}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
