import React from "react";
import TableHead from "./TableHead";
import TableRow from "./TableRow";
import Pagination from "./Pagination";

const Table = ({ data, isFrequent, setPage }) => {
  const handlePageClick = (e) => {
    setPage(e.selected + 1);
  };

  return (
    <div className="w-full sm:px-4 px-1">
      <TableHead />

      {/* title for table */}

      <div className="flex flex-row  items-center justify-between relative w-full ">
        <h6 className="text-xs uppercase font-[500] mx-1 my-3 text-[#5F6368]">
          Contacts ( {data.total} )
        </h6>
        {setPage && (
          <Pagination
            handlePageClick={handlePageClick}
            pageCount={data.last_page}
          />
        )}
        {setPage && (
          <h6 className="text-sm md:block hidden">
            Showing {data?.from} - {data?.to} of {data?.total} results
          </h6>
        )}
      </div>

      <table className="w-full mb-3">
        <tbody>
          {data?.data?.map((data, index) => (
            <TableRow key={index} {...data} isFrequent={isFrequent} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
