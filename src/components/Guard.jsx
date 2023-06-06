import Cookies from "js-cookie";
import React, { useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { removeUser } from "../feature/services/authSlice";

const Guard = ({ children }) => {
  const { keep } = useSelector((state) => state.authSlice);
  const token = Cookies.get("token");

  const keepme = keep
    ? keep
    : Cookies.get("keepme")
    ? JSON.parse(Cookies.get("keepme"))
    : Cookies.get("keepme");

  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    if (!keepme) {
      dispatch(removeUser());
      navigate("/login");
    }
  }, [keepme]);

  if (token) return children;
  else return <Navigate to="/login" />;
};

export default Guard;
