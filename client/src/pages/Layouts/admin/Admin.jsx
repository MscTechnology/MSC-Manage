import "../../../styles.css";
import { Button,IconButton } from "@mui/material";
import {
  UserDeleteOutlined,
  UserAddOutlined,
  UserSwitchOutlined,
  UnorderedListOutlined,
} from "@ant-design/icons";
import { NavLink } from "react-router-dom";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";

const buttonState = {
  size: "large",
  variant: {
    contained: "contained",
    outlined: "outlined",
  }
};

const Admin = () => {
  return (
    <div className="adminPage">
      <div>
        <Box sx={{ flexGrow: 1 }}>
          <Grid  item xs={8}>
            <h1 className="admin-title"><IconButton size="large" color="primary"  component="span" as={NavLink}
        to="/adminLogin">
        <ArrowBackIcon />
      </IconButton>Yönetim Paneli</h1>
            <div className="admin-button-group">
              <div className="btn1">
                <Button
                  onClick={() => {}}
                  startIcon={<UserAddOutlined />}
                  size={buttonState.size}
                  icon={<UserAddOutlined />}
                  variant={buttonState.variant.outlined}
                  as={NavLink}
                  to="personelekle"
                >
                  Personel EKLE
                </Button>
              </div>
              {/* <div className="btn1">
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
              </div> */}
              {/* <div className="btn1">
                <Button
                  size={buttonState.size}
                  variant="outlined"
                  startIcon={<UserSwitchOutlined />}
                  as={NavLink}
                  to="personelguncelle"
                >
                  Personel Güncelle
                </Button>
              </div> */}
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
