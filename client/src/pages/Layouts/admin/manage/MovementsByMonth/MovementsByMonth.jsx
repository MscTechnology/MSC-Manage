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
import { useGetMonthMovementsQuery } from "generated/graphql";
import { useParams, NavLink } from "react-router-dom";
import moment from "moment";
import { useTranslation } from 'react-i18next';
import 'moment/locale/tr';
import { useSelector } from "react-redux";

function MovementsByMonth() {

    const selectLang = useSelector((state) => state.language.lang);

    const [sortModel, setSortModel] = React.useState([
        {
            field: 'ay',
            sort: 'asc',
        }
    ]
    );
    const { t } = useTranslation();

    const { data, loading, error, refetch } = useGetMonthMovementsQuery({});


    console.log(data?.monthmovements)

    if (loading) {
        return <Loading />;
    }

    if (error) {
        return <NoMatch />;
    }

    const paramsFunctions = (params) => {
        return params.api.state.rows.idRowsLookup[params.id]
      }
      

    const columns = [
        {
            field: "ay",
            headerName: t('PersonalMovementsByMonth.label.date'),
            width: 130,
            valueFormatter: (params) => {
                return params.api.state.rows.idRowsLookup[params.id].ay
            }
        },
        {
            field: "to_char",
            headerName: t('PersonalMovementsByMonth.label.month'),
            width: 130,
            valueFormatter: (params) => {
                return moment(paramsFunctions(params).transactiondate).locale(selectLang).format('MMMM');
              },
        },
        {
            field: "ad",
            headerName: t('PersonalMovementsByMonth.label.name'),
            width: 130,
            valueFormatter: (params) => {
                return params.api.state.rows.idRowsLookup[params.id].ad
            }
        },
        {
            field: "soyad", headerName: t('PersonalMovementsByMonth.label.surname'), width: 130,
            valueFormatter: (params) => {
                return params.api.state.rows.idRowsLookup[params.id].soyad
            }
        },
        {
            field: "gun", headerName: t('PersonalMovementsByMonth.label.day'), width: 130, valueFormatter: (params) => {
                return params.api.state.rows.idRowsLookup[params.id].gun
            }
        },
        {
            field: "eksikgun", headerName: t('PersonalMovementsByMonth.label.missingDay'), width: 130, valueFormatter: (params) => {
                return params.api.state.rows.idRowsLookup[params.id].eksikgun
            }
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
                        to={`/admin/`}
                    >
                        <ArrowBackIcon />
                    </IconButton>{" "}
                </div>
                <div>{t("PersonalMovementsByMonth.title")}</div>
            </div>
            <div style={{ height: 530, width: "75%" }}>
                {
                    refetch() && <DataGrid
                        rows={data?.monthmovements}
                        columns={columns}
                        pageSize={8}
                        rowsPerPageOptions={[5, 10, 20, 30, 40, 50]}
                        autoPageSize
                        pagination
                        sortModel={sortModel}
                    />
                }


            </div>
        </div>
    );
}

export default MovementsByMonth;
