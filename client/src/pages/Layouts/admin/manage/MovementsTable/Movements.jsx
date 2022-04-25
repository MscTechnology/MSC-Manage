import React from "react";

//! Css
import "../../../../../styles.css";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-alpine.css";

//! Material UI
import { DataGrid } from "@mui/x-data-grid";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { IconButton } from "@mui/material";

//! Components
import Loading from "components/Loading/Loading";
import NoMatch from "pages/404/NoMatch";

//! Graphql And Router
import { useGetUserMovementByIdQuery } from "generated/graphql";
import { useParams, NavLink } from "react-router-dom";
import moment from "moment";
function Movements() {
  const { id } = useParams();
  const { data, loading, error,refetch } = useGetUserMovementByIdQuery({
    variables: {
      prmId: parseInt(id),
    },
  });
  console.log(data)

  const userName = data?.usersmovementsById[0]?.users?.name;

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <NoMatch />;
  }

  const paramsFunctions = (params) => {
    return params.api.state.rows.idRowsLookup[params.id]
  }

  const MovementsDay = data?.usersmovementsById[0]?.transactiondate;
  console.log(MovementsDay)
  const columns = [
    
   
    
    {
      field: "transactiondate",
      headerName: "Transaction Date",
      width: 200,
      valueFormatter: (params) => {
        return paramsFunctions(params).transactiondate.split("T")[0].split("-").reverse().join("-");
      },
    },
    {
      field: "MovementsDay",
      headerName: "Day",
      width: 200,
      valueFormatter: (params) => {
        return moment(paramsFunctions(params).transactiondate).format("dddd");
      },
    },
    {
      field: "entrytime",
      headerName: "Entry Time",
      width: 130,
      valueFormatter: (params) => {
        return paramsFunctions(params).entrytime   },
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
        <div>{userName} 's Movements</div>
      </div>
      <div style={{ height: 530, width: "75%" }}>
        {
          refetch() &&  <DataGrid
          rows={data?.usersmovementsById}
          columns={columns}
          pageSize={8}
          rowsPerPageOptions={[5, 10, 20, 30, 40, 50]}
          autoPageSize
          pagination
        />
        }
      
       
      </div>
    </div>
  );
}

export default Movements;
