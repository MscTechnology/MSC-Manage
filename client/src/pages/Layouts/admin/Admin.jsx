import "../../../styles.css";
import { Typography, CardContent, Card, IconButton } from "@mui/material";
import { NavLink } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useSelector } from "react-redux";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import SearchIcon from "@mui/icons-material/Search";
import { Link } from "react-router-dom";
import { useGetUserQuery } from "generated/graphql";
import Loading from "../../../components/Loading/Loading";
import NoMatch from "pages/404/NoMatch";
import { useTranslation, Trans } from "react-i18next";

const Admin = () => {
  const { t, i18n } = useTranslation();

  const user = useSelector((state) => state.users.user);

  const { data, loading, error } = useGetUserQuery({});

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <NoMatch />;
  }

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
          {t("adminpage.title")}
          <h1 className="admin-subtitle">{user.name}</h1>
        </h1>
        <Link className="admin-card" role="button" to="tumpersonel">
          <Card sx={{ minWidth: 275 }}>
            <CardContent>
              <div className="card-group">
                <div className="admin-icon">
                  <PersonOutlineIcon fontSize="large" className="icon" />
                </div>
                <div className="admin-tp">
                  <Typography
                    variant="h5"
                    component="div"
                    className="topography"
                  >
                    {t("adminpage.buttons.allpersonel")}
                  </Typography>
                  <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    {t("adminpage.buttons.allpersonelsub")}
                  </Typography>
                </div>
              </div>
            </CardContent>
          </Card>
        </Link>

        <Link className="admin-card" role="button" to="usermovement">
          <Card sx={{ minWidth: 275 }}>
            <CardContent>
              <div className="card-group">
                <div className="admin-icon">
                  <SearchIcon fontSize="large" className="icon" />
                </div>
                <div className="admin-tp">
                  <Typography
                    variant="h5"
                    component="div"
                    className="topography"
                  >
                    {t("adminpage.buttons.movements")}
                  </Typography>
                  <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    {t("adminpage.buttons.movementsub")}
                  </Typography>
                </div>
              </div>
            </CardContent>
          </Card>
        </Link>

        <Link className="admin-card" role="button" to="personelekle">
          <Card sx={{ minWidth: 275 }}>
            <CardContent>
              <div className="card-group">
                <div className="admin-icon">
                  <SearchIcon fontSize="large" className="icon" />
                </div>
                <div className="admin-tp">
                  <Typography
                    variant="h5"
                    component="div"
                    className="topography"
                  >
                    {t("adminpage.buttons.addpersonel")}
                  </Typography>
                  <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    {t("adminpage.buttons.addpersonelsub")}
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
