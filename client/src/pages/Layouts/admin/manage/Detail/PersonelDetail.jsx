import "../../../../../styles.css";
import { gql, useQuery } from "@apollo/client";
import { Button } from "@mui/material";
import { NavLink,useParams } from "react-router-dom";
import { useGetUserDetailQuery } from "generated/graphql";
import { useEffect, useState } from "react";





function PersonelDetail() {
  const [rowData, setRowData] = useState({});
  const {id} = useParams()
  console.log(id);

  const { data, loading, error } = useGetUserDetailQuery({
    variables: {
       prmId: parseInt(id)
    },
  });
 
  useEffect(() => {
    if (data) {
      if (data?.usersById?.length > 0) {
        setRowData(data?.usersById[0]);
      }
      
    }
    
  } ,[data])

  console.log(rowData);
 
  return (
    <div className="adminPage">
    <div className="admin-title">
      {`${id} id' li kullanıcının bilgileri`}
      {
      rowData.name
      }
    </div>
    {id}
    
  </div>
  )
}

export default PersonelDetail