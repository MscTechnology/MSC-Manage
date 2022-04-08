import React from 'react'
import "../../../../../styles.css";
import { IconButton } from "@mui/material";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { NavLink } from 'react-router-dom';
import { useGetUserQuery, useGetFilesQuery } from 'generated/graphql';
import { DataGrid } from '@mui/x-data-grid';
import Loading from 'components/Loading/Loading';
import NoMatch from 'pages/404/NoMatch';

function PersonelFiles() {
  const { data, loading, error } = useGetUserQuery({});

  const { data: filedata } = useGetFilesQuery({});

  if(loading){
    return <Loading />
  }

  if(error){
    return <NoMatch/>
  }

  const rows = data?.users?.map((user) => {

    return (
      { id: user.id, lastName: user.surname, firstName: user.name , files: user.userfiles.map((f)=>f.extensitions) }
    )
  })

  const columns = [
    { field: 'id', headerName: 'ID', width: 70},
    { field: 'firstName', headerName: 'First name', width: 130 },
    { field: 'lastName', headerName: 'Last name', width: 130 },
    {
      field: 'files',
      headerName: 'Files',
      sortable: false,
      width: 160,
    },
  ];


  return (
    <div className="dcsPage">

      <div className="dcsPage-title"><IconButton size="large" color="primary" component="span" as={NavLink}
        to="/admin">
        <ArrowBackIcon />
      </IconButton>All Personels Files</div>

      <div style={{ height: 550, width: '70%', background: "white", marginTop: 15 }}>
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={8}
          rowsPerPageOptions={[8]}
          checkboxSelection
        />

      </div>


    </div>
  )
}

export default PersonelFiles