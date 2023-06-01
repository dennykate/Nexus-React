import React, { useEffect, useState } from "react";

import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

const Layout = ({ children }) => {
  return (
    <div className="w-full h-screen flex flex-col">
      <Navbar />
      <div className="w-full flex h-full overflow-hidden">
        <Sidebar />
        <div className="w-full overflow-y-auto">{children}</div>
      </div>
    </div>
  );
};

export default Layout;
