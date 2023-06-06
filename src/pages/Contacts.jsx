import React, { useEffect, useState } from "react";

import Layout from "../components/Layout";
import Table from "../components/Table";
import { useGetAllQuery } from "../feature/api/contactsApi";
import Pagination from "../components/Pagination";
import Loading from "../components/Loading";

import { getAllContacts } from "../helper/functions";
import { useDispatch, useSelector } from "react-redux";
import { addContacts, addTotal } from "../feature/services/contactsSlice";
import IsLgBtn from "../components/IsLgBtn";
import { GoPlus } from "react-icons/go";

const Contacts = () => {
  const dispatch = useDispatch();
  const { contacts } = useSelector((state) => state.contacts);
  const { users } = useSelector((state) => state.authSlice);
  console.log(users);

  const [page, setPage] = useState(1);
  const { data, error, isLoading } = useGetAllQuery(page);
  const lastPage = data?.contacts?.last_page;

  const handlePageClick = (e) => {
    setPage(e.selected + 1);
  };

  useEffect(() => {
    if (data) dispatch(addTotal(data));
  }, [data]);

  useEffect(() => {
    if (lastPage) getContacts();
  }, [lastPage]);

  const getContacts = async () => {
    if (contacts.length == 0) {
      const data = await getAllContacts(lastPage);

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

      <IsLgBtn
        Icon={GoPlus}
        pathname="/create"
        bgColor={"white"}
        textColor={"text-primary"}
      />
    </Layout>
  );
};

export default Contacts;
