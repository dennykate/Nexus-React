import React from "react";
import { Route, Routes } from "react-router-dom";

import "./App.css";
import LoginForm from "./pages/LoginForm";
import RegisterForm from "./pages/RegisterForm";
import Contacts from "./pages/Contacts";
import Create from "./pages/Create";
import Frequent from "./pages/Frequent";
import Person from "./pages/Person";
import Search from "./pages/Search";
import Edit from "./pages/Edit";
import Detail from "./pages/Detail";
import Favorite from "./pages/Favorite";
import UserProfile from "./pages/UserProfile";
import Guard from "./components/Guard";

const App = () => {
  return (
    <Routes>
      <Route path="/login" element={<LoginForm />} />
      <Route path="/register" element={<RegisterForm />} />
      <Route path="/" element={<Contacts />} />
      <Route path="/create" element={<Create />} />
      <Route path="/frequent" element={<Frequent />} />
      <Route path="/favorite" element={<Favorite />} />
      <Route path="/person/:id" element={<Person />} />
      <Route path="/search/:id" element={<Search />} />
      <Route path="/edit/:id" element={<Edit />} />
      <Route path="/detail/:id" element={<Detail />} />
      <Route
        path="/profile"
        element={
          <Guard>
            <UserProfile />
          </Guard>
        }
      />
    </Routes>
  );
};

export default App;
