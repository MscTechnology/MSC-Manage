import React, { useEffect, useState } from "react";
import moment from "moment";
//? Components
import Loading from "components/Loading/Loading";
import NoMatch from "pages/404/NoMatch";

//? CSS
import "../../../../styles.css";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { DataGrid } from "@mui/x-data-grid";
import { Button, IconButton } from "@mui/material";
import { toast, ToastContainer } from "react-toastify";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

//? Redux Graphql Router
import {
  useAddMovementMutation,
  useGetUserMovementByIdQuery,
  useGetUserMovementsByIdForLoginQuery,
} from "generated/graphql";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useParams } from "react-router-dom";
import { setTap } from "../../../../store/MovementsToast/MovementsToast";
import { useTranslation } from "react-i18next";
import MuiAlert from "components/Alert/MuiAlert";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 250,
  bgcolor: "background.paper",
  border: "3px solid #000",
  boxShadow: 24,
  p: 3,
};

const PersonelMovements = () => {
  const [sortModel, setSortModel] = React.useState([
    {
      field: "transactiondate",
      sort: "desc",
    },
  ]);
  const [addMovementMutation] = useAddMovementMutation({});
  const isTap = useSelector((state) => state.movements.isTap);
  const selectLang = useSelector((state) => state.language.lang);

  const dispatch = useDispatch();

  const { t } = useTranslation();

  const [data2, setData2] = useState([]);

  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSave = () => {
    if (isTap) {
      dispatch(setTap(false));
      toast.success(t("personelMovements.toast.login"));
    } else {
      dispatch(setTap(true));
      toast.error(t("personelMovements.toast.logout"));
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
        },
      },
    }).then(() => {
      refetch();
      setOpen(false);
    });
  };

  const { id } = useParams();
  const user = useSelector((state) => state.users.user);

  const { data, loading, error } = useGetUserMovementByIdQuery({
    variables: {
      prmId: parseInt(id),
    },
  });

  const { data: GetMovementsData, refetch } =
    useGetUserMovementsByIdForLoginQuery({
      variables: {
        prmId: parseInt(id),
      },
    });
  const btnText = GetMovementsData?.usersmovementsByIdForLogin?.btntext;
  const btnVisible = GetMovementsData?.usersmovementsByIdForLogin?.btnvisible;

  const loginLogoutDate = moment().locale(selectLang).format("LLLL");

  useEffect(() => {
    if (GetMovementsData?.usersmovementsByIdForLogin) {
      setData2(GetMovementsData?.usersmovementsByIdForLogin.data);
    }
  }, [GetMovementsData]);

  let transictiondate2 = data?.usersmovementsById[0]?.transactiondate;

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
      headerName: t("personelMovements.table.date"),
      width: 130,
      valueFormatter: (params) => {
        return paramsFunctions(params)
          .transactiondate.split("T")[0]
          .split("-")
          .reverse()
          .join("-");
      },
    },
    {
      field: "transictiondate2",
      headerName: t("personelMovements.table.day"),
      width: 130,
      valueFormatter: (params) => {
        return moment(paramsFunctions(params).transactiondate)
          .locale(selectLang)
          .format("dddd");
      },
    },
    {
      field: "entrytime",
      headerName: t("personelMovements.table.entrytime"),
      width: 130,
      valueFormatter: (params) => {
        return paramsFunctions(params).entrytime;
      },
    },

    {
      field: "exittime",
      headerName: t("personelMovements.table.exittime"),
      width: 130,
      valueFormatter: (params) => {
        const exittime = params.api.state.rows.idRowsLookup[params.id].exittime;
        return exittime === null ? t("movements.notyet") : exittime;
      },
    },
  ];

  return (
    <div className="bg-primary h-screen text-center py-5 text-2xl text-black">
      <ToastContainer />
      

      <div>{t("personelMovements.title")}</div>

      <div
        style={{ height: 530, width: "75%" }}
        className="mx-auto justify-center my-5"
      >
        <DataGrid
          rows={data2}
          columns={columns}
          pageSize={8}
          rowsPerPageOptions={[5, 10, 20, 30, 40, 50]}
          autoPageSize
          pagination
          sortModel={sortModel}
        />
      </div>

      <div className={btnVisible ? "Personel-Btn-Margin" : "disable"}>
        <Button className="disable" onClick={handleOpen}>
          {t("personelMovements.loginlogout").toLocaleUpperCase()}
        </Button>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              {t("personelMovements.modal.title")}
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              {btnText === "GİRİŞ YAP"
                ? `${t(
                    "personelMovements.modal.description1"
                  )} ${loginLogoutDate}`
                : `${t(
                    "personelMovements.modal.description2"
                  )}  ${loginLogoutDate} `}
            </Typography>
            <Box sx={{ mt: 2 }} className="login-logout-buttons">
              <Button className="loginmovements-button" onClick={handleSave}>
                {btnText === "GİRİŞ YAP"
                  ? t("personelMovements.modal.loginbtn")
                  : t("personelMovements.modal.logoutbtn")}
              </Button>
              <Button onClick={handleClose}>
                {t("personelMovements.modal.closebtn")}
              </Button>
            </Box>
          </Box>
        </Modal>
      </div>
    </div>
  );
};

export default PersonelMovements;
