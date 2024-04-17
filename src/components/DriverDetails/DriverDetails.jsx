import React, { useState } from "react";
import { FaChevronLeft, FaRegCheckCircle } from "react-icons/fa";
import { MdOutlineCancel } from "react-icons/md";
import profile from "../../assets/img/profile.jpeg";
import SupportQuery from "../SupportQuery/SupportQuery";
const DriverDetails = () => {
  const ImagePopup = ({ imageUrl, onClose }) => {
    return (
      <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-50 z-50">
        <div className="bg-white p-4 rounded-lg">
          <img src={imageUrl} alt="Image" className="max-w-full max-h-full" />
          <button
            className="absolute top-4 right-4 text-white"
            onClick={onClose}
          >
            &#10006;
          </button>
        </div>
      </div>
    );
  };

  const RejectionPopup = ({ onClose }) => {
    return (
      <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-40 z-50">
        <div className="bg-white p-4 rounded-lg relative flex flex-col gap-3">
          <button
            className="absolute top-4 right-4 text-black"
            onClick={onClose}
          >
            &#10006;
          </button>
          <h1 className="text-2xl font-semibold text-center">
            Reason For Rejection
          </h1>
          <form action="" className="flex flex-col gap-3">
            <label className="text-primary font-semibold">Enter Note</label>
            <textarea
              name="rejection"
              id=""
              cols="40"
              rows="8"
              className="border border-1 border-primary rounded-md outline-primary"
            ></textarea>
            <button className="px-3 py-2 bg-primary text-white rounded-md">
              Submit
            </button>
          </form>
        </div>
      </div>
    );
  };
  const [showImagePopup, setShowImagePopup] = useState(false);
  const [showRejectionPopup, setShowRejectionPopup] = useState(false);
  const [supportQuery, setSupportQuery] = useState(false);
  const handleImageClick = () => {
    setShowImagePopup(true);
  };

  const handleCloseImagePopup = () => {
    setShowImagePopup(false);
  };
  return (
    <div className="p-7 flex flex-col bg-[#F9F9F9] min-h-[800px] font-primary gap-4">
      <div className="flex gap-2 items-center">
        <FaChevronLeft />
        <span className="text-xl font-semibold">Driver Details</span>
      </div>
      <div className="flex w-full bg-white shadow-custom rounded-md flex-col">
        <div className="flex flex-col md:flex-row py-4 px-5 gap-10">
          <div className="flex justify-center w-40 h-50 rounded-md overflow-hidden object-contain bg-gray-400 self-start">
            <img src={profile} alt="" className="w-full object-contain" />
          </div>
          <div className="flex justify-between w-full flex-col md-1150:flex-row gap-5">
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
                      Date of Birth
                    </td>
                    <td className="px-4 py-2 text-gray-500">24-06-2000</td>
                  </tr>

                  <tr>
                    <td className="px-4 py-2 font-semibold text-gray-600">
                      Phone Number
                    </td>
                    <td className="px-4 py-2 text-gray-500">
                      (99) 436-46-4666
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
                      Student
                    </td>
                    <td className="px-4 py-2 text-gray-500">Yes</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 font-semibold text-gray-600">
                      College Address
                    </td>
                    <td className="px-4 py-2 text-gray-500">Oxford College</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 font-semibold text-gray-600">
                      Country
                    </td>
                    <td className="px-4 py-2 text-gray-500">United States</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="flex flex-col">
              <div className="flex gap-4 self-start">
                <button
                  onClick={() => setSupportQuery(true)}
                  className="flex items-center gap-2 py-2 px-5 rounded-md text-white bg-primary"
                >
                  <FaRegCheckCircle />
                  <span>Accept Request</span>
                </button>
                {supportQuery && <SupportQuery setTrigger={setSupportQuery} />}
                <button
                  className="flex items-center gap-2 py-2 px-5 rounded-md text-white bg-[#FF302F]"
                  onClick={() => setShowRejectionPopup(true)}
                >
                  <MdOutlineCancel />
                  <span>Reject Request</span>
                </button>
                {showRejectionPopup && (
                  <RejectionPopup
                    onClose={() => setShowRejectionPopup(false)}
                  />
                )}
              </div>
              <span className="flex md-1150:justify-end mt-10 gap-2">
                Requested On: <span className="text-gray-500">2 Jan 2023</span>
              </span>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row md:flex-wrap items-center justify-between p-7 gap-3">
          <div className="flex flex-col gap-3">
            <h1>ID Card Front Image</h1>
            <div
              className="bg-gray-200 overflow-hidden rounded-md cursor-pointer"
              onClick={handleImageClick}
            >
              <img
                src={profile}
                alt=""
                className="w-[330px] h-[150px] object-contain"
              />
            </div>
            {showImagePopup && (
              <ImagePopup imageUrl={profile} onClose={handleCloseImagePopup} />
            )}
          </div>
          <div className="flex flex-col gap-3">
            <h1>ID Card Back Image</h1>
            <div
              className="bg-gray-200 overflow-hidden rounded-md cursor-pointer"
              onClick={handleImageClick}
            >
              <img
                src={profile}
                alt=""
                className="w-[330px] h-[150px] object-contain"
              />
            </div>
            {showImagePopup && (
              <ImagePopup imageUrl={profile} onClose={handleCloseImagePopup} />
            )}
          </div>
          <div className="flex flex-col gap-3">
            <h1>Student ID Card Image</h1>
            <div
              className="bg-gray-200 overflow-hidden rounded-md cursor-pointer"
              onClick={handleImageClick}
            >
              <img
                src={profile}
                alt=""
                className="w-[330px] h-[150px] object-contain"
              />
            </div>
            {showImagePopup && (
              <ImagePopup imageUrl={profile} onClose={handleCloseImagePopup} />
            )}
          </div>
        </div>
      </div>
      <span className="text-xl font-semibold">Car Details</span>
      <div className="flex gap-5 flex-col md-1150:flex-row">
        <div className="flex flex-col shadow-custom py-4 px-5 bg-white rounded-md flex-1">
          <table className="min-w-full">
            <tbody className="divide-y divide-gray-200">
              <tr>
                <td className="px-4 py-2 font-semibold text-gray-600">Maker</td>
                <td className="px-4 py-2 text-gray-500">Toyota</td>
              </tr>
              <tr>
                <td className="px-4 py-2 font-semibold text-gray-600">
                  Number
                </td>
                <td className="px-4 py-2 text-gray-500">123 XYZ</td>
              </tr>
              <tr>
                <td className="px-4 py-2 font-semibold text-gray-600">Type</td>
                <td className="px-4 py-2 text-gray-500">Sedan</td>
              </tr>

              <tr>
                <td className="px-4 py-2 font-semibold text-gray-600">Year</td>
                <td className="px-4 py-2 text-gray-500">2014</td>
              </tr>
              <tr>
                <td className="px-4 py-2 font-semibold text-gray-600">Color</td>
                <td className="px-4 py-2 text-gray-500">Black</td>
              </tr>
              <tr>
                <td className="px-4 py-2 font-semibold text-gray-600">
                  Capacity
                </td>
                <td className="px-4 py-2 text-gray-500">2</td>
              </tr>
            </tbody>
          </table>
          <div className="flex flex-col md:flex-row md:flex-wrap items-center justify-between p-7 gap-3">
            <div className="flex flex-col gap-3">
              <h1>Car Front Image</h1>
              <div
                className="bg-gray-200 overflow-hidden rounded-md cursor-pointer"
                onClick={handleImageClick}
              >
                <img
                  src={profile}
                  alt=""
                  className="w-[330px] h-[150px] object-contain"
                />
              </div>
              {showImagePopup && (
                <ImagePopup
                  imageUrl={profile}
                  onClose={handleCloseImagePopup}
                />
              )}
            </div>
            <div className="flex flex-col gap-3">
              <h1>Car Back Image</h1>
              <div
                className="bg-gray-200 overflow-hidden rounded-md cursor-pointer"
                onClick={handleImageClick}
              >
                <img
                  src={profile}
                  alt=""
                  className="w-[330px] h-[150px] object-contain"
                />
              </div>
              {showImagePopup && (
                <ImagePopup
                  imageUrl={profile}
                  onClose={handleCloseImagePopup}
                />
              )}
            </div>
          </div>
        </div>
        <div className="flex flex-col shadow-custom py-4 px-5 bg-white rounded-md items-center gap-5 ">
          <h1>License Image</h1>
          <div className="bg-gray-200 overflow-hidden rounded-md cursor-pointer">
            <img
              src={profile}
              alt=""
              className="w-[330px] h-[150px] object-contain"
            />
          </div>
          <h1>
            Insurance: <span className="text-gray-400 ml-3">Yes</span>
          </h1>
          <h1>Insurance Document Image</h1>
          <div className="bg-gray-200 overflow-hidden rounded-md cursor-pointer">
            <img
              src={profile}
              alt=""
              className="w-[330px] h-[150px] object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DriverDetails;
