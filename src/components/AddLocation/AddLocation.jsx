import React from "react";

const AddLocation = ({ setTrigger }) => {
  return (
    <div className="fixed flex h-screen w-full items-center justify-center bg-black bg-opacity-75 top-0 left-0 z-50">
      <div className="flex flex-col bg-white p-4 rounded-md relative md:w-[400px] w-[300px] items-center justify-center">
        <div
          onClick={() => setTrigger(false)}
          className="absolute top-3 right-5 text-3xl cursor-pointer"
        >
          &times;
        </div>
        <h1 className="text-xl font-semibold mb-3">Add Location</h1>
        <form action="" className="flex flex-col w-full gap-3">
          <label htmlFor="select" className="text-primary font-bold">
            Select Type:
          </label>
          <div className="flex gap-3">
            <div className="flex px-3 py-2 bg-gray-100 rounded-3xl border-2 border-solid border-primary gap-2">
              <span>Give Access</span>
              <input type="radio" name="access" id="access" />
            </div>
            <div className="flex px-3 py-2 bg-gray-100 rounded-3xl border-2 border-solid border-primary gap-2">
              <span>Restrict</span>
              <input type="radio" name="access" id="restrict" />
            </div>
          </div>
          <label htmlFor="city" className="text-primary font-bold">
            Enter city
          </label>
          <input
            type="text"
            placeholder="City"
            className="appearance-none block w-full px-4 py-2 border border-gray-300 rounded-md placeholder-gray-500 focus:outline-none focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50"
          />
          <label htmlFor="state" className="text-primary font-bold">
            Enter State
          </label>
          <input
            type="text"
            placeholder="State"
            className="appearance-none block w-full px-4 py-2 border border-gray-300 rounded-md placeholder-gray-500 focus:outline-none focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50"
          />
          <label htmlFor="state" className="text-primary font-bold">
            Enter Pincode
          </label>
          <input
            type="text"
            placeholder="Pin code"
            className="appearance-none block w-full px-4 py-2 border border-gray-300 rounded-md placeholder-gray-500 focus:outline-none focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50"
          />
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d26570.650316492127!2d73.07962194999999!3d33.64857685!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2s!4v1713117002180!5m2!1sen!2s"
            width="370"
            height="270"
            loading="lazy"
            className="hidden md:block"
          ></iframe>
          <button
            type="submit"
            className=" bg-primary items-center justify-center px-2 py-3 rounded-md text-white shadow-custom"
          >
            Add
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddLocation;
