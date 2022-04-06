import "../../../styles.css";
import { Typography, CardContent, Card, IconButton } from "@mui/material";
import { NavLink } from "react-router-dom";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useSelector } from "react-redux";
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import SearchIcon from '@mui/icons-material/Search';
import { Link } from "react-router-dom";


const Admin = () => {
  const user = useSelector((state) => state.users.user);
  console.log(user);

  return (
    <div className="adminPage">
      <div>

        <h1 className="admin-title">
          <IconButton
            size="large"
            color="primary"
            component="span"
            as={NavLink}
            to="/adminLogin"
          >
            <ArrowBackIcon />
          </IconButton>
          Management Panel
        </h1>

        <Link
          className="admin-card"
          role="button"
          to="tumpersonel"

        >
          <Card sx={{ minWidth: 275 }}>
            <CardContent>
              <div className="card-group">
                <div className="admin-icon">
                  <PersonOutlineIcon fontSize="large" className="icon" />
                </div>
                <div className="admin-tp">
                  <Typography variant="h5" component="div" className="topography">
                    Personel
                  </Typography>
                  <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    Kayıtlı olan Personeller
                  </Typography>
                </div>
              </div>


            </CardContent>
          </Card>
        </Link>


        <Link
          className="admin-card"
          role="button"
          to="usermovement"

        >
          <Card sx={{ minWidth: 275 }}>
            <CardContent>
              <div className="card-group">
                <div className="admin-icon">
                  <SearchIcon fontSize="large" className="icon" />
                </div>
                <div className="admin-tp">
                  <Typography variant="h5" component="div" className="topography">
                    Giriş Çıkış
                  </Typography>
                  <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    Personel Giriş Çıkışları
                  </Typography>
                </div>
              </div>


            </CardContent>
          </Card>
        </Link>


        <Link
          className="admin-card"
          role="button"
          to="personelekle"

        >
          <Card sx={{ minWidth: 275 }}>
            <CardContent>
              <div className="card-group">
                <div className="admin-icon">
                  <SearchIcon fontSize="large" className="icon" />
                </div>
                <div className="admin-tp">
                  <Typography variant="h5" component="div" className="topography">
                    Personel Ekle
                  </Typography>
                  <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    Özet
                  </Typography>
                </div>
              </div>

            </CardContent>
          </Card>
        </Link>

      </div>
    </div>
  );
};

export default Admin;
