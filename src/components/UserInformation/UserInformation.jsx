import React from "react";
import {
  FaBell,
  FaCar,
  FaCheck,
  FaChevronDown,
  FaChevronLeft,
  FaExclamation,
  FaPhone,
  FaSort,
  FaStar,
} from "react-icons/fa6";
import profile from "../../assets/img/profile.jpeg";
import { MdBarChart, MdOutlineCancel } from "react-icons/md";
import DriverScheduledCards from "../DriverScheduledCards/DriverScheduledCards";
import { useState } from "react";
import Reviews from "../Reviews/Reviews";
import RideDetails from "../RideDetails/RideDetails";
import NewNotification from "../NewNotification/NewNotification";
const UserInformation = () => {
  const [showOptions, setShowOptions] = useState(false);
  const [current, setCurrent] = useState(1);
  const [showRideDetails, setShowRideDetails] = useState(false);
  const [flag, setFlag] = useState(false);

  const EditOptions = () => {
    return (
      <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-40 z-50 overflow-auto">
        <div className="bg-white p-4 px-6 rounded-lg relative flex flex-col gap-3 w-[350px] mt-16 ">
          <button
            onClick={() => setShowOptions(false)}
            className="absolute top-4 right-4 text-black"
          >
            &#10006;
          </button>
          <h1 className="text-2xl font-semibold text-center">Edit</h1>
          <hr />
          <h2 className=" text-center">Block</h2>
          <hr />
          <h2 className=" text-center">Delete</h2>
          <hr />
          <h2 className=" text-center">Restrict</h2>
          <button
            onClick={() => setShowOptions(false)}
            className="rounded-md p-2 bg-primary text-white"
          >
            Cancel
          </button>
        </div>
      </div>
    );
  };
  return (
    <div className="p-7 flex flex-col bg-[#F9F9F9] min-h-[800px] font-primary gap-6">
      {showRideDetails && (
        <RideDetails
          setTrigger={setShowRideDetails}
          current={current}
          status={"completed"}
        />
      )}
      {showOptions && <EditOptions />}
      {flag && (
        <NewNotification setTrigger={setFlag}>
          <h1 className="text-xl font-semibold mb-4">
            Create New Notification
          </h1>
          <form action="" className="flex flex-col w-full gap-3">
            <label className="flex flex-col ">
              <span className="text-primary font-bold">
                Upload Image:(Optional)
              </span>
              <span className="text-primary font-semibold text-xs">
                Image size upto 5MB
              </span>
              <input
                type="file"
                accept="image/*"
                className="hidden"
                onChange={(e) => console.log(e.target.files[0])} // Handle file selection
              />
              <div className="mt-2 flex items-center justify-center bg-gray-100 border border-gray-300 rounded-md cursor-pointer p-1">
                <svg
                  className="w-6 h-6 text-gray-600"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M12 5v14m-4-4H8a2 2 0 012-2V9a2 2 0 00-2-2H6V5h2zm10 0v14m-4-4h2a2 2 0 00-2-2V9a2 2 0 012-2h.5V5h-.5z"></path>
                </svg>
                <span className="ml-2 text-gray-600">Select an image</span>
              </div>
            </label>
            <label htmlFor="date" className="text-primary font-bold">
              Choose Date and Time
            </label>
            <input
              type="date"
              name="date"
              id="date"
              className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
            />
            <label htmlFor="title" className="text-primary font-bold">
              Notification Title
            </label>
            <input
              type="text"
              name="title"
              id="title"
              className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
            />
            <label htmlFor="desc" className="text-primary font-bold">
              Notification Description
            </label>
            <textarea
              className="resize-none border rounded-md p-2 w-full h-32 focus:outline-none focus:ring-primary focus:border-primary"
              placeholder="Enter your text here"
            ></textarea>
            <div className="flex gap-6">
              <button
                className="flex-1 border-2 border-primary text-primary py-2 px-3 rounded-md  font-semibold"
                onClick={() => setTrigger(false)}
              >
                Draft
              </button>
              <button className="flex-1 bg-primary py-2 px-3 rounded-md text-white shadow-custom font-semibold">
                Schedule
              </button>
            </div>
          </form>
        </NewNotification>
      )}
      <div className="flex justify-between items-center">
        <div className="flex gap-2 items-center">
          <FaChevronLeft />
          <span className="text-xl font-semibold">Information</span>
        </div>
        <button
          onClick={() => setShowOptions(true)}
          className="text-white bg-primary px-5 py-2 rounded-md"
        >
          Edit
        </button>
      </div>
      <div className="flex justify-between bg-white rounded-md shadow-custom p-6 flex-col md-1150:flex-row gap-5">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex justify-center w-40 h-50 rounded-md overflow-hidden object-contain bg-gray-400 self-start relative">
            <img src={profile} alt="" className="w-full object-contain" />
          </div>
          <div className="flex">
            <table className="min-w-full">
              <tbody className="divide-y divide-gray-200">
                <tr>
                  <td className="px-4 py-2 font-semibold text-gray-600">
                    Name
                  </td>
                  <td className="px-4 py-2 text-gray-500">John Doe</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 font-semibold text-gray-600">
                    Email
                  </td>
                  <td className="px-4 py-2 text-gray-500">
                    john.doe@example.com
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-2 font-semibold text-gray-600">
                    Gender
                  </td>
                  <td className="px-4 py-2 text-gray-500">Male</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 font-semibold text-gray-600">
                    Date of Birth
                  </td>
                  <td className="px-4 py-2 text-gray-500">24-06-2000</td>
                </tr>

                <tr>
                  <td className="px-4 py-2 font-semibold text-gray-600">
                    Phone Number
                  </td>
                  <td className="px-4 py-2 text-gray-500">(99) 436-46-4666</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 font-semibold text-gray-600">
                    Country & City
                  </td>
                  <td className="px-4 py-2 text-gray-500">
                    United States, Chicago
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="flex flex-col items-center justify-between gap-4">
          <div className="flex gap-6">
            <button
              onClick={() => setFlag(true)}
              className="p-5 bg-gray-300 rounded-2xl shadow-md"
            >
              <FaBell className="text-gray-500 text-xl" />
            </button>
            <button className="p-5 bg-gray-300 rounded-2xl shadow-md">
              <FaPhone className="text-gray-500 text-xl" />
            </button>
          </div>
        </div>
      </div>
      <h1 className="text-xl font-semibold">Ride Details</h1>
      <div className="flex md:justify-between flex-wrap gap-4 items-center justify-center">
        <div className="flex px-7 py-4 rounded-md bg-white items-center gap-5 w-[200px] h-[100px] shadow-custom">
          <div className="block p-3 bg-gray-100 rounded-full">
            <MdBarChart className="text-2xl text-primary" />
          </div>
          <div className="flex flex-col gap-1">
            <span className="text-gray-400 text-xs">Earnings Made:</span>
            <span className="text-2xl font-semibold">$350.4</span>
          </div>
        </div>
        <div className="flex px-7 py-4 rounded-md bg-white items-center gap-5 w-[200px] h-[100px] shadow-custom">
          <div className="block p-3 bg-gray-100 rounded-full">
            <FaCar className="text-2xl text-primary" />
          </div>
          <div className="flex flex-col gap-1">
            <span className="text-gray-400 text-xs">Rides:</span>
            <span className="text-2xl font-semibold">1150</span>
          </div>
        </div>
        <div className="flex px-7 py-4 rounded-md bg-white items-center gap-5 w-[200px] h-[100px] shadow-custom">
          <div className="block p-3 bg-gray-100 rounded-full">
            <MdOutlineCancel className="text-2xl text-primary" />
          </div>
          <div className="flex flex-col gap-1">
            <span className="text-gray-400 text-xs">Cancelled:</span>
            <span className="text-2xl font-semibold">12</span>
          </div>
        </div>
        <div className="flex px-7 py-4 rounded-md bg-white items-center gap-5 w-[200px] h-[100px] shadow-custom">
          <div className="block p-3 bg-gray-100 rounded-full">
            <FaExclamation className="text-2xl text-primary" />
          </div>
          <div className="flex flex-col gap-1">
            <span className="text-gray-400 text-xs">Reports:</span>
            <span className="text-2xl font-semibold">4</span>
          </div>
        </div>
        <div className="flex px-7 py-4 rounded-md bg-white items-center gap-5 w-[200px] h-[100px] shadow-custom">
          <div className="block p-3 bg-gray-100 rounded-full">
            <FaStar className="text-2xl text-primary" />
          </div>
          <div className="flex flex-col gap-1">
            <span className="text-gray-400 text-xs">Ratings:</span>
            <span className="text-2xl font-semibold">4.5</span>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-5">
        <div className="flex gap-5 justify-between items-center md:flex-row flex-col">
          <div className="flex gap-10 flex-wrap">
            <h1
              className={`text-xl font-semibold ${
                current === 1 ? "text-primary" : "text-gray-400"
              } cursor-pointer`}
              onClick={() => setCurrent(1)}
            >
              Past Rides
            </h1>
            <h1
              className={`text-xl font-semibold ${
                current === 2 ? "text-primary" : "text-gray-400"
              } cursor-pointer`}
              onClick={() => setCurrent(2)}
            >
              Scheduled
            </h1>
            <h1
              className={`text-xl font-semibold ${
                current === 3 ? "text-primary" : "text-gray-400"
              } cursor-pointer`}
              onClick={() => setCurrent(3)}
            >
              Reviews
            </h1>
          </div>
          <div className="flex gap-2 items-center">
            <FaSort />
            <span className="text-xl font-semibold">Sort By:</span>
            <FaChevronDown />
          </div>
        </div>
        {current === 1 && (
          <div className="grid md:grid-cols-2 gap-3 grid-cols-1">
            <DriverScheduledCards
              status={"completed"}
              current={current}
              onClick={() => setShowRideDetails(true)}
            />
            <DriverScheduledCards status={"completed"} current={current} />
            <DriverScheduledCards status={"cancelled"} current={current} />
            <DriverScheduledCards status={"completed"} current={current} />
            <DriverScheduledCards status={"cancelled"} current={current} />
            <DriverScheduledCards status={"completed"} current={current} />
          </div>
        )}
        {current === 2 && (
          <div className="grid md:grid-cols-2 gap-3 grid-cols-1">
            <DriverScheduledCards onClick={() => setShowRideDetails(true)} />
            <DriverScheduledCards />
            <DriverScheduledCards />
            <DriverScheduledCards />
            <DriverScheduledCards />
            <DriverScheduledCards />
          </div>
        )}
        {current === 3 && <Reviews />}
      </div>
    </div>
  );
};

export default UserInformation;
