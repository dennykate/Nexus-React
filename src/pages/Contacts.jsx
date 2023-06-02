import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import Layout from "../components/Layout";
import Table from "../components/Table";
import { useGetAllQuery } from "../feature/api/contactsApi";
import Pagination from "../components/Pagination";
import Loading from "../components/Loading";
import { addContacts } from "../feature/service/contactsSlice";

const Contacts = () => {
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);
  const { data, error, isLoading } = useGetAllQuery(page);
  dispatch(addContacts(data));

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

      <div className="h-[20px]" />
    </Layout>
  );
};

export default Contacts;
