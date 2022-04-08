import React from "react";
import "./personel.css";
import { NavLink, useParams } from "react-router-dom";
import { Button, IconButton } from "@mui/material";
import Loading from "../../../components/Loading/Loading";
import { useSelector, useDispatch } from "react-redux";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useGetUserQuery, useAddMovementMutation, useGetUserDetailQuery } from "generated/graphql";
import moment from "moment";
import { toast, ToastContainer } from "react-toastify";
import { setTap } from "../../../store/MovementsToast/MovementsToast";
import NoMatch from "pages/404/NoMatch";

function Personel() {
  const {data:data1, loading, error } = useGetUserQuery({});
  

  const { data, loading:load1, error:err1 } = useGetUserDetailQuery({
    variables: {
      prmId: parseInt(data1?.users[2].id)
    },
  })


  const user = useSelector((state) => state.users.user);
  const isTap = useSelector((state) => state.movements.isTap);
  const dispatch = useDispatch();


  if (loading) {
    return <Loading />
  }

  if (error) {
    return <NoMatch />
  }


  


  return (
    <div className="container1">
      <ToastContainer />
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
            disableElevation
            size="large"
            color={"primary"}
            variant="outlined"
            as={NavLink}
            to={`/personel/movement/${user.id}`}
          >
            Movement Table
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
