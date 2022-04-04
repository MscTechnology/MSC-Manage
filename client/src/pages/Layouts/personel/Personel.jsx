import React from "react";
import "./personel.css";
import { NavLink } from "react-router-dom";
import { Button, IconButton } from "@mui/material";
import Loading from "../../../components/Loading/Loading";
import Error from "../../../components/Error/Error";
import { useSelector } from "react-redux";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useGetUserQuery, useAddMovementMutation } from "generated/graphql";
import moment from "moment";

function Personel() {
  const { loading, error } = useGetUserQuery({});


  const [addMovementMutation, { data: dataMovement, loading: loadingMovement, error: errorMovement }] = useAddMovementMutation({});


  const user = useSelector((state) => state.users.user);

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <Error />;
  }

  console.log(user);
  const handleInWork = () => {
    console.log({
      variables: {
        prmUserMovement: {
          id: 0,
          usersid: user.id,
          entrytime: null,
          exittime: null,
          transactiondate: moment(),
          createuser: user.createuser,
        }
      }
    })
    addMovementMutation({
      variables: {
        prmUserMovement: {
          id: 0,
          usersid: user.id,
          entrytime: null,
          exittime: null,
          transactiondate: moment(),
          createuser: user.createuser,
        }
      }
    })
  };
 

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
        <div className="btn2">
          <Button
            onClick={handleInWork}
            size="large"
            color={"primary"}
            variant="text"
          >
            log In / Log Out 
          </Button>
        </div>
        <div className="btn2">
          <Button
            disableElevation
            size="large"
            color={"primary"}
            variant="outlined"
            as={NavLink}
            to="bilgileriguncelle"
          >
            Update Informations
          </Button>
        </div>
        <div className="btn2">
          <Button
            disableElevation
            size="large"
            color={"primary"}
            variant="outlined"
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
