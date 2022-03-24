import "../../../styles.css";
import { Button } from "@mui/material";
import {
  UserDeleteOutlined,
  UserAddOutlined,
  UserSwitchOutlined,
  UnorderedListOutlined,
} from "@ant-design/icons";
import { Routes, Route, Link, NavLink } from "react-router-dom";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";

const buttonState = {
  size: "large",
  color: {
    primary: "#03a9f4",
    secondary: "secondary",
    disabled: "disabled",
    text: "text",
  },
};

const Admin = () => {
  return (
    <div className="adminPage">
      <div>
        <Box sx={{ flexGrow: 1 }}>
          <Grid  item xs={8}>
            <h1 className="admin-title">Yönetim Paneli</h1>
            <div className="admin-button-group">
              <div className="btn1">
                <Button
                  onClick={() => {}}
                  startIcon={<UserAddOutlined />}
                  size={buttonState.size}
                  icon={<UserAddOutlined />}
                  variant="outlined"
                  as={NavLink}
                  to="personelekle"
                >
                  Personel EKLE
                </Button>
              </div>
              <div className="btn1">
                <Button
                  className="btn1"
                  size={buttonState.size}
                  variant="outlined"
                  startIcon={<UserDeleteOutlined />}
                  as={NavLink}
                  to="personelsil"
                >
                  Personel SİL
                </Button>
              </div>
              <div className="btn1">
                <Button
                  size={buttonState.size}
                  variant="outlined"
                  startIcon={<UserSwitchOutlined />}
                  as={NavLink}
                  to="personelguncelle"
                >
                  Personel Güncelle
                </Button>
              </div>
              <div className="btn1">
                <Button
                  size={buttonState.size}
                  variant="outlined"
                  startIcon={<UnorderedListOutlined />}
                  as={NavLink}
                  to="tumpersonel"
                >
                  Tüm Personelleri Listele
                </Button>
              </div>
            </div>
          </Grid>
        </Box>
      </div>
    </div>
  );
};

export default Admin;
