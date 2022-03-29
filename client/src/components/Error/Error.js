import React from 'react'
import AnimatedLottieViewProps from 'lottie-react';

function Error() {
  return (
    <AnimatedLottieViewProps
      source={require('../../assets/animations/error.json')}
      autoPlay
      resizeMode="cover"
      style={{width: '100%'}}
    />
  )
}

export default Error