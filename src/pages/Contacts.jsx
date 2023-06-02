import React, { useEffect, useState } from "react";

import Layout from "../components/Layout";
import Table from "../components/Table";
import { useGetAllQuery } from "../feature/api/contactsApi";
import Pagination from "../components/Pagination";
import Loading from "../components/Loading";
import { getAllContacts } from "../helper/functions";
import { useDispatch, useSelector } from "react-redux";
import { addContacts } from "../feature/service/contactsSlice";

const Contacts = () => {
  const dispatch = useDispatch();
  const { contacts } = useSelector((state) => state.contacts);
  const [page, setPage] = useState(1);
  const { data, error, isLoading } = useGetAllQuery(page);
  const perPage = data?.contacts?.per_page;

  const handlePageClick = (e) => {
    setPage(e.selected + 1);
  };

  useEffect(() => {
    if (perPage) getContacts();
  }, [perPage]);

  const getContacts = async () => {
    if (contacts.length == 0) {
      const data = await getAllContacts(perPage);

      dispatch(addContacts(data));
      // console.log(data);
    }
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
