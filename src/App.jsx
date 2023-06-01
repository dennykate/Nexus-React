import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";

import Contacts from "./pages/Contacts";
import Create from "./pages/Create";
import Frequent from "./pages/Frequent";
import Person from "./pages/Person";
import Search from "./pages/Search";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Contacts />} />
      <Route path="/create" element={<Create />} />
      <Route path="/frequent" element={<Frequent />} />
      <Route path="/person/:id" element={<Person />} />
      <Route path="/search/:id" element={<Search />} />
    </Routes>
  );
};

export default App;
