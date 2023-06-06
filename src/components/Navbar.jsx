import React, { useEffect, useState } from "react";
import { MdHelpOutline, MdOutlineMenu, MdOutlineLogout } from "react-icons/md";
import { IoApps, IoSearchSharp, IoSettingsOutline } from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import { useDispatch, useSelector } from "react-redux";
import Profile from "./Profile";
import { removeUser, addUser } from "../feature/services/authSlice";
import { useLoginMutation, useLogoutMutation } from "../feature/api/authApi";
import Tooltip from "./Tooltip";
import TooltipText from "./TooltipText";

import LogoOutline from "../assets/Logo Outlined.png";
import Dropdown from "./Dropdown";
import DropdownItem from "./DropdownItem";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { HiOutlineUserAdd } from "react-icons/hi";
import UserInfo from "./UserInfo";
import PageLoading from "./PageLoading";

const Navbar = ({ setShowSideBar, showSideBar }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { contacts } = useSelector((state) => state.contacts);
  const { users } = useSelector((state) => state.authSlice);
  const [focus, setFocus] = useState(false);
  const [search, setSearch] = useState("");
  const [showSearchInput, setShowSearchInput] = useState(false);

  // const users = JSON.parse(Cookies.get("users"));
  const loginUser = JSON.parse(Cookies.get("user"));
  const notUsers = users.filter((user) => user.user.id != loginUser.id);
  const token = JSON.parse(Cookies.get("token"));
  const [logout] = useLogoutMutation(token);
  const [login, { isLoading }] = useLoginMutation();

  const onSearchHandler = (e) => {
    e.preventDefault();
    if (search) navigate(`/search/${search}`);
  };

  const logoutHandler = async () => {
    const { data } = await logout(token);
    console.log(data);

    if (data?.success) {
      dispatch(removeUser());
      navigate("/login");
    }
  };

  const addAnotherAccountHandler = async () => {
    await logoutHandler();
  };

  const loginHandler = async (user) => {
    const { email, password } = user?.user;

    const { data, error } = await login({ email, password });

    console.log(data);
    console.log(error);
    if (data?.success) {
      const newData = {
        user: user.user,
        token: data.token,
        keepme: user.keepme,
      };
      dispatch(addUser(newData));
      navigate("/");
    }
  };

  const profileHandler = () => {
    navigate("/profile");
  };

  return (
    <>
      {isLoading ? (
        <PageLoading />
      ) : (
        <nav className="min-h-[70px] w-full flex items-center">
          <div className="flex gap-3 items-center lg:w-[20%] w-[300px] h-full px-3">
            <button
              onClick={() => setShowSideBar(!showSideBar)}
              className="min-w-[50px] h-[50px] rounded-full flex justify-center items-center bg-white hover:bg-secondary"
            >
              <Tooltip
                Icon={MdOutlineMenu}
                className="text-2xl text-gray-600"
              ></Tooltip>
            </button>
            <Link to={"/"}>
              <button className="sm:flex hidden items-center ">
                <img src={LogoOutline} alt="" className="w-[120px]" />
              </button>
            </Link>
          </div>
          <div className="flex searchContainer items-center w-[80%]">
            <div
              className={`search gap-5 items-center px-3 md:w-[400px] lg:w-[700px] h-[50px] p-3  ${
                focus
                  ? "bg-white rounded-t-lg shadow-md"
                  : " bg-secondary rounded-lg"
              }`}
            >
              <button onClick={onSearchHandler}>
                <IoSearchSharp className="text-2xl text-gray-600" />
              </button>
              <form
                className="w-full h-full"
                action=""
                onSubmit={onSearchHandler}
              >
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
            <div className="flex gap-5 lg:gap-14 px-3">
              <button
                onClick={() => setShowSearchInput(true)}
                className="searchIcon justify-center items-center relative"
              >
                <IoSearchSharp className="text-2xl text-gray-600" />

                {showSearchInput && (
                  <div
                    className={`flex gap-5 items-center sm:w-[300px] w-[95%] h-[50px] p-3 bg-white rounded-t-lg shadow-md
               sm:absolute sm:-top-3 sm:right-0 z-10 fixed top-1 left-1 border `}
                  >
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setShowSearchInput(false);
                      }}
                    >
                      <AiOutlineArrowLeft className="text-2xl text-gray-600" />
                    </button>
                    <form
                      className="w-full h-full"
                      action=""
                      onSubmit={onSearchHandler}
                    >
                      <input
                        type="text"
                        className={`w-full h-full outline-none  bg-white }`}
                        placeholder={
                          contacts.length == 0
                            ? "Unable to search. Please wait!"
                            : "Search..."
                        }
                        disabled={!!contacts.length == 0}
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                      />
                    </form>
                  </div>
                )}
              </button>
              <div className="flex gap-5 lg:gap-8 items-center">
                <Dropdown Icon={MdHelpOutline} name="Help Menu">
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
              <div className="flex items-center gap-5 lg:gap-2">
                <button className="lg:w-[40px] lg:h-[40px] w-[30px] h-[30px] rounded-full flex justify-center items-center  bg-white hover:bg-secondary">
                  <IoApps className="text-xl text-gray-600" />
                </button>

                <Dropdown user Component={<Profile name={loginUser?.name} />}>
                  <div className="w-full px-[8px] flex flex-col gap-[2px] overflow-hidden">
                    <div className="w-[300px] bg-white rounded-t-xl">
                      <UserInfo
                        onClick={profileHandler}
                        user={loginUser}
                        currentUser={true}
                      />
                    </div>
                    <div className="w-[300px] bg-white rounded-b-xl mb-2 overflow-hidden">
                      {notUsers?.map((user, index) => (
                        <UserInfo
                          onClick={() => loginHandler(user)}
                          user={user.user}
                          currentUser={false}
                          key={index}
                        />
                      ))}
                      <button
                        onClick={addAnotherAccountHandler}
                        className={`w-full px-2 py-6 hover:bg-primary hover:bg-opacity-10 h-[40px] flex  gap-5 items-center text-sm  font-[400]`}
                      >
                        <div className="w-[60px] h-full flex justify-center items-center">
                          <HiOutlineUserAdd size={25} color="#5F6368" />
                        </div>

                        <h1 className="text-sm">Add another account</h1>
                      </button>
                    </div>
                  </div>

                  <div className="">
                    <DropdownItem
                      user
                      name="Logout"
                      onClick={logoutHandler}
                      Icon={MdOutlineLogout}
                    />
                  </div>
                </Dropdown>
              </div>
            </div>
          </div>
        </nav>
      )}
    </>
  );
};

export default Navbar;
