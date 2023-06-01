import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";

import Contacts from "./pages/Contacts";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Contacts />} />
    </Routes>
  );
};

export default App;
