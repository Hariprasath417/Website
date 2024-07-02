import React from 'react'
import { FaSearch } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { IoBagCheckSharp } from "react-icons/io5";

const HeaderMain = () => {
  return (
    <div className="border-b border-gray-200 py-6">
        <div className="container sm:flex justify-between items-center">
            <div className="font-bold text-1xl text-center pb-2 sm:pb-0 text-blackish">
                Logo
                <div className="w-full sm:w-[100px] md:w-[100%] relative">
                <input
                className="border-gray-100 border p-2 px-2 rounded-3g w-full"
                type="text" placeholder="Enter any product name..."
                />
                <FaSearch />
                <CgProfile/>
                <IoBagCheckSharp/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default HeaderMain;