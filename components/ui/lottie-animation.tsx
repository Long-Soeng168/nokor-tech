'use client'

import Lottie from "lottie-react";
import React from "react";

const LottieAnimation = ({ animationData, isLoop = false }) => {
  return (
    <div>
      <Lottie
        animationData={animationData}
        className={`flex items-center justify-center w-60`}
        loop={isLoop}
      />
    </div>
  );
};

export default LottieAnimation;
