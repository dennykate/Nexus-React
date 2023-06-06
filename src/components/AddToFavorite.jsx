import React, { useEffect, useState } from "react";
import { MdOutlineFavoriteBorder, MdOutlineClose } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { sortFrequent } from "../helper/functions";
import {
  closeAddToFavorite,
  getFavorites,
  storeForFavorites,
} from "../feature/services/favoritesSlice";
import { getFrequents } from "../feature/services/frequentsSlice";

const AddToFavorite = () => {
  const dispatch = useDispatch();
  const { addToFavorite } = useSelector((state) => state.favorites);

  useEffect(() => {
    dispatch(getFavorites());
    dispatch(getFrequents());
  }, []);

  const { favorites } = useSelector((state) => state.favorites);
  const { frequents } = useSelector((state) => state.frequents);

  const isExistInFavorite = favorites.find(
    (favorite) =>
      favorite != null && frequents[0] && favorite.id == frequents[0].id
  );

  console.log(isExistInFavorite);

  const addToFavoriteHandler = () => {
    dispatch(storeForFavorites(frequents[0]));
  };

  if (
    isExistInFavorite ||
    frequents.length == 0 ||
    frequents[0].searchCount <= 5
  )
    return <></>;

  return (
    <div
      className={`fixed bottom-1 right-1 w-[300px] bg-white rounded-lg shadow-lg border p-5 
    ${
      addToFavorite ? "translate-y-0" : "translate-y-[100%]"
    } transition-all duration-500 ease-in-out`}
    >
      <div className="w-full flex items-center gap-3">
        <div className="w-[80px] h-[80px] rounded-full bg-primary flex justify-center items-center">
          <h1 className="text-white text-4xl uppercase">T</h1>
        </div>
        <div className="flex flex-col items-start">
          <h1 className="text-black font-medium text-xl">
            {frequents[0].name}
          </h1>
          <h1 className="text-black font-normal text-sm">
            {frequents[0].email}
          </h1>
        </div>
      </div>

      <button
        onClick={addToFavoriteHandler}
        className="w-full h-[40px] text-sm flex justify-center items-center rounded-md bg-primary text-white mt-5
      hover:bg-white border border-primary hover:text-primary transition-all duration-200 ease-in-out gap-1"
      >
        <MdOutlineFavoriteBorder size={19} />
        <h6>Add To Favorite ?</h6>
      </button>

      <button
        onClick={() => dispatch(closeAddToFavorite())}
        className="absolute top-5 right-5 text-gray-600 hover:text-red-600"
      >
        <MdOutlineClose size={19} />
      </button>
    </div>
  );
};

export default AddToFavorite;
