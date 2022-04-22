//! Css
import "../../../../../styles.css";
//! Material UI
import Grid from "@mui/material/Grid";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import {
  Button,
  Card,
  CardContent,
  Divider,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";

//! Components
import Loading from "components/Loading/Loading";
import NoMatch from "pages/404/NoMatch";

//! Graphql And Router
import { NavLink, Link } from "react-router-dom";
import { useGetUserQuery } from "generated/graphql";
import { useTranslation, Trans } from 'react-i18next';

const TumPersonel = () => {
  const { t, i18n } = useTranslation();

  const { data, loading, error, refetch } = useGetUserQuery({});

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <NoMatch />;
  }

  const userFilter = data?.users.filter((user) => user.usertypesid !== 1);

  const userBackground = userFilter.length;

  return (
    <div style={{height:`${ userBackground === (0,1,2,3,4,5) ? 100 :userBackground*10+70}vh`}} className="adminPage">
      <div className="tum-personel-title">
        <IconButton
          size="large"
          color="primary"
          component="span"
          as={NavLink}
          to="/admin"
        >
          <ArrowBackIcon />
        </IconButton>{" "}
        {t('allpersonelpage.title')} ({userFilter.length})
      </div>

      {refetch() && userFilter?.map((p) => (
        <Link className="admin-card" role="button" to={`${p?.id}`} key={p?.id}>
          <div >
            <Card sx={{ minWidth: 275 }}>
              <CardContent className={p?.status ? "status" : "status-deactive"}>
                <div className="card-wrapper">
                  <div>
                    <Typography variant="h5" component="div">
                      {p?.name} {p?.surname}
                    </Typography>
                  </div>

                  <Divider
                    orientation="vertical"
                    flexItem
                    variant="fullWidth"
                  />
                  <div className="divider-group">
                    <div >
                      <Typography  color="text.secondary">
                        {p?.status ? t('allpersonelpage.active') : t('allpersonelpage.active')}
                      </Typography>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </Link>
      ))}
     

      <Link
        className="AllPersonel-add-button"
        role="button"
        to="/admin/personelekle"
      >
        {t('allpersonelpage.addnewbutton')}
      </Link>
    </div>
  );
};

export default TumPersonel;
