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
            sort: 'desc',
        }
    ]
    );
    const { t } = useTranslation();

    const { data, loading, error, refetch } = useGetMonthMovementsQuery({});
    console.log(data)

    if (loading) {
        return <Loading />;
    }

    moment.locale('tr',{
        months :  'Ocak_subat_mart_nisan_mayıs_haziran_temmuz_ağustos_eylül_ekim_kasım_aralık'.split('_'),
        days: 'Pazar_Pazartesi_Salı_Çarşamba_Perşembe_Cuma_Cumartesi'.split('_'),
    });
    
    moment.locale('en',{
        months :  'January_February_March_April_May_June_July_August_September_October_November_December'.split('_'),
        days: 'Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday'.split('_'),
    });

    const paramsFunctions = (params) => {
        return params.api.state.rows.idRowsLookup[params.id]
      }
    const gridWitdh = 130;

    const columns = [
        {
            field: "ay",
            headerName: t('PersonalMovementsByMonth.label.date'),
            width: gridWitdh,
            valueFormatter: (params) => {
                return paramsFunctions(params).ay
            }
        },
        {
            field: "toChar",
            headerName: t('PersonalMovementsByMonth.label.month'),
            width: gridWitdh,
            valueFormatter: (params) => {
                return paramsFunctions(params).toChar.replace(" ","");
              },
        },
        {
            field: "ad",
            headerName: t('PersonalMovementsByMonth.label.name'),
            width: gridWitdh,
            valueFormatter: (params) => {
                return paramsFunctions(params).ad
            }
        },
        {
            field: "soyad", headerName: t('PersonalMovementsByMonth.label.surname'), width: gridWitdh,
            valueFormatter: (params) => {
                return paramsFunctions(params).soyad
            }
        },
        {
            field: "gun", headerName: t('PersonalMovementsByMonth.label.day'), width: gridWitdh, valueFormatter: (params) => {
                return paramsFunctions(params).gun
            }
        },
        {
            field: "eksikgun", headerName: t('PersonalMovementsByMonth.label.missingDay'), width: gridWitdh, valueFormatter: (params) => {
                return paramsFunctions(params).eksikgun
            }
        },
    ];

    return (
        <div className="bg-primary h-screen text-center py-5 text-2xl text-black">
            <div className="">
                
                <div>{t("PersonalMovementsByMonth.title")}</div>
            </div>
            <div style={{ height: 530, width: "75%" }} className="mx-auto justify-center my-5">
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
