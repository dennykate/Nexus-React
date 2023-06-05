import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import Layout from "../components/Layout";
import { useParams } from "react-router-dom";
import Loading from "../components/Loading";
import Table from "../components/Table";
import IsLgBtn from "../components/IsLgBtn";

const Search = () => {
  const [data, setData] = useState([]);
  const { contacts } = useSelector((state) => state.contacts);
  console.log(contacts);
  const { id } = useParams();

  useEffect(() => {
    searchContacts();
  }, [id]);

  const searchContacts = () => {
    const searchContactsArr = contacts.filter((contact) => {
      if (contact?.name.toLowerCase().indexOf(id) >= 0) {
        return contact;
      }
    });

    console.log(searchContactsArr);

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
