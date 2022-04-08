import "../../../../styles.css";
import { Button, IconButton } from "@mui/material";
import { NavLink } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Error from "../../../../components/Error/Error";
import { useGetUserQuery } from "generated/graphql";
import { Link } from "react-router-dom";
import Grid from "@mui/material/Grid";
import Loading from "components/Loading/Loading";
import NoMatch from "pages/404/NoMatch";

const TumPersonel = () => {
  const { data, loading, error } = useGetUserQuery({});

  if(loading){
    return <Loading />
  }

  if(error){
    return <NoMatch/>
  }

  const userFilter = data?.users.filter((user) => user.usertypesid !== 1);
  
  return (
    <div className="adminPage">
      <div className="admin-title">
        <IconButton
          size="large"
          color="primary"
          component="span"
          as={NavLink}
          to="/admin"
        >
          <ArrowBackIcon />
        </IconButton>{" "}
        All Personels
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

      <Link className="AllPersonel-add-button" role="button" to="/admin/personelekle">
        Add new Personel
      </Link>
    </div>
  );
};

export default TumPersonel;
