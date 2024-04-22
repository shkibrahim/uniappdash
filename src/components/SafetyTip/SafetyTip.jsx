import React from "react";

const SafetyTip = ({ setTrigger, children }) => {
  return (
    <div className="fixed top-0 left-0 w-full h-screen bg-[rgba(0,0,0,0.4)] flex justify-center items-center z-50">
      <div className="relative p-4 overflow-auto md:p-9 h-auto  bg-white rounded-lg">
        <button
          className="absolute top-4 right-4"
          onClick={() => setTrigger(false)}
        >
          &#10006;
        </button>
        {children}
      </div>
    </div>
  );
};

export default SafetyTip;
