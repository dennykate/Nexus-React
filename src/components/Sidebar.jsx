import React, { useState } from "react";
import { GoPlus } from "react-icons/go";
import SideBarItem from "./SideBarItem";
import { HiOutlinePlus } from "react-icons/hi";
import { fixAndMergeSideBarItem, sideBarItem } from "../utils/data";
import { MdLabel } from "react-icons/md";
import { IoTrashOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import LogoOutline from "../assets/Logo Outlined.png";

const Sidebar = ({ showSideBar }) => {
  const [active, setActive] = useState(false);
  return (
    <div
      className={` ${
        showSideBar ? "lg:w-[20%] w-[300px] " : "w-0"
      } transition-all lg:static absolute top-0 left-0 ease-in-out duration-200 overflow-y-auto flex flex-col gap-5 text-gray-600 ${
        showSideBar
          ? "animate__animated animate__slideInLeft"
          : "animate__animated animate__slideOutLeft"
      } bg-white  h-full z-20 `}
    >
      <Link to={"/create"}>
        <button className=" hidden lg:flex gap-3 items-center border rounded-full shadow-md w-[200px] px-4 py-[10px] hover:bg-[#F6FAFE] hover:shadow-xl mt-5 mx-2">
          <GoPlus className="text-primary text-3xl" />
          <span className="text-sm tracking-wide">Create contact</span>
        </button>
      </Link>
      <div className=" flex lg:hidden justify-center items-center w-[150px] px-3">
        <img src={LogoOutline} alt="" />
      </div>
      <div className="">
        {sideBarItem.map((item, index) => (
          <SideBarItem {...item} key={index} />
        ))}
      </div>
      <div className="">
        <h1 className="px-5 py-2 text-lg">Fix & manage</h1>
        {fixAndMergeSideBarItem.map((item, index) => (
          <SideBarItem {...item} key={index} />
        ))}
      </div>
      <div className="flex flex-col ">
        <div className="flex justify-between items-center w-full px-5">
          <h1 className=" py-2 text-lg">Labels</h1>
          <HiOutlinePlus className="text-xl" />
        </div>
        <button
          className={`group flex justify-between items-center ${
            !active && "hover:bg-secondary hover:rounded-r-full"
          } w-full h-[40px] px-5 ${
            active && "bg-primary bg-opacity-10 rounded-r-full text-primary"
          }`}
        >
          <div className=" flex items-center gap-5 ">
            <MdLabel className="" />
            <span className="text-sm tracking-wide">Important People</span>
          </div>
          <div
            className={`group-hover:opacity-100  ${
              active ? "opacity-100" : "opacity-0"
            }`}
          >
            <IoTrashOutline
              className={`text-xl  ${
                active ? "text-primary" : "text-gray-600"
              }`}
            />
          </div>
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
