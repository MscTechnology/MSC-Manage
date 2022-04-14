//! Css
import "../../../../../styles.css";
//! Material UI
import Grid from "@mui/material/Grid";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Button, Card, CardContent, Divider, IconButton, Stack, Typography } from "@mui/material";

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

      {userFilter?.map((p) => (

        <Link
          className="admin-card"
          role="button"
          to={`${p?.id}`}
          key={p?.id}
        >
          <div >
            <Card sx={{ minWidth: 275 }}>
              <CardContent>

                <div className="card-wrapper">
                  <div >
                    <Typography variant="h5" component="div">
                      {p?.name} {p?.surname}
                    </Typography>

                  </div>

                  <div className="divider-group">
                    <Divider orientation="vertical" flexItem variant="fullWidth" />
                    <div className={p?.status ? "status" : "status-deactive"}>
                      <Typography color="text.secondary" >
                        {p?.status ? "Active " : "Deactive"}
                      </Typography>
                    </div>

                  </div>
                </div>

              </CardContent>
            </Card>
          </div>
        </Link>





      ))
      }
      {/* <Button
                  className="AllPersonel-page-buttons"
                  disableElevation
                  size="large"
                  color={p?.status ? "primary" : "error"}
                  variant="contained"
                  as={NavLink}
                  to={`${p?.id}`}
                >
                  {p?.name} {p?.surname}
                </Button> */}






      {/* <Stack>
                <div className={p?.status ? "status" : "status-deactive"}>
                  {p?.status ? "Active " : "Deactive"}

                </div>
              </Stack> */}








      <Link
        className="AllPersonel-add-button"
        role="button"
        to="/admin/personelekle"
      >
        Add new Personel
      </Link>

    </div >
  );
};

export default TumPersonel;
