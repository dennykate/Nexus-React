import React from "react";
import { GoPlus } from "react-icons/go";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const CreateBtn = () => {
  const { isLg } = useSelector((state) => state.isLg);
  return (
    <>
      {!isLg && (
        <Link to={"/create"}>
          <button className="fixed sm:bottom-8 sm:right-8  bottom-5 right-5 w-[56px] h-[56px] rounded-full shadow-xl shadow-gray-00 flex justify-center items-center z-10  bg-white">
            <GoPlus className="text-primary  text-3xl" />
          </button>
        </Link>
      )}
    </>
  );
};

export default CreateBtn;
