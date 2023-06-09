import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

import { storeForFrequents } from "../feature/services/frequentsSlice";
import Table from "../components/Table";
import Layout from "../components/Layout";
import Error from "../components/Error";
import SearchGuard from "../components/SearchGuard";
import Footer from "../components/Footer";

const Search = () => {
  const dispatch = useDispatch();
  const [data, setData] = useState(null);
  const { contacts } = useSelector((state) => state.contacts);
  const { id } = useParams();

  useEffect(() => {
    searchContacts();
  }, [id, contacts]);

  const searchContacts = () => {
    const searchContactsArr = contacts.filter((contact) => {
      if (contact?.name.toLowerCase().indexOf(id.toLowerCase()) >= 0) {
        return contact;
      }
    });

    if (searchContactsArr.length > 0)
      dispatch(storeForFrequents(searchContactsArr[0]));

    setData({ data: searchContactsArr, total: searchContactsArr.length });
  };

  return (
    <SearchGuard>
      <Layout>
        {data !== null && data.data.length > 0 && <Table data={data} />}
        {data && data.data.length == 0 && <Error />}
        
      </Layout>
    </SearchGuard>
  );
};

export default Search;
