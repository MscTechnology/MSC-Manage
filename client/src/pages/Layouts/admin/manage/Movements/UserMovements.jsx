import "../../../../../styles.css";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-alpine.css";
import { useGetUserMovementsQuery } from "generated/graphql";
import { DataGrid,GridToolbar } from "@mui/x-data-grid";
import * as React from "react";
import Loading from "components/Loading/Loading";
import NoMatch from "pages/404/NoMatch";
import moment from "moment";
import { useTranslation } from 'react-i18next';
import 'moment/locale/tr';
import { useSelector } from "react-redux";
import MuiAlert from "components/Alert/MuiAlert";


const UserMovements = () => {
  const selectLang = useSelector((state) => state.language.lang);

  const { data, loading, error, refetch } = useGetUserMovementsQuery({});
  const rows = data?.usersmovements

  const [state,setState]=React.useState(rows)

  const [sortModel, setSortModel] = React.useState([
    {
      field: 'transactiondate',
      sort: 'desc',
    }
  ]
  );

  const { t } = useTranslation();

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


  const infoAlertText = t('InfoAlert.text')


  
  const handleEditing=(e)=>{
    console.log(e);
    const array = state?.map((r) => {
      if (r?.id === e?.id) {
        return {...r,[e?.field]:e?.value};
      }
      return {...r}
    })
    setState(array)
  }
  

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
      editable: true
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
      editable: true
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
    <div className="bg-primary h-screen text-center py-5 text-2xl text-black">

      <div>{t('movements.title')}</div>
      <div style={{ height: 530, width: "75%" }} className="mx-auto justify-center my-5">
        {refetch && (
          <DataGrid
            rows={rows}
            columns={columns}
            pageSize={8}
            autoPageSize
            pagination
            sortModel={sortModel}
            onCellEditCommit={handleEditing}
            components={{ Toolbar: GridToolbar }} 
          />
        )}
        <div className="my-5">

          <MuiAlert severity={"info"} text={infoAlertText} />
        </div>
      </div>
    </div>
  );
};

export default UserMovements;
