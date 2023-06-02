import React, { useEffect, useState } from "react";

import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

const Layout = ({ children }) => {
  const [showSideBar, setShowSideBar] = useState(true);

  return (
    <div className="w-full h-screen flex flex-col">
      <Navbar setShowSideBar={setShowSideBar} showSideBar={showSideBar} />
      <div className="w-full flex h-full overflow-hidden">
        <Sidebar showSideBar={showSideBar} />
        <div
          className={`${
            showSideBar ? "w-[80%]" : "w-full"
          } transition-all ease-in-out duration-200 overflow-y-auto `}
        >
          {children}
        </div>
      </div>
    </div>
  );
};

export default Layout;
