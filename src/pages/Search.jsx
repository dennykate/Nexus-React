import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import Layout from "../components/Layout";
import { useNavigate, useParams } from "react-router-dom";
import Loading from "../components/Loading";
import Table from "../components/Table";
import { storeForFrequent } from "../helper/functions";

const Search = () => {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const { contacts } = useSelector((state) => state.contacts);
  const { id } = useParams();

  if (contacts.length == 0) navigate("/");

  useEffect(() => {
    searchContacts();
  }, [id]);

  const searchContacts = () => {
    const searchContactsArr = contacts.filter((contact) => {
      if (contact?.name.toLowerCase().indexOf(id) >= 0) {
        return contact;
      }
    });

    if (searchContactsArr) storeForFrequent(searchContactsArr[0]);

    setData({ data: searchContactsArr, total: searchContactsArr.length });
  };

  return (
    <Layout>{data.length == 0 ? <Loading /> : <Table data={data} />}</Layout>
  );
};

export default Search;
