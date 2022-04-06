import React from 'react'
import "../../../../../styles.css";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-alpine.css";
import { useGetUserMovementByIdQuery } from "generated/graphql";
import { DataGrid } from "@mui/x-data-grid";
import { useParams } from 'react-router-dom'

function Movements() {
    const { id } = useParams()
    const { data, loading, error } = useGetUserMovementByIdQuery({
        variables: {
            prmId: parseInt(id)
        },
    });
    console.log(data?.usersmovementsById)
    console.log(id)

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
        <div style={{ height: 400, width: "75%" }}>
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
    )
}

export default Movements