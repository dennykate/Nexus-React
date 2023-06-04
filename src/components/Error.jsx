import React from "react";
import Lottie from "lottie-react";

import ErrorAnimation from "../assets/error-animation.json";

const Error = () => {
  return (
    <div className="w-full h-full flex justify-center items-center">
      <Lottie animationData={ErrorAnimation} className="max-w-[400px] mx-10" />
    </div>
  );
};

export default Error;
