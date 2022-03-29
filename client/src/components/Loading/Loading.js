import React from 'react'
import AnimatedLottieViewProps from 'lottie-react';

function Loading() {
  return (
    <AnimatedLottieViewProps
      source={require('../../assets/animations/loading.json')}
      autoPlay
    />
  )
}

export default Loading