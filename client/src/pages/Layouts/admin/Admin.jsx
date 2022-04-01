import "../../../styles.css";
import { Button, IconButton } from "@mui/material";
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
import { useSelector } from "react-redux";

const buttonState = {
  size: "large",
  variant: {
    contained: "contained",
    outlined: "outlined",
  }
};

const Admin = () => {
  const user = useSelector((state) => state.users.user);
  console.log(user)

  return (
    <div className="adminPage">
      <div>
        <Box sx={{ flexGrow: 1 }}>
          <Grid item xs={8}>
            <h1 className="admin-title">
              <IconButton size="large" color="primary" component="span" as={NavLink}
                to="/adminLogin">
                <ArrowBackIcon />
              </IconButton>Management Panel</h1>
            <h2 className="admin-subtitle">{user.name}</h2>
            <div className="admin-button-group">
              <div className="btn1">
                <Button
                  onClick={() => { }}
                  startIcon={<UserAddOutlined />}
                  size={buttonState.size}
                  icon={<UserAddOutlined />}
                  variant={buttonState.variant.outlined}
                  as={NavLink}
                  to="personelekle"
                >
                  Add personel
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
                  LIst All personels
                </Button>
              </div>
              <div className="btn1">
                <Button
                  size={buttonState.size}
                  variant="outlined"
                  startIcon={<UnorderedListOutlined />}
                  as={NavLink}
                  to="personelfiles"
                >
                  LIst All personels Files
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
