import "../../../../../styles.css";
import { Button, Typography, CardMedia, CardContent, CardActions, Card, Switch } from "@mui/material";
import { NavLink, useParams } from "react-router-dom";
import { useGetUserDetailQuery, useGetUserQuery, useUpdateUserMutation } from "generated/graphql";
import { useEffect, useState } from "react";
import Loading from "../../../../../components/Loading/Loading";
import Error from "../../../../../components/Error/Error";
import { useSelector, useDispatch } from "react-redux";
import { setActive } from "../../../../../../src/store/User/UserSlice"
const label = { inputProps: { 'aria-label': 'Switch demo' } }

function PersonelDetail() {
  const [checked, setChecked] = useState(true);
  const [rowData, setRowData] = useState({});
  const { id } = useParams()
  const isActive = useSelector((state) => state.users.isActive);
  const dispatch = useDispatch();

  const [updateUserMutation, { data: updateData, loading: updateLoading, error: UpdateError }] = useUpdateUserMutation({});

  const { data: allData } = useGetUserQuery({});


  const userFilter = allData?.users.filter((user) => user.usertypesid !== 1);

  const { data, loading, error } = useGetUserDetailQuery({
    variables: {
      prmId: parseInt(id)
    },
  })

  const status = data?.usersById[0].status


  useEffect(() => {
    if (data) {
      if (data?.usersById?.length > 0) {
        setRowData(data?.usersById[0]);
        setChecked(data?.usersById[0].status);
      }

    }

  }, [data,status])
  console.log()

  console.log(data)
  console.log(rowData)
  console.log(data?.usersById)

  if (loading) {
    return <Loading />
  }

  if (error) {
    return <Error />
  }

  const handleChange = (e) => {
    if(data){
      updateUserMutation({
      variables: {
        prmUser: {
          ...data?.usersById[0],
          status: checked ? 0 : 1
        }
      },
    })
    setChecked(e.target.checked);
    dispatch(setActive(!checked));
    }
    
    
  }


  return (
    <div className="detailPage">
      <div className={isActive ? "detail-title" : "detail-title-active"}>
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
            <div className="active-deactive">
              <div>deactive</div>
              <Switch {...label} defaultChecked onChange={handleChange} checked={checked}/>
              <div>Active</div>
            </div>
          </CardActions>
        </Card>
      </div>
    </div>
  )
}

export default PersonelDetail