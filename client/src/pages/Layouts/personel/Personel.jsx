import React from "react";
//? CSS
import "./personel.css";
import { Button, ButtonGroup, IconButton } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

//? Redux Graphql Router
import { Link, NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { useGetUserQuery } from "generated/graphql";

//? Components
import Loading from "../../../components/Loading/Loading";
import NoMatch from "pages/404/NoMatch";

function Personel() {
  const { data, loading, error } = useGetUserQuery({});

  const user = useSelector((state) => state.users.user);

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <NoMatch />;
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
    
    <Link
        className="Personel-page-buttons"
        role="button"
        to={`/personel/movement/${user.id}`}
      >
        MOVEMENT TABLE
      </Link>
      <Link
        className="Personel-page-buttons"
        role="button"
        to="bilgileriguncelle"
      >
        UPDATE INFORMATIONS
      </Link>
      <Link className="Personel-page-buttons" role="button" to="documents">
        DOCUMENTS
      </Link>
    
    </div>
  );
}

export default Personel;
