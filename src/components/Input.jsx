import React from "react";
import { useState } from "react";
import { FaRegUser } from "react-icons/fa";

const Input = ({type,label,Icon,name,setName}) => {
    const [focus,setFocus] = useState(false)
  return (
    <div className="flex gap-5 items-center">
      <Icon className="text-sm" />
      <div
        className={`w-[500px] h-[50px]  rounded-md p-3 text-gray-600 relative ${
          focus ? "border-primary border-2" : "border border-gray-400 "
        }`}
      >
        <input
          type={`${type}`}
          value={name}
          onChange={(e)=>setName(e.target.value)}
          placeholder={`${focus ? "" : label}`}
          className="w-full h-full outline-none"
          onFocus={() => setFocus(true)}
          onBlur={() => setFocus(false)}
        />
        {focus && (
          <div className="absolute -top-[10px] left-3 px-[2px] bg-white text-sm text-primary">
            {label}
          </div>
        )}
      </div>
    </div>
  );
};

export default Input;
