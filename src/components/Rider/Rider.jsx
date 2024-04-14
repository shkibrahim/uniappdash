import React, { useState } from 'react';
import { IoIosArrowDown } from "react-icons/io";
import { IoSearchOutline } from "react-icons/io5";
import { IoMdArrowDropdown } from "react-icons/io";
import { Active, Filter } from '../SVGICONS/Icons';
import { FaArrowUpLong } from "react-icons/fa6";
import { FaArrowDownLong } from "react-icons/fa6";

const Rider = () => {
    const ranges = [
        {
            id: 1,
            name: "This Month",
            value: { start: new Date(new Date().getFullYear(), new Date().getMonth(), 1), end: new Date() }
        },
        {
            id: 2,
            name: "Last 7 Days",
            value: { start: new Date(new Date().getTime() - (7 * 24 * 60 * 60 * 1000)), end: new Date() }
        },
        {
            id: 3,
            name: "Last 6 Months",
            value: { start: new Date(new Date().getFullYear(), new Date().getMonth() - 6, 1), end: new Date() }
        },
        {
            id: 4,
            name: "This Year",
            value: { start: new Date(new Date().getFullYear(), 0, 1), end: new Date() }
        }
    ]
    const [activeRange, setActiveRange] = useState(ranges[0].name);
    const [showRange, setRange] = useState(false);

    const handleRangeSelect = (rangeName) => {
        setActiveRange(rangeName);
        setRange(false);
    };

    return (
        <main className='mx-10'>
            <div className='flex my-10 items-center justify-between '>
                <div className=''>
                    <div className="flex items-center space-x-4">
                        <div className='text-2xl font-medium'>
                            All Rides
                        </div>
                        <div className='flex relative w-[200px] '>
                            <div className='flex items-center space-x-4 cursor-pointer' onClick={() => setRange(!showRange)}>
                                <div>
                                    {activeRange}
                                </div>
                                <div>
                                    <IoIosArrowDown />
                                </div>
                            </div>
                            {showRange &&
                                <div className="absolute mt-4 top-2 bg-gray-100 rounded-md p-4">
                                    <ul className="flex flex-col space-y-2">
                                        {ranges.map((item) => {
                                            if (item.name !== activeRange) {
                                                return (
                                                    <li className='cursor-pointer' key={item.id} onClick={() => handleRangeSelect(item.name)}>
                                                        {item.name}
                                                    </li>
                                                );
                                            }
                                            return null;
                                        })}
                                    </ul>
                                </div>
                            }
                        </div>
                        <div>
                        </div>
                    </div>
                </div>

                <div className='w-[400px]'>
                    <div className="relative w-full">
                        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                            <IoSearchOutline className=' text-gray-900 text-xl' />
                        </div>
                        <input type="text" id="voice-search" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary focus:border-primary block w-full ps-10 p-2.5  " placeholder="Search ..." required />
                        <button type="button" className="absolute inset-y-0 end-0 flex items-center pe-3">

                        </button>
                    </div>
                </div>
                <div>
                    <div className="flex items-center space-x-2">
                        <Filter />
                        <div className="flex items-center space-x-2">
                            <div>
                                Sort By
                            </div>
                            <div>
                                <IoMdArrowDropdown />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='my-10 justify-between flex '>
                <div>
                    <div className="flex   flex-col items-center space-y-4">
                        <div >
                            <div className="flex flex-col space-y-4 p-4 border-2 border-gray-200 rounded-md shadow-md shadow-gray-300">
                                <div className="flex  space-x-8">
                                    <div className='text-gray-500 font-medium text-lg'>Hire Vs Cancel</div>
                                    <div className=' bg-gray-200 px-2 text-gray-600 text-sm p-1 rounded-md'>
                                        Today
                                    </div>
                                </div>
                                <div className="flex justify-center">
                                    graph
                                </div>
                                <div>

                                    <div>
                                        <div className="flex flex-col space-y-2">
                                            <div className='flex items-center justify-between'>
                                                <div className='flex items-center  space-x-1'>
                                                    <div className=' bg-green-600 w-4 h-4 rounded-full' />
                                                    <div>
                                                        Total Hired
                                                    </div>
                                                </div>
                                                <div className='flex items-center space-x-2'>
                                                    <div>
                                                        54%
                                                    </div>
                                                    <div>
                                                        <FaArrowUpLong className='text-green-500' />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='flex items-center justify-between'>
                                                <div className='flex items-center  space-x-1'>
                                                    <div className=' bg-red-600 w-4 h-4 rounded-full' />
                                                    <div>
                                                        Total Canceled
                                                    </div>
                                                </div>
                                                <div className='flex items-center space-x-2'>
                                                    <div>
                                                        20%
                                                    </div>
                                                    <div>
                                                        <FaArrowUpLong className='text-red-500' />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='flex items-center justify-between'>
                                                <div className='flex items-center  space-x-1'>
                                                    <div className=' bg-primary w-4 h-4 rounded-full' />
                                                    <div>
                                                        Total Pending
                                                    </div>
                                                </div>
                                                <div className='flex items-center space-x-2'>
                                                    <div>
                                                        21%
                                                    </div>
                                                    <div>
                                                        <FaArrowDownLong className='text-primary' />
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>

                        <div >
                            <div className="flex flex-col space-y-4 p-4  border-2 border-gray-200 rounded-md shadow-md shadow-gray-300">
                                <div className="flex  justify-between">
                                    <div className='text-gray-500 font-medium text-lg'>Income</div>
                                    <div className=' bg-gray-200 px-2 text-gray-600 text-sm p-1 rounded-md'>
                                        Today
                                    </div>
                                </div>
                                <div>

                                    <div>
                                        <div className="flex flex-col space-y-2">
                                            <div className='flex items-center justify-between'>
                                                <div className=' text-2xl font-semibold'>
                                                    $ 9460.00
                                                </div>
                                                <div className='flex items-center'>
                                                    <FaArrowDownLong className='text-red-500' />
                                                    <div className='text-red-500'>
                                                        1.5%
                                                    </div>
                                                </div>


                                            </div>
                                            <div className=' text-gray-500 text-sm'>
                                                Compared to $9940 yesterday
                                            </div>
                                            <div className='flex items-center w-[200px] justify-between'>
                                                <div className='text-gray-500 text-sm' >
                                                    Last week Income
                                                </div>
                                                <div>
                                                    $25658.00
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>

                        <div >
                            <div className="flex flex-col space-y-4 p-4  border-2 border-gray-200 rounded-md shadow-md shadow-gray-300">
                                <div className="flex  justify-between">
                                    <div className='text-gray-500 font-medium text-lg'>Active Drivers</div>
                                    <div className=' bg-gray-200 px-2 text-gray-600 text-sm p-1 rounded-md'>
                                        Today
                                    </div>
                                </div>
                                <div>

                                    <div>
                                        <div className="flex flex-col space-y-2">
                                            <div className='flex items-center justify-between'>
                                                <div className="flex items-center space-x-4">
                                                    <div className=' text-2xl font-semibold'>
                                                        340
                                                    </div>
                                                    <div>
                                                        <Active />
                                                    </div>
                                                </div>
                                                <div className='flex items-center'>
                                                    <FaArrowDownLong className='text-red-500' />
                                                    <div className='text-red-500'>
                                                        1.5%
                                                    </div>
                                                </div>


                                            </div>
                                            <div className=' text-gray-500 text-sm'>
                                                Compared to 440 yesterday                                            </div>
                                            <div className='flex items-center w-[200px] justify-between'>
                                                <div className='text-gray-500 text-sm' >
                                                    Already booked
                                                </div>
                                                <div>
                                                    120
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>



                    </div>
                </div>
                <div>
                    <div></div>
                </div>
            </div>
        </main>
    );
}

export default Rider;
