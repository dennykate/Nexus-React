import React, { useState } from "react";
import Tooltip from "./Tooltip";
import TooltipText from "./TooltipText";

const Dropdown = ({ children, Icon, Component, name, user }) => {
  const [active, setActive] = useState(false);

  return (
    <div className="flex flex-col">
      <button
        onClick={(e) => {
          e.stopPropagation();
          setActive(!active);
        }}
        onMouseLeave={() => setActive(false)}
      >
        {Icon && (
          <Tooltip Icon={Icon}>
            {!active && name && <TooltipText name={name} />}
          </Tooltip>
        )}
        {Component && Component}
      </button>
      <div className="relative">
        <div
          onMouseEnter={() => setActive(true)}
          onMouseLeave={() => setActive(false)}
          className={`absolute  shadow-2xl ${
            active
              ? "top-1 right-4 opacity-100 scale-100"
              : "-top-10 -right-5 opacity-0 scale-0"
          } ${
            user ? "bg-[#f3f6fc] rounded-xl overflow-hidden" : "bg-white "
          } transition-all duration-300 ease-in-out  py-2 z-10`}
        >
          {children}
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
