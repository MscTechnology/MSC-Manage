import React, { useState } from "react";
import "../personel.css";
import {
  AutoForm,
  HiddenField,
  AutoField,
  SubmitField,
} from "uniforms-material";
import { PhotoCamera, DeleteForeverIcon } from "@mui/icons-material";
import {
  IconButton,
  styled,
  Paper,
  TableRow,
  TableHead,
  TableContainer,
  TableCell,
  TableBody,
  Table,
} from "@mui/material";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { NavLink } from "react-router-dom";
import {
  useAddUserFileMutation,
  useUpdateUserMutation,
} from "generated/graphql";
import { useSelector } from "react-redux";
import { toast, ToastContainer } from "react-toastify";
import { bridge as schema } from "./DocumentsSchema";

const ImageField = ({ onChange, value }) => {
  return (
    <div className="ImageField">
      <label htmlFor="file-input">
        <div>Choose your photo</div>
        <img
          src={value || "https://picsum.photos/150?grayscale"}
          style={{ cursor: "pointer", width: "150px", height: "150px" }}
        />
      </label>
      <input
        accept="image/*"
        id="file-input"
        onChange={() => {}}
        style={{ display: "none" }}
        type="file"
      />
    </div>
  );
};

function Documents() {
  const [addUserFileMutation, { data, loading, error }] =
    useAddUserFileMutation({});

  const user = useSelector((state) => state.users.user);
  console.log(user);
  const [selectedFile, setSelectedFile] = useState();
  const [isFilePicked, setIsFilePicked] = useState(false);

  const changeHandler = (event) => {
    setSelectedFile(event.target.files[0]);
    setIsFilePicked(true);
  };

  const handleSave = (model) => {
    addUserFileMutation({
      variables: {
        prmUserFile: model
      },
    });
    console.log({
      variables: {
        prmUserFile: model,
      },
    });
  };

  console.log(selectedFile);

  return (
    <div className="containerdcs">
      <AutoForm
        schema={schema}
        onSubmit={(model) => {
          console.log(model, "asdasdsa");
          handleSave(model);
        }}
      >
        <HiddenField name="id" value={1} />
        <HiddenField name="usersid" value={user.id} />
        <HiddenField name="filetypesid" value={1} />
        <HiddenField name="createuser" value={user.createuser} />
        <HiddenField name="changeuser" value={user.changeuser} />
        <HiddenField name="extensitions" value={"gggg"} />
        <div style={{ textAlign: "center" }}>
          <ImageField name="data" value={user.data} />
          <SubmitField onSubmit={handleSave} />
          <Button variant="outlined" onClick={handleSave}>
            Save
          </Button>
        </div>
      </AutoForm>

      {/* 
      <div className="docs-title"><IconButton size="large" color="primary" component="span" as={NavLink}
        to="/personel">
        <ArrowBackIcon />
      </IconButton>Documents</div>

      <TableContainer className="table">
        <Table sx={{ maxWidth: 800, textAlign: 'center' }} aria-label="simple table">

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
              <Button onClick={() => alert("docs info")}>Open</Button>

            </TableRow>



          </TableBody>
        </Table>
      </TableContainer>

      <div className="upload-btns">
        <div className="btns-1">
          <div className="btns-2">
            <span>add or update your image</span>

            <div className="input">
              <input type="file" name="file" onChange={changeHandler} />

            </div>

          </div>
        </div>

        <div className="btns-1">
          <div className="btns-2">
            <span>add or update your student certificate</span>
            <label htmlFor="contained-button-file">
              <div className="input">
                <input type="file" name="file" onChange={changeHandler} />

              </div>
              


            </label>
          </div>
        </div>

        <div className="btns-1">
          <div className="btns-2">
            <span>add or update your certificate of graduation</span>

            <div className="input">
              <input type="file" name="file" onChange={changeHandler} />

            </div>

          </div>
        </div>
      </div>
      <div className="save-btn">

        <Button variant="outlined" onClick={handleSave}>Save</Button>
      </div> */}
    </div>
  );
}

export default Documents;
