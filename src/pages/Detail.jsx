import React from "react";
import Layout from "../components/Layout";
import { BiDotsVerticalRounded, BiImageAdd, BiPlus } from "react-icons/bi";

import {
  useDestroyMutation,
  useGetSingleContactQuery,
} from "../feature/api/contactsApi";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import { AiFillStar, AiOutlineArrowLeft, AiOutlineStar } from "react-icons/ai";
import Dropdown from "../components/Dropdown";
import DropdownItem from "../components/DropdownItem";
import { detailIcons, tableRowDropdownData } from "../utils/data";
import { Toaster, toast } from "react-hot-toast";
import { IoTrashOutline } from "react-icons/io5";
import { MdMailOutline, MdOutlineEdit, MdOutlinePhone } from "react-icons/md";
import { FaRegAddressCard } from "react-icons/fa";
import IsLgBtn from "../components/IsLgBtn";
import { useDispatch, useSelector } from "react-redux";
import {
  removeFromFavorites,
  storeForFavorites,
} from "../feature/services/favoritesSlice";

const Detail = () => {
  const [user, setUser] = useState();

  const dispatch = useDispatch();
  const { id } = useParams();
  const navigate = useNavigate();
  const { data } = useGetSingleContactQuery(id);
  const [destroy] = useDestroyMutation();
  const { favorites } = useSelector((state) => state.favorites);

  const isAlreadyFavorited = favorites.find((favorite) => favorite.id == id);

  const contact = data?.contact;
  useEffect(() => {
    if (contact) {
      setUser(contact);
    }
  }, [contact]);

  const deleteHandler = async () => {
    const { data } = await destroy(id);

    const notify = () => toast.success("Deleted successful");

    if (data?.success) {
      notify();
      setTimeout(() => {
        navigate("/");
      }, 1000);
    }
  };

  const addToFavoriteHandler = () => {
    if (!isAlreadyFavorited) dispatch(storeForFavorites(data.contact));
    else dispatch(removeFromFavorites(id));
  };

  return (
    <Layout>
      <div className="w-full flex lg:hidden justify-between items-center  p-5 ">
        <div className="flex gap-3">
          <button className="" onClick={() => navigate("/")}>
            <AiOutlineArrowLeft className="text-2xl" />
          </button>
        </div>
        <div className="flex gap-5 items-center">
          <button
            onClick={addToFavoriteHandler}
            className="text-[#5F6368] hover:text-black"
          >
            {isAlreadyFavorited ? (
              <AiFillStar className="text-primary" size={19} />
            ) : (
              <AiOutlineStar size={19} />
            )}
          </button>

          <Dropdown Icon={BiDotsVerticalRounded}>
            {tableRowDropdownData.map((data, index) => (
              <DropdownItem key={index} Icon={data?.Icon} name={data?.name} />
            ))}
            <DropdownItem
              Icon={IoTrashOutline}
              name="Delete"
              onClick={deleteHandler}
            />
          </Dropdown>
        </div>
      </div>
      <div className="w-full h-full p-2 lg:relative overflow-y-scroll">
        <button
          className="lg:block hidden absolute top-2 left-2 z-10"
          onClick={() => navigate("/")}
        >
          <AiOutlineArrowLeft className="text-2xl text-gray-600" />
        </button>

        <div className="w-full border-b px-14 lg:py-8 py-12 relative">
          <div className="lg:flex-row flex flex-col gap-8 lg:justify-start items-center ">
            <div className="w-[160px] h-[160px] rounded-full bg-primary bg-opacity-50 flex justify-center items-center">
              <h1 className="uppercase text-white text-[80px]">
                {user?.name.slice(0, 1)}
              </h1>
            </div>
            <div className="flex flex-col lg:items-start items-center gap-3">
              <h1 className="text-3xl text-gray-600">{user?.name}</h1>
              <button className="px-2 py-1 border rounded-md flex gap-2 items-center">
                <BiPlus className="text-lg text-primary" />
                <span className="text-center text-sm">Label</span>
              </button>
            </div>
          </div>
          <div className=" gap-5  absolute bottom-[40px] right-[150px] lg:flex hidden items-center">
            <button
              onClick={addToFavoriteHandler}
              className="text-[#5F6368] hover:text-black"
            >
              {isAlreadyFavorited ? (
                <AiFillStar className="text-primary" size={19} />
              ) : (
                <AiOutlineStar size={19} />
              )}
            </button>

            <Dropdown Icon={BiDotsVerticalRounded}>
              {tableRowDropdownData.map((data, index) => (
                <DropdownItem key={index} Icon={data?.Icon} name={data?.name} />
              ))}
              <DropdownItem
                Icon={IoTrashOutline}
                name="Delete"
                onClick={deleteHandler}
              />
              <Toaster />
            </Dropdown>

            <Link to={`/edit/${id}`}>
              <button className="  px-5 py-2 rounded-md bg-primary bg-opacity-50 text-white">
                <span className="text-sm">Edit</span>
              </button>
            </Link>
          </div>

          <div className="absolute -bottom-5 left-0  w-full h-10 flex justify-center">
            <div className=" flex gap-5 h-10 lg:-translate-x-[200px]">
              {detailIcons.map(({ Icon }, index) => (
                <div
                  className="w-10 h-10 bg-white border rounded-full flex justify-center items-center"
                  key={index}
                >
                  <Icon className="text-xl text-gray-400" />
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className=" sm:px-5 px-1 py-10">
          <div className="border rounded-md lg:w-[450px] w-full p-3 ">
            <h1 className="mb-3 text-2xl font-normal">Contact details</h1>
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-3">
                <MdMailOutline className="text-xl text-gray-400" />
                <h1 className="text-primary text-sm">{user?.email}</h1>
              </div>
              <div className="flex items-center gap-3">
                <MdOutlinePhone className="text-xl text-gray-400" />
                <h1 className="text-primary text-sm">
                  {user?.phone}
                  <span className="text-gray-400"> • Mobile</span>
                </h1>
              </div>
              <div className="flex items-center gap-3">
                <FaRegAddressCard className="text-xl text-gray-400" />
                <h1 className="text-primary text-sm">{user?.address}</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
      <IsLgBtn
        Icon={MdOutlineEdit}
        pathname={`/edit/${id}`}
        bgColor={"bg-primary"}
        textColor={"text-white"}
      />
      <Toaster />
    </Layout>
  );
};

export default Detail;
