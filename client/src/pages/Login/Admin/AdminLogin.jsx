import { useEffect, useState } from "react";
import { TextField, Box } from "@mui/material";
import "../login.css";
import { Button } from "@mui/material";

import CustomButton from "../../../components/Button/CustomButton";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";

import { AutoForm, HiddenField, AutoField } from "uniforms-material";
import { bridge as schema } from "./AdminSchema";
import { useGetUserQuery } from "generated/graphql";
import { useSelector, useDispatch } from "react-redux";
import { setAdmin } from "store/User/UserSlice";
import { Alert } from "antd";
import Loading from "../../../components/Loading/Loading";
import Error from "../../../components/Error/Error";

const AdminLogin = () => {
  const { data, loading, error } = useGetUserQuery();
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
    setTitle("Giriş Yapılamadı");
    setTimeout(() => {
      setTitle("Admin Log In");
    }, 1000);
  };

  const checkAdmin = (users) => {
    if (users?.length > 0) {
      dispatch(setAdmin(users[0]));
      setTitle("Giriş Yapıldı");
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
      <AutoForm schema={schema} onSubmit={handleLogin}>
        <AutoField name={"username"} />
        <AutoField name={"password"} />
        <div className="btns">
          <div className="btn-1">
            <Button color={"primary"} variant="outlined" as={NavLink} to="/">
              Go Back
            </Button>
          </div>
          <div className="btn-2">
            <button color={"primary"} variant="outlined">
              Log In
            </button>
          </div>
        </div>
      </AutoForm>
    </div>
  );
};

export default AdminLogin;
