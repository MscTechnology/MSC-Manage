import React from "react";
import ".//personel.css";
import {
  AutoForm,
  HiddenField,
  AutoField,
  SubmitField,
} from "uniforms-material";
import { PhotoCamera, DeleteForeverIcon } from "@mui/icons-material";
import { Button, IconButton, styled } from "@mui/material";

function Documents() {
  const Input = styled("input")({
    display: "none",
  });
  return (
    <div className="containerdcs">
      <div className="docs-title">Documents</div>
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
  );
}

export default Documents;
