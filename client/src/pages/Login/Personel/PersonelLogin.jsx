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
} from "uniforms-material";
import { bridge as schema } from "./PersonelSchema";

const PersonelLogin = () => {
  const [title, setTitle] = useState("Personel Log In");
  const { data, loading, error } = useGetUserQuery();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  console.log(data);

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <Error />;
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
      <div className="title">
        <IconButton
          size="large"
          color="primary"
          component="span"
          as={NavLink}
          to="/"
        >
          <ArrowBackIcon />
        </IconButton>
        {title}
      </div>
      <AutoForm schema={schema} onSubmit={handleLogin}>
        <ErrorsField />
        <AutoField name={"username"} />
        <AutoField name={"password"} />

        <div className="btn-2">
          <SubmitField className="hidden" value="Log In" />
        </div>
      </AutoForm>
    </div>
  );
};

export default PersonelLogin;
