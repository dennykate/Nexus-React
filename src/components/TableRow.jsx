import React, { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { BiDotsVerticalRounded, BiPencil } from "react-icons/bi";
import { IoPersonRemoveOutline, IoTrashOutline } from "react-icons/io5";

import TableRowProfile from "./TableRowProfile";
import Dropdown from "./Dropdown";
import DropdownItem from "./DropdownItem";
import { tableRowDropdownData } from "../utils/data";
import { useDestroyMutation } from "../feature/api/contactsApi";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  removeFromFavorites,
  storeForFavorites,
} from "../feature/services/favoritesSlice";
import { removeFromFrequents } from "../feature/services/frequentsSlice";
import { removeContact } from "../feature/services/contactsSlice";

const TableRow = ({ name, email, phone, id, isFrequent }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [destroy] = useDestroyMutation();
  const { favorites } = useSelector((state) => state.favorites);
  const [checked, setChecked] = useState(false);

  const isAlreadyFavorited = favorites.find(
    (favorite) => favorite != null && favorite.id == id
  );

  const deleteHandler = async (e) => {
    e.stopPropagation();
    const { data, error } = await destroy(id);

    if (data?.success) {
      toast.success("Deleted successful");
      dispatch(removeContact({ id }));
    }
  };

  const removeHandler = (e) => {
    e.stopPropagation();
    dispatch(removeFromFrequents({ name, email }));
  };

  const addToFavoriteHandler = (e) => {
    e.stopPropagation();
    if (!isAlreadyFavorited)
      dispatch(storeForFavorites({ name, email, phone, id }));
    else dispatch(removeFromFavorites(id));
  };

  return (
    <tr
      onClick={() => navigate(`/detail/${id}`)}
      className={`w-full flex items-center h-[60px] group cursor-pointer hover:bg-[#F2F2F2] ${
        checked && "shadow-lg"
      }`}
    >
      <td className="lg:w-[25%] xl:w-[20%] sm:w-[40%] w-[70%] h-full flex items-center justify-start gap-4">
        <TableRowProfile
          name={name}
          setChecked={setChecked}
          checked={checked}
        />
        <h1 className=" font-[400] text-base text-[#5F6368]">{name}</h1>
      </td>
      <td className="lg:w-[25%] xl:w-[20%] w-[40%] h-full sm:flex hidden items-center justify-start px-1 ">
        <h1 className=" font-[400] text-base text-[#5F6368]">
          {email.lengtd > 18 ? email.slice(0, 18) + "..." : email}
        </h1>
      </td>
      <td className="xl:w-[20%] w-[25%] h-full lg:flex hidden items-center justify-start px-1">
        <h1 className=" font-[400] text-base text-[#5F6368]">{phone}</h1>
      </td>
      <td className="xl:w-[20%] w-[25%] h-full xl:flex hidden items-center justify-start px-1">
        <h1 className=" font-[400] text-base text-[#5F6368]"></h1>
      </td>
      <td className="sm:w-[20%] w-[30%] h-full hidden items-center gap-4 justify-end pr-3 group-hover:flex">
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
          {isFrequent ? (
            <DropdownItem
              Icon={IoPersonRemoveOutline}
              name="Remove From Frequent"
              onClick={removeHandler}
            />
          ) : (
            <DropdownItem
              Icon={IoTrashOutline}
              name="Delete"
              onClick={deleteHandler}
            />
          )}
        </Dropdown>
      </td>
      <td>
        <Toaster position="bottom-center" />
      </td>
    </tr>
  );
};

export default TableRow;
