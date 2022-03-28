import React, { useState } from "react";
import "../login.css";
import { Button } from "@mui/material";
import CustomButton from "../../../components/Button/CustomButton";
import { Link, NavLink, useNavigate } from "react-router-dom";

import { AutoForm, HiddenField, AutoField } from "uniforms-material";
import { bridge as schema } from "./PersonelSchema";
import { useGetUserQuery } from "generated/graphql";
import {useDispatch, useSelector} from 'react-redux'
import {setUser} from 'store/User/UserSlice'

const PersonelLogin = () => {
  const [rowData, setRowData] = useState({});
  const { data, loading, error } = useGetUserQuery();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  console.log(data);
  const users = data?.users.filter(
    (user) =>
      user.username === rowData.username &&
      user.password === rowData.password &&
      user.usertypesid === 2
  );

  console.log(users);
  const handleLogin = (model) => {
    setRowData(model);
    if (users?.length > 0) {
      alert("giriş yapıldı");
      dispatch(setUser(users[0]));
      navigate("/personel/");
    }
  };



  return (
    <div className="container">
      <div className="title">Personel Log In</div>
      <AutoForm
        schema={schema}
        onSubmit={handleLogin}
      >
        <AutoField name={"username"} />
        <AutoField name={"password"} />
        <div className="btns">
          <div className="btn-1">
            <Button color={"primary"} variant="outlined" as={NavLink} to="/">
              Go Back
            </Button>
          </div>
          <div className="btn-2">
            <button
              color={"primary"}
              variant="outlined"
            >
              Log In
            </button>
          </div>
        </div>
      </AutoForm>
    </div>
  );
};

export default PersonelLogin;
