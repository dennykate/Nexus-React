import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { useDispatch } from "react-redux";
import { BiImageAdd, BiPlus } from "react-icons/bi";
import { IoMdClose } from "react-icons/io";
import { useNavigate } from "react-router-dom";

import Input from "../components/Input";
import Layout from "../components/Layout";
import { FaAddressBook, FaRegUser } from "react-icons/fa";
import { MdLocalPhone, MdOutlineMail } from "react-icons/md";
import { useCreateContactMutation } from "../feature/api/contactsApi";
import { addSingleContact } from "../feature/services/contactsSlice";

const Create = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [createProduct] = useCreateContactMutation();

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    const contact = { name, phone, email, address };
    const { data } = await createProduct(contact);
    if (data) {
      toast.success("Successfully saved");
      dispatch(addSingleContact(data.contact));
    }
    console.log(data);
  };
  return (
    <Layout>
      <Toaster position="bottom-center" />
      <div className="w-full flex lg:hidden justify-between items-center  p-5 border-b">
        <div className="flex gap-3">
          <button className="" onClick={() => navigate("/")}>
            <IoMdClose className="text-2xl" />
          </button>
          <h1 className="text-gray-600 text-xl">Create Contact</h1>
        </div>
        <button
          type="submit"
          form="inputForm"
          className="px-5 py-2 rounded-md bg-secondary text-gray-400"
        >
          <span className="text-sm">Save</span>
        </button>
      </div>
      <div className="w-full h-full p-2 relative overflow-y-scroll">
        <button
          className="absolute top-2 left-2 z-10 lg:block hidden "
          onClick={() => navigate("/")}
        >
          <IoMdClose className="text-2xl" />
        </button>

        <div className="w-full lg:border-b px-14 lg:py-5 py-3 relative">
          <div className="lg:flex-row flex flex-col gap-8 lg:justify-start items-center ">
            <div className="w-[160px] h-[160px] rounded-full bg-primary bg-opacity-30 flex justify-center items-center">
              <BiImageAdd className=" text-4xl" />
            </div>
            <button className="px-2 py-1 border rounded-md flex gap-2 items-center">
              <BiPlus className="text-lg text-primary" />
              <span className="text-center text-sm">Label</span>
            </button>
          </div>
          <button
            type="submit"
            form="inputForm"
            className="lg:block hidden absolute bottom-[20px] right-[150px]  px-5 py-2 rounded-md bg-secondary text-gray-400"
          >
            <span className="text-sm">Save</span>
          </button>
        </div>
        <form
          id="inputForm"
          onSubmit={onSubmitHandler}
          className="w-full flex flex-col gap-8 sm:px-14 px-2 py-8"
        >
          <Input
            type={"text"}
            label={"Name"}
            Icon={FaRegUser}
            name={name}
            setName={setName}
          />
          <Input
            type={"text"}
            label={"Phone"}
            Icon={MdLocalPhone}
            name={phone}
            setName={setPhone}
          />
          <Input
            type={"email"}
            label={"Email"}
            Icon={MdOutlineMail}
            name={email}
            setName={setEmail}
          />
          <Input
            type={"text"}
            label={"address"}
            Icon={FaAddressBook}
            name={address}
            setName={setAddress}
          />
        </form>
      </div>
    </Layout>
  );
};

export default Create;
