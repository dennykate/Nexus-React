import React from "react";
import { Route, Routes } from "react-router-dom";

import LoginForm from "./pages/LoginForm";
import RegisterForm from "./pages/RegisterForm";
import Contacts from "./pages/Contacts";
import "./App.css";
import Guard from "./components/Guard";

const App = () => {
  return (
    <Routes>
      <Route path="/login" element={<LoginForm />} />
      <Route path="/register" element={<RegisterForm />} />
      <Route path="/" element={<Guard><Contacts /></Guard>} />
    </Routes>
  );
};

export default App;
