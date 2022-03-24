import React from 'react'
import { TextField, Box, Button } from '@mui/material';
import "../login.css"

import CustomButton from '../../../components/Button/CustomButton';
import { Link } from "react-router-dom";

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
      <div className="btns">
          <div className="btn-1">
          <CustomButton color={"primary"} components={Link} to="" onClick={()=>{}} title={"Go Back"}/>
          </div>
          <div>
          <CustomButton color={"primary"} components={Link} to="admin" className="btn" onClick={()=>{}} title={"Log In"} ></CustomButton>

          </div>
      </div>
    </div>
  )
}

export default AdminLogin