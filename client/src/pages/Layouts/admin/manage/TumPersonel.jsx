import "../../../../styles.css";
import { gql, useQuery } from "@apollo/client";
import { Button } from "@mui/material";
import { NavLink } from "react-router-dom";
import { useEffect } from "react";
import Loading from "../../../../components/Loading/Loading";
import Error from "../../../../components/Error/Error";

const GET_USER = gql`
  query GetUser {
    users {
      id
      name
      surname
      usertypesid
    }
  }
`;

const TumPersonel = () => {
  const { loading, error, data } = useQuery(GET_USER);

  if(loading){
    return <div>Loading...</div>
  }

  if(error){
    return <Error/>
  }



  const userFilter = data?.users.filter((user) => user.usertypesid !== 1);
console.log(userFilter);
  return <div className="adminPage">
    <div className="admin-title">
      Tüm Personel
    </div>
     
    
    {userFilter?.map((p) => (
      <div key={p?.id}  className="allpersonel">
        <Button  disableElevation
    size="large"
    color={"primary"}
    variant="outlined"
    as={NavLink}
    to={`${p?.id}`}>
      {p?.id}-{p?.name} {p?.surname}
    </Button>
      </div>
    
  ))}
  </div>
};

export default TumPersonel;
