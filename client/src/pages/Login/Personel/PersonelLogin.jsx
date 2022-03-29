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
import Loading from "../../../components/Loading/Loading";
import Error from "../../../components/Error/Error";

const PersonelLogin = () => {
  const [title, setTitle] = useState("Personel Log In");
  const { data, loading, error } = useGetUserQuery();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  console.log(data);
  

  if(loading){
    return <Loading/>
  }

  if(error){
    return <Error/>
  }

  const loginedPersonel = (users) => {
    setTitle("Giriş Yapıldı");
      dispatch(setUser(users[0]));
      setTimeout(() => {
        navigate("/personel/");
      } , 1000);
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
     
    }else if (users?.length === 0) {
      unloginedPersonel()
    }
  };



  return (
    <div className="container">
      <div className="title">{title}</div>
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
