import React, { useState } from "react";
import { IoSettingsOutline } from "react-icons/io5";

const Tooltip = ({ children, Icon, Component }) => {
  return (
    <>
      <div className="relative group">
        <span className=" cursor-pointer hover:underline text-gray-600">
          {Icon && <Icon className="text-xl text-gray-600" />}
        </span>
        {children}
      </div>
    </>
  );
};

export default Tooltip;
