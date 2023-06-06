import React, { useEffect, useState } from "react";
import { MdOutlineFavoriteBorder, MdOutlineClose } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { sortFrequent } from "../helper/functions";
import { storeForFavorites } from "../feature/services/favoritesSlice";

const AddToFavorite = () => {
  const dispatch = useDispatch();
  const [show, setShow] = useState(true);

  const { favorites } = useSelector((state) => state.favorites);
  let { frequents } = useSelector((state) => state.frequents);

  const isExistInFavorite = favorites.find(
    (favorite) => favorite != null && favorite.id == frequents[0].id
  );

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
      show
        ? "animate__animated animate__slideInUp"
        : "animate__animated animate__slideOutDown"
    }`}
    >
      <div className="w-full flex items-center gap-3">
        <div className="w-[80px] h-[80px] rounded-full bg-primary flex justify-center items-center">
          <h1 className="text-white text-4xl uppercase">T</h1>
        </div>
        <div className="flex flex-col items-start">
          <h1 className="text-black font-medium">{frequents[0].name}</h1>
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
        <h1>Add To Favorite ?</h1>
      </button>

      <button
        onClick={() => setShow(false)}
        className="absolute top-5 right-5 text-gray-600 hover:text-red-600"
      >
        <MdOutlineClose size={19} />
      </button>
    </div>
  );
};

export default AddToFavorite;
