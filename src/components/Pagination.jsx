import React from "react";
import ReactPaginate from "react-paginate";

const Pagination = ({ handlePageClick, pageCount }) => {
  return (
    <ReactPaginate
      breakLabel="..."
      nextLabel=">>"
      onPageChange={handlePageClick}
      pageRangeDisplayed={1}
      pageCount={pageCount}
      previousLabel="<<"
      renderOnZeroPageCount={null}
      className="flex flex-row  rounded bg-white my-2"
      pageClassName="sm:w-[35px] sm:h-[35px] w-[25px] h-[25px] flex justify-center items-center  text-base text-xs"
      breakClassName="sm:w-[35px] sm:h-[35px] w-[25px] h-[25px] flex justify-center items-center  text-black text-base text-xs"
      previousClassName="sm:w-[35px] sm:h-[35px] w-[25px] h-[25px] flex justify-center items-center  text-black text-base text-xs"
      nextClassName="sm:w-[35px] sm:h-[35px] w-[25px] h-[25px] flex justify-center items-center  text-black text-base text-xs"
      activeClassName="text-primary font-bold text-sm"
    />
  );
};

export default Pagination;
