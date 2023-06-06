import React from "react";
import { getRandomColor } from "../helper/functions";
import { useState } from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";

const Profile = ({ name }) => {
  const { bgColor } = useSelector((state) => state.isLg);

  return (
    <div className="w-[40px] h-[40px] rounded-full p-[2px] flex items-center justify-center bg-white hover:bg-secondary cursor-pointer">
      <div
        className={`w-[30px] h-[30px] rounded-full flex justify-center items-center ${bgColor}`}
      >
        <h1 className="text-base font-[500] text-white uppercase">
          {name.slice(0, 1)}
        </h1>
      </div>
    </div>
  );
};

export default Profile;
