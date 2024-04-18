import React from "react";
import img from "../../assets/img/tableimg.png";
import { ActionIcon } from "../SVGICONS/Icons";
import { FaStar } from "react-icons/fa6";
import { Link } from "react-router-dom";

const UsersTable = () => {
  const userData = [
    {
      id: 1,
      profilepic: img,
      name: "Albert Filma",
      email: "filma@example.com",
      created_at: "September 9, 2013",
      ratings: 5,
    },
    {
      id: 2,
      profilepic: img,
      name: "Albert Filma",
      email: "filma@example.com",
      created_at: "September 9, 2013",
      ratings: 5,
    },
    {
      id: 3,
      profilepic: img,
      name: "Albert Filma",
      email: "filma@example.com",
      created_at: "September 9, 2013",
      ratings: 5,
    },
    {
      id: 4,
      profilepic: img,
      name: "Albert Filma",
      email: "filma@example.com",
      created_at: "September 9, 2013",
      ratings: 5,
    },
    {
      id: 5,
      profilepic: img,
      name: "Albert Filma",
      email: "filma@example.com",
      created_at: "September 9, 2013",
      ratings: 5,
    },
    {
      id: 6,
      profilepic: img,
      name: "Albert Filma",
      email: "filma@example.com",
      created_at: "September 9, 2013",
      ratings: 5,
    },
    {
      id: 7,
      profilepic: img,
      name: "Albert Filma",
      email: "filma@example.com",
      created_at: "September 9, 2013",
      ratings: 5,
    },
    {
      id: 8,
      profilepic: img,
      name: "Albert Filma",
      email: "filma@example.com",
      created_at: "September 9, 2013",
      ratings: 5,
    },
    {
      id: 9,
      profilepic: img,
      name: "Albert Filma",
      email: "filma@example.com",
      created_at: "September 9, 2013",
      ratings: 5,
    },
    {
      id: 10,
      profilepic: img,
      name: "Albert Filma",
      email: "filma@example.com",
      created_at: "September 9, 2013",
      ratings: 5,
    },
  ];
  return (
    <div className="overflow-auto">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase dark:text-gray-400">
          <tr className="text-gray-800">
            <th scope="col" className="px-6 py-3 ">
              <input type="checkbox" className="" name="" id="" />
            </th>

            <th scope="col" className="px-6 py-3">
              Profile
            </th>
            <th scope="col" className="px-6 py-3 ">
              Name
            </th>
            <th scope="col" className="px-6 py-3">
              Email
            </th>
            <th scope="col" className="px-6 py-3">
              Joined on
            </th>
            <th scope="col" className="px-6 py-3">
              Ratings
            </th>
            <th scope="col" className="px-6 py-3">
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          {userData?.map((item, index) => {
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
                    alt={item?.name}
                    className="w-6 h-6 rounded-full"
                  />
                </td>
                <td className="px-6 py-4 bg-gray-50">{item?.name}</td>
                <td className="px-6 py-4">{item?.email}</td>
                <td className="px-6 py-4 flex space-x-2">{item?.created_at}</td>
                <td className="px-6 py-4 ">
                  <div className="flex items-center space-x-2">
                    <div>{item?.ratings}</div>
                    <div className="flex space-x-1">
                      <FaStar className="text-primary" />
                      <FaStar className="text-primary" />
                      <FaStar className="text-primary" />
                      <FaStar className="text-primary" />
                      <FaStar className="text-primary" />
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 ">
                  <Link to="/users/details">
                    <ActionIcon />
                  </Link>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default UsersTable;
