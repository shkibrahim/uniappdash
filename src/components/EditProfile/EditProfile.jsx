import React from "react";
import { data } from "../../../data";
const EditProfile = ({ trigger, setTrigger }) => {
  return (
    <div className="h-screen w-full bg-black bg-opacity-45 fixed top-0 left-0 overflow-auto z-20">
      <div className="bg-white absolute top-0 right-0 py-4 px-6 w-[400px]">
        <div
          className="text-2xl absolute t-10 l-10 cursor-pointer"
          onClick={() => setTrigger(false)}
        >
          &times;
        </div>
        <h1 className="font-bold text-2xl text-center my-1">Edit Profile</h1>
        <form action="" className="flex flex-col">
          <label htmlFor="name" className="font-bold text-primary">
            Name
          </label>
          <input
            type="text"
            className="border-2 border-[#FFB000] outline-[#FFB000] rounded-sm py-3 px-5 my-2"
            required
          />
          <label htmlFor="name" className="font-bold text-primary">
            Email
          </label>
          <input
            type="email"
            className="border-2 border-[#FFB000] outline-[#FFB000] rounded-sm py-3 px-5 my-2"
            required
          />
          <label htmlFor="name" className="font-bold text-primary">
            Date of Birth
          </label>
          <input
            type="date"
            className="border-2 border-[#FFB000] outline-[#FFB000] rounded-sm py-3 px-5 my-2"
            required
          />
          <label htmlFor="name" className="font-bold text-primary">
            Contact
          </label>
          <input
            type="number"
            className="border-2 border-[#FFB000] outline-[#FFB000] rounded-sm py-3 px-5 my-2"
            required
          />
          <label htmlFor="name" className="font-bold text-primary">
            Gender
          </label>
          <select
            name="gender"
            id=""
            className="border-2 border-[#FFB000] outline-[#FFB000] rounded-sm py-3 px-5 my-2"
            required
          >
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
          <label htmlFor="country" className="font-bold text-primary">
            Country
          </label>
          <select
            name="country"
            id=""
            className="border-2 border-[#FFB000] outline-[#FFB000] rounded-sm py-3 px-5 my-2"
            required
          >
            {data.map((item, index) => {
              return (
                <option key={index} value={item.name}>
                  {item.name}
                </option>
              );
            })}
          </select>
          <label htmlFor="name" className="font-bold text-primary">
            Enter Old Password
          </label>
          <input
            type="password"
            className="border-2 border-[#FFB000] outline-[#FFB000] rounded-sm py-3 px-5 my-2"
            required
          />
          <label htmlFor="name" className="font-bold text-primary">
            Enter New Password
          </label>
          <input
            type="password"
            className="border-2 border-[#FFB000] outline-[#FFB000] rounded-sm py-3 px-5 my-2"
            required
          />
          <button
            type="submit"
            className="flex items-center justify-center bg-primary py-3 px-3 rounded-md text-white shadow-custom font-semibold mt-4"
          >
            Save
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditProfile;
