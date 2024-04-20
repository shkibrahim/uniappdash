import React from "react";

const Language = () => {
  return (
    <div className="flex w-full shadow-custom rounded-md p-6 bg-white items-center gap-14 my-10">
      <h2>Default Language</h2>
      <select
        name="language"
        id=""
        className="bg-gray-100 px-3 py-2 rounded-3xl outline-primary border-primary border-2 font-semibold font-OpenSans"
      >
        <option value="english">English</option>
      </select>
    </div>
  );
};

export default Language;
