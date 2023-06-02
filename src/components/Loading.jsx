import React from "react";
import Lottie from "lottie-react";
import ContactLoading from "../assets/contact-loading.json";

const Loading = () => {
  return (
    <div className="w-full h-[400px] flex justify-center items-center">
      <Lottie animationData={ContactLoading} className="w-[400px]" loop />
    </div>
  );
};

export default Loading;
