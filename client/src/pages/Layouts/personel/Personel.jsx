import React from "react";
import "./personel.css";
import { NavLink } from "react-router-dom";
import { Button,IconButton } from "@mui/material";
import { gql, useQuery } from "@apollo/client";
import Loading from "../../../components/Loading/Loading";
import Error from "../../../components/Error/Error";
import { useSelector } from 'react-redux'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useGetUserQuery } from "generated/graphql";

function Personel() {
  const { loading, error } = useGetUserQuery({});

  const user = useSelector(state => state.users.user)

  if (loading) {
    return <Loading />
  }

  if (error) {
    return <Error />
  }

  return (
    <div className="container1">
      <div className="title1"><IconButton size="large" color="primary" component="span" as={NavLink}
        to="/personelLogin">
        <ArrowBackIcon />
      </IconButton>{`Hoşgeldin ${user.name}`}</div>

      <div className="btn1">
        <div className="btn2">
          <Button
            disableElevation
            size="large"
            color={"primary"}
            variant="outlined"
            as={NavLink}
            to="bilgileriguncelle"
          >
            Bilgilerini Güncelle
          </Button>
        </div>

      </div>
    </div>
  );
}

export default Personel;
