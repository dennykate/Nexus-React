import React from "react";
import ReactPaginate from "react-paginate";

const Pagination = ({ handlePageClick, pageCount }) => {
  return (
    <ReactPaginate
      breakLabel="..."
      nextLabel="Next"
      onPageChange={handlePageClick}
      pageRangeDisplayed={1}
      pageCount={pageCount}
      previousLabel="Previous"
      renderOnZeroPageCount={null}
      className="flex flex-row shadow-lg rounded bg-[#f5f5f5]"
      pageClassName="w-[50px] h-[40px] flex justify-center items-center  text-sm"
      breakClassName="w-[50px] h-[40px] flex justify-center items-center  text-black text-sm"
      previousClassName="w-[80px] h-[40px] flex justify-center items-center  text-black text-sm"
      nextClassName="w-[80px] h-[40px] flex justify-center items-center  text-black text-sm"
      activeClassName="bg-primary text-white font-bold"
    />
  );
};

export default Pagination;
