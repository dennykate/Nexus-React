import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getFavorites } from "../feature/services/favoritesSlice";
import Layout from "../components/Layout";
import Table from "../components/Table";
import Error from "../components/Error";
import { getFrequents } from "../feature/services/frequentsSlice";

const Favorite = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getFavorites());
    dispatch(getFrequents());
  }, []);

  const { favorites } = useSelector((state) => state.favorites);
  console.log(favorites);

  return (
    <Layout>
      {favorites.length > 0 && favorites[0] != null ? (
        <Table data={{ data: favorites, total: favorites.length }} />
      ) : (
        <Error />
      )}
    </Layout>
  );
};

export default Favorite;
