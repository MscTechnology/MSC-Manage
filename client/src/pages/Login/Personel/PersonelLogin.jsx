import React, { useState } from "react";
import "../login.css";
import { Button, IconButton } from "@mui/material";
import CustomButton from "../../../components/Button/CustomButton";
import { Link, NavLink, useNavigate } from "react-router-dom";

import { AutoForm, HiddenField, AutoField, SubmitField, ErrorsField } from "uniforms-material";
import { bridge as schema } from "./PersonelSchema";
import { useAddMovementMutation, useGetPersonelsQuery, useGetUserQuery } from "generated/graphql";
import { useDispatch, useSelector } from 'react-redux'
import { setUser, setLoginDate, setOutDate } from 'store/User/UserSlice'
import Loading from "../../../components/Loading/Loading";
import Error from "../../../components/Error/Error";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';


const PersonelLogin = () => {
  const [title, setTitle] = useState("Personel Log In");
 
  const { data, loading, error } = useGetUserQuery();
  const userLoginDate = useSelector((state) => state.users.userLoginDate);
  const dispatch = useDispatch();
  const navigate = useNavigate();


  console.log(data);

  let login_out_date = new Date();

  if (loading) {
    return <Loading />
  }

  if (error) {
    return <Error />
  }


  const loginedPersonel = (users) => {
    setTitle("Giriş Yapıldı");
    dispatch(setUser(users[0]));
    dispatch(setLoginDate(login_out_date));
   
    setTimeout(() => {
      navigate("/personel/");
    }, 1000);
  }

  const unloginedPersonel = () => {
    setTitle("Giriş Yapılamadı");
    setTimeout(() => {
      setTitle("Personel Log In");
    }, 1000);
  }



  const handleLogin = (model) => {
    const users = data?.users?.filter(
      (user) =>
        user.username === model.username &&
        user.password === model.password &&
        user.usertypesid === 2
    );
    if (users?.length > 0) {
      loginedPersonel(users)



    } else if (users?.length === 0) {
      unloginedPersonel()
    }
  };

  return (
    <div className="container">
      <div className="title"><IconButton size="large" color="primary" component="span" as={NavLink}
        to="/">
        <ArrowBackIcon />
      </IconButton>{title}</div>
      <AutoForm
        schema={schema}
        onSubmit={handleLogin}
      >
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
