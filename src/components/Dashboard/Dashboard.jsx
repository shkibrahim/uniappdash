import React from 'react'
import { Driver, Earnings, Rides, Users } from '../SVGICONS/Icons'
import { IoIosArrowDown, IoMdTrendingUp } from "react-icons/io";
import BarChart from '../Charts/BarChart';
import img from "../../assets/img/tableimg.png"
import LineChart from '../../utils/LineChart';
const Dashboard = () => {
  const stats = [
    {
      id: 1,
      name: "No of Rides",
      value: 400
    },
    {
      id: 2,
      name: "Cancelled Rides",
      value: 122
    },
    {
      id: 3,
      name: "Reports",
      value: 20
    },
    {
      id: 4,
      name: "Safety Issues",
      value: 3
    }
  ]

  const topDrivers = [
    {
      id: 1,
      name: "Espresso Cafe",
      earnings: 320,
      img: img,
      rides: 200,
      rating: 5
    },
    {
      id: 2,
      name: "Espresso Cafe",
      earnings: 320,
      img: img,
      rides: 200,
      rating: 5
    },
    {
      id: 3,
      name: "Espresso Cafe",
      earnings: 320,
      img: img,
      rides: 200,
      rating: 5
    },
    {
      id: 4,
      name: "Espresso Cafe",
      earnings: 320,
      img: img,
      rides: 200,
      rating: 5
    },
  ]
  return (
    <div className='m-10'>
      <div className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>

        <div className=' p-2 pl-8 my-4 pr-12 border-2 border-gray-100 shadow-md shadow-gray-300 rounded-md'>
          <div className="flex space-x-5">
            <div>
              <Earnings color={"#FFB000"} size={30} />
            </div>
            <div>
              <div className='text-xs text-gray-500'>
                Earnings
              </div>
              <div className='text-lg text-gray-700  font-semibold'>
                $350.4
              </div>
            </div>
          </div>
        </div>
        <div className=' p-2 pl-8 my-4 pr-12 border-2 border-gray-100 shadow-md shadow-gray-300 rounded-md'>
          <div className="flex space-x-5">
            <div>
              <Users color={"#FFB000"} size={30} />
            </div>
            <div>
              <div className='text-xs text-gray-500'>
                Total Users
              </div>
              <div className='text-lg text-gray-700  font-semibold'>
                1200
              </div>
            </div>
          </div>
        </div>
        <div className=' my-4 p-2 pl-8 pr-12 border-2 border-gray-100 shadow-md shadow-gray-300 rounded-md'>
          <div className="flex space-x-5">
            <div>
              <Driver color={"#FFB000"} size={30} />
            </div>
            <div>
              <div className='text-xs text-gray-500'>
                Drivers
              </div>
              <div className='text-lg text-gray-700  font-semibold'>
                1000
              </div>
            </div>
          </div>
        </div>
        <div className='my-4  p-2 pl-8 pr-12 border-2 border-gray-100 shadow-md shadow-gray-300 rounded-md'>
          <div className="flex space-x-5">
            <div>
              <Rides color={"#FFB000"} size={30} />
            </div>
            <div>
              <div className='text-xs text-gray-500'>
                Rides
              </div>
              <div className='text-lg text-gray-700  font-semibold'>
                700
              </div>
            </div>
          </div>
        </div>



      </div>

      <div className="mt-10 flex  justify-between  items-center ">
        <div className="flex items-center space-x-4 md:space-x-8">
          <div className=' text-sm sm:text-lg md:text-xl  text-gray-800 font-semibold'>
            Total Revenue
          </div>
          <div className='text-xs sm:text-base text-gray-600'>
            Mar 2022 - Oct 2022
          </div>
          <div>
            <IoIosArrowDown className='text-gray-800 text-sm md:text-base' />
          </div>
        </div>
        <div className='flex  space-x-4 md:space-x-8 items-center '>
          <div className='flex space-x-1 md:space-x-2 items-center'>
            <div className='bg-primary rounded-full h-2  md:h-4 w-2  p-1 md:p-2 md:w-4' />
            <div className='text-xs sm:text-base'>
              Last 6 months
            </div>
          </div>
          <div className='flex md:space-x-2 space-x-1 items-center'>
            <div className='bg-gray-300  rounded-full h-2  md:h-4 w-2  p-1 md:p-2 md:w-4' />
            <div className='text-xs sm:text-base'>
              Same period last year
            </div>
          </div>
        </div>
      </div>
      <div className='flex items-center mt-4 space-x-4 md:space-x-8'>
        <div className='  md:text-3xl sm:text-2xl text-xl lg:text-4xl font-semibold '>
          $30.6K
        </div>
        <div className="flex items-center  space-x-2 text-sm sm:text-base  md:text-lg">
          <div className=' text-primary'>
            6% than last month
          </div>
          <IoMdTrendingUp className='text-primary' />
        </div>
      </div>
      <BarChart />
      <div className=' my-10  grid md:grid-cols-[3fr_1fr] gap-x-4'>
        <section id="chart" className=' my-4'>
          <LineChart/>
        </section>
        <section id="stats " className='border-2 my-4 border-gray-200 shadow-lg shadow-gray-200 p-4  rounded-md  '>
          <div className=' flex items-center justify-between space-x-2 sm:space-x-4 md:space-x-8'>
            <div className='text-gray-800 sm:text-lg md:text-xl font-medium'>
              Other Stats
            </div>
            <div className='flex space-x-2 items-center'>

              <div className='text-gray-400 text-xs'>
                This Week
              </div>
              <div>
                <IoIosArrowDown className=' text-sm' />
              </div>
            </div>
          </div>
          <ul className='flex flex-col my-4 items-center'>
            {stats?.map((item, index) => {
              return <li key={index}>
                <ul className='flex flex-col items-center space-y-2'>
                  <li className='text-gray-400'>
                    {item?.name}
                  </li>
                  <li className=' sm:text-base text-sm md:text-lg'>
                    {item?.value}
                  </li>
                </ul>
              </li>
            })}
          </ul>
        </section>

      </div>
      <div className='my-10  grid md:grid-cols-[3fr_1fr] gap-y-8 gap-x-4 '>
        <section className=" ">
          <LineChart/>
        </section>
        <section className="">
          <div className="flex flex-col items-center border-2 border-gray-200 shadow-lg shadow-gray-200 p-2 px-8 rounded-md space-y-8">
            <div className='flex flex-col items-center'>
              <div className='flex flex-col items-center -space-y-1'>
                <div className='text-2xl font-medium'>Success Rate</div>
                <div className='text-gray-400'>Per Ride</div>
              </div>
              <div className='text-3xl mb-1 font-semibold text-gray-800'>93%</div>
              <div className='flex space-x-4'>
                <div className='text-gray-400 text-sm'>
                  Total Miles Driven
                </div>
                <div>
                  43000
                </div>
              </div>
            </div>
            <div className='flex flex-col  space-y-4 items-center'>
              <div className='text-xl font-medium'>
                Average Ratings
              </div>

              <div >
                icons
              </div>
              <div className="flex justify-between   w-[150px] ">
                <div className='flex items-center'>
                  <div className='flex flex-col -space-y-2 items-center'>
                    <div className="flex items-center space-x-2">
                      <div className='bg-gray-800 w-2 rounded-full h-2' />
                      <div className='text-gray-400 '>Driver</div>
                    </div>
                    <div className=' font-semibold text-lg'>4.7</div>
                  </div>
                </div>
                <div className='flex items-center'>
                  <div className='flex flex-col -space-y-2 items-center'>
                    <div className="flex items-center space-x-2">
                      <div className='bg-primary w-2 rounded-full h-2' />
                      <div className='text-gray-400 '>Rider</div>
                    </div>
                    <div className=' font-semibold text-lg'>4.2</div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </section>
      </div>
      <div className="my-12  md:gap-x-8  md:grid grid-cols-2  ">
        <div className=''>
          <div className="flex justify-between">
            <div className='text-xl font-medium'>
              Top Drivers
            </div>
            <div>
              <button className='bg-primary text-sm text-white rounded-full p-1 px-4'>
                See All
              </button>
            </div>
          </div>
          <div class="relative overflow-x-auto w-10/12 ">
              <table className=" ">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 ">
                  <tr>
                    <th scope="col" className="px-6 text-gray-400 py-3">
                      <span className="text-gray-400 italic">
                        #
                      </span>
                    </th>
                    <th scope="col" className="px-6 text-gray-400 py-3">
                      Image
                    </th>
                    <th scope="col" className="px-6 text-gray-400 py-3">
                      Name
                    </th>
                    <th scope="col" className="px-6 text-gray-400 py-3">
                      Earnings
                    </th>
                    <th scope="col" className="px-6 text-gray-400 py-3">
                      Rides
                    </th>
                    <th scope="col" className="px-6 text-gray-400 py-3">
                      Ratings
                    </th>

                  </tr>
                </thead>
                <tbody>
                  {
                    topDrivers?.map((item, index) => {
                      return <tr key={index} className=" ">

                        <td className="px-6 py-4">
                          {index+1}
                        </td>
                        <td className="px-6 py-4">
                          <img className='w-8 h-8 rounded-full' src={item?.img} alt={item?.name} />
                        </td>
                        <td className="px-6 py-4">
                          {item?.name}
                        </td>
                        <td className="px-6 py-4">
                          {item?.earnings}
                        </td>
                        <td className="px-6 py-4">
                          {item?.rides}
                        </td>
                        <td className="px-6 py-4">
                          {item?.rating}
                        </td>

                      </tr>
                    })
                  }

                </tbody>
              </table>
            </div>
        </div>
        <div className= ' '>
          <div className="flex justify-between">
            <div className='text-xl font-medium'>
              Top Riders
            </div>
            <div>
              <button className='bg-primary text-sm text-white rounded-full p-1 px-4'>
                See All
              </button>
            </div>
          </div>
          <div class="relative overflow-x-auto w-10/12 ">
              <table className=" ">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 ">
                  <tr>
                    <th scope="col" className="px-6 text-gray-400 py-3">
                      <span className="text-gray-400 italic">
                        #
                      </span>
                    </th>
                    <th scope="col" className="px-6 text-gray-400 py-3">
                      Image
                    </th>
                    <th scope="col" className="px-6 text-gray-400 py-3">
                      Name
                    </th>
                    <th scope="col" className="px-6 text-gray-400 py-3">
                      Earnings
                    </th>
                    <th scope="col" className="px-6 text-gray-400 py-3">
                      Rides
                    </th>
                    <th scope="col" className="px-6 text-gray-400 py-3">
                      Ratings
                    </th>

                  </tr>
                </thead>
                <tbody>
                  {
                    topDrivers?.map((item, index) => {
                      return <tr key={index} className=" ">

                        <td className="px-6 py-4">
                          {index+1}
                        </td>
                        <td className="px-6 py-4">
                          <img className='w-8 h-8 rounded-full' src={item?.img} alt={item?.name} />
                        </td>
                        <td className="px-6 py-4">
                          {item?.name}
                        </td>
                        <td className="px-6 py-4">
                          {item?.earnings}
                        </td>
                        <td className="px-6 py-4">
                          {item?.rides}
                        </td>
                        <td className="px-6 py-4">
                          {item?.rating}
                        </td>

                      </tr>
                    })
                  }

                </tbody>
              </table>
            </div>
        </div>
      
       
      </div>
    </div>
  )
}

export default Dashboard
