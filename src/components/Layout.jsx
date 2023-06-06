import React, { useEffect, useState } from "react";

import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import { useDispatch } from "react-redux";
import { setBgColor, setScreenSize } from "../feature/services/isLgSlice";
import Guard from "./Guard";
import { getUsers } from "../feature/services/authSlice";
import AddToFavorite from "./AddToFavorite";
import { getRandomColor } from "../helper/functions";

const Layout = ({ children }) => {
  const [showSideBar, setShowSideBar] = useState(false);
  const [isLg, setIsLg] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setBgColor(getRandomColor()));
  }, []);

  useEffect(() => {
    dispatch(setScreenSize(isLg));
  }, [isLg]);

  useEffect(() => {
    dispatch(getUsers());
  }, []);

  useEffect(() => {
    if (window.innerWidth < 1024) {
      // setShowSideBar(false);
      setIsLg(false);
    } else {
      setShowSideBar(true);
      setIsLg(true);
    }
  }, []);

  useEffect(() => {
    window.addEventListener("resize", () => {
      if (window.innerWidth < 1024) {
        setShowSideBar(false);
        setIsLg(false);
      } else {
        setShowSideBar(true);
        setIsLg(true);
      }
    });
  }, []);

  return (
    <Guard>
      <div className="w-full h-screen flex flex-col">
        <Navbar setShowSideBar={setShowSideBar} showSideBar={showSideBar} />
        <div className="w-full flex h-full overflow-hidden">
          <Sidebar showSideBar={showSideBar} />
          <div
            onClick={() => !isLg && setShowSideBar(false)}
            className={`${
              showSideBar ? "lg:w-[80%] w-full" : "w-full"
            } transition-all ease-in-out duration-200 overflow-y-auto lg:static relative `}
          >
            {children}
          </div>
        </div>
      </div>

      <AddToFavorite />
    </Guard>
  );
};

export default Layout;
