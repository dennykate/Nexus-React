import React, { useRef, useEffect } from "react";

import Layout from "../components/Layout";
import {
  useCheckPasswordMutation,
  useGetProfileQuery,
} from "../feature/api/profileApi";
import Cookies from "js-cookie";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { removeUser } from "../feature/services/authSlice";
import { useDispatch, useSelector } from "react-redux";
import { getRandomColor } from "../helper/functions";
import { PulseLoader } from "react-spinners";
import { Toaster, toast } from "react-hot-toast";
import { BsPenFill } from "react-icons/bs";

const UserProfile = () => {
  const user = Cookies.get("user");
  const token = JSON.parse(Cookies.get("token"));
  const { bgColor } = useSelector((state) => state.isLg);
  // console.log(token);
  const { data } = useGetProfileQuery(token);
  //   console.log(data?.user);
  const userData = data?.user;
  const userName = userData?.name;
  const current_password_ref = useRef(null);
  const [current_password_width, setcurrent_password_width] = useState(0);

  const [current_password, setcurrent_password] = useState("");
  const [password, setPassword] = useState("");
  const [password_confirmation, setpassword_confirmation] = useState("");
  const [checkPassword, { isLoading }] = useCheckPasswordMutation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const passwordData = { current_password, password, password_confirmation };

  const PasswordHandler = async (e) => {
    e.preventDefault();
    console.log(token);
    if (
      passwordData?.password.length < 8 ||
      passwordData?.password_confirmation.length < 8 ||
      passwordData?.current_password.length < 8
    ) {
      return toast.error("Password must have at least 8 characters.");
    } else if (passwordData?.password_confirmation != passwordData?.password) {
      return toast.error("Password doesn't match");
    }

    const { data } = await checkPassword({ password: passwordData, token });
    console.log(data);
    if (data?.success) {
      dispatch(removeUser(data?.token));
      navigate("/login");
    } else {
      return toast.error("Fail");
    }
  };

  useEffect(() => {
    const resizeObserver = new ResizeObserver((entries) => {
      const { width } = entries[0].target.getBoundingClientRect();
      setcurrent_password_width(width);
    });

    resizeObserver.observe(current_password_ref.current);

    return () => {
      resizeObserver.disconnect();
    };
  }, []);

  return (
    <Layout>
      <div className=" text-tertiary  flex flex-col justify-center w-[95%] md:w-[80%] mx-auto py-10 px-2 lg:p-10">
        <div className=" ">
          <div className=" ">
            <h3 className="text-lg sm:text-lg md:text-2xl lg:text-2xl xl:text-2xl 2xl:text-2xl  py-2  md:py-8 lg:py-5 tracking-wide ">
              Your Preferences
            </h3>
            {/* userInformation  */}
            <div className="userinform  flex  items-center shadow-md  px-3 sm:px-4 lg:px-5 py-3 lg:py-5  md:mb-6 mb-5 lg:mb-10 ">
              {/* user profile  */}
              <div className="w-[50px]  h-[50px] sm:w-[60px] sm:h-[60px] md:w-[60px] md:h-[60px] lg:w-[80px] lg:h-[80px] rounded-full p-[2px] flex items-center justify-center bg-white hover:bg-secondary cursor-pointer 2xl:mr-8  2xl:ml-5">
                <div
                  className={`w-full h-full rounded-full flex justify-center items-center ${bgColor}`}
                >
                  <h1 className="text-md font-[500] text-white uppercase">
                    {userName?.slice(0, 1)}
                  </h1>
                </div>
              </div>
              {/* user detail  */}
              <div className=" w-[90%] xl:w-[80%] 2xl-[80%] lg:w-[70%] px-4 py-1">
                <div className="flex justify-between items-center">
                  <p className=" text-base ml-3 ">{userData?.name}</p>
                  <BsPenFill className="text-xs text-gray-600 xl:text-md 2xl:text-lg mr-5 " />
                </div>
                <hr className="md:my-2 2xl:my-2 border-[1.5px] border-gray-500 my-1 border-dotted w-full" />
                <div className="flex justify-between items-center">
                  <p className=" text-base ml-3 ">{userData?.email}</p>
                  <BsPenFill className="text-xs text-gray-600 xl:text-md 2xl:text-lg mr-5 " />
                </div>
              </div>
            </div>
          </div>
          <hr className="md:my-4 border-[1.5px] border-dotted " />
          {/* change password  */}
          <div className="">
            <h3 className="text-lg sm:text-lg md:text-2xl lg:text-2xl xl:text-2xl 2xl:text-2xl  py-2  lg:py-5 mb-3 tracking-wide">
              Change Your Password
            </h3>
            {/* change form  */}
            <form
              action=""
              onSubmit={PasswordHandler}
              className="flex flex-col  pl-5 md:pl-10 "
            >
              <div className="flex flex-col sm:flex-col md:flex-col lg:flex-row xl:flex-row 2xl:flex-row   ">
                <div className="w-1/4 pt-3 py-3   ">
                  <label
                    htmlFor=""
                    className="lg:mr-16  
whitespace-nowrap    w-full"
                  >
                    Current Password
                  </label>
                </div>
                <div className="w-[90%]  lg:w-3/4  lg:pl-20">
                  <input
                    className="py-2 px-[15px] w-full border-[1px] rounded-md mb-3 md:pb-2 md:py-3  xl:mb-4 focus-within:outline-none "
                    required
                    type="password"
                    placeholder="Current Password"
                    value={current_password}
                    onChange={(e) => setcurrent_password(e.target.value)}
                    ref={current_password_ref}
                  />
                </div>
              </div>

              <div className="flex flex-col sm:flex-col md:flex-col lg:flex-row xl:flex-row 2xl:flex-row   ">
                <div className="w-1/4 pt-3 py-3 ">
                  <label
                    htmlFor=""
                    className="lg:mr-16 
whitespace-nowrap   w-full"
                  >
                    New Password
                  </label>
                </div>
                <div className="w-[90%]  lg:w-3/4  lg:pl-20">
                  <input
                    className="py-2 px-[15px] w-full  border-[1px] rounded-md mb-3 md:pb-2 md:py-3  xl:mb-4 focus-within:outline-none "
                    required
                    type="password"
                    placeholder=" New Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
              </div>

              <div className="flex flex-col sm:flex-col md:flex-col lg:flex-row xl:flex-row 2xl:flex-row ">
                <div className="w-1/4 pt-3 py-3  ">
                  <label
                    htmlFor=""
                    className="lg:mr-16 
whitespace-nowrap   w-full"
                  >
                    Confirm Password
                  </label>
                </div>
                <div className="w-[90%]  lg:w-3/4  lg:pl-20">
                  <input
                    className="py-2 px-[15px] w-full border-[1px] rounded-md mb-5 md:pb-2 md:py-3 xl:mr-3 xl:mb-4 2xl:mr-5 focus-within:outline-none  "
                    required
                    type="password"
                    placeholder="Confirm Password"
                    value={password_confirmation}
                    onChange={(e) => setpassword_confirmation(e.target.value)}
                  />
                </div>
              </div>
              {/* lg:justify-end lg:pl-60 xl:justify-end xl:pl-64 2xl:justify-end 2xl:pl-72 */}
              <div className="flex lg:justify-end xl:justify-end 2xl:justify-end justify-start ">
                <button
                  type="submit"
                  disabled={isLoading && true}
                  style={{ width: current_password_width }}
                  className={
                    "py-2 px-[15px] mb-3 lg:py-3  bg-primary border-[1px] rounded-md text-white text-base xl:mb-5 xl:py-3 hover:bg-[#0249bd] cursor-pointer "
                  }
                >
                  {isLoading ? (
                    <PulseLoader
                      className="mx-auto block"
                      color="white"
                      size="8px"
                    />
                  ) : (
                    "Change Password"
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
        <Toaster position="bottom-center" />
      </div>
    </Layout>
  );
};

export default UserProfile;
