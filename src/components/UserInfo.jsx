import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { getRandomColor } from "../helper/functions";

const UserInfo = ({ user, currentUser, onClick }) => {
  const { bgColor } = useSelector((state) => state.isLg);
  const [randomBgColor, setRandomBgColor] = useState("");

  useEffect(() => {
    setRandomBgColor(getRandomColor());
  }, []);

  return (
    <div className="" onClick={onClick}>
      <div
        className={`w-full flex gap-5 items-center px-[20px] text-sm ${
          currentUser
            ? "py-3"
            : "hover:bg-primary hover:bg-opacity-10 cursor-pointer py-2"
        } font-[400] gap-5 px-2`}
      >
        <div className="w-[60px] flex justify-center items-center">
          <div
            className={`${
              currentUser
                ? `w-[60px] h-[60px] ${bgColor} `
                : `w-[40px] h-[40px]  ${randomBgColor}`
            }  rounded-full  flex justify-center items-center`}
          >
            <h1
              className={`uppercase text-white ${
                currentUser ? "text-[30px]" : "text-xl"
              }`}
            >
              {user?.name.slice(0, 1)}
            </h1>
          </div>
        </div>
        <div className="flex flex-col gap-0">
          <h1
            className={`capitalize ${
              currentUser ? "text-[18px]" : "text-[14px]"
            }`}
          >
            {user?.name}
          </h1>
          <h2
            className={`text-primary ${
              currentUser ? "text-[18px]" : "text-[14px]"
            }`}
          >
            {user?.email}
          </h2>
        </div>
      </div>
    </div>
  );
};

export default UserInfo;
