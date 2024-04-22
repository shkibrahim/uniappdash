import React from "react";
import Maps from "../../assets/img/Maps.png";
import Zoom from "../../assets/img/zoom.svg";
const AddLocation = ({ setTrigger }) => {
  return (
    <div className="fixed flex h-screen w-full items-center justify-center bg-black bg-opacity-75 top-0 left-0   z-50">
      <div className="  overflow-auto  flex flex-col bg-white p-4 rounded-md relative   items-center justify-center md:w-[400px]">
        <div
          onClick={() => setTrigger(false)}
          className="absolute top-3 right-5 text-3xl cursor-pointer"
        >
          &times;
        </div>
        <h1 className="text-xl  font-semibold mb-3 font-primary">
          Add Location
        </h1>
        <form action="" className="flex flex-col gap-1 font-opensans">
          <label
            htmlFor="select"
            className="text-primary font-bold text-[15px]"
          >
            Select Type:
          </label>
          <div className="flex gap-3">
            <div className="flex px-3 py-1 bg-gray-100 rounded-3xl border-2 border-solid border-primary gap-2 font-semibold">
              <span>Give Access</span>
              <input type="radio" name="access" id="access" />
            </div>
            <div className="flex px-3 py-1 bg-gray-100 rounded-3xl border-2 border-solid border-primary gap-2 font-semibold">
              <span>Restrict</span>
              <input type="radio" name="access" id="restrict" />
            </div>
          </div>
          <label htmlFor="city" className="text-primary font-bold text-[15px]">
            Enter city
          </label>
          <input
            type="text"
            placeholder="City"
            className="appearance-none block w-full px-4 py-2 border border-gray-300 rounded-md placeholder-gray-500 focus:outline-none focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50"
          />
          <label htmlFor="state" className="text-primary font-bold text-[15px]">
            Enter State
          </label>
          <input
            type="text"
            placeholder="State"
            className="appearance-none block w-full px-4 py-2 border border-gray-300 rounded-md placeholder-gray-500 focus:outline-none focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50"
          />
          <label htmlFor="state" className="text-primary font-bold text-[15px]">
            Enter Pincode
          </label>
          <input
            type="text"
            placeholder="Pin code"
            className="appearance-none block w-full px-4 py-2 border border-gray-300 rounded-md placeholder-gray-500 focus:outline-none focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50 mb-2"
          />
          <div className="relative h-[162px] w-[365px]">
            <img src={Maps} alt="" className="h-full w-full" />
            <img src={Zoom} alt="" className="absolute bottom-1 right-2" />
          </div>
          <button
            type="submit"
            className=" bg-primary my-4 items-center justify-center px-2 py-3 rounded-md text-white shadow-custom"
          >
            Add
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddLocation;
