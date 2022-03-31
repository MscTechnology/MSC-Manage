import '../../styles.css'
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';
import LottieView from "lottie-react"


const SplashScreen = () => {
  return (
    <div className='splash'>
        
        <h1 className='splash-title'>MSC Teknoloji</h1>
        <Box sx={{ width: '100%'  }}>
        <LottieView
      source={require('../../assets/animations/loading.json')}
      autoPlay
    />
      <LinearProgress  />
    </Box>
    </div>
  )
}

export default SplashScreen