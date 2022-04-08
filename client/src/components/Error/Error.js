import React from 'react'
import Lottie from 'lottie-react';
import ErrorAnimation from "../../assets/animations/error.json"

function Error() {
  return (
    <Lottie
      animationData={ErrorAnimation} loop={true} autoPlay={true}
    />
  )
}

export default Error