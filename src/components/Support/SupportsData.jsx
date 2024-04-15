import React from 'react'

import img from "../../assets/img/tableimg.png"
import { ActionIcon, Pending } from '../SVGICONS/Icons'

const SupportsData = () => {
    const reportsData = [
        {
            id: 1,
            profilepic: img,
            car_modal: "BMW x Class",
            car_no: 2564,
            driver_name: "Alberto del rio",
            status: "Pending",
            created_at: "September 9, 2013",
        },
        {
            id: 2,
            profilepic: img,
            car_modal: "BMW x Class",
            car_no: 2564,
            driver_name: "Alberto del rio",
            status: "Pending",
            created_at: "September 9, 2013",
        },
        {
            id: 3,
            profilepic: img,
            car_modal: "BMW x Class",
            car_no: 2564,
            driver_name: "Alberto del rio",
            status: "Pending",
            created_at: "September 9, 2013",
        },
        {
            id: 4,
            profilepic: img,
            car_modal: "BMW x Class",
            car_no: 2564,
            driver_name: "Alberto del rio",
            status: "Pending",
            created_at: "September 9, 2013",
        },
        {
            id: 5,
            profilepic: img,
            car_modal: "BMW x Class",
            car_no: 2564,
            driver_name: "Alberto del rio",
            status: "Pending",
            created_at: "September 9, 2013",
        },
        {
            id: 6,
            profilepic: img,
            car_modal: "BMW x Class",
            car_no: 2564,
            driver_name: "Alberto del rio",
            status: "Pending",
            created_at: "September 9, 2013",
        },
        {
            id: 7,
            profilepic: img,
            car_modal: "BMW x Class",
            car_no: 2564,
            driver_name: "Alberto del rio",
            status: "Pending",
            created_at: "September 9, 2013",
        },
        {
            id: 8,
            profilepic: img,
            car_modal: "BMW x Class",
            car_no: 2564,
            driver_name: "Alberto del rio",
            status: "Pending",
            created_at: "September 9, 2013",
        },


    ]
    return (
        <div>
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase dark:text-gray-400">
                    <tr className='text-gray-800'>
                        <th scope="col" className="px-6 py-3 ">
                            <input type="checkbox" className='' name="" id="" />
                        </th>

                        <th scope="col" className="px-6 py-3">
                            Profile
                        </th>
                        <th scope="col" className="px-6 py-3 ">
                            Driver Name
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Car No
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Car Modal
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Status
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Date
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Actions
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {
                        reportsData?.map((item, index) => {
                            return <tr key={index} className="border-b border-gray-200 text-gray-800">
                                <td className="px-6 py-4">
                                    <input type="checkbox" name="" id="" />
                                </td>
                                <td className="px-6 py-4">
                                    <img src={item?.profilepic} alt={item?.driver_name} className='w-6 h-6 rounded-full' />
                                </td>
                                <td className="px-6 py-4 bg-gray-50">
                                    {item?.driver_name}
                                </td>
                                <td className="px-6 py-4">
                                    {item?.car_no}
                                </td>
                                <td className="px-6 py-4 flex space-x-2">
                                    {item?.car_modal}
                                </td>
                                <td className="px-6 py-4 ">
                                    <div className="flex items-center space-x-2">
                                        <div>
                                            <Pending />
                                        </div>
                                        <div>
                                            {item?.status}
                                        </div>
                                    </div>
                                </td>
                                <td className="px-6 py-4 ">
                                    {item?.created_at}
                                </td>
                                <td className="px-6 py-4 ">
                                    <ActionIcon />
                                </td>
                            </tr>
                        })
                    }

                </tbody>
            </table>
        </div>
    )
}

export default SupportsData