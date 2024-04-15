import React, { useEffect, useState, useRef } from "react";
import { home } from "../../../data";
import { FaArrowLeft, FaArrowRight, FaEye } from "react-icons/fa";
import ForgotPass from "../ForgotPass/ForgotPass";
import Group2 from "../../assets/img/Group 2.png";
import Logo from "../../assets/img/Logo copy.png";
import Vector1 from "../../assets/img/Vector1.png";
const Login = () => {
  const [showPass, setShowPass] = useState(false);
  const userRef = useRef("");
  const [selected, setSelected] = useState(0);
  const [flag, setFlag] = useState(false);
  const [hidden, setHidden] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    userRef.current.focus();

    const intervalId = setInterval(() => {
      setSelected((prevSelected) =>
        prevSelected === home.length - 1 ? 0 : prevSelected + 1
      );
    }, 4000);

    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);
  const handlePrev = () => {
    setSelected(selected === 0 ? home.length - 1 : selected - 1);
  };
  const handleNext = () => {
    setSelected(selected === home.length - 1 ? 0 : selected + 1);
  };
  return (
    <div className={` flex items-center justify-center h-screen`}>
      <div
        className={`${
          isMobile ? (hidden ? "" : "hidden") : ""
        } flex items-center justify-between p-2 relative flex-1 h-screen`}
      >
        <img src={Vector1} alt="" className="absolute top-0 left-0" />
        <FaArrowLeft
          className="text-[#FFB000] text-2xl cursor-pointer"
          onClick={handlePrev}
        />
        <h1
          className="absolute top-10 right-10 md:hidden text-xl"
          onClick={() => setHidden(!hidden)}
        >
          SKIP
        </h1>
        <div className="flex items-center justify-center flex-col w-[300px]">
          <img src={home[selected].img} alt="" className="my-7" />
          <h1 className="font-[600] text-[30px] my-4">
            {home[selected].heading}
          </h1>
          <p className="text-center">{home[selected].desc}</p>
        </div>
        <FaArrowRight
          className="text-[#FFB000] text-2xl cursor-pointer"
          onClick={handleNext}
        />
      </div>
      <div
        className={`${
          isMobile ? (hidden ? "hidden" : "") : ""
        }  flex h-screen flex-1 bg-[#FFB000] items-center justify-center px-2 w-full relative`}
      >
        <div className="flex items-center justify-center flex-col">
          <img src={Logo} alt="" />
          <h1 className="text-xl my-4">
            Sign in to <span className="text-white">UniShare</span>{" "}
          </h1>
          <form action="" className="flex flex-col gap-4 w-[355px]">
            <div className="flex justify-between items-center bg-white p-3 px-5 rounded-md shadow-md">
              <input
                type="email"
                placeholder="Email"
                required
                className="outline-none "
                ref={userRef}
              />
            </div>
            <div className="flex justify-between items-center bg-white p-3 px-5 rounded-md shadow-md">
              <input
                type={showPass ? "text" : "password"}
                placeholder="Password"
                className="outline-none"
                required
              />
              <FaEye
                onClick={() => setShowPass(!showPass)}
                className="cursor-pointer"
              />
            </div>
            <div className="flex justify-between items-center mb-8">
              <div className="flex gap-2 items-center">
                <input type="checkbox" name="" id="" className="scale-150" />
                <span className="text-white font-semibold">Remember Me</span>
              </div>
              <h4
                className="text-white font-semibold hover:underline hover:cursor-pointer"
                onClick={() => setFlag(true)}
              >
                Forgot Password?
              </h4>
            </div>
            <button
              type="submit"
              className="bg-white text-[#FFB000] p-3 rounded-md shadow-md font-bold"
            >
              Login
            </button>
          </form>
        </div>
        <img src={Group2} alt="" className="absolute bottom-0 right-0" />
        <img src={Group2} alt="" className="absolute bottom-0 -left-7" />
        {flag && <ForgotPass trigger={flag} setTrigger={setFlag} />}
      </div>
    </div>
  );
};

export default Login;
