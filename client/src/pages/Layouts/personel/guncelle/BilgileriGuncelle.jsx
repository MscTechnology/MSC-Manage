import { Button, IconButton, styled } from "@mui/material";
import React from "react";

import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import {
  AutoForm,
  HiddenField,
  AutoField,
  SubmitField,
  ListItemField,
  ListField
} from "uniforms-material";
import { bridge as schema } from "./guncelleSchema";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useGetCitiesQuery, useUpdateUserMutation } from "generated/graphql";
import { toast, ToastContainer } from "react-toastify";
import MSCTableField from "components/UniformComponents/MSCTableField";
import MSCTableRowField from "components/UniformComponents/MSCTableRowField";
import { MSCTableCell } from "components/UniformComponents/MSCTableCell";
function BilgileriGuncelle() {
  const user = useSelector((state) => state.users.user);
  console.log(user);
  const [updateUserMutation, { data, loading, error }] = useUpdateUserMutation(
    {}
  );
  const {
    data: cityData,
    loading: cityLoading,
    error: cityError,
  } = useGetCitiesQuery({});

  const cities = cityData?.cities.map((city) => ({
    label: city.cityname,
    value: city.id,
  }));
  console.log(cities);

  const handleSubmit = (model) => {
    updateUserMutation({
      variables: {
        prmUser: model,
      },
    })
      .then((res) => {
        console.log(res);
        if (res.data.updateUser.resultType === "SUC") {
          toast.success("Bilgiler Güncellendi");
        } else {
          toast.error(res.data.updateUser.messageText);
        }
      })
      .catch((err) => {
        toast.error(err);
      });
  };

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
        <AutoField name={"username"}  />
        <AutoField name={"password"} />
        
        {/* <MSCTableField name="userinfos" columns={["phonenumber","identificationnumber","adress","email","gender","schoolname"]}> 
            <MSCTableRowField name="$">
              <MSCTableCell name="phonenumber" />
              <MSCTableCell name="identificationnumber" />
              <MSCTableCell name="adress" />
              <MSCTableCell name="email" />
              <MSCTableCell name="gender" />
              <MSCTableCell name="schoolname" />
              </MSCTableRowField>
          </MSCTableField> */}



        <div className="btn-2">
          <SubmitField value="Update Informations" />
        </div>
      </AutoForm>
      <ToastContainer />
    </div>
  );
}

export default BilgileriGuncelle;
