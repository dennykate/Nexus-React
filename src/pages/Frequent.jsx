import React from "react";
import Layout from "../components/Layout";
import Cookies from "js-cookie";

const Frequent = () => {
  const frequentStr = Cookies.get("frequents");
  let frequents = [];
  if (frequentStr) {
    frequents = JSON.parse(frequentStr);
  }

  return <Layout></Layout>;
};

export default Frequent;
