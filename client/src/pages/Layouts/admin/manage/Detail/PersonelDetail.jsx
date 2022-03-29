import "../../../../../styles.css";
import { Button, Typography, CardMedia, CardContent, CardActions, Card } from "@mui/material";
import { NavLink, useParams } from "react-router-dom";
import { useGetUserDetailQuery } from "generated/graphql";
import { useEffect, useState } from "react";
import Loading from "../../../../../components/Loading/Loading";
import Error from "../../../../../components/Error/Error";

function PersonelDetail() {
  const [rowData, setRowData] = useState({});
  const { id } = useParams()

  console.log(id)
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

  }, [data])

  console.log(data)
  
  if (loading) {
    return <Loading />
  }

  if (error) {
    return <Error />
  }


  return (
    <div className="detailPage">
      <div className="detail-title">
        {`${id} id' li kullanıcının bilgileri`}

      </div>
      <div className="name">
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia className="cardMedia"
            component="img"
            height="100%"
            image="https://semantic-ui.com/images/avatar2/large/kristy.png"
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {`${rowData.name} ${rowData.surname}`}
            </Typography>
            <Typography variant="body2" color="text.secondary">
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
              <Button size="small">Active</Button>
              <Button size="small">Deactive</Button>
            </div>
          </CardActions>
        </Card>
      </div>
    </div>
  )
}

export default PersonelDetail