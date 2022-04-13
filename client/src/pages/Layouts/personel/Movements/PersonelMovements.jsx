import React from "react";
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
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const handleSave = () => {
    if (isTap) {
      dispatch(setTap(false));
      toast.success("You are in work!");
    } else {
      dispatch(setTap(true));
      toast.error("You are out of work!");
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
  }

  const { id } = useParams();
  const user = useSelector((state) => state.users.user);

  const { data, loading, error } = useGetUserMovementByIdQuery({
    variables: {
      prmId: parseInt(id),
    },
  });

  const { data:GetMovementsData,refetch } = useGetUserMovementsByIdForLoginQuery({
    variables: {
       prmId: parseInt(id),
    },
  });
  const btnText = GetMovementsData?.usersmovementsByIdForLogin?.btntext;
  const btnVisible = GetMovementsData?.usersmovementsByIdForLogin?.btnvisible;
console.log(btnVisible)






  const [addMovementMutation] = useAddMovementMutation({});

  const isTap = useSelector((state) => state.movements.isTap);
  const dispatch = useDispatch();

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
      headerName: "Transaction Date",
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
      field: "entrytime",
      headerName: "Entry Time",
      width: 130,
      valueFormatter: (params) => {
        return paramsFunctions(params).entrytime;
      },
    },
    { field: "exittime", headerName: "Exit Time", width: 130 },
  ];

  return (
    <div className="UserMovements_1">
      <ToastContainer />
      <div className="UserMovements_inner_1">
        <div style={{ marginTop: "5px" }}>
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
        <div>Giriş Çıkış Bilgileri</div>
      </div>
      <div style={{ height: 400, width: "75%", marginBottom: "2%" }}>
        <DataGrid
          rows={GetMovementsData?.usersmovementsByIdForLogin?.data}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5, 10, 20, 30, 40, 50]}
          autoPageSize
          pagination
        />
      </div>
      <div className={btnVisible ? "PersonelPage-Btn-Margin" : "disable"}>
      <Button className="disable" onClick={handleOpen}>log In / Log Out</Button>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Emin misiniz?
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              Bu yapacağınız işlemin geri dönüşü olmayabilir.
            </Typography>
            <Box sx={{ mt: 2 }} className="login-logout-buttons">
              <Button   className="loginmovements-button"  onClick={handleSave}>{btnText}</Button>
              <Button   onClick={handleClose}>Kapat</Button>
            </Box>
          </Box>
        </Modal>
      </div>
    </div>
  );
};

export default PersonelMovements;
