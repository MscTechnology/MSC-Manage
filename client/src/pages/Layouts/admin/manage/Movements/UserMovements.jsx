import { NavLink } from "react-router-dom";
import "../../../../../styles.css";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-alpine.css";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { IconButton } from "@mui/material";
import { useGetUserMovementsQuery } from "generated/graphql";
import { DataGrid } from "@mui/x-data-grid";
import * as React from "react";
import Loading from "components/Loading/Loading";
import NoMatch from "pages/404/NoMatch";
import moment from "moment";

const UserMovements = () => {
  const { data, loading, error, refetch } = useGetUserMovementsQuery({});

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <NoMatch />;
  }

  const paramsFunctions = (params) => {
    return params.api.state.rows.idRowsLookup[params.id];
  }
  
  let transictiondate2 = data?.usersmovements[0]?.transactiondate;

  const columns = [
    {
      field: "users.name",
      headerName: "Name",
      width: 100,
      valueFormatter: (params) => {
        return params.api.state.rows.idRowsLookup[params.id].users.name;
      },
    },
    {
      field: "users.surname",
      headerName: "Surname",
      width: 100,
      valueFormatter: (params) => {
        return params.api.state.rows.idRowsLookup[params.id].users.surname;
      },
    },
    {
      field: "transactiondate",
      headerName: "Transaction Date",
      width: 130,
      valueFormatter: (params) => {
        return params.api.state.rows.idRowsLookup[params.id].transactiondate
          .split("T")[0]
          .split("-")
          .reverse()
          .join("-");
      },
    },
    {
      field: "transictiondate2",
      headerName: "Day",
      width: 130,
      valueFormatter: (params) => {
        return moment(paramsFunctions(params).transactiondate).format("dddd")
      },
    },
    {
      field: "entrytime",
      headerName: "Entry Time",
      width: 130,
      valueFormatter: (params) => {
        return params.api.state.rows.idRowsLookup[params.id].entrytime;
      },
    },
    {
      field: "exittime",
      headerName: "Exit Time",
      width: 130,
      valueFormatter: (params) => {
        const exittime = params.api.state.rows.idRowsLookup[params.id].exittime;
        return exittime === null ? "Daha Çıkmadı" : exittime;
      },
    },
  ];

  return (
    <div className="UserMovements">
      <div className="UserMovements_inner">
        <div>
          <IconButton
            size="large"
            color="primary"
            component="span"
            as={NavLink}
            to="/admin"
          >
            <ArrowBackIcon />
          </IconButton>{" "}
        </div>
        <div>Users Movements</div>
      </div>

      <div style={{ height: 550, width: "75%" }}>
        {refetch && (
          <DataGrid
            rows={data?.usersmovements}
            columns={columns}
            pageSize={10}
            rowsPerPageOptions={[6, 12, 18, 40, 50]}
            checkboxSelection={false}
            autoPageSize
            pagination
          />
        )}
      </div>
    </div>
  );
};

export default UserMovements;
