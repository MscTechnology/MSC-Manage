import { Button } from "@mui/material";
import Error from "components/Error/Error";
import { NavLink } from "react-router-dom";
import "../../styles.css";

const NoMatch = () => {
  return (
    <div className="NoMatch">
      <Error />
      <Button color={"primary"} variant="outlined" as={NavLink} to="/">

        Giriş Yapın
      </Button>
    </div>
  );
};

export default NoMatch;
