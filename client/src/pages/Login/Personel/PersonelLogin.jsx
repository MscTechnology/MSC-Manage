import React, { useState } from 'react'
import { TextField, Box, Button } from '@mui/material';
import "../login.css"
import CustomButton from '../../../components/Button/CustomButton';
import { Link } from "react-router-dom";

const PersonelLogin = () => {
  const [login, setLogin] = useState(false)

  const handleLogin =(e)=>{
    if(e.target.value==="kubra"){
    setLogin(true)
    }
    
   { login ? alert("Giriş Başarılı") : alert("kullanıcı adı veya şifre hatalı")}
  }

  return (
    <div className='container'>
      <div className='title'>Personel Log In</div>
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
        <CustomButton color={"primary"} className="btn" title={"Log In"} onClick={handleLogin}></CustomButton>
          </div>
      </div>
    </div>
  )
}

export default PersonelLogin