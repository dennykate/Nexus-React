import React from "react";
import Lottie from "lottie-react";

import EmptyAnimation from "../assets/empty-animation.json";

const Error = () => {
  return (
    <div className="w-full h-full flex justify-center items-center">
      <Lottie animationData={EmptyAnimation} className="max-w-[400px] mx-10" />
    </div>
  );
};

export default Error;
