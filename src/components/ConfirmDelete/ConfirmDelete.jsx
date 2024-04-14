import React from "react";

const ConfirmDelete = ({ setTrigger }) => {
  return (
    <div className="h-screen w-full bg-black bg-opacity-45 fixed top-0 left-0 flex items-center justify-center">
      <div className="flex items-center justify-center bg-white py-4 px-6 w-[500px] relative flex-col rounded-md gap-8">
        <div
          className="absolute top-0 right-5 text-3xl cursor-pointer"
          onClick={() => setTrigger(false)}
        >
          &times;
        </div>
        <h1 className="text-xl font-semibold">Confirm Delete</h1>
        <p className="text-primary font-bold">
          Are you sure you want to delete this role?
        </p>
        <div className="flex gap-6">
          <button className="flex items-center justify-center border-2 border-primary text-primary py-2 px-3 rounded-md  font-semibold" onClick={()=>setTrigger(false)}>
            Cancel
          </button>
          <button className="flex items-center justify-center bg-primary py-2 px-3 rounded-md text-white shadow-custom font-semibold">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmDelete;
