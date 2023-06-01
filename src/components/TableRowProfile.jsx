import React, { useState } from "react";
import { RxDragHandleDots2 } from "react-icons/rx";

const TableRowProfile = ({ name }) => {
  const [checked, setChecked] = useState(false);

  return (
    <div className="w-[40px] h-full relative flex items-center pl-2">
      <div
        className="w-[30px] h-[30px] rounded-full flex justify-center items-center bg-red-600 text-white
           uppercase font-[400] group-hover:hidden"
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
          onChange={() => setChecked(!checked)}
          type="checkbox"
          className=" accent-primary w-[25px] h-[25px] cursor-pointer"
        />
      </div>
    </div>
  );
};

export default TableRowProfile;
