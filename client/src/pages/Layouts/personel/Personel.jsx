import React from "react";
//? CSS
import "./personel.css";
import { Button, IconButton } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

//? Redux Graphql Router
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { useGetUserQuery } from "generated/graphql";

//? Components
import Loading from "../../../components/Loading/Loading";
import NoMatch from "pages/404/NoMatch";

function Personel() {
  const {data, loading, error } = useGetUserQuery({});
  
  const user = useSelector((state) => state.users.user);


  if (loading) {
    return <Loading />
  }

  if (error) {
    return <NoMatch />
  }

  return (
    <div className="container1">
      <div className="title1">
        <IconButton
          size="large"
          color="primary"
          component="span"
          as={NavLink}
          to="/personelLogin"
        >
          <ArrowBackIcon />
        </IconButton>
        {`Welcome ${user.name}`}
      </div>

      <div className="btn1">
       

        <div className="PersonelPage-Btn-Margin">
          <Button
          className="Personel-page-buttons"
            disableElevation
            size="large"
            variant="contained"
            as={NavLink}
            to={`/personel/movement/${user.id}`}
          >
            Movement Table
          </Button>
        </div>

        <div className="PersonelPage-Btn-Margin">
          <Button
          className="Personel-page-buttons"
            disableElevation
            size="large"
            variant="contained"
            as={NavLink}
            to="bilgileriguncelle"
          >
            Update Informations
          </Button>
        </div>

        <div className="PersonelPage-Btn-Margin">
          <Button
           className="Personel-page-buttons"
            disableElevation
            size="large"
            variant="contained"
            as={NavLink}
            to="documents"
          >
            Documents
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Personel;
