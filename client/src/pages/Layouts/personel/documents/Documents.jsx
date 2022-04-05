import React, { useState } from "react";
import "../personel.css";
import {
  AutoForm,
  HiddenField,
  AutoField,
  SubmitField,
  SelectField,
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
  useGetFileTypesQuery,
  useUpdateUserMutation,
} from "generated/graphql";
import { useSelector } from "react-redux";
import { toast, ToastContainer } from "react-toastify";
import { bridge as schema } from "./DocumentsSchema";
import {  connectField } from 'uniforms';
import { Upload } from '@progress/kendo-react-upload';

const UploadFile = () => {
  return <Upload batch={false} multiple={true} defaultFiles={[]} withCredentials={false} saveUrl={'https://demos.telerik.com/kendo-ui/service-v4/upload/save'} removeUrl={'https://demos.telerik.com/kendo-ui/service-v4/upload/remove'} />;
};

const Image= ({ onChange, value }) => {
  return (
    <div className="ImageField">
      <label htmlFor="file-input">
        <div>Choose your photo</div>
        <img
          alt=""
          src={value || 'https://picsum.photos/150?grayscale'}
          style={{ cursor: 'pointer', width: '150px', height: '150px' }}
        />
      </label>
      <input
        accept="image/*"
        id="file-input"
        onChange={({ target: { files } }) => {
          if (files && files[0]) {
            onChange(URL.createObjectURL(files[0]));
          }
        }}
        style={{ display: 'none' }}
        type="file"
      />
    </div>
  );
};

const ImageField = connectField(Image);
const UploadField = connectField(UploadFile);

function Documents() {
  const [addUserFileMutation, { data, loading, error }] =
    useAddUserFileMutation({});

    const { data:dataFileTypes, } = useGetFileTypesQuery({
    });

    const filetypes = dataFileTypes?.filetypes?.map((filetype) => {
      return {
        label: filetype.typename,
        value: filetype.id,
      };
    })


  const user = useSelector((state) => state.users.user);
  console.log(user);
 


  

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

  

  return (
    <div className="containerdcs">
      <AutoForm
        schema={schema}
        onChangeModel={(model) => {
          console.log(model)
        }  }
        onSubmit={(model) => {
          console.log(model, "asdasdsa");
          handleSave(model);
        }}
      >
        

        <HiddenField name="id" value={0} />
        <HiddenField name="usersid" value={user.id} />
        <HiddenField name="createuser" value={user.createuser} />
        <HiddenField name="changeuser" value={user.changeuser} />
        <HiddenField name="extensitions" value={"png"} />
        
        <SelectField name="filetypesid" label="File Type" options={filetypes} />
        <UploadField name="data" field="data" onChange={(model)=>console.log(model)} />
        <div style={{ textAlign: "center" }}>
          <SubmitField onSubmit={handleSave} />
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
