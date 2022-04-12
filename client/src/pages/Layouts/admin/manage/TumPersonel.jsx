//! Css
import "../../../../styles.css";
//! Material UI
import Grid from "@mui/material/Grid";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Button, IconButton } from "@mui/material";

//! Components
import Loading from "components/Loading/Loading";
import NoMatch from "pages/404/NoMatch";

//! Graphql And Router
import { NavLink, Link } from "react-router-dom";
import { useGetUserQuery } from "generated/graphql";



const TumPersonel = () => {
  const { data, loading, error } = useGetUserQuery({});

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <NoMatch />;
  }

  const userFilter = data?.users.filter((user) => user.usertypesid !== 1);

  return (
    <div className="adminPage">
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
        All Personels ({data?.users?.length})
      </div>
      <Grid
        direction="column"
        justifyContent="center"
        alignItems="center"
        spacing={2}
      >
        <Grid item xs={6} md={6}>
          {userFilter?.map((p) => (
            <div key={p?.id} className="allpersonel">
              <Grid container>
                <Grid
                  item
                  md={10}
                  className={p.status ? "btn" : "btn-deactive"}
                >
                  <Button
                    className="AllPersonel-page-buttons"
                    disableElevation
                    size="large"
                    color={p?.status ? "primary" : "error"}
                    variant="text"
                    as={NavLink}
                    to={`${p?.id}`}
                  >
                    {p?.name} {p?.surname}
                  </Button>
                </Grid>
                <Grid
                  item
                  xs={2}
                  className={p?.status ? "status" : "status-deactive"}
                >
                  {p?.status ? "Active " : "Deactive"}
                </Grid>
              </Grid>
            </div>
          ))}
        </Grid>
      </Grid>

      <Link
        className="AllPersonel-add-button"
        role="button"
        to="/admin/personelekle"
      >
        Add new Personel
      </Link>
    </div>
  );
};

export default TumPersonel;
