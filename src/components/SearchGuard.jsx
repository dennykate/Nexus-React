import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const SearchGuard = ({ children }) => {
  const { contacts } = useSelector((state) => state.contacts);
  
  if (contacts.length == 0) return <Navigate to="/" />;
  else return children;
};

export default SearchGuard;
