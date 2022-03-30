import "../../../../../styles.css";
import { Button, Typography, CardMedia, CardContent, CardActions, Card } from "@mui/material";
import { NavLink, useParams } from "react-router-dom";
import { useDeleteUserMutation, useGetUserDetailQuery, useGetUserQuery } from "generated/graphql";
import { useEffect, useState } from "react";
import Loading from "../../../../../components/Loading/Loading";
import Error from "../../../../../components/Error/Error";

function PersonelDetail() {
  const [rowData, setRowData] = useState({});
  const { id } = useParams()

  const { data:allData } = useGetUserQuery({});

  const [deleteUserMutation, { data:delData }] = useDeleteUserMutation();

  const userFilter = allData?.users.filter((user) => user.usertypesid !== 1);
  console.log(userFilter)

  const { data, loading, error } = useGetUserDetailQuery({
    variables: {
      prmId: parseInt(id)
    },
  })

  console.log(data)


  useEffect(() => {
    if (data) {
      if (data?.usersById?.length > 0) {
        setRowData(data?.usersById[0]);
      }

    }

  }, [data])

  console.log(data)
  console.log(rowData)
  console.log(data?.usersById)

  if (loading) {
    return <Loading />
  }

  if (error) {
    return <Error />
  }

  const handleClick = (e) => {
    deleteUserMutation({
      variables: {
        prmUser: e.target.value
     },
    })
      console.log(e.target.value)
      alert("Personel Silindi");
  }


  return (
    <div className="detailPage">
      <div className="detail-title">
        Informations

      </div>
      <div className="name">
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia className="cardMedia"
            component="img"
            height="100%"
            image="https://semantic-ui.com/images/avatar2/large/kristy.png"
            alt="green iguana"
          />
          <CardContent >
            <Typography gutterBottom variant="h5" component="div">
              {`ID : ${id}`}
            </Typography>
            <Typography gutterBottom variant="h5" component="div">
              {`Name : ${rowData.name}`}
            </Typography>
            <Typography gutterBottom variant="h5" component="div">
              {`Surname : ${rowData.surname}`}
            </Typography>
            <Typography gutterBottom variant="h5" component="div">
              {
                `Username : ${rowData.username}`
              }
            </Typography>
          </CardContent>
          <CardActions className="buttons1">
            <div>
              <Button as={NavLink} to="/admin/tumpersonel" size="small">Go Back</Button>
            </div>
            <div>
              <Button size="small" value={id} onClick={handleClick}>Delete</Button>
            </div>
          </CardActions>
        </Card>
      </div>
    </div>
  )
}

export default PersonelDetail