import { useEffect, useState } from "react";
import "../login.css";
import { Button } from "@mui/material";

import { Link, NavLink, useNavigate } from "react-router-dom";

import { AutoForm, HiddenField, AutoField, ErrorsField , SubmitField } from "uniforms-material";
import { bridge as schema } from "./AdminSchema";
import { useGetUserQuery, useAddMovementMutation } from "generated/graphql";
import { useSelector, useDispatch } from "react-redux";
import { setAdmin } from "store/User/UserSlice";
import { Alert } from "antd";
import Loading from "../../../components/Loading/Loading";
import Error from "../../../components/Error/Error";
import { ToastContainer, toast } from 'react-toastify';

const AdminLogin = () => {
  const { data, loading, error } = useGetUserQuery();
  const [addMovementMutation, { data:dataMovement, loading:loadingMovement, error:errorMovement }] = useAddMovementMutation();
  const [title, setTitle] = useState("Admin Log In");
  const user = useSelector((state) => state.users.user);
  const isAdmin = useSelector((state) => state.users.isAdmin);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <Error />;
  }

  const navigateAdmin = () => {
    setTimeout(() => {
      navigate("/admin/");
    }, 1000);
  };

  const changeTitle = () => {
    setTitle("Hatalı Kullanıcı Adı veya Şifre");
    setTimeout(() => {
      setTitle("Admin Log In");
    }, 1000);
  };

  const checkAdmin = (users) => {
    if (users?.length > 0) {
      
      dispatch(setAdmin(users[0]));
      setTitle("Başarıyla Giriş Yapıldı");

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
      <div className="title">{title}</div>
      <AutoForm schema={schema} onSubmit={handleLogin} onChangeModel={(model)=> console.log(model)}>
        <ErrorsField />
        <AutoField name={"username"} />
        
        <AutoField name={"password"} />
        <div className="btns">
          <div className="btn-1">
            <Button color={"primary"} variant="outlined" as={NavLink} to="/">
              Go Back
            </Button>
          </div>
         
        </div>
        <SubmitField className="hidden" value="Log In"  />
      </AutoForm>
    
    </div>
  );
};

export default AdminLogin;
