import "../../../../styles.css";
import { Button, IconButton } from "@mui/material";
import { NavLink } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Error from "../../../../components/Error/Error";
import { useGetUserQuery } from "generated/graphql";
import { Link } from "react-router-dom";
import Grid from '@mui/material/Grid';

const TumPersonel = () => {
  const { data, loading, error } = useGetUserQuery({});

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <Error />;
  }

  const userFilter = data?.users.filter((user) => user.usertypesid !== 1);
  console.log(userFilter);
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


      {
        userFilter?.map((p) => (
          <div key={p?.id} className="allpersonel">
            <Grid container  >
              <Grid item md={10} className={p.status ? "btn" : "btn-deactive"}>
                <Button
                  disableElevation
                  size="large"
                  color={p?.status ? "primary" : "error"}
                  variant="outlined"
                  as={NavLink}
                  to={`${p?.id}`}
                >
                  {p?.id}-{p?.name} {p?.surname}
                </Button>
              </Grid>
              <Grid item xs={2} className={p?.status ? "status" : "status-deactive"}>
                  {p?.status ? "Active " : "Deactive"}
              </Grid>
            </Grid>
          </div>
        ))
      }


      <Link
        className="button11"
        role="button"
        to="/admin/personelekle"

      >
        Add new Personel
      </Link>


    </div >
  );
};

export default TumPersonel;
