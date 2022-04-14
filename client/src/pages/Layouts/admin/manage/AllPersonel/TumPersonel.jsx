//! Css
import "../../../../../styles.css";
//! Material UI
import Grid from "@mui/material/Grid";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Button, IconButton, Stack } from "@mui/material";

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

      <div className="allpersonel-content">

        {userFilter?.map((p) => (
          <Stack direction="column" spacing={5}>
            <div key={p?.id} className="allpersonel">
              <Stack>
                <Button
                  className="AllPersonel-page-buttons"
                  disableElevation
                  size="large"
                  color={p?.status ? "primary" : "error"}
                  variant="contained"
                  as={NavLink}
                  to={`${p?.id}`}
                >
                  {p?.name} {p?.surname}
                </Button>
              </Stack>
              <Stack>
                <div className={p?.status ? "status" : "status-deactive"}>
                {p?.status ? "Active " : "Deactive"}

                </div>
              </Stack>
            </div>
          </Stack>
        ))}
      </div>

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
