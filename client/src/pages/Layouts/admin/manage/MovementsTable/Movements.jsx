import React from 'react'
import "../../../../../styles.css";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-alpine.css";
import { useGetUserMovementByIdQuery } from "generated/graphql";
import { DataGrid } from "@mui/x-data-grid";
import { useParams,NavLink } from 'react-router-dom';
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { IconButton } from "@mui/material";
import Loading from 'components/Loading/Loading';
import NoMatch from 'pages/404/NoMatch';

function Movements() {
    const { id } = useParams()
    const { data, loading, error } = useGetUserMovementByIdQuery({
        variables: {
            prmId: parseInt(id)
        },
    });

    if(loading){
        return <Loading />
      }
    
      if(error){
        return <NoMatch/>
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
        <div className="UserMovements_1">
            <div className="UserMovements_inner_1">
                <div>
                    <IconButton
                        size="large"
                        color="primary"
                        component="span"
                        as={NavLink}
                        to={`/admin/tumpersonel/${id}`}
                    >
                        <ArrowBackIcon />
                    </IconButton>{" "}
                </div>
                <div>
                    Personel Giriş Çıkışları
                </div>

            </div>
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
        </div>

    )
}

export default Movements