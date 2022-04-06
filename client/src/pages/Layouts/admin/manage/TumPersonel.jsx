import "../../../../styles.css";
import { Button, IconButton } from "@mui/material";
import { NavLink } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Error from "../../../../components/Error/Error";
import { useGetUserQuery } from "generated/graphql";

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

      {userFilter?.map((p) => (
        <div key={p?.id} className="allpersonel">
          <div className={p.status ? "btn" : "btn-deactive"}>
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
          </div>
          <div className={p?.status ? "status" : "status-deactive"}>
            {p?.status ? "Active " : "Deactive"}
          </div>
        </div>
      ))}
    </div>
  );
};

export default TumPersonel;
