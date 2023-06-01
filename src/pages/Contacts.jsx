import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";

import Layout from "../components/Layout";
import Table from "../components/Table";
import { useGetAllQuery } from "../feature/api/contactsApi";

const Contacts = () => {
  const [page, setPage] = useState(1);
  const { data, error, isLoading } = useGetAllQuery(page);

  console.log(data);

  const handlePageClick = (e) => {
    setPage(e.selected + 1);
  };

  return (
    <Layout>
      {data ? <Table data={data.contacts} /> : ""}

      <div className="flex justify-end pr-[10px]">
        <ReactPaginate
          breakLabel="..."
          nextLabel="Next"
          onPageChange={handlePageClick}
          pageRangeDisplayed={1}
          pageCount={11}
          previousLabel="Previous"
          renderOnZeroPageCount={null}
          className="flex flex-row"
          pageClassName="w-[50px] h-[40px] flex justify-center items-center bg-primary text-white text-sm"
          breakClassName="w-[50px] h-[40px] flex justify-center items-center bg-primary text-white text-sm"
          previousClassName="w-[80px] h-[40px] flex justify-center items-center bg-primary text-white text-sm"
          nextClassName="w-[80px] h-[40px] flex justify-center items-center bg-primary text-white text-sm"
        />
      </div>

      <div className="h-[20px]" />
    </Layout>
  );
};

export default Contacts;
