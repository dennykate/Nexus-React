import React, { useState } from "react";
import { MdHelpOutline, MdOutlineMenu } from "react-icons/md";
import { IoApps, IoSearchSharp, IoSettingsOutline } from "react-icons/io5";
import LogoOutline from "../assets/Logo Outlined.png";
import { Link, useNavigate } from "react-router-dom";

import Dropdown from "./Dropdown";
import DropdownItem from "./DropdownItem";
import { useSelector } from "react-redux";

const Navbar = ({ setShowSideBar, showSideBar }) => {
  const navigate = useNavigate();
  const { contacts } = useSelector((state) => state.contacts);
  const [focus, setFocus] = useState(false);
  const [search, setSearch] = useState("");

  const onSearchHandler = (e) => {
    e.preventDefault();
    if (search) navigate(`/search/${search}`);
  };

  return (
    <nav className="min-h-[70px] w-full flex items-center">
      <div className="flex gap-3 items-center w-[20%] h-full px-3">
        <button
          onClick={() => setShowSideBar(!showSideBar)}
          className="w-[50px] h-[50px] rounded-full flex justify-center items-center bg-white hover:bg-secondary"
        >
          <MdOutlineMenu className="text-2xl text-gray-600" />
        </button>
        <Link to={"/"}>
          <button className="flex items-center ">
            <img src={LogoOutline} alt="" className="w-[120px]" />
          </button>
        </Link>
      </div>
      <div className="flex justify-between items-center w-[80%]">
        <div
          className={`flex gap-5 items-center px-3 w-[700px] h-[50px] p-3  ${
            focus
              ? "bg-white rounded-t-lg shadow-md"
              : " bg-secondary rounded-lg"
          }`}
        >
          <button onClick={onSearchHandler}>
            <IoSearchSharp className="text-2xl text-gray-600" />
          </button>
          <form className="w-full h-full" action="" onSubmit={onSearchHandler}>
            <input
              type="text"
              className={`w-full h-full outline-none ${
                focus ? "bg-white" : "bg-secondary "
              }`}
              placeholder={
                contacts.length == 0
                  ? "Unable to search. Please wait!"
                  : "Search..."
              }
              onFocus={() => setFocus(true)}
              onBlur={() => setFocus(false)}
              disabled={!!contacts.length == 0}
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </form>
        </div>
        <div className="flex gap-14 px-3">
          <div className="flex gap-8 items-center">
            <Dropdown Icon={MdHelpOutline}>
              {["Send Feedback", "Help"].map((data, index) => (
                <DropdownItem key={index} name={data} />
              ))}
            </Dropdown>
            <Dropdown Icon={IoSettingsOutline}>
              {["Undo Changes", "More Settings"].map((data, index) => (
                <DropdownItem key={index} name={data} />
              ))}
            </Dropdown>
          </div>
          <div className="flex items-center gap-2">
            <button className="w-[40px] h-[40px] rounded-full flex justify-center items-center bg-white hover:bg-secondary">
              <IoApps className="text-xl text-gray-600" />
            </button>
            <div className="w-[40px] h-[40px] rounded-full p-[2px] flex items-center justify-center bg-white hover:bg-secondary">
              <img
                src="https://i.postimg.cc/CKV3CH3m/unnamed.jpg"
                alt=""
                className="w-[30px] h-[30px] rounded-full"
              />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
