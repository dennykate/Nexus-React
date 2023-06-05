import React, { useState } from "react";
import { MdHelpOutline, MdOutlineMenu, MdOutlineLogout } from "react-icons/md";
import { IoApps, IoSearchSharp, IoSettingsOutline } from "react-icons/io5";
import Cookies from "js-cookie";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import "./Tooltip.css";

import LogoOutline from "../assets/Logo Outlined.png";
import Dropdown from "./Dropdown";
import DropdownItem from "./DropdownItem";
import Profile from "./Profile";
import { removeUser } from "../feature/services/authSlice";
import { useLoginMutation, useLogoutMutation } from "../feature/api/authApi";
import Tooltip from "./Tooltip";
import TooltipText from "./TooltipText";

const Navbar = ({ setShowSideBar, showSideBar }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [focus, setFocus] = useState(false);
  const user = JSON.parse(Cookies.get("user"));
  const token = JSON.parse(Cookies.get("token"));
  const [logout] = useLogoutMutation(token);
  console.log(token);

  const logoutHandler = async () => {
    const { data } = await logout(token);
    console.log(data);

    if (data?.success) {
      dispatch(removeUser());
      navigate("/login");
    }
  };
  const profileHandler = () =>{
    navigate("/profile")
  }

  return (
    <nav className="min-h-[70px] w-full flex items-center">
      <div className="flex gap-3 items-center w-[20%] h-full px-3">
        <button
          onClick={() => setShowSideBar(!showSideBar)}
          className="w-[50px] h-[50px] rounded-full flex justify-center items-center bg-white hover:bg-secondary"
        >
          <Tooltip Icon={MdOutlineMenu }  className="text-2xl text-gray-600" >
            <TooltipText name="menu"></TooltipText>
          </Tooltip>
          
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
          <Link to="/search/songyi">
            <IoSearchSharp className="text-2xl text-gray-600" />
          </Link>
          <input
            type="text"
            className={`w-full h-full outline-none ${
              focus ? "bg-white" : "bg-secondary "
            }`}
            placeholder="Search..."
            onFocus={() => setFocus(true)}
            onBlur={() => setFocus(false)}
          />
        </div>
        <div className="flex gap-14 px-3">
          <div className="flex gap-8 items-center">
            <Dropdown Icon={MdHelpOutline} name="Help menu">
              {["Send Feedback", "Help"].map((data, index) => (
                <DropdownItem key={index} name={data} />
              ))}
            </Dropdown>

            <Dropdown Icon={IoSettingsOutline} name="Settings menu">
              {["Undo Changes", "More Settings"].map((data, index) => (
                <DropdownItem key={index} name={data} />
              ))}
            </Dropdown>
          </div>
          <div className="flex items-center gap-2">
            <button className="w-[40px] h-[40px] rounded-full flex justify-center items-center bg-white hover:bg-secondary">
              <IoApps className="text-xl text-gray-600" />
            </button>

            <Dropdown Component={<Profile name={user?.name} />}>
              <DropdownItem
                name="profile"
                onClick={profileHandler}
                Icon={MdOutlineLogout}
              />
              <DropdownItem
                name="Sign out"
                onClick={logoutHandler}
                Icon={MdOutlineLogout}
              />
            </Dropdown>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
