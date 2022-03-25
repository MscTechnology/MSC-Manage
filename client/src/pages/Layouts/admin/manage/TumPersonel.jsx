import "../../../../styles.css";
import { gql, useQuery } from "@apollo/client";
import { Button } from "@mui/material";
import { NavLink } from "react-router-dom";

const GET_USER = gql`
  query GetUser {
    users {
      id
      name
      surname
    }
  }
`;

const TumPersonel = () => {
  const { loading, error, data } = useQuery(GET_USER);



  return <div className="adminPage admin-title">
    <div >
      Tüm Personel
    </div>
    {data?.users?.map((p) => (
      <div className="allpersonel">
        <Button  key={p?.id} disableElevation
    size="medium"
    color={"primary"}
    variant="outlined"
    as={NavLink}
    to="detail">
      {p?.id}-{p?.name} {p?.surname}
    </Button>
      </div>
    
  ))}
  </div>
};

export default TumPersonel;
