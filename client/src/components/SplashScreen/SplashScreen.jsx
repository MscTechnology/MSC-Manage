import '../../styles.css'
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';

const SplashScreen = () => {
  return (
    <div className='splash'>
        
        <h1 className='splash-title'>MSC Teknoloji</h1>
        <Box sx={{ width: '100%'  }}>
      <LinearProgress  />
    </Box>
    </div>
  )
}

export default SplashScreen