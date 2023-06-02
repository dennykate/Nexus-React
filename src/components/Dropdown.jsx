import React, { useState } from "react";

const Dropdown = ({ children, data, Icon }) => {
  const [active, setActive] = useState(false);

  return (
    <div className="flex flex-col">
      <button onClick={() => setActive(!active)}>
        <Icon className="text-xl text-gray-600" />
      </button>
      <div className="relative">
        <div
          className={`absolute bg-white shadow-xl ${
            active
              ? "top-1 right-4 opacity-100 scale-100"
              : "-top-10 -right-5 opacity-0 scale-0"
          } transition-all duration-300 ease-in-out py-2 `}
        >
          {children}
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
