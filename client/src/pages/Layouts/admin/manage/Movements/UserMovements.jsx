import { IconButton } from "@mui/material";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import "../../../../../styles.css";
import { AgGridReact, AgGridColumn } from "ag-grid-react";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-alpine.css";

import { useGetUserQuery, useGetUserMovementsQuery } from "generated/graphql";
import { DataGrid } from "@mui/x-data-grid";
import { moment } from "moment";
const UserMovements = () => {
  const { data, loading, error } = useGetUserMovementsQuery({});

  console.log(data?.usersmovements);

  const columns = [
    // {
    //   field: "usersid",
    //   headerName: "User id",
    //   width: 130,
    //   valueFormatter: (params) => {
    //     return params.row?.users?.userid;
    //   },
    // },
    {
      field: "users.name",
      headerName: "Name",
      width: 130,
      valueFormatter: (params) => {
        return params.api.state.rows.idRowsLookup[params.id].users.name;
      },
    },
    {
      field: "users.surname",
      headerName: "Surname",
      width: 130,
      valueFormatter: (params) => {
        return params.api.state.rows.idRowsLookup[params.id].users.surname;
      },
    },
    {
      field: "transactiondate",
      headerName: "Transaction Date",
      width: 200,
      valueFormatter: (params) => {
        return params.api.state.rows.idRowsLookup[params.id].transactiondate
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
        return params.api.state.rows.idRowsLookup[params.id].entrytime
          .toString()
          .replace(/([0-9]\d{1,2})([0-9]\d{1,2})/g);
      },
    },
    { field: "exittime", headerName: "Exit Time", width: 130 },
  ];

  return (
    <div className="UserMovements">
      Personel Giriş Çıkışları
      <div style={{ height: 400, width: "75%" }}>
        <DataGrid
          rows={data?.usersmovements}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5, 10, 20, 30, 40, 50]}
          checkboxSelection
          autoPageSize
          pagination
        />
      </div>
    </div>
  );
};

export default UserMovements;
