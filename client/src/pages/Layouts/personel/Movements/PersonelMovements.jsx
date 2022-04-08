import { Button, IconButton } from '@mui/material';
import Loading from 'components/Loading/Loading';
import { useAddMovementMutation, useGetUserMovementByIdQuery } from 'generated/graphql';
import NoMatch from 'pages/404/NoMatch';
import React from 'react'
import { NavLink, useParams } from 'react-router-dom'
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { DataGrid } from '@mui/x-data-grid';
import '../../../../styles.css'
import moment from "moment";
import { toast, ToastContainer } from "react-toastify";
import { setTap } from "../../../../store/MovementsToast/MovementsToast";
import { useDispatch, useSelector } from 'react-redux';

const PersonelMovements = () => {

    const { id } = useParams()
    const user = useSelector((state) => state.users.user);

    const { data, loading, error } = useGetUserMovementByIdQuery({
        variables: {
            prmId: parseInt(id)
        },
    });
    const [addMovementMutation, { data: dataMovement, loading: loadingMovement, error: errorMovement }] = useAddMovementMutation({});


    const isTap = useSelector((state) => state.movements.isTap);
    const dispatch = useDispatch();

    if (loading) {
        return <Loading />
    }

    if (error) {
        return <NoMatch />
    }

    const handleInWork = () => {
        if (isTap) {
            dispatch(setTap(false));
            toast.success("You are in work!");
        }
        else {
            dispatch(setTap(true));
            toast.error("You are out of work!")
        }
        addMovementMutation({
            variables: {
                prmUserMovement: {
                    id: 0,
                    usersid: user.id,
                    entrytime: null,
                    exittime: null,
                    transactiondate: moment(),
                    createuser: user.createuser,
                }
            }
        })

    };

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
                return params.api.state.rows.idRowsLookup[params.id].transactiondate.split("T")[0].split("-").reverse().join("-");

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
             <ToastContainer />
            <div className="UserMovements_inner_1">
                <div>
                    <IconButton
                        size="large"
                        color="primary"
                        component="span"
                        as={NavLink}
                        to="/personel"
                    >
                        <ArrowBackIcon />
                    </IconButton>{" "}
                </div>
                <div style={{color:"white"}}>
                    Personel Giriş Çıkışları
                </div>

            </div>
            <div style={{ height: 400, width: "75%" ,marginBottom:"2%"}}>
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
            <div className="btn2">
                <Button
                    onClick={handleInWork}
                    size="large"
                    color={"primary"}
                    variant="text"
                >
                    log In / Log Out
                </Button>
            </div>
        </div>
    )
}

export default PersonelMovements