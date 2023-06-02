import React from "react";
import {
  AiFillPrinter,
  AiOutlineDownload,
  AiOutlineUpload,
} from "react-icons/ai";
import { BiDotsVerticalRounded } from "react-icons/bi";

const TableHead = () => {
  return (
    <div className="w-full flex items-center border-b">
      <div className="lg:w-[20%] w-[40%] h-[50px] flex items-center justify-start px-1">
        <h1 className=" font-[500] text-sm text-[#5F6368]">Name</h1>
      </div>
      <div className="lg:w-[20%] w-[40%] h-[50px] flex items-center justify-start px-1">
        <h1 className=" font-[500] text-sm text-[#5F6368]">Email</h1>
      </div>
      <div className="w-[20%] h-[50px] lg:flex hidden items-center justify-start px-1">
        <h1 className=" font-[500] text-sm text-[#5F6368]">Phone number</h1>
      </div>
      <div className="w-[20%] h-[50px] xl:flex hidden items-center justify-start px-1">
        <h1 className=" font-[500] text-sm text-[#5F6368]">
          Job title & description
        </h1>
      </div>
      <div className="w-[20%] h-[50px] flex items-center gap-4 justify-end pr-3">
        <button datatooltip="Printer" aria-label="Printer">
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
      </div>
    </div>
  );
};

export default TableHead;
