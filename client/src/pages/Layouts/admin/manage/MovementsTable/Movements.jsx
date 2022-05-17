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
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";

function Movements() {
  const selectLang = useSelector((state) => state.language.lang);

  const [sortModel, setSortModel] = React.useState([
    {
      field: "transactiondate",
      sort: "desc",
    },
  ]);
  const { t } = useTranslation();

  const { id } = useParams();
  const { data, loading, error, refetch } = useGetUserMovementByIdQuery({
    variables: {
      prmId: parseInt(id),
    },
  });

  const userName = data?.usersmovementsById[0]?.users?.name;

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <NoMatch />;
  }

  const paramsFunctions = (params) => {
    return params.api.state.rows.idRowsLookup[params.id];
  };

  const columns = [
    {
      field: "transactiondate",
      headerName: t("movements.table.transactiondate"),
      width: 200,
      valueFormatter: (params) => {
        return paramsFunctions(params)
          .transactiondate.split("T")[0]
          .split("-")
          .reverse()
          .join("-");
      },
    },
    {
      field: "MovementsDay",
      headerName: t("movements.table.day"),
      width: 200,
      valueFormatter: (params) => {
        return moment(paramsFunctions(params).transactiondate)
          .locale(selectLang)
          .format("dddd");
      },
    },
    {
      field: "entrytime",
      headerName: t("movements.table.entrytime"),
      width: 130,
      valueFormatter: (params) => {
        return paramsFunctions(params).entrytime;
      },
    },
    {
      field: "exittime",
      headerName: t("movements.table.exittime"),
      width: 130,
      valueFormatter: (params) => {
        const exittime = params.api.state.rows.idRowsLookup[params.id].exittime;
        return exittime === null ? t("movements.notyet") : exittime;
      },
    },
  ];

  return (
    <div className="UserMovements_1">
      <div className="UserMovements_inner_1">
        <div className="movement_by_month_back_button">
          <IconButton
            size="large"
            color="primary"
            component="span"
            as={NavLink}
            to={`/managementpanel/allpersonel/${id}`}
          >
            <ArrowBackIcon />
          </IconButton>{" "}
        </div>
        <div className="text-black pt-2 text-lg">
          {userName} {t("PersonalMovementsByName.title")}
        </div>
      </div>
      <div style={{ height: 530, width: "75%" }}>
        {refetch() && (
          <DataGrid
            rows={data?.usersmovementsById}
            columns={columns}
            pageSize={8}
            rowsPerPageOptions={[5, 10, 20, 30, 40, 50]}
            autoPageSize
            pagination
            sortModel={sortModel}
          />
        )}
      </div>
    </div>
  );
}

export default Movements;
