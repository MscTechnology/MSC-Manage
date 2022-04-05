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
  const userData = data?.usersmovements?.map((user) => {
    return {
      id: user.id,
      usersid: user.usersid,
      entrytime: user.entrytime,
      exittime: user.exittime,
      transactiondate: Date(user.transactiondate).split("T")[0],
      createuser: user.createuser,
    };
  });
  console.log(userData);

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
        return params.api.state.rows.idRowsLookup[params.id].entrytime.split(
          "T"
        )[1];
      },
    },
    { field: "exittime", headerName: "Exit Time", width: 130 },
   
  ];
  const columnDefs = [
    // column definition configured to use a date filter
    {
      field: "transactiondate",
      filter: "agDateColumnFilter",
      // add extra parameters for the date filter
      filterParams: {
        // provide comparator function
        comparator: (filterLocalDateAtMidnight, cellValue) => {
          const dateAsString = cellValue;

          if (dateAsString == null) {
            return 0;
          }

          // In the example application, dates are stored as dd/mm/yyyy
          // We create a Date object for comparison against the filter date
          const dateParts = dateAsString.split("/");
          const day = Number(dateParts[2]);
          const month = Number(dateParts[1]) - 1;
          const year = Number(dateParts[0]);
          const cellDate = new Date(year, month, day);

          // Now that both parameters are Date objects, we can compare
          if (cellDate < filterLocalDateAtMidnight) {
            return -1;
          } else if (cellDate > filterLocalDateAtMidnight) {
            return 1;
          }
          return 0;
        },
      },
    },
  ];
  return (
    <div className="">
      Personel Giriş Çıkışları
      <div style={{ height: 400, width: "100%" }}>
        <DataGrid
          rows={data?.usersmovements}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5]}
          checkboxSelection
        />
      </div>
      <div
        className="ag-theme-alpine"
        style={{ height: 400, width: 800, marginLeft: 200 }}
      >
        <AgGridReact rowData={data?.usersmovements} columnDefs={columnDefs}>
          <AgGridColumn
            field="transactiondate"
            headerName="Transaction Date"
            sortable={true}
            filter={true}
            checkboxSelection={true}
          ></AgGridColumn>
        </AgGridReact>
      </div>
    </div>
  );
};

export default UserMovements;
