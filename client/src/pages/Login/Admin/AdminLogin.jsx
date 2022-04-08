import { useState } from "react";

//! Components
import Loading from "../../../components/Loading/Loading";
import Error from "../../../components/Error/Error";
//! Redux
import { useGetUserQuery } from "generated/graphql";
import { useSelector, useDispatch } from "react-redux";
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
    return <NoMatch />;
  }

  const navigateAdmin = () => {
    setTimeout(() => {
      navigate("/admin/");
    }, 1000);
  };

  const changeTitle = () => {
    setTitle("wrong username or password");
    setTimeout(() => {
      setTitle("Admin Log In");
    }, 1000);
  };

  const checkAdmin = (users) => {
    if (users?.length > 0) {
      dispatch(setAdmin(users[0]));
      setTitle("Signed In");

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
            <img className="login-img" src={require("../../../assets/images/logo.jpg")} alt="" />
          </div>
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
      <AutoForm
        schema={schema}
        onSubmit={handleLogin}
        onChangeModel={(model) => console.log(model)}
      >
        <ErrorsField />
        <AutoField name={"username"} />

        <AutoField name={"password"} />
        <div className="admin-login-submit">
          <SubmitField className="admin-login-button" value="Log In" />
        </div>
      </AutoForm>
    </div>
  );
};

export default AdminLogin;
