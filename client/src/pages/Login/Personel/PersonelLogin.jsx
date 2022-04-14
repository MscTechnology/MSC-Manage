import React, { useState } from "react";
//! Components
import Error from "../../../components/Error/Error";
import Loading from "../../../components/Loading/Loading";
//! Design
import "../login.css";
import { IconButton } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
//! Redux
import { useGetUserQuery } from "generated/graphql";
import { setUser } from "store/User/UserSlice";
import { useDispatch } from "react-redux";

//! Router
import { NavLink, useNavigate } from "react-router-dom";

//! Uniforms
import {
  AutoForm,
  AutoField,
  SubmitField,
  ErrorsField,
} from 'uniforms-material';

import { bridge as schema } from "./PersonelSchema";
import NoMatch from "pages/404/NoMatch";

const PersonelLogin = () => {
  const [title, setTitle] = useState("Personel Log In");
  const { data, loading, error } = useGetUserQuery();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <NoMatch />;
  }

  const loginedPersonel = (users) => {
    setTitle("Signed In");
    dispatch(setUser(users[0]));
    setTimeout(() => {
      navigate("/personel/");
    }, 1000);
  };

  const unloginedPersonel = () => {
    setTitle("Wrong username or password");
    setTimeout(() => {
      setTitle("Personel Log In");
    }, 1000);
  };

  const handleLogin = (model) => {
    const users = data?.users?.filter(
      (user) =>
        user.username === model.username &&
        user.password === model.password &&
        user.usertypesid === 2
    );
    if (users?.length > 0) {
      loginedPersonel(users);
    } else if (users?.length === 0) {
      unloginedPersonel();
    }
  };

  return (
    <div className="container">
       <div className="login-page-img">
            <img className="login-img" src={require("../../../assets/images/logo.jpg")} alt="" />
          </div>
      <div className="title">
        <div> 
        <IconButton
          size="large"
          color="primary"
          component="span"
          as={NavLink}
          to="/"
        >
          <ArrowBackIcon />
        </IconButton>
        </div>
        <div>

        {title}
        </div>
      </div>
      <div className="login-form">
        <AutoForm schema={schema} onSubmit={handleLogin}>
          <ErrorsField />
            <AutoField name={"username"} />
          <AutoField name={"password"} type={"password"} />

          <div className="personel-login-btn">
            <SubmitField className="personel-login-submit-button" label="Log In" />
          </div>
        </AutoForm>
      </div>
    </div>
  );
};

export default PersonelLogin;
