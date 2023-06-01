import React from "react";
import { AiOutlineStar } from "react-icons/ai";
import { BiDotsVerticalRounded, BiPencil } from "react-icons/bi";
import TableRowProfile from "./TableRowProfile";

const TableRow = ({ name, email, phoneNumber }) => {
  return (
    <tr className="w-full flex items-center h-[60px] group cursor-pointer hover:bg-[#F2F2F2]">
      <th className="lg:w-[20%] w-[40%] h-full flex items-center justify-start px-1 gap-4">
        <TableRowProfile name={name} />
        <h1 className=" font-[400] text-[#5F6368]">{name}</h1>
      </th>
      <th className="lg:w-[20%] w-[40%] h-full flex items-center justify-start px-1">
        <h1 className=" font-[400] text-[#5F6368]">{email}</h1>
      </th>
      <th className="w-[20%] h-full lg:flex hidden items-center justify-start px-1">
        <h1 className=" font-[400] text-[#5F6368]">{phoneNumber}</h1>
      </th>
      <th className="w-[20%] h-full xl:flex hidden items-center justify-start px-1">
        <h1 className=" font-[400] text-[#5F6368]"></h1>
      </th>
      <th className="w-[20%] h-full hidden items-center gap-4 justify-end pr-3 group-hover:flex">
        <button className="text-[#5F6368] hover:text-black">
          <AiOutlineStar size={19} />
        </button>
        <button className="text-[#5F6368] hover:text-black">
          <BiPencil size={19} />
        </button>
        <button className="text-[#5F6368] hover:text-black">
          <BiDotsVerticalRounded size={19} />
        </button>
      </th>
    </tr>
  );
};

export default TableRow;
