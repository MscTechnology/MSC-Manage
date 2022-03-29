import { Button, IconButton, styled } from "@mui/material";
import {PhotoCamera} from "@mui/icons-material";
import React from "react";
import "../personel.css"
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { AutoForm, HiddenField, AutoField } from "uniforms-material";
import { bridge as schema } from "./guncelleSchema";

function BilgileriGuncelle() {

  const user = useSelector(state => state.users.user)
  console.log(user)
  const Input = styled('input')({
    display: 'none',
  });
  return <div className="bilgileriguncelle">
    <div className="title">Update Your Informations</div>
    <AutoForm schema={schema} onSubmit={() => alert('informations updated')}>
      <div className="info">
        <span className="info">{user.name}</span>

      </div>
      <AutoField name={"name"} />
      <AutoField name={"surname"} />
      <AutoField name={"username"} />
      <AutoField name={"password"} />
      <div className="btns-1"> 
        <div className="btns-2">
      <span>add or update your image</span>
          <label htmlFor="icon-button-file">
            <Input accept="image/*" id="icon-button-file" type="file" />
            <IconButton color="primary" aria-label="upload picture" component="span">
              <PhotoCamera />
             </IconButton>
          </label>
        </div>
        <div></div>
      </div>


      <div className="btns">
        <div className="btn-1">
          <Button color={"primary"} variant="outlined" as={NavLink} to="/personel">
            Go Back
          </Button>
        </div>
        <div className="btn-2">
          <button color={"primary"} variant="outlined">
            Update Informations
          </button>
        </div>
      </div>
    </AutoForm>
  </div>;
}

export default BilgileriGuncelle;
