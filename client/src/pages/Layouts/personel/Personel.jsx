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

import { useTranslation } from 'react-i18next';

const lngs = {
  en: { nativeName: 'English' },
  tr: { nativeName: 'Türkçe' }
};

function Personel() {
  const { t, i18n } = useTranslation();

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
        {`${t("personelPage.title")} ${user.name}`}
      </div>
    
    <Link
        className="Personel-page-buttons"
        role="button"
        to={`/personel/movement/${user.id}`}
      >
       {t("personelPage.buttons.movementsTable").toUpperCase()}
      </Link>
      <Link
        className="Personel-page-buttons"
        role="button"
        to="bilgileriguncelle"
      >
        {t("personelPage.buttons.update").toUpperCase()}
      </Link>
      <Link className="Personel-page-buttons" role="button" to="documents">
      {t("personelPage.buttons.documents").toUpperCase()}
      </Link>
    
    </div>
  );
}

export default Personel;
