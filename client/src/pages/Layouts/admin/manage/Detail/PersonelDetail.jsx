import "../../../../../styles.css";
import { Button, Typography, CardMedia, CardContent, CardActions, Card, Switch, FormControlLabel } from "@mui/material";
import { Link, NavLink, useParams } from "react-router-dom";
import { useGetUserDetailQuery, useGetUserQuery, useUpdateUserMutation } from "generated/graphql";
import { useEffect, useState } from "react";
import Loading from "../../../../../components/Loading/Loading";
import Error from "../../../../../components/Error/Error";
import { useSelector, useDispatch } from "react-redux";
import { setActive } from "../../../../../../src/store/User/UserSlice"
import { styled } from '@mui/material/styles';
import SwitchUnstyled, { switchUnstyledClasses } from '@mui/base/SwitchUnstyled';

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

  }, [data, status])
  console.log(data)


  if (loading) {
    return <Loading />
  }

  if (error) {
    return <Error />
  }

  const handleChange = (e) => {
    if (data) {
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
  const blue = {
    500: '#007FFF',
  };

  const grey = {
    400: '#BFC7CF',
    500: '#AAB4BE',
    600: '#6F7E8C',
  };
  const Root = styled('span')(
    ({ theme }) => `
    font-size: 0;
    position: relative;
    display: inline-block;
    width: 40px;
    height: 20px;
    margin: 10px;
    cursor: pointer;
  
    &.${switchUnstyledClasses.disabled} {
      opacity: 0.4;
      cursor: not-allowed;
    }
  
    & .${switchUnstyledClasses.track} {
      background: ${theme.palette.mode === 'dark' ? grey[600] : grey[400]};
      border-radius: 10px;
      display: block;
      height: 100%;
      width: 100%;
      position: absolute;
    }
  
    & .${switchUnstyledClasses.thumb} {
      display: block;
      width: 14px;
      height: 14px;
      top: 3px;
      left: 3px;
      border-radius: 16px;
      background-color: #fff;
      position: relative;
      transition: all 200ms ease;
    }
  
    &.${switchUnstyledClasses.focusVisible} .${switchUnstyledClasses.thumb} {
      background-color: ${grey[500]};
      box-shadow: 0 0 1px 8px rgba(0, 0, 0, 0.25);
    }
  
    &.${switchUnstyledClasses.checked} {
      .${switchUnstyledClasses.thumb} {
        left: 22px;
        top: 3px;
        background-color: #fff;
      }
  
      .${switchUnstyledClasses.track} {
        background: ${blue[500]};
      }
    }
  
    & .${switchUnstyledClasses.input} {
      cursor: inherit;
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      opacity: 0;
      z-index: 1;
      margin: 0;
    }
    `,
  );


  return (
    <div className="detailPage">
      <div className={isActive ? "detail-title" : "detail-title-active"}>
        Informations

      </div>
      <div className="name">

        <Card sx={{ maxWidth: 700,maxHeight: 600,paddingLeft:10,paddingRight:10 }}>
          <div className="card1">
            
            <div>
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
                <Typography gutterBottom variant="h5" component="div">
                  {
                    `Password : ${rowData.password}`
                  }
                </Typography>
                {
                  rowData?.usersmovements?.map((movement) => {
                    return (
                      <ul>
                        <li>
                          {`Movement : ${movement.entrytime}`}
                        </li>
                      </ul>

                    )
                  })
                }
                <Typography gutterBottom variant="h5" component="div">
                  {
                    `Entry Time : ${rowData?.usersmovements?.map((user) => user.entrytime)}`
                  }
                </Typography>

              </CardContent>
            </div>
          </div>

          </Card>
          <div className="buttons1">
            <div>
              <Button as={NavLink} to="/admin/tumpersonel" size="small">Go Back</Button>
            </div>
            <div className="active-deactive">
              <div>deactive</div>
              <SwitchUnstyled component={Root} onChange={handleChange} checked={checked} />
              <div>Active</div>
            </div>
          </div>

         
          <Link
          className="detail-page-button"
          role="button"
          to="admin"

        >
          View Personels Movements Table
        </Link>
      </div>
    </div>
  )
}

export default PersonelDetail