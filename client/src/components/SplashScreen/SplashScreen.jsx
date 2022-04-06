import '../../styles.css'
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';


const SplashScreen = () => {
  return (
    <div className='splash'>
         <div className='splash-img'>
          <img src={require("./logo.jpg")} alt="" />
        </div>
        <Box sx={{ width: '100%'  }}>
        
      <LinearProgress color='error' />
    </Box>
    </div>
  )
}

export default SplashScreen