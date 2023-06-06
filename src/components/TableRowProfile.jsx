import React, { useState } from "react";
import { faker } from "@faker-js/faker";
import { RxDragHandleDots2 } from "react-icons/rx";

import { getRandomColor } from "../helper/functions";
import { useEffect } from "react";

const TableRowProfile = ({ name, checked, setChecked }) => {
  const image = faker.internet.avatar();
  const [bgColor, setBgColor] = useState("");

  useEffect(() => {
    setBgColor(getRandomColor());
  }, []);

  return (
    <div className="w-[40px] h-full relative flex items-center pl-2">
      <div
        className={`w-[30px] h-[30px] rounded-full flex justify-center items-center text-white
           uppercase font-[400] group-hover:hidden ${
             bgColor ? bgColor : "bg-primary"
           } overflow-hidden`}
      >
        {name.slice(0, 1)}
      </div>

      {checked && (
        <div className="w-[2px] h-full bg-primary absolute top-0 left-0" />
      )}

      <div className="group-hover:flex w-[30px] hidden items-center gap-[1px] h-full -translate-x-[5px]">
        <RxDragHandleDots2 size={18} color="#5F6368" />
        <input
          checked={checked}
          onChange={(e) => {
            e.stopPropagation();
            Z;
            setChecked(!checked);
          }}
          type="checkbox"
          className=" accent-primary w-[25px] h-[25px] cursor-pointer"
        />
      </div>
    </div>
  );
};

export default TableRowProfile;
