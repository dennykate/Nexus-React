import React from "react";

const TooltipText = ({ name }) => {
  return (
    <>
      <div className=" bg-gray-600 z-10 group-hover:opacity-100 text-white text-xs px-5 py-1 absolute top-[130%] left-1/2 transform -translate-x-1/2 opacity-0 pointer-events-none transition-opacity duration-300">
        <span className=" whitespace-nowrap">{name}</span>
      </div>
    </>
  );
};

export default TooltipText;
