import React from "react";
import Maps from "../../assets/img/Maps.png";
// import { CashOutline } from 'react-ionicons'
import {
  FaArrowDownUpAcrossLine,
  FaCalendarDay,
  FaCashRegister,
  FaDownload,
  FaLocationPin,
  FaPerson,
  FaPhone,
  FaRegStar,
  FaStar,
} from "react-icons/fa6";
import { HiMiniMagnifyingGlassPlus } from "react-icons/hi2";
import { IoRadioButtonOn } from "react-icons/io5";
import { FaUser } from "react-icons/fa";
import profile from "../../assets/img/profile.jpeg";
import RiderModal1img from "../../assets/img/ridermodal1.png"
import RiderModal2img from "../../assets/img/ridermodal2.png"
import Cross from "../../assets/img/cross.png"
import calendar from "../../assets/img/calendar.png"
import riderprofilemodal from "../../assets/img/riderprofilemodal.png"
import riderarrowmodal from "../../assets/img/riderarrowmodal.png"
import riderpicprofilemodal from "../../assets/img/riderpicprofilemodal.png"
const RideDetails = ({ setTrigger, current, status, flag }) => {
  return (
    <div className="fixed top-0 left-0 w-full h-screen flex  justify-center md:justify-end z-50 bg-black bg-opacity-10 ">
      <div className="relative p-4 md:p-9 bg-white rounded-lg flex flex-col items-center overflow-auto gap-7 md:w-[410px] ">
        <button
          className="absolute top-4 left-4 text-3xl md:flex hidden"
          onClick={() => setTrigger(false)}
        >
          <img src={Cross} alt="" className="bg-gray-100 p-2 rounded-full" />
        </button>
        <div className="relative">
          <button
            className="absolute top-4 left-4  text-3xl flex md:hidden"
            onClick={() => setTrigger(false)}
          >
            <img src={Cross} alt="" className="bg-gray-100 p-2 rounded-full" />
          </button>
          <img src={Maps} alt="" />
          <div className="absolute bottom-4 right-4 bg-white p-2 rounded-full shadow-custom">
            <HiMiniMagnifyingGlassPlus className="text-2xl text-gray-500" />
          </div>
          <div className="absolute top-4 right-4 bg-white p-3 rounded-full shadow-custom">
            {/* <FaDownload className="text-gray-500" /> */}
            <img src={RiderModal1img} alt="" className=" w-4" />
          </div>
        </div>
        <div className="flex justify-between items-center w-full ">
          <div>
            <img className="w-4 h-4" src={RiderModal2img} alt="" />
          </div>
          <div>
            <h2 className="sm:text-xl md:text-2xl font-extrabold font-primary">Ride Details</h2>
          </div>
          <div>
            <button className=" bg-primary p-2 text-white font-semibold font-primary rounded-md">
              in Route
            </button>
          </div>
        </div>
        <div className="flex shadow-custom py-3 px-5 flex-col rounded-md w-full">
          <div className="flex items-center justify-between gap-2">
            <div className="flex items-center gap-2">
              <div className="flex flex-col">
                <span className="text-[11px] font-[Poppins] font-semibold">Feb 27, 2024</span>
                <span className="text-[11px] font-[Poppins] font-semibold">10:00 AM</span>
              </div>
              <img src={calendar} className="w-5" alt="" />
              {/* <FaCalendarDay className="text-2xl" /> */}
              {current === 1 && <div className="text-black">{status}</div>}
            </div>
            <span className="py-2 px-3  bg-primary bg-opacity-30 rounded-3xl border-2 border-primary font-semibold shadow-custom text-base font-[Poppins]">
              $25.00
            </span>
          </div>
          <div className="flex flex-col mt-3">
            <p className="font-opensans text-xs font-bold">Pick Up</p>
            <div className="flex flex-col gap-5  ">
            {/* border-dotted border-black */}
              <div className="flex gap-2 items-center pt-1">
                <div className="py-1 px-1 rounded-full border-2 border-solid border-yellow-500 flex items-center content-center justify-center">
                     <div className="py-1 px-1 rounded-full border border-solid border-yellow-500 bg-yellow-500">
                     </div>
                </div>
                <span className="text-sm font-opensans font-semibold">
                  104 William St, Chicago, US
                </span>
              </div>
              <hr />
              <div className="flex gap-2 items-center">
              <div className="py-1 px-1 rounded-full border-2 border-solid border-green-500 flex items-center content-center justify-center">
                     <div className="py-1 px-1 rounded-full border border-solid border-green-500 bg-green-500">
                     </div>
                </div>
                <span className="text-sm font-opensans font-semibold">
                  104 William St, Chicago, US
                </span>
              </div>
              <hr />
              <div className="flex gap-2 items-center">
              <div className="py-1 px-1 rounded-full border-2 border-solid border-green-500 flex items-center content-center justify-center">
                     <div className="py-1 px-1 rounded-full border border-solid border-green-500 bg-green-500">
                     </div>
                </div>
                <span className="text-sm font-opensans font-semibold">
                  104 William St, Chicago, US
                </span>
              </div>
              <hr />
              <div className="flex gap-2 items-center ps-1">
                  <svg width="13" height="18" viewBox="0 0 13 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6.49998 18C5.32715 16.9228 4.24003 15.742 3.24999 14.4697C1.76428 12.5591 8.16114e-07 9.71362 8.16114e-07 7.00214C-0.000643516 5.61738 0.380257 4.26352 1.0945 3.11193C1.80874 1.96033 2.82422 1.06276 4.01241 0.532804C5.2006 0.00284616 6.50811 -0.135673 7.76945 0.134775C9.03078 0.405224 10.1893 1.07248 11.0983 2.05211C11.7035 2.70084 12.1832 3.47237 12.5096 4.32204C12.836 5.17171 13.0027 6.08265 13 7.00214C13 9.71362 11.2357 12.5591 9.74998 14.4697C8.75994 15.742 7.67282 16.9228 6.49998 18ZM6.49998 4.00273C5.76117 4.00273 5.05261 4.31874 4.53019 4.88124C4.00777 5.44374 3.71428 6.20665 3.71428 7.00214C3.71428 7.79764 4.00777 8.56055 4.53019 9.12305C5.05261 9.68555 5.76117 10.0016 6.49998 10.0016C7.2388 10.0016 7.94736 9.68555 8.46978 9.12305C8.9922 8.56055 9.28569 7.79764 9.28569 7.00214C9.28569 6.20665 8.9922 5.44374 8.46978 4.88124C7.94736 4.31874 7.2388 4.00273 6.49998 4.00273Z" fill="#FF302F"/>
                  </svg>
                <span className="text-sm font-opensans font-semibold">
                  104 William St, Chicago, US
                </span>
              </div>
            </div>
            <p className="font-bold font-opensans  mt-2 text-sm">Destination</p>
          </div>
          <div className="flex gap-px mt-5 flex-wrap">
            <div className="flex gap-px items-center py-1  px-1 bg-[#D8D8D8] bg-opacity-50  rounded-3xl border border-[#FFB000] font-semibold text-[11px]">
            <svg width="14" height="14" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10 0C4.48606 0 0 4.48606 0 10C0 15.5139 4.48606 20 10 20C15.5139 20 20 15.5139 20 10C20 4.48606 15.5139 0 10 0ZM7.58558 5.61635C8.19471 4.97067 9.05192 4.61538 10 4.61538C10.9481 4.61538 11.7976 4.97308 12.4091 5.62212C13.0288 6.27981 13.3303 7.16346 13.2591 8.11346C13.1168 10 11.6553 11.5385 10 11.5385C8.34471 11.5385 6.88029 10 6.74087 8.11298C6.67019 7.15529 6.97115 6.26875 7.58558 5.61635ZM10 18.4615C8.87042 18.4623 7.75218 18.2362 6.71161 17.7967C5.67104 17.3572 4.72933 16.7132 3.94231 15.9029C4.39306 15.2601 4.96738 14.7135 5.63173 14.2952C6.85721 13.5096 8.40817 13.0769 10 13.0769C11.5918 13.0769 13.1428 13.5096 14.3668 14.2952C15.0317 14.7133 15.6066 15.2599 16.0577 15.9029C15.2707 16.7133 14.329 17.3573 13.2884 17.7968C12.2479 18.2364 11.1296 18.4624 10 18.4615Z" fill="black"/>
</svg>
              <span>Private</span>
            </div>
            <div className="flex gap-px items-center py-1 px-1 bg-[#D8D8D8] bg-opacity-50 rounded-3xl border border-[#FFB000] font-semibold text-[11px]">
            <svg width="14" height="10" viewBox="0 0 19 14" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M18 5.2L13.4231 1L8.84615 5.2M13.4231 1.64237V13M1 8.8L5.57692 13L10.1538 8.8M5.57692 12.325V1" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
              <span>Round</span>
            </div>
            <div className="flex items-center px-1 py-1 bg-[#D8D8D8] bg-opacity-50  rounded-3xl border border-[#FFB000] font-semibold text-[11px]">
            <svg width="10" height="10" viewBox="0 0 12 14" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6 7C6.63899 7 7.26362 6.79473 7.79492 6.41014C8.32622 6.02556 8.74031 5.47893 8.98484 4.83939C9.22937 4.19985 9.29335 3.49612 9.16869 2.81719C9.04403 2.13825 8.73633 1.51461 8.2845 1.02513C7.83267 0.535644 7.257 0.202301 6.63029 0.0672531C6.00358 -0.0677952 5.35398 0.00151649 4.76364 0.266423C4.17329 0.53133 3.66871 0.979934 3.31371 1.55551C2.95871 2.13108 2.76923 2.80777 2.76923 3.5C2.76923 4.42826 3.10961 5.3185 3.7155 5.97487C4.32139 6.63125 5.14315 7 6 7ZM6 8C3.9975 8 0 9.34 0 12V14H12V12C12 9.34 8.0025 8 6 8Z" fill="black"/>
</svg>
              <span>3</span>
            </div>
            <div className="flex gap-px items-center py-1 px-1 bg-[#D8D8D8] bg-opacity-50  rounded-3xl border border-[#FFB000] font-semibold text-[11px]">
            <svg width="10" height="10" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0.8 9.5H11.2V10.5H0.8V9.5ZM1.6 11H10.4V12H1.6V11ZM11.6 3.5C10.9637 3.49909 10.3537 3.18273 9.90375 2.62032C9.45382 2.0579 9.20073 1.29537 9.2 0.5V0H2.8V0.5C2.79927 1.29537 2.54618 2.0579 2.09625 2.62032C1.64632 3.18273 1.0363 3.49909 0.4 3.5H0V5.5H0.4C1.0363 5.50091 1.64632 5.81727 2.09625 6.37968C2.54618 6.9421 2.79927 7.70463 2.8 8.5V9H9.2V8.5C9.20073 7.70463 9.45382 6.9421 9.90375 6.37968C10.3537 5.81727 10.9637 5.50091 11.6 5.5H12V3.5H11.6ZM6 7.5C5.52532 7.5 5.06131 7.32405 4.66663 6.99441C4.27195 6.66476 3.96434 6.19623 3.78269 5.64805C3.60104 5.09987 3.55351 4.49667 3.64612 3.91473C3.73872 3.33279 3.9673 2.79824 4.30294 2.37868C4.63859 1.95912 5.06623 1.6734 5.53178 1.55764C5.99734 1.44189 6.4799 1.5013 6.91844 1.72836C7.35698 1.95542 7.73181 2.33994 7.99553 2.83329C8.25924 3.32664 8.4 3.90666 8.4 4.5C8.39927 5.29537 8.14618 6.0579 7.69625 6.62032C7.24632 7.18273 6.6363 7.49909 6 7.5Z" fill="#438C18"/>
<path d="M2 0.5V0H0V2.5H0.4C0.824204 2.49942 1.2309 2.28852 1.53086 1.91357C1.83082 1.53863 1.99954 1.03026 2 0.5ZM0.4 6.5H0V9H2V8.5C1.99954 7.96974 1.83082 7.46137 1.53086 7.08643C1.2309 6.71148 0.824204 6.50058 0.4 6.5ZM11.6 2.5H12V0H10V0.5C10.0005 1.03026 10.1692 1.53863 10.4691 1.91357C10.7691 2.28852 11.1758 2.49942 11.6 2.5ZM10 8.5V9H12V6.5H11.6C11.1758 6.50058 10.7691 6.71148 10.4691 7.08643C10.1692 7.46137 10.0005 7.96974 10 8.5Z" fill="#438C18"/>
<path d="M6 7C7.10457 7 8 5.88071 8 4.5C8 3.11929 7.10457 2 6 2C4.89543 2 4 3.11929 4 4.5C4 5.88071 4.89543 7 6 7Z" fill="#438C18"/>
</svg>
              <span>Cash</span>
            </div>
            <div className="flex items-center px-1 bg-[#D8D8D8] py-1 bg-opacity-50  rounded-3xl border border-[#FFB000] font-semibold text-[11px]">
            <svg width="10" height="10" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7 0C3.13418 0 0 3.13418 0 7C0 10.8658 3.13418 14 7 14C10.8658 14 14 10.8658 14 7C14 3.13418 10.8658 0 7 0ZM10.2308 8.07692H7C6.85719 8.07692 6.72023 8.02019 6.61925 7.91921C6.51827 7.81823 6.46154 7.68127 6.46154 7.53846V2.69231C6.46154 2.5495 6.51827 2.41254 6.61925 2.31156C6.72023 2.21058 6.85719 2.15385 7 2.15385C7.14281 2.15385 7.27977 2.21058 7.38075 2.31156C7.48173 2.41254 7.53846 2.5495 7.53846 2.69231V7H10.2308C10.3736 7 10.5105 7.05673 10.6115 7.15771C10.7125 7.25869 10.7692 7.39565 10.7692 7.53846C10.7692 7.68127 10.7125 7.81823 10.6115 7.91921C10.5105 8.02019 10.3736 8.07692 10.2308 8.07692Z" fill="black"/>
</svg>
              <span>20 min</span>
            </div>
            <div className="flex gap-px items-center px-1 bg-[#D8D8D8] py-1 bg-opacity-50  rounded-3xl border border-[#FFB000] font-semibold text-[11px]">
            <svg width="10" height="10" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7.53846 14C7.46654 14 7.39534 13.9856 7.32907 13.9577C7.2628 13.9298 7.2028 13.8888 7.15261 13.8373C7.10242 13.7858 7.06306 13.7248 7.03684 13.6578C7.01063 13.5908 6.99809 13.5193 6.99998 13.4474V7.27351C6.99998 7.20211 6.97162 7.13363 6.92112 7.08313C6.87063 7.03264 6.80215 7.00428 6.73074 7.00428H0.552063C0.438807 7.00562 0.327909 6.97189 0.234577 6.90772C0.141244 6.84355 0.0700477 6.75208 0.0307501 6.64586C-0.0140024 6.51918 -0.0097799 6.38034 0.0425884 6.25662C0.0949567 6.13289 0.191688 6.03321 0.313787 5.97715L13.2372 0.0489398C13.3371 0.00319237 13.4485 -0.0109313 13.5566 0.00846291C13.6647 0.0278572 13.7643 0.079842 13.842 0.157445C13.9197 0.235048 13.9719 0.334559 13.9914 0.44263C14.0109 0.550702 13.997 0.662167 13.9514 0.762075L8.02814 13.6853C7.98525 13.7792 7.91629 13.8587 7.82948 13.9145C7.74267 13.9703 7.64165 14 7.53846 14Z" fill="black"/>
</svg>
              <span>1.4km</span>
            </div>
          </div>
        </div>
        <div className="flex shadow-custom py-3 px-5 flex-col rounded-md w-full gap-5">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <img
                src={profile}
                alt=""
                className="w-10 h-10 rounded-full object-cover bg-center"
              />
              <div className="flex flex-col w-[150px]">
              <div className="flex gap-2 w-40">
                <h2 className="font-bold text-[11px]">ALI ABBAS</h2> 
                <div className="flex gap-1">
              <FaStar className="text-primary" />
              <FaRegStar className="text-primary" />
              <FaRegStar className="text-primary" />
              <FaRegStar className="text-primary" />
              <FaRegStar className="text-primary" />
            </div>
                </div>
                <h2 className="font-bold text-[15px]">Suzuki Alto (LX-340)</h2>
              </div>
            </div>
            
            {flag && (
              <div className="block bg-[#D8D8D8] opacity-90 h-10 w-10 rounded-2xl flex justify-center items-center">
              <svg width="21" height="22" viewBox="0 0 21 22" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M16.8255 21.4998C15.9105 21.4998 14.6252 21.1689 12.7005 20.0936C10.36 18.7811 8.54969 17.5693 6.22188 15.2476C3.97751 13.0047 2.88532 11.5525 1.35672 8.7709C-0.37015 5.63028 -0.0757751 3.98403 0.253287 3.28043C0.645162 2.4395 1.2236 1.93653 1.97126 1.43731C2.39592 1.15908 2.84532 0.920567 3.31376 0.724809C3.36063 0.704653 3.40423 0.685434 3.44313 0.66809C3.67516 0.563559 4.02673 0.40559 4.47204 0.57434C4.76923 0.685903 5.03454 0.914184 5.44985 1.32434C6.30157 2.16434 7.46547 4.03512 7.89485 4.95387C8.18313 5.57309 8.37391 5.98184 8.37438 6.44028C8.37438 6.977 8.10438 7.3909 7.77673 7.83762C7.71532 7.92153 7.65438 8.00168 7.59532 8.0795C7.2386 8.54825 7.16032 8.68372 7.21188 8.92559C7.31641 9.41168 8.09594 10.8587 9.37704 12.137C10.6581 13.4153 12.0634 14.1456 12.5514 14.2497C12.8036 14.3036 12.9419 14.222 13.4256 13.8526C13.495 13.7997 13.5663 13.7448 13.6408 13.69C14.1405 13.3182 14.5352 13.0553 15.0592 13.0553H15.062C15.5181 13.0553 15.9086 13.2531 16.5555 13.5793C17.3992 14.005 19.3263 15.1539 20.1714 16.0065C20.5825 16.4209 20.8117 16.6853 20.9238 16.982C21.0925 17.4287 20.9336 17.7789 20.83 18.0132C20.8127 18.0522 20.7934 18.0948 20.7733 18.1422C20.576 18.6098 20.3361 19.0582 20.0566 19.4818C19.5583 20.2272 19.0534 20.8042 18.2106 21.1965C17.7778 21.4012 17.3042 21.5049 16.8255 21.4998Z" fill="#808080"/>
</svg>

              </div>
            )}
          </div>
          {!flag && (
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste
              blanditiis doloribus atque magnam, quis porro quaerat maiores
              eveniet quidem cupiditate fuga quasi sapiente impedit repellat, ea
              beatae non minus. Expedita.
            </p>
          )}
        </div>
        {flag && (
          <div className="flex shadow-custom py-3 px-5 flex-col rounded-md w-full gap-5">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <img
                  src={profile}
                  alt=""
                  className="w-10 h-10 rounded-full object-cover bg-center"
                />
                <div className="flex flex-col w-[150px]">
              <div className="flex gap-2 w-40">
                <h2 className="font-bold text-[11px]">ALI ABBAS</h2> 
                <div className="flex gap-1">
              <FaStar className="text-primary" />
              <FaRegStar className="text-primary" />
              <FaRegStar className="text-primary" />
              <FaRegStar className="text-primary" />
              <FaRegStar className="text-primary" />
            </div>
                </div>
                <h2 className="font-bold text-[15px]">Suzuki Alto (LX-340)</h2>
              </div>
            </div>
            <div className="block bg-[#D8D8D8] h-10 w-10 opacity-90 rounded-2xl flex justify-center items-center">
              <svg width="21" height="22" viewBox="0 0 21 22" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M16.8255 21.4998C15.9105 21.4998 14.6252 21.1689 12.7005 20.0936C10.36 18.7811 8.54969 17.5693 6.22188 15.2476C3.97751 13.0047 2.88532 11.5525 1.35672 8.7709C-0.37015 5.63028 -0.0757751 3.98403 0.253287 3.28043C0.645162 2.4395 1.2236 1.93653 1.97126 1.43731C2.39592 1.15908 2.84532 0.920567 3.31376 0.724809C3.36063 0.704653 3.40423 0.685434 3.44313 0.66809C3.67516 0.563559 4.02673 0.40559 4.47204 0.57434C4.76923 0.685903 5.03454 0.914184 5.44985 1.32434C6.30157 2.16434 7.46547 4.03512 7.89485 4.95387C8.18313 5.57309 8.37391 5.98184 8.37438 6.44028C8.37438 6.977 8.10438 7.3909 7.77673 7.83762C7.71532 7.92153 7.65438 8.00168 7.59532 8.0795C7.2386 8.54825 7.16032 8.68372 7.21188 8.92559C7.31641 9.41168 8.09594 10.8587 9.37704 12.137C10.6581 13.4153 12.0634 14.1456 12.5514 14.2497C12.8036 14.3036 12.9419 14.222 13.4256 13.8526C13.495 13.7997 13.5663 13.7448 13.6408 13.69C14.1405 13.3182 14.5352 13.0553 15.0592 13.0553H15.062C15.5181 13.0553 15.9086 13.2531 16.5555 13.5793C17.3992 14.005 19.3263 15.1539 20.1714 16.0065C20.5825 16.4209 20.8117 16.6853 20.9238 16.982C21.0925 17.4287 20.9336 17.7789 20.83 18.0132C20.8127 18.0522 20.7934 18.0948 20.7733 18.1422C20.576 18.6098 20.3361 19.0582 20.0566 19.4818C19.5583 20.2272 19.0534 20.8042 18.2106 21.1965C17.7778 21.4012 17.3042 21.5049 16.8255 21.4998Z" fill="#808080"/>
</svg>
              </div>
          </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default RideDetails;
