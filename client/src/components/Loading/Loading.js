import React from 'react'
import Lottie from 'lottie-react';
import LoadingAnimation from "../../assets/animations/loading.json"

function Loading() {
  return (
    <Lottie
    animationData={LoadingAnimation} loop={true} autoPlay={true}
    />
  )
}

export default Loading