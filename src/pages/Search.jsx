import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import Layout from "../components/Layout";
import { useNavigate, useParams } from "react-router-dom";
import Loading from "../components/Loading";
import Table from "../components/Table";
import { storeForFrequent } from "../helper/functions";
import IsLgBtn from "../components/IsLgBtn";
import { GoPlus } from "react-icons/go";

const Search = () => {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const { contacts } = useSelector((state) => state.contacts);
  const { id } = useParams();

  if (contacts.length == 0) navigate("/");

  useEffect(() => {
    if (id) searchContacts();
  }, [id, contacts]);

  const searchContacts = () => {
    const searchContactsArr = contacts.filter((contact) => {
      if (contact?.name.toLowerCase().indexOf(id.toLowerCase()) >= 0) {
        return contact;
      }
    });

    if (searchContactsArr.length > 0) storeForFrequent(searchContactsArr[0]);

    setData({ data: searchContactsArr, total: searchContactsArr.length });
  };

  return (
    <Layout>
      {data.length == 0 ? <Loading /> : <Table data={data} />}
      <IsLgBtn
        Icon={GoPlus}
        pathname="/create"
        bgColor={"white"}
        textColor={"text-primary"}
      />
    </Layout>
  );
};

export default Search;
