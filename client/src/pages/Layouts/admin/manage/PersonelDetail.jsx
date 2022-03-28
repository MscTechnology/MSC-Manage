import "../../../../styles.css";
import { gql, useQuery } from "@apollo/client";
import { Button } from "@mui/material";
import { NavLink,useParams } from "react-router-dom";


const GET_DETAIL = gql`
  query GetUserDetail {
    users(id:4) {
      name
      surname
      username
    } 
  }
`;

function PersonelDetail() {
  const { loading, error, data } = useQuery(GET_DETAIL);
  console.log(data);
  console.log(data?.users?.name);
  const {id} = useParams()
  console.log(id);
  return (
    <div className="adminPage">
    <div className="admin-title">
      {`${id} id' li kullanıcının bilgileri`}
    </div>
    {id}
    
  </div>
  )
}

export default PersonelDetail