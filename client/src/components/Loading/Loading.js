import React from "react";
import Lottie from "lottie-react";
import LoadingAnimation from "../../assets/animations/loading.json";

function Loading() {
  
  return (
    <Lottie
      animationData={LoadingAnimation}
      loop={true}
      autoPlay={true}
      style={{ width: "30%", marginLeft: "35%", marginTop: "8%" }}
    />
  );
}

export default Loading;
