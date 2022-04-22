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
import { useTranslation, Trans } from 'react-i18next';

import { bridge as schema } from "./PersonelSchema";
import NoMatch from "pages/404/NoMatch";

const PersonelLogin = () => {
  const { t, i18n } = useTranslation();

  const [title, setTitle] = useState(t('login.personellogin.title'));
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
    setTitle(t('login.personellogin.signedin'));
    dispatch(setUser(users[0]));
    setTimeout(() => {
      navigate("/personel/");
    }, 1000);
  };

  const unloginedPersonel = () => {
    setTitle(t('login.personellogin.wrong'));
    setTimeout(() => {
      setTitle(t('login.personellogin.title'));
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
            <AutoField name={"username"} label={t('login.personellogin.username')} />
          <AutoField name={"password"} type={"password"} label={t('login.personellogin.password')} />

          <div className="personel-login-btn">
            <SubmitField className="personel-login-submit-button" label={t('login.personellogin.login')} />
          </div>
        </AutoForm>
      </div>
    </div>
  );
};

export default PersonelLogin;
