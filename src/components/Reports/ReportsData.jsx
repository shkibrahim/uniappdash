import React, { useState } from "react";
import img from "../../assets/img/tableimg.png";
import { ActionIcon } from "../SVGICONS/Icons";
import RideDetails from "../RideDetails/RideDetails";

const ReportsData = () => {
  const [flag, setFlag] = useState(false);
  const reportsData = [
    {
      id: 1,
      profilepic: img,
      customer_name: "Albert Filma",
      driver_name: "Alberto del rio",
      report: "The service was slow and the driver was rude.",
      issue_type: "Payment",
      created_at: "September 9, 2013",
    },
    {
      id: 2,
      profilepic: img,
      customer_name: "Albert Filma",
      driver_name: "Alberto del rio",
      report: "The service was slow and the driver was rude.",
      issue_type: "Payment",
      created_at: "September 9, 2013",
    },
    {
      id: 3,
      profilepic: img,
      customer_name: "Albert Filma",
      driver_name: "Alberto del rio",
      report: "The service was slow and the driver was rude.",
      issue_type: "Payment",
      created_at: "September 9, 2013",
    },
    {
      id: 4,
      profilepic: img,
      customer_name: "Albert Filma",
      driver_name: "Alberto del rio",
      report: "The service was slow and the driver was rude.",
      issue_type: "Payment",
      created_at: "September 9, 2013",
    },
    {
      id: 5,
      profilepic: img,
      customer_name: "Albert Filma",
      driver_name: "Alberto del rio",
      report: "The service was slow and the driver was rude.",
      issue_type: "Payment",
      created_at: "September 9, 2013",
    },
    {
      id: 6,
      profilepic: img,
      customer_name: "Albert Filma",
      driver_name: "Alberto del rio",
      report: "The service was slow and the driver was rude.",
      issue_type: "Payment",
      created_at: "September 9, 2013",
    },
    {
      id: 7,
      profilepic: img,
      customer_name: "Albert Filma",
      driver_name: "Alberto del rio",
      report: "The service was slow and the driver was rude.",
      issue_type: "Payment",
      created_at: "September 9, 2013",
    },
  ];
  return (
    <div className="overflow-auto">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 font-primary">
        <thead className="text-[14px] text-gray-700 dark:text-gray-400">
          <tr className="text-gray-800">
            <th scope="col" className="px-6 py-3 ">
              <input type="checkbox" className="" name="" id="" />
            </th>

            <th scope="col" className="px-6 py-3">
              Profile
            </th>
            <th scope="col" className="px-6 py-3 ">
              Customer Name
            </th>
            <th scope="col" className="px-6 py-3">
              Driver Name
            </th>
            <th scope="col" className="px-6 py-3">
              Report
            </th>
            <th scope="col" className="px-6 py-3">
              Issue Type
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
          {reportsData?.map((item, index) => {
            return (
              <tr
                key={index}
                className="border-b border-gray-200 text-gray-800"
              >
                <td className="px-6 py-4">
                  <input type="checkbox" name="" id="" />
                </td>
                <td className="px-6 py-4">
                  <img
                    src={item?.profilepic}
                    alt={item?.customer_name}
                    className="w-6 h-6 rounded-full"
                  />
                </td>
                <td className="px-6 py-4 bg-gray-50">{item?.customer_name}</td>
                <td className="px-6 py-4">{item?.driver_name}</td>
                <td className="px-6 py-4 flex space-x-2">{item?.report}</td>
                <td className="px-6 py-4 ">{item?.issue_type}</td>
                <td className="px-6 py-4 ">{item?.created_at}</td>
                <td className="px-6 py-4 ">
                  <div
                    onClick={() => setFlag(true)}
                    className=" cursor-pointer"
                  >
                    <ActionIcon />
                  </div>
                  {flag && <RideDetails flag={flag} setTrigger={setFlag} />}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default ReportsData;
