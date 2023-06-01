import React from "react";
import TableHead from "./TableHead";
import TableRow from "./TableRow";
import { dummyData } from "../utils/data";

const Table = () => {
  return (
    <div className="w-full px-4">
      <TableHead />

      {/* title for table */}
      <h6 className="text-xs uppercase font-[500] mx-1 my-3 text-[#5F6368]">
        Contacts ( 27 )
      </h6>
      
      <table className="w-full ">
        {dummyData.map((data, index) => (
          <TableRow key={index} {...data} />
        ))}
      </table>
    </div>
  );
};

export default Table;
