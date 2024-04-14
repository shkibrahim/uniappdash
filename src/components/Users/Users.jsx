import React from 'react'
import { IoSearchOutline } from "react-icons/io5";
import { Filter } from '../SVGICONS/Icons';
import { IoMdArrowDropdown } from "react-icons/io";
import UsersTable from './UsersTable';

const Users = () => {
  return (
    <main className='m-10'>
      <div className=" mb-10  items-center flex justify-between">
        <div>
          <div className=" flex space-x-8 items-center">
            <div className=" text-2xl underline-offset-[10px] decoration-primary decoration-[4px]    underline ">
              All Users
            </div>
            <div className='text-gray-500 text-xl'>
              Analytics
            </div>
          </div>
        </div>
        <div>
          <div className='w-[400px]'>
            <div className="relative w-full">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <IoSearchOutline className=' text-gray-900 text-xl' />
              </div>
              <input type="text" id="voice-search" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary focus:border-primary block w-full ps-10 p-2.5  " placeholder="Search ..." required />
              <button type="button" className="absolute inset-y-0 end-0 flex items-center pe-3">
              </button>
            </div>
          </div>
        </div>
        <div>
          <div className="flex items-center space-x-2">
            <Filter />
            <div className="flex items-center space-x-2">
              <div>
                Sort By
              </div>
              <div>
                <IoMdArrowDropdown />
              </div>
            </div>
          </div>
        </div>
      </div>
      <UsersTable />
    </main>
  )
}

export default Users