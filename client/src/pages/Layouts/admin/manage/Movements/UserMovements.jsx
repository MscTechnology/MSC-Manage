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
import { useTranslation } from 'react-i18next';
import 'moment/locale/tr';
import { useSelector } from "react-redux";

const UserMovements = () => {
  const selectLang = useSelector((state) => state.language.lang);

  const [sortModel, setSortModel] = React.useState([
    {
      field: 'transactiondate',
      sort: 'desc',
    }
  ]
  );

  const { t } = useTranslation();

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

  let TransactionDay = data?.usersmovements[0]?.transactiondate;



  const columns = [
    {
      field: "users.name",
      headerName: t('movements.table.name'),
      width: 100,
      valueFormatter: (params) => {
        return paramsFunctions(params).users.name;
      },

    },
    {
      field: "users.surname",
      headerName: t('movements.table.surname'),
      width: 100,
      valueFormatter: (params) => {
        return paramsFunctions(params).users.surname;
      },
    },
    {
      field: "transactiondate",
      headerName: t('movements.table.transactiondate'),
      width: 130,
      valueFormatter: (params) => {
        return paramsFunctions(params).transactiondate
          .split("T")[0]
          .split("-")
          .reverse()
          .join("-");
      },
    },
    {
      field: "TransactionDay",
      headerName: t('movements.table.day'),
      width: 130,
      valueFormatter: (params) => {
        return moment(paramsFunctions(params).transactiondate).locale(selectLang).format('dddd');
      },

    },
    {
      field: "entrytime",
      headerName: t('movements.table.entrytime'),
      width: 130,
      valueFormatter: (params) => {
        return paramsFunctions(params).entrytime;
      },
    },
    {
      field: "exittime",
      headerName: t('movements.table.exittime'),
      width: 130,
      valueFormatter: (params) => {
        const exittime = paramsFunctions(params).exittime;
        return exittime === null ? t('movements.notyet') : exittime;
      },
    },
  ];

  return (
    <div className="UserMovements">
      <div className="UserMovements_inner">
        
        <div>{t('movements.title')}</div>
      </div>

      <div style={{ height: 530, width: "75%" }}>
        {refetch && (
          <DataGrid
            rows={data?.usersmovements}
            columns={columns}
            pageSize={8}
            autoPageSize
            pagination
            sortModel={sortModel}
          />
        )}
      </div>
    </div>
  );
};

export default UserMovements;
