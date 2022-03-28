import { useState } from "react";
import { TextField, Box } from "@mui/material";
import "../login.css";
import { Button } from '@mui/material';


import CustomButton from "../../../components/Button/CustomButton";
import { Link, NavLink } from "react-router-dom";

import { AutoForm, HiddenField, AutoField } from "uniforms-material";
import { bridge as schema } from "./AdminSchema";
import { useGetUserQuery } from "generated/graphql";

const AdminLogin = () => {
  const [rowData, setRowData] = useState({});
  const { data, loading, error } = useGetUserQuery();
  console.log(data)

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
        
        <AutoField name={"username"} />
        
        <AutoField name={"password"} />
        <div className="btns">
          <div className="btn-1">
            <Button
              color={"primary"}
              variant="outlined"
              as={NavLink}
              to="/"
            >Go Back</Button>
          </div>
          <div  className="btn-2">
            {/* <button color={"primary"}
              variant="outlined"  onClick={(model) => {
              setRowData(model);
              alert(JSON.stringify(model));
              
            }} >Log In</button> */}
            <Button
              color={"primary"}
              variant="outlined"
              as={NavLink}
              to="/admin"
            >Log In</Button>
          </div>
        
        </div>
        
      
      </AutoForm>
      {
        console.log(rowData.username)
      }
    </div>
  );
};

export default AdminLogin;
