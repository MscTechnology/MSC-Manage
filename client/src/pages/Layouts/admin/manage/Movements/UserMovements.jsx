import { IconButton } from "@mui/material";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import "../../../../../styles.css";
import { useGetUserQuery } from "generated/graphql";
import { DataGrid } from "@mui/x-data-grid";
import { moment } from "moment";
const UserMovements = () => {
  const { data, loading, error } = useGetUserQuery({});
  
    console.log(data)
  const DataUsers = data?.users.map((user) => {
  
    return {
      id: user.id,
      name: user.name,
      surname: user.surname,
      username: user.username,
      UserMovements: user?.usersmovements.map((userMovement) => {
        return {
          entrytime: userMovement.entrytime,
          exittime: userMovement.exittime,
          transactiondate: userMovement.transactiondate,
        };
      }),
      
    };
  });

  const columns = [
    { field: "id", headerName: "ID", width: 70 },
    { field: "name", headerName: "Name", width: 130 },
    { field: "surname", headerName: "Surname", width: 130 },
    { field: "username", headerName: "Username", width: 130 },
    { field: "usertypes", headerName: "Username", width: 130 },
    {
      field: "UserMovements",
      headerName: "Date",
      width: 200,
    },
   
  ];

  return (
    <div className="">
      Personel Giriş Çıkışları
      <div style={{ height: 400, width: "100%" }}>
        <DataGrid
          rows={DataUsers}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5]}
          checkboxSelection
        />
      </div>
    </div>
  );
};

export default UserMovements;
