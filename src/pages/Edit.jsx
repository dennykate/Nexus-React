import React from "react";
import { useState } from "react";
import Input from "../components/Input";
import Layout from "../components/Layout";
import { BiImageAdd, BiPlus } from "react-icons/bi";
import { IoMdClose } from "react-icons/io";
import { Link, useNavigate, useParams } from "react-router-dom";
import { FaAddressBook, FaRegUser } from "react-icons/fa";
import { MdLocalPhone, MdOutlineMail } from "react-icons/md";
import {
  useCreateContactMutation,
  useGetSingleContactQuery,
  useUpdateContactMutation,
} from "../feature/api/contactsApi";
import toast, { Toaster } from "react-hot-toast";
import { useEffect } from "react";

const Edit = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { data, isLoading } = useGetSingleContactQuery(id);
  const contact = data?.contact;
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [updateProduct] = useUpdateContactMutation();

  useEffect(() => {
    if (data) {
      setName(data?.contact?.name);
      setPhone(data?.contact?.phone);
      setEmail(data?.contact?.email);
      setAddress(data?.contact?.address);
    }
  }, [data]);

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    const contact = { id, name, phone, email, address };
    console.log(contact);
    const { data } = await updateProduct(contact);
    if (data) {
      toast.success("Successfully updated");
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
          <h1 className="text-gray-600 text-xl">Edit Contact</h1>
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
        <Link to={"/"}>
          <button className="lg:block hidden absolute top-2 left-2 z-10">
            <IoMdClose className="text-2xl" />
          </button>
        </Link>
        <div className="w-full lg:border-b px-14 py-5 relative">
          <div className="lg:flex-row flex flex-col lg:justify-start gap-8 items-center">
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
          className="w-full flex flex-col gap-8 px-14 py-8"
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

export default Edit;
