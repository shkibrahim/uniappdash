import React, { useState, useRef } from "react";
import { FaChevronLeft } from "react-icons/fa";

const ForgotPass = ({ trigger, setTrigger }) => {
  const [current, setCurrent] = useState(1);
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState(["", "", "", ""]); // Initialize OTP state with 4 empty strings
  const inputRefs = [useRef(null), useRef(null), useRef(null), useRef(null)]; // Refs for each input box

  // Function to handle input change
  const handleChange = (index, value) => {
    // Update OTP state with new value at the specified index
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // Move focus to the next input box if a number is entered
    if (value && index < inputRefs.length - 1) {
      inputRefs[index + 1].current.focus();
    }
  };

  // Function to handle backspace key
  const handleBackspace = (index, e) => {
    // Move focus to the previous input box if backspace is pressed on an empty input box
    if (e.keyCode === 8 && index > 0 && !otp[index]) {
      inputRefs[index - 1].current.focus();
    }
  };

  const toggleNext = () => {
    if (email !== "") {
      setCurrent(current + 1);
    }
  };

  return trigger ? (
    <div className="fixed top-0 left-0 h-screen w-full bg-black bg-opacity-45 flex items-center justify-center">
      <div className="bg-white px-3 pt-4 pb-10 relative flex flex-col items-center justify-center rounded-md sm:w-[350px] md:w-[400px] gap-6">
        {current === 1 && (
          <>
            <div
              className="absolute top-3 right-5 cursor-pointer"
              onClick={() => setTrigger(false)}
            >
              {" "}
              &#10005;
            </div>
            <h1 className="text-[#FFB000] font-semibold text-xl">
              Forgot Password
            </h1>
            <p className="opacity-80">Please enter Email to reset password</p>
            <form action="" className="flex flex-col w-[300px]">
              <label
                htmlFor="email"
                className="text-[#FFB000] items-start font-semibold"
              >
                Email
              </label>
              <input
                type="email"
                className="border-2 border-[#FFB000] outline-[#FFB000] rounded-sm py-3 px-5 mt-3 mb-10"
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button
                type="submit"
                className="bg-[#FFB000] text-white rounded-md py-3 px-5"
                onClick={toggleNext}
              >
                Next
              </button>
            </form>
          </>
        )}
        {current === 2 && (
          <>
            <div
              className="absolute top-3 right-5 cursor-pointer"
              onClick={() => setTrigger(false)}
            >
              {" "}
              &#10005;
            </div>
            <h1 className="text-[#FFB000] font-semibold text-xl">OTP Verify</h1>
            <p className="opacity-80 leading-7">
              We have sent a pin to your{" "}
              <span className="font-semibold ">email</span> <br />
              Please enter the pin to verify your account
            </p>
            <form action="" className="flex gap-6 flex-col">
              <div className="flex gap-3">
                {otp.map((digit, index) => (
                  <input
                    key={index}
                    ref={inputRefs[index]}
                    type="text"
                    maxLength={1}
                    value={digit}
                    onChange={(e) => handleChange(index, e.target.value)}
                    onKeyDown={(e) => handleBackspace(index, e)}
                    className="border border-gray-600 w-10 h-10 rounded-sm text-center"
                  />
                ))}
              </div>
              <button
                type="submit"
                className="bg-[#FFB000] text-white rounded-md py-3 px-5"
                onClick={() => setCurrent(current + 1)}
              >
                Verify
              </button>
            </form>
            <p className="opacity-80 leading-7 cursor-pointer hover:underline">
              Resend Verification Code
            </p>
          </>
        )}
        {current === 3 && (
          <>
            <div
              className="absolute top-5 left-5 cursor-pointer"
              onClick={() => setCurrent(current - 2)}
            >
              <FaChevronLeft />
            </div>
            <div
              className="absolute top-3 right-5 cursor-pointer"
              onClick={() => setTrigger(false)}
            >
              {" "}
              &#10005;
            </div>
            <h1 className="text-[#FFB000] font-semibold text-xl">
              Change Password
            </h1>
            <form action="" className="flex flex-col w-[300px]">
              <label
                htmlFor="email"
                className="text-[#FFB000] items-start font-semibold"
              >
                New Password
              </label>
              <input
                type="password"
                className="border-2 border-[#FFB000] outline-[#FFB000] rounded-sm py-3 px-5 mt-3 mb-3"
                placeholder="New Password"
                required
              />
              <label
                htmlFor="email"
                className="text-[#FFB000] items-start font-semibold"
              >
                Re-Enter Password
              </label>
              <input
                type="password"
                className="border-2 border-[#FFB000] outline-[#FFB000] rounded-sm py-3 px-5 mt-3 mb-10"
                placeholder="Re-Enter Password"
                required
              />
              <button
                type="submit"
                className="bg-[#FFB000] text-white rounded-md py-3 px-5"
                onClick={() => setTrigger(false)}
              >
                Reset
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  ) : null;
};

export default ForgotPass;
