import React from "react";
import { useSelector, useState } from "react-redux";

import Layout from "../components/Layout";
import { useParams } from "react-router-dom";

const Search = () => {
  const { contacts } = useSelector((state) => state.contacts);
  const { id } = useParams();
  const [data, setData] = useState([]);

  return <Layout></Layout>;
};

export default Search;
