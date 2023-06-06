import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getFrequents } from "../feature/services/frequentsSlice";
import Table from "../components/Table";
import Layout from "../components/Layout";
import SearchGuard from "../components/SearchGuard";
import Error from "../components/Error";
import Footer from "../components/Footer";

const Frequent = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getFrequents());
  }, []);

  const { frequents } = useSelector((state) => state.frequents);

  console.log(frequents);

  return (
    <SearchGuard>
      <Layout>
        {frequents.length > 0 ? (
          <Table
            data={{ data: frequents, total: frequents.length }}
            isFrequent
          />
        ) : (
          <Error />
        )}
        
      </Layout>
    </SearchGuard>
  );
};

export default Frequent;
