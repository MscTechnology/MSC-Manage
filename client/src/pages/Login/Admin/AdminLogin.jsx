import { useState } from "react";

//! Components
import Loading from "../../../components/Loading/Loading";
//! Redux
import { useGetUserQuery } from "generated/graphql";
import { useDispatch } from "react-redux";
import { setAdmin } from "store/User/UserSlice";
//! Design
import { IconButton } from "@mui/material";
import "../login.css";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
//! Uniforms
import {
  AutoForm,
  AutoField,
  ErrorsField,
  SubmitField,
} from "uniforms-material";
import { bridge as schema } from "./AdminSchema";
//! Router
import { NavLink, useNavigate } from "react-router-dom";
import NoMatch from "pages/404/NoMatch";
import { useTranslation } from 'react-i18next';

const AdminLogin = () => {
  const { t } = useTranslation();
  const { data, loading, error } = useGetUserQuery();
  const [title, setTitle] = useState(t('login.adminlogin.title'));
  const dispatch = useDispatch();
  const navigate = useNavigate();

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <NoMatch />;
  }

  const navigateAdmin = () => {
    setTimeout(() => {
      navigate("/admin/");
    }, 1000);
  };

  const changeTitle = () => {
    setTitle(t('login.adminlogin.wrong'));
    setTimeout(() => {
      setTitle(t('login.adminlogin.title'));
    }, 1000);
  };

  const checkAdmin = (users) => {
    if (users?.length > 0) {
      dispatch(setAdmin(users[0]));
      setTitle(t('login.adminlogin.signedin'));

      navigateAdmin();
    } else if (users?.length === 0) {
      changeTitle();
    }
  };

  const handleLogin = (model) => {
    const users = data?.users?.filter(
      (user) =>
        user.username === model.username &&
        user.password === model.password &&
        user.usertypesid === 1
    );
    checkAdmin(users);
  };

  return (
    <div className="container">
      <div className="login-page-img">
        <img className="login-img items-center" src={require("../../../assets/images/logo.jpg")} alt="" />
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
      <AutoForm
        schema={schema}
        onSubmit={handleLogin}

      >
        <ErrorsField />
        <AutoField name={"username"} label={t('login.adminlogin.username')} />

        <AutoField name={"password"} type={"password"}  label={t('login.adminlogin.password')}/>
        <div className="admin-login-submit">
          <SubmitField className="admin-login-button" label={t('login.adminlogin.login')} />
        </div>
      </AutoForm>
    </div>
  );
};

export default AdminLogin;
