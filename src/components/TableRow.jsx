import React from "react";
import {
  AiFillPrinter,
  AiOutlineDownload,
  AiOutlineUpload,
} from "react-icons/ai";
import { BiDotsVerticalRounded } from "react-icons/bi";

const TableRow = ({ name, email, phoneNumber }) => {
  return (
    <tbody>
      <tr className="w-full flex items-center h-[50px]">
        <th className="lg:w-[20%] w-[40%] h-full flex items-center justify-start px-1 gap-2">
          <div
            className="w-[30px] h-[30px] rounded-full flex justify-center items-center bg-red-600 text-white
           uppercase font-[400]"
          >
            {name.slice(0, 1)}
          </div>
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
        <th className="w-[20%] h-full flex items-center gap-4 justify-end pr-3">
          <button>
            <AiFillPrinter size={19} color="#5F6368" />
          </button>
          <button>
            <AiOutlineDownload size={19} color="#5F6368" />
          </button>
          <button>
            <AiOutlineUpload size={19} color="#5F6368" />
          </button>
          <button>
            <BiDotsVerticalRounded size={19} color="#5F6368" />
          </button>
        </th>
      </tr>
    </tbody>
  );
};

export default TableRow;
