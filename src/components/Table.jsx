import React from "react";
import TableHead from "./TableHead";
import TableRow from "./TableRow";

const Table = ({ data,isFrequent }) => {
  return (
    <div className="w-full sm:px-4 px-1">
      <TableHead />

      {/* title for table */}
      <h6 className="text-xs uppercase font-[500] mx-1 my-3 text-[#5F6368]">
        Contacts ( {data.total} )
      </h6>

      <table className="w-full mb-3">
        <tbody>
          {data?.data.map((data, index) => (
            <TableRow key={index} {...data} isFrequent={isFrequent} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
