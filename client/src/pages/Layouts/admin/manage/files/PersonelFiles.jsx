import React from 'react'
import "../../../../../styles.css";
import { IconButton } from "@mui/material";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { NavLink } from 'react-router-dom';
import { useGetUserQuery,useGetFilesQuery } from 'generated/graphql';

function PersonelFiles() {
  const { data, loading, error } = useGetUserQuery({});

  const { data:filedata} = useGetFilesQuery({});
  console.log(filedata);

  return (
    <div className="dcsPage">

      <div className="dcsPage-title"><IconButton size="large" color="primary" component="span" as={NavLink}
        to="/admin">
        <ArrowBackIcon />
      </IconButton>All Personels Files</div>

      {
        data?.users?.map((user)=>{
          return (
            <div className="personels">{`${user.id} \n${user.name}`}</div>
          )
        })
      }

    </div>
  )
}

export default PersonelFiles