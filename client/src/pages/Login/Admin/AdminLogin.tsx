import React from 'react'
import { TextField, Box, Button } from '@mui/material';
import "../login.css"

const AdminLogin = () => {
  return (
    <div className='container'>
      <div className='title'>Admin Log In</div>
      <Box className='box' sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}>
        
        <TextField id="outlined-basic" label="Username" variant="outlined" />
        <TextField id="outlined-basic" label="Password" variant="outlined" />
      </Box>
      <Button className="btn" size='large' variant="contained" disableElevation>Log In</Button>
    </div>
  )
}

export default AdminLogin