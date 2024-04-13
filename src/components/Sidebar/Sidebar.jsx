import React from 'react'
import Navbar from '../Navbar/Navbar'
import { Link, useLocation } from 'react-router-dom'
import logo from "../../assets/icons/Logo.svg"
import hamBurger from "../../assets/icons/arrowleft.svg"
import { Dashboard,Rides,Driver, Users, Reports, Support, Notifications, Settings } from "../SVGICONS/Icons"
import { FaArrowRightLong } from "react-icons/fa6";
import state from '../../proxyState/store'
import { useSnapshot } from "valtio"
const Sidebar = ({ children }) => {
  const snap = useSnapshot(state)
  const list = [
    {
      link: "/",
      name: "Dashboard",
      activeicon: <Dashboard color="#fff" size="30" />,
      icon: <Dashboard color="#FFB000" size="30" />
    },
    {
      link: "/rides",
      name: "Rides",
      activeicon: <Rides color="#fff" size="30" />,
      icon: <Rides color="#FFB000" size="30" />
    },
    {
      link: "/drivers",
      name: "Drivers",
      activeicon: <Driver color="#fff" size="30" />,
      icon: <Driver color="#FFB000" size="30" />
    },
    {
      link: "/users",
      name: "Users",
      activeicon: <Users color="#fff" size="30" />,
      icon: <Users color="#FFB000" size="30" />
    },
    {
      link: "/reports",
      name: "Reports",
      activeicon: <Reports color="#fff" size="30" />,
      icon: <Reports color="#FFB000" size="30" />
    },
    {
      link: "/support",
      name: "Support",
      activeicon: <Support color="#fff" size="30" />,
      icon: <Support color="#FFB000" size="30" />
    },
    {
      link: "/notifications",
      name: "Notifications",
      activeicon: <Notifications color="#fff" size="30" />,
      icon: <Notifications color="#FFB000" size="30" />
    },
    {
      link: "/settings",
      name: "Settings",
      activeicon: <Settings color="#fff" size="30" />,
      icon: <Settings color="#FFB000" size="30" />
    },

  ]
  const path = useLocation().pathname
  return (
    <div>
      <aside id="default-sidebar" className={`bg-[#FFB000]  ${snap.mobileSidebar === false ? " sidebarHide " : ""} lg:block fixed top-0 lg:left-0 left-0 z-40 w-64 h-screen  translate-x-0 transition-all duration-500`} aria-label="Sidebar">
        <div id="scrollBar" className="h-full px-3 py-4 overflow-y-auto  ">
          <div className="flex items-center  justify-between">
            <div className='flex items-center w-full flex-col '>
              <div>
                <img className=' sm:w-auto w-5/12' src={logo} alt="logo" />
              </div>
              <div className=' text-white text-2xl font-semibold'>
                Uni Share
              </div>
            </div>

            <div className='-mt-10 lg:block hidden'>
              <div className='bg-white p-3 flex  rounded-full  justify-center'>
                <img src={hamBurger} alt={"hamburger-Icn"} />
                <img src={hamBurger} alt={"hamburger-Icn"} />

              </div>
            </div>
            <div className='mr-2 lg:hidden' onClick={() => {
              state.mobileSidebar = false
            }}>
              <FaArrowRightLong className='text-3xl  text-buttonPrimary' />
            </div>
          </div>
          <ul className="space-y-2 font-medium">
            {
              list.map((item, index) => {
                return <Link key={index} to={item.link}>
                  <li className={` font-medium font-primary flex text-xl my-8 items-center ${path === item.link ? " bg-white font-semibold text-primary rounded-lg py-3 px-2 items-center " : "text-[#fff]"}`}>
                    <div className='mt-2 ml-2'>
                      {path === item.link?item?.icon:item.activeicon}
                    </div>
                    <div className=' ml-2'>
                      {item.name}
                    </div>
                  </li>
                </Link>
              })
            }


          </ul>
        </div>
      </aside>

      <div className="  lg:ml-64">
        <div className=''>
          <Navbar />
        </div>
        <div className="">
          {children}
        </div>
      </div>

    </div>
  )
}

export default Sidebar
