import React, { useState } from "react";
import Navbar from "../Navbar/Navbar";
import { Link, useLocation } from "react-router-dom";
import logo from "../../assets/icons/Logo.svg";
import hamBurger from "../../assets/icons/arrowleft.svg";
import Vectorwhite from "../../assets/img/Vectorwhite.png";
import {
  Dashboard,
  Rides,
  Driver,
  Users,
  Reports,
  Support,
  Notifications,
  Settings,
  Notification2,
} from "../SVGICONS/Icons";
import { FaArrowRightLong } from "react-icons/fa6";
import state from "../../proxyState/store";
import { useSnapshot } from "valtio";
const Sidebar = ({ children }) => {
  const [showSideBar, setShowSideBar] = useState(true);
  const snap = useSnapshot(state);
  const list = [
    {
      link: "/",
      name: `${showSideBar ? "Dashboard" : ""}`,
      activeicon: <Dashboard color="#fff" size="30" />,
      icon: <Dashboard color="#FFB000" size="30" />,
    },
    {
      link: "/rides",
      name: `${showSideBar ? "Rides" : ""}`,
      activeicon: <Rides color="#fff" size="30" />,
      icon: <Rides color="#FFB000" size="30" />,
    },
    {
      link: "/drivers",
      name: `${showSideBar ? "Drivers" : ""}`,
      activeicon: <Driver color="#fff" size="30" />,
      icon: <Driver color="#FFB000" size="30" />,
    },
    {
      link: "/users",
      name: `${showSideBar ? "Users" : ""}`,
      activeicon: <Users color="#fff" size="30" />,
      icon: <Users color="#FFB000" size="30" />,
    },
    {
      link: "/reports",
      name: `${showSideBar ? "Reports" : ""}`,
      activeicon: <Reports color="#fff" size="30" />,
      icon: <Reports color="#FFB000" size="30" />,
    },
    {
      link: "/support",
      name: `${showSideBar ? "Support" : ""}`,
      activeicon: <Support color="#fff" size="30" />,
      icon: <Support color="#FFB000" size="30" />,
    },
    {
      link: "/notifications",
      name: `${showSideBar ? "Notifications" : ""}`,
      activeicon: <Notifications color="#fff" size="30" />,
      icon: <Notifications color="#FFB000" size="30" />,
    },
    {
      link: "/settings",
      name: `${showSideBar ? "Settings" : ""}`,
      activeicon: <Settings color="#fff" size="30" />,
      icon: <Settings color="#FFB000" size="30" />,
    },
  ];
  const path = useLocation().pathname;

  return (
    <div>
      <aside
        className={`bg-[#FFB000]  ${
          snap.mobileSidebar === false ? " sidebarHide " : ""
        } lg:block fixed top-0 lg:left-0 left-0 z-40 ${
          !showSideBar ? "w-20" : "w-64"
        } h-screen  translate-x-0 transition-all duration-500 `}
        aria-label="Sidebar"
      >
        <div
          className={`absolute  px-3 bg-transparent top-0 right-0 rounded-full ${
            showSideBar ? "hidden" : ""
          }`}
        >
          <div
            onClick={() => setShowSideBar(!showSideBar)}
            className={`bg-primary my-2 py-2 px-3 flex  rounded-full  justify-center ${
              !showSideBar ? "translate-x-[95%]" : ""
            } ${!showSideBar ? "translate-y-[60%]" : ""} `}
          >
            <img
              src={Vectorwhite}
              alt={"hamburger-Icn"}
              className={`${!showSideBar ? "rotate-0 " : ""} `}
            />
            <img
              src={Vectorwhite}
              alt={"hamburger-Icn"}
              className={`${!showSideBar ? "rotate-0 " : ""}  `}
            />
          </div>
        </div>
        <div id="scrollBar" className="h-full px-3 py-4 overflow-y-auto ">
          <div className="flex items-center  justify-between">
            <div className="flex items-center w-full flex-col ">
              <div>
                <img className={`sm:w-auto`} src={logo} alt="logo" />
              </div>
              <div
                className={`text-white text-2xl font-semibold ${
                  !showSideBar ? "hidden" : ""
                }`}
              >
                Uni Share
              </div>
            </div>

            <div className="-mt-10 lg:block hidden">
              <div
                onClick={() => setShowSideBar(!showSideBar)}
                className={`bg-white p-3 flex  rounded-full  justify-center  ${
                  showSideBar ? "" : "hidden"
                }`}
              >
                <img src={hamBurger} alt={"hamburger-Icn"} />
                <img src={hamBurger} alt={"hamburger-Icn"} />
              </div>
            </div>
            <div
              className="mr-2 lg:hidden"
              onClick={() => {
                state.mobileSidebar = false;
              }}
            >
              {/* <FaArrowRightLong className="text-3xl  text-primary bg-white p-2 rounded-full" /> */}
              <img
                src={hamBurger}
                alt={"hamburger-Icn"}
                className="rotate-180 bg-white p-2 rounded-full text-3xl"
              />
            </div>
          </div>
          <ul className="space-y-2 font-medium">
            {list.map((item, index) => {
              return (
                <Link key={index} to={item.link}>
                  <li
                    className={` font-medium font-primary flex text-xl my-8 items-center ${
                      path === item.link
                        ? " bg-white font-semibold text-primary rounded-lg py-3 px-2 items-center "
                        : "text-[#fff]"
                    }`}
                  >
                    <div className="mt-2 ml-2">
                      {path === item.link ? item?.icon : item.activeicon}
                    </div>
                    <div className=" ml-2">{item.name}</div>
                  </li>
                </Link>
              );
            })}
          </ul>
        </div>
      </aside>

      <div className={`${!showSideBar ? "lg:ml-24" : "lg:ml-64"}    `}>
        <div className="">
          <Navbar />
        </div>
        <div className="">{children}</div>
      </div>
    </div>
  );
};

export default Sidebar;
