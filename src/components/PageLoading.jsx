import React from "react";
import Loading from "./Loading";

const PageLoading = () => {
  return (
    <div className="w-screen h-screen bg-white fixed top-0 left-0 z-[1000]">
      <Loading />
    </div>
  );
};

export default PageLoading;
