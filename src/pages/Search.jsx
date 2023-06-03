import React, { useState } from "react";
import { useSelector } from "react-redux";

import Layout from "../components/Layout";
import { useParams } from "react-router-dom";

const Search = () => {
  const { contacts } = useSelector((state) => state.contacts);
  console.log(contacts)
  const { id } = useParams();
  const [data, setData] = useState([]);

  return (<Layout>

  </Layout>);
};

export default Search;
