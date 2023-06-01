import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const SideBarItem = ({ Icon, name, DropdownIcon, pathname }) => {
  const [active, setActive] = useState(false);
  const currentPathName = useLocation().pathname;

  useEffect(() => {
    if (currentPathName == pathname) {
      setActive(true);
    }
  }, []);

  return (
    <Link to={pathname}>
      <button
        className={`flex justify-between items-center ${
          !active && "hover:bg-secondary hover:rounded-r-full"
        } w-full h-[40px] px-8 ${
          active && "bg-primary bg-opacity-10 rounded-r-full text-primary"
        }`}
      >
        <div className=" flex items-center gap-5 ">
          <Icon className="" />
          <span className="text-sm tracking-wide">{name}</span>
        </div>
        {/* <span className="text-primary text-sm">41</span> */}
        {DropdownIcon && (
          <div className="hover:bg-gray-300 rounded-full">
            <DropdownIcon className="text-xl text-gray-600" />
          </div>
        )}
      </button>
    </Link>
  );
};

export default SideBarItem;
