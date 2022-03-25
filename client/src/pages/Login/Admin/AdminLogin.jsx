import { useState } from "react";
import { TextField, Box } from "@mui/material";
import "../login.css";

import CustomButton from "../../../components/Button/CustomButton";
import { Link } from "react-router-dom";

import { AutoForm, HiddenField, AutoField } from "uniforms-material";
import { bridge as schema } from "./AdminSchema";
import { useGetUserQuery } from "generated/graphql";

const AdminLogin = () => {
  const [rowData, setRowData] = useState({});
  const { data, loading, error } = useGetUserQuery();
  

  return (
    <div className="container">
      <div className="title">Admin Log In</div>
      <AutoForm
      
        schema={schema}
        onSubmit={(model) => {
          setRowData(model);
          
          alert(JSON.stringify(model));
        }}
      >
        <HiddenField name={"username"} />
        <AutoField name={"username"} />
        <HiddenField name={"password"} />
        <AutoField name={"password"} />
      <button onSubmit={(model) => {
          setRowData(model);
          alert(JSON.stringify(model));
        }} >onclick</button>
      </AutoForm>
      <Box
        className="box"
        sx={{
          "& > :not(style)": { m: 1, width: "25ch" },
        }}
      ></Box>
      {
        console.log(rowData.username)
      }
    </div>
  );
};

export default AdminLogin;
