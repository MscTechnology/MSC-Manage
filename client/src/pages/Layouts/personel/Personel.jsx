import React from "react";
import "./personel.css";
import { NavLink } from "react-router-dom";
import { Button } from "@mui/material";
import { gql, useQuery } from "@apollo/client";

const GET_USER = gql`
  query GetUser {
    users {
      id
      name
      surname
    }
  }
`;

function Personel() {
  const { loading, error, data } = useQuery(GET_USER);
  console.log(data);
  return (
    <div className="container1">
      <div className="title1">Welcome Personel1</div>
      {data?.users?.map((p) => (
        <div className="users" key={p?.id}>
          {p?.id}-{p?.name} {p?.surname}
        </div>
      ))}
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
            Bilgileri Güncelle
          </Button>
        </div>
        <div className="btn3">
          <Button
            disableElevation
            size="large"
            color={"primary"}
            variant="outlined"
            as={NavLink}
            to="dosyaekle"
          >
            Dosya Ekle
          </Button>
        </div>
        <div>
          <Button
            disableElevation
            size="large"
            color={"primary"}
            variant="outlined"
            as={NavLink}
            to="/personelLogin"
          >
            Geri Dön
          </Button>
        </div>

      </div>
    </div>
  );
}

export default Personel;
