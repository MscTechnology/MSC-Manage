import { Button, IconButton, styled } from "@mui/material";
import React from "react";
import "../personel.css";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import {
  AutoForm,
  HiddenField,
  AutoField,
  SubmitField,
} from "uniforms-material";
import { bridge as schema } from "./guncelleSchema";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useUpdateUserMutation } from "generated/graphql";
import {toast, ToastContainer} from 'react-toastify'
function BilgileriGuncelle() {
  const user = useSelector((state) => state.users.user);
  console.log(user);
  const [updateUserMutation, { data, loading, error }] = useUpdateUserMutation({});

  const handleSubmit = (model) => {
    updateUserMutation({
      variables: {
        prmUser: model,
      },
    }).then((res) => {
      console.log(res)
      if (res.data.updateUser.resultType === "SUC") {
        toast.success("Bilgiler Güncellendi");
      } else {
        toast.error(res.data.updateUser.messageText);
      }
    }).catch((err) => {
      toast.error(err);
    });
  }


  const Input = styled("input")({
    display: "none",
  });
  return (
    <div className="bilgileriguncelle">
      <div className="title">
        <IconButton
          size="large"
          color="primary"
          component="span"
          as={NavLink}
          to="/personel"
        >
          <ArrowBackIcon />
        </IconButton>
        Update Your Informations
      </div>
      <AutoForm
        schema={schema}
        onSubmit={handleSubmit}
        model={user}
        onChangeModel={(model) => console.log(model)}
      >
        <div className="info">
          <span className="info">{user.name}</span>
        </div>
        <AutoField name={"name"} />
        <AutoField name={"surname"} />
        <AutoField name={"username"} />
        <AutoField name={"password"} />

        <div className="btn-2">
          <SubmitField value="Update Informations" />
        </div>
      </AutoForm>
      <ToastContainer />
    </div>
  );
}

export default BilgileriGuncelle;
