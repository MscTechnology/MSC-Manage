import React from "react";
import "./personel.css";
import {
  AutoForm,
  HiddenField,
  AutoField,
  SubmitField,
} from "uniforms-material";
import { PhotoCamera, DeleteForeverIcon } from "@mui/icons-material";
import { IconButton, styled,Paper ,TableRow ,TableHead,TableContainer ,TableCell ,TableBody ,Table   } from "@mui/material";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { NavLink } from "react-router-dom";

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 500,
  height: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 5,
};

function Documents() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const Input = styled("input")({
    display: "none",
  });

  return (
    <div className="containerdcs">


      <div className="docs-title"><IconButton size="large" color="primary" component="span" as={NavLink}
        to="/personel">
        <ArrowBackIcon />
      </IconButton>Documents</div>
      
      <TableContainer className="table">
      <Table sx={{ maxWidth: 800,textAlign: 'center' }} aria-label="simple table">
        
          <TableHead >
          <TableRow>
            <TableCell align="center">Kimlik</TableCell>
            <TableCell align="center">Diploma</TableCell>
            <TableCell align="center"></TableCell>
          </TableRow>
        </TableHead>
    
        
        <TableBody>
          
             <TableRow
              
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell align="center">123</TableCell>
              <TableCell align="center">123</TableCell>
              <Button onClick={()=>alert("docs info")}>Open</Button>
          
            </TableRow>
       
           
        
        </TableBody>
      </Table>
    </TableContainer>
      
      <div className="upload-btns">
        <div className="btns-1">
          <div className="btns-2">
            <span>add or update your image</span>
            <label htmlFor="icon-button-file">
              <Input accept="image/*" id="icon-button-file" type="file" />
              <IconButton
                color="primary"
                aria-label="upload picture"
                component="span"
              >
                <PhotoCamera />
              </IconButton>
            </label>
          </div>
        </div>

        <div className="btns-1">
          <div className="btns-2">
            <span>add or update your student certificate</span>
            <label htmlFor="contained-button-file">
  <Input accept="image/*" id="contained-button-file" multiple type="file" />
  <Button variant="contained" component="span">
    Upload
  </Button>
</label>
          </div>
        </div>

        <div className="btns-1">
          <div className="btns-2">
            <span>add or update your certificate of graduation</span>
            <label htmlFor="icon-button-file">
              <Input accept="image/*" id="icon-button-file" type="file" />
              <IconButton
                color="primary"
                aria-label="upload picture"
                component="span"
              >
                <PhotoCamera />
              </IconButton>
            </label>
          </div>
        </div>
      </div>
        <div className="save-btn">

      <Button variant="outlined">Save</Button>
        </div>

    </div>
  );
}

export default Documents;
