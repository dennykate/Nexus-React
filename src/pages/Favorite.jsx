import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Layout from "../components/Layout";
import { getFavorites } from "../feature/services/favoritesSlice";
import Table from "../components/Table";

const Favorite = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getFavorites());
  }, []);

  const { favorites } = useSelector((state) => state.favorites);

  console.log(favorites);

  return (
    <Layout>
      {favorites.length > 0 ? (
        <Table data={{ data: favorites, total: favorites.length }} isFrequent />
      ) : (
        <Error />
      )}
    </Layout>
  );
};

export default Favorite;
