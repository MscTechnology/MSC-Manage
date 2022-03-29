import React from "react";
import "./personel.css";
import { NavLink } from "react-router-dom";
import { Button } from "@mui/material";
import { gql, useQuery } from "@apollo/client";
import Loading from "../../../components/Loading/Loading";
import Error from "../../../components/Error/Error";
import {useSelector} from 'react-redux'
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

  const user = useSelector(state => state.users.user)
  console.log(user)

  if(loading){  
    return <Loading/>
  }

  if(error){
    return <Error/>
  }

  return (
    <div className="container1">
      <div className="title1">{`Hoşgeldin ${user.name}`}</div>
      
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
