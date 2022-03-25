import {useState} from "react";
import { TextField, Box } from "@mui/material";
import "../login.css";

import CustomButton from "../../../components/Button/CustomButton";
import { Link } from "react-router-dom";

import { AutoForm } from 'uniforms-antd';
import {bridge as schema } from "./AdminSchema";
import { useGetUserQuery } from "generated/graphql";

const AdminLogin = () => {

  const [rowData, setRowData] = useState({})
  const { data, loading, error } = useGetUserQuery();
  console.log(data)


  return (
    <div className="container">
      <div className="title">Admin Log In</div>
      <AutoForm  schema={schema} onSubmit={(model)=> {
          setRowData(model);
        alert(JSON.stringify(model));
      }} />
      <Box
        className="box"
        sx={{
          "& > :not(style)": { m: 1, width: "25ch" },
        }}
      >
      </Box>
     
    </div>
  );
};

export default AdminLogin;
