import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { BiDotsVerticalRounded, BiPencil } from "react-icons/bi";
import { IoPersonRemoveOutline, IoTrashOutline } from "react-icons/io5";

import TableRowProfile from "./TableRowProfile";
import Dropdown from "./Dropdown";
import DropdownItem from "./DropdownItem";
import { tableRowDropdownData } from "../utils/data";
import { useDestroyMutation } from "../feature/api/contactsApi";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { removeFromFrequents } from "../feature/services/frequentsSlice";
import {
  removeFromFavorites,
  storeForFavorites,
} from "../feature/services/favoritesSlice";

const TableRow = ({ name, email, phone, id, isFrequent }) => {
  const dispatch = useDispatch();
  const [destroy] = useDestroyMutation();
  const { favorites } = useSelector((state) => state.favorites);
  const [checked, setChecked] = useState(false);

  const isAlreadyFavorited = favorites.find(
    (favorite) => favorite != null && favorite.id == id
  );

  const deleteHandler = async () => {
    const { data } = await destroy(id);

    if (data?.success) {
      toast.success("Deleted successful");
    }
  };

  const removeHandler = () => {
    dispatch(removeFromFrequents({ name, email }));
  };

  const addToFavoriteHandler = () => {
    if (!isAlreadyFavorited)
      dispatch(storeForFavorites({ name, email, phone, id }));
    else dispatch(removeFromFavorites(id));
  };

  return (
    <tr
      className={`w-full flex items-center h-[60px] group cursor-pointer hover:bg-[#F2F2F2] ${
        checked && "shadow-md"
      }`}
    >
      <th className="lg:w-[25%] xl:w-[20%] sm:w-[40%] w-[70%] h-full flex items-center justify-start gap-4">
        <TableRowProfile
          name={name}
          checked={checked}
          setChecked={setChecked}
        />
        <h1 className=" font-[400] text-base text-[#5F6368] truncate">
          {name}
        </h1>
      </th>
      <th className="lg:w-[25%] xl:w-[20%] w-[40%] h-full sm:flex hidden items-center justify-start px-1 ">
        <h1 className=" font-[400] text-base text-[#5F6368]">
          {email.length > 18 ? email.slice(0, 18) + "..." : email}
        </h1>
      </th>
      <th className="xl:w-[20%] w-[25%] h-full lg:flex hidden items-center justify-start px-1">
        <h1 className=" font-[400] text-base text-[#5F6368]">{phone}</h1>
      </th>
      <th className="xl:w-[20%] w-[25%] h-full xl:flex hidden items-center justify-start px-1">
        <h1 className=" font-[400] text-base text-[#5F6368]"></h1>
      </th>
      <th className="sm:w-[20%] w-[30%] h-full hidden items-center gap-4 justify-end pr-3 group-hover:flex">
        <button
          onClick={addToFavoriteHandler}
          className="text-[#5F6368] hover:text-black"
        >
          {isAlreadyFavorited ? (
            <AiFillStar size={19} className="text-primary" />
          ) : (
            <AiOutlineStar size={19} />
          )}
        </button>

        <Link to={`/edit/${id}`}>
          <BiPencil size={19} className="text-[#5F6368] hover:text-black" />
        </Link>

        <Dropdown Icon={BiDotsVerticalRounded}>
          {tableRowDropdownData.map((data, index) => (
            <DropdownItem key={index} Icon={data?.Icon} name={data?.name} />
          ))}
          <DropdownItem
            Icon={IoTrashOutline}
            name="Delete"
            onClick={deleteHandler}
          />
          {isFrequent && (
            <DropdownItem
              Icon={IoPersonRemoveOutline}
              name="Remove From Frequent"
              onClick={removeHandler}
            />
          )}

          <Toaster />
        </Dropdown>
      </th>
    </tr>
  );
};

export default TableRow;
