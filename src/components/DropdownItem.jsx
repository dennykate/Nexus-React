import React from "react";

const DropdownItem = ({ onClick, name, Icon, user }) => {
  return (
    <button
      onClick={onClick}
      className={`${
        user
          ? "w-full px-4 py-6 hover:bg-primary hover:bg-opacity-10"
          : "w-[250px] px-[20px] hover:bg-[#EEEEEE]"
      } h-[40px] flex items-center text-sm  font-[400] gap-5`}
    >
      <div className={user && "w-[60px] flex justify-center"}>
        {Icon && <Icon size={`${user ? 25 : 19}`} color="#5F6368" />}
      </div>
      <h1 className="text-sm">{name}</h1>
    </button>
  );
};

export default DropdownItem;
