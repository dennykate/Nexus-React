import React from "react";

const DropdownItem = ({ onClick, name, Icon }) => {
  return (
    <button
      onClick={onClick}
      className="w-[200px] h-[40px] flex items-center px-[20px] text-sm hover:bg-[#EEEEEE] font-[400] gap-2"
    >
      {Icon && <Icon size={19} color="#5F6368" />} <h1>{name}</h1>
    </button>
  );
};

export default DropdownItem;
