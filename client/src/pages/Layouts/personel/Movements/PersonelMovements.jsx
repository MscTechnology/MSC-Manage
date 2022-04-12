import React from "react";
import moment from "moment";
//? Components
import Loading from "components/Loading/Loading";
import NoMatch from "pages/404/NoMatch";

//? CSS
import "../../../../styles.css";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { DataGrid } from "@mui/x-data-grid";
import { Button, IconButton } from "@mui/material";
import { toast, ToastContainer } from "react-toastify";

//? Redux Graphql Router
import {
  useAddMovementMutation,
  useGetUserMovementByIdQuery,
} from "generated/graphql";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useParams } from "react-router-dom";
import { setTap } from "../../../../store/MovementsToast/MovementsToast";

const PersonelMovements = () => {
  const { id } = useParams();
  const user = useSelector((state) => state.users.user);

  const { data, loading, error } = useGetUserMovementByIdQuery({
    variables: {
      prmId: parseInt(id),
    },
  });
  const [addMovementMutation] = useAddMovementMutation({});

  const isTap = useSelector((state) => state.movements.isTap);
  const dispatch = useDispatch();

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <NoMatch />;
  }

  const handleInWork = () => {
    if (isTap) {
      dispatch(setTap(false));
      toast.success("You are in work!");
    } else {
      dispatch(setTap(true));
      toast.error("You are out of work!");
    }
    addMovementMutation({
      variables: {
        prmUserMovement: {
          id: 0,
          usersid: user.id,
          entrytime: null,
          exittime: null,
          transactiondate: moment(),
          createuser: user.createuser,
        },
      },
    });
  };
  const paramsFunctions = (params) => {
    return params.api.state.rows.idRowsLookup[params.id];
  }

  const columns = [
    {
      field: "usersid",
      headerName: "User id",
      width: 130,
      valueFormatter: (params) => {
        return params.row?.users?.userid;
      },
    },
    {
      field: "users.name",
      headerName: "Name",
      width: 130,
      valueFormatter: (params) => {
        return paramsFunctions(params).users.name;
      },
    },
    {
      field: "users.surname",
      headerName: "Surname",
      width: 130,
      valueFormatter: (params) => {
        return paramsFunctions(params).users.surname;
      },
    },
    {
      field: "transactiondate",
      headerName: "Transaction Date",
      width: 200,
      valueFormatter: (params) => {
        return paramsFunctions(params).transactiondate
          .split("T")[0]
          .split("-")
          .reverse()
          .join("-");
      },
    },
    {
      field: "entrytime",
      headerName: "Entry Time",
      width: 130,
      valueFormatter: (params) => {
        return paramsFunctions(params).entrytime
      },
    },
    { field: "exittime", headerName: "Exit Time", width: 130 },
  ];

  return (
    <div className="UserMovements_1">
      <ToastContainer />
      <div className="UserMovements_inner_1">
        <div style={{ marginTop: "5px" }}>
          <IconButton
            size="large"
            color="primary"
            component="span"
            as={NavLink}
            to="/personel"
          >
            <ArrowBackIcon />
          </IconButton>{" "}
        </div>
        <div>Personel Giriş Çıkışları</div>
      </div>
      <div style={{ height: 400, width: "75%", marginBottom: "2%" }}>
        <DataGrid
          rows={data?.usersmovementsById}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5, 10, 20, 30, 40, 50]}
          checkboxSelection
          autoPageSize
          pagination
        />
      </div>
      <div className="PersonelPage-Btn-Margin">
        <Button
          onClick={handleInWork}
          size="large"
          color={"primary"}
          variant="text"
        >
          log In / Log Out
        </Button>
      </div>
    </div>
  );
};

export default PersonelMovements;
