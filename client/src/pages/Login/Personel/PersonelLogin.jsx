import React, { useState } from "react";
import "../login.css";
import { Button } from '@mui/material';
import CustomButton from "../../../components/Button/CustomButton";
import { Link, NavLink } from "react-router-dom";

import { AutoForm, HiddenField, AutoField } from "uniforms-material";
import { bridge as schema } from "./PersonelSchema";
import { useGetUserQuery } from "generated/graphql";

const PersonelLogin = () => {
  const [rowData, setRowData] = useState({});
  const { data, loading, error } = useGetUserQuery();
  console.log("------------");
  console.log(data)

  return (
    <div className="container">
      <div className="title">Personel Log In</div>
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
          <div className="btn-2">
            <button components={Link}
              to="" onClick={(model) => {
              setRowData(model);
              alert(JSON.stringify(model));
            }} >Log In</button>
            
          </div>
        
        </div>
      </AutoForm>


    </div>
  );
};

export default PersonelLogin;
