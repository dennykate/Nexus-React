import React, { useEffect, useState } from "react";

import Layout from "../components/Layout";
import Table from "../components/Table";
import { useGetAllQuery } from "../feature/api/contactsApi";
import Pagination from "../components/Pagination";
import Loading from "../components/Loading";
import CreateBtn from "../components/CreateBtn";

const Contacts = () => {
  const [page, setPage] = useState(1);
  const { data, error, isLoading } = useGetAllQuery(page);
  const contacts = data?.contacts?.data;

  const handlePageClick = (e) => {
    setPage(e.selected + 1);
  };

  return (
    <Layout>
      {isLoading ? <Loading /> : <Table data={data.contacts} />}

      <div className="flex justify-end pr-[10px]">
        {data && (
          <Pagination
            handlePageClick={handlePageClick}
            pageCount={data.contacts.last_page}
          />
        )}
      </div>
          <CreateBtn/>
      <div className="h-[20px]" />
    </Layout>
  );
};

export default Contacts;
