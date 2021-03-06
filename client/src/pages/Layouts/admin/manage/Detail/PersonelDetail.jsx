import { useEffect, useState } from "react";
//! Components
import Loading from "../../../../../components/Loading/Loading";
import NoMatch from "../../../../../pages/404/NoMatch";

//! Css
import "../../../../../styles.css";

//! Material UI
import { styled } from "@mui/material/styles";
import SwitchUnstyled, {
  switchUnstyledClasses,
} from "@mui/base/SwitchUnstyled";
import { Button, Typography, CardContent, Card, IconButton, Stack } from "@mui/material";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

//! Graphql And Router
import { useDispatch } from "react-redux";
import { setActive } from "../../../../../../src/store/User/UserSlice";
import {
  useGetCityByIdQuery,
  useGetDistrictByIdQuery,
  useGetUserDetailQuery,
  useUpdateUserMutation,
} from "generated/graphql";
import { Link, NavLink, useParams } from "react-router-dom";
import { useTranslation, Trans } from 'react-i18next';

function PersonelDetail() {
  const { t } = useTranslation();

  const [checked, setChecked] = useState(true);
  const [rowData, setRowData] = useState({});
  const { id } = useParams();
  const dispatch = useDispatch();

  const [updateUserMutation] = useUpdateUserMutation({});

  const { data, loading, error, refetch } = useGetUserDetailQuery({
    variables: {
      prmId: parseInt(id),
    },
  });

  const status = data?.usersById[0].status;

  //! BURASI POST HATASI VERİYOR SOR! ama datayı getiriyor
  const { data: CityByIdData } = useGetCityByIdQuery({
    variables: {
      prmId: parseInt(rowData?.cityid),
    },
  });

  //! BURASI POST HATASI VERİYOR SOR! ama datayı getiriyor
  const { data: DistrictByIdData } = useGetDistrictByIdQuery({
    variables: {
      prmId: parseInt(rowData?.districtsid),
    },
  });

  useEffect(() => {
    if (data) {
      if (data?.usersById?.length > 0) {
        setRowData(data?.usersById[0]);
        setChecked(data?.usersById[0].status);
      }
    }
  }, [data, status]);

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <NoMatch />;
  }
  const handleChange = (e) => {
    if (data) {
      updateUserMutation({
        variables: {
          prmUser: {
            ...data?.usersById[0],
            status: checked ? 0 : 1,
          },
        },
      });
      setChecked(e.target.checked);
      dispatch(setActive(!checked));
    }
  };

  const blue = {
    500: "#007FFF",
  };

  const grey = {
    400: "#BFC7CF",
    500: "#AAB4BE",
    600: "#6F7E8C",
  };

  const Root = styled("span")(
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
      background: ${theme.palette.mode === "dark" ? grey[600] : grey[400]};
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
    `
  );

  return (
    <div className="detailPage">

      <div className="detail-header">
        <div className="detail-page-back-button">
          <IconButton
            size="large"
            color="primary"
            component="span"
            as={NavLink}
            to="/managementpanel/allpersonel"
          >
            <ArrowBackIcon />
          </IconButton>
        </div>
        <div className="detail-title">{t('personeldetail.title')}</div>
      </div>
      <div className="name">
        <Card>
          <div className="card1">


            <CardContent>
              <Stack direction="row" spacing={3}>
                <Stack>
                  <Typography variant="h6" component="div"
                    className="span-container">
                    <span className="span1">{t('personeldetail.informations.id')} </span>
                  </Typography>

                  <Typography variant="h6" component="div" className="span-container">
                    <span className="span1">{t('personeldetail.informations.name')} </span>
                  </Typography>

                  <Typography variant="h6" component="div" className="span-container">
                    <span className="span1">{t('personeldetail.informations.surname')} </span>
                  </Typography>

                  <Typography variant="h6" component="div" className="span-container">
                    <span className="span1">{t('personeldetail.informations.username')} </span>
                  </Typography>

                  <Typography variant="h6" component="div" className="span-container">
                    <span className="span1">{t('personeldetail.informations.password')} </span>
                  </Typography>

                  <Typography variant="h6" component="div" className="span-container">
                    <span className="span1">{t('personeldetail.informations.phone')} </span>
                  </Typography>

                  <Typography variant="h6" component="div" className="span-container">
                    <span className="span1">{t('personeldetail.informations.tc')} </span>
                  </Typography>

                  <Typography variant="h6" component="div" className="span-container">
                    <span className="span1">{t('personeldetail.informations.school')} </span>
                  </Typography>

                  <Typography variant="h6" component="div" className="span-container">
                    <span className="span1">{t('personeldetail.informations.adress')} </span>
                  </Typography>

                  <Typography variant="h6" component="div" className="span-container">
                    <span className="span1">{t('personeldetail.informations.city')} </span>
                  </Typography>

                  <Typography variant="h6" component="div" className="span-container">
                    <span className="span1">{t('personeldetail.informations.district')} </span>
                  </Typography>

                  <Typography variant="h6" component="div" className="span-container">
                    <span className="span1">{t('personeldetail.informations.status')} </span>
                  </Typography>

                  <Typography variant="h6" component="div" className="span-container">
                    <span className="span1">{t('personeldetail.informations.email')} </span>
                  </Typography>
                </Stack>

                <Stack>
                  <Typography variant="h6" component="div"
                    className="span-container">
                    <span className="span2">{`:${id}`}</span>
                  </Typography>

                  <Typography variant="h6" component="div" className="span-container">
                    <span className="span2">{`:${rowData.name}`}</span>
                  </Typography>

                  <Typography variant="h6" component="div" className="span-container">
                    <span className="span2">{`:${rowData.surname}`}</span>
                  </Typography>

                  <Typography variant="h6" component="div" className="span-container">
                    <span className="span2">{`:${rowData.username}`}</span>
                  </Typography>

                  <Typography variant="h6" component="div" className="span-container">
                    <span className="span2">{`:${rowData.password}`}</span>
                  </Typography>

                  <Typography variant="h6" component="div" className="span-container">
                    <span className="span2">{`:${rowData.phonenumber === null ? "Empty" : rowData.phonenumber}`}</span>
                  </Typography>

                  <Typography variant="h6" component="div" className="span-container">
                    <span className="span2">{` :${rowData.identificationnumber === null
                      ? "Empty"
                      : rowData.identificationnumber
                      }`} </span>

                  </Typography>

                  <Typography variant="h6" component="div" className="span-container">
                    <span className="span2">{`:${rowData.schoolname === null
                      ? "Empty"
                      : rowData.schoolname
                      }`} </span>

                  </Typography>

                  <Typography variant="h6" component="div" className="span-container">
                    <span className="span2">{`:${rowData.adress === null ? "Empty" : rowData.adress
                      }`} </span>

                  </Typography>

                  <Typography variant="h6" component="div" className="span-container">
                    <span className="span2">{`:${CityByIdData?.cities[0].cityname === undefined
                      ? "Empty"
                      : CityByIdData?.cities[0].cityname
                      }`} </span>

                  </Typography>

                  <Typography variant="h6" component="div" className="span-container">
                    <span className="span2">{`:${DistrictByIdData?.districts[0].districtname === undefined
                      ? "Empty"
                      : DistrictByIdData?.districts[0].districtname
                      }`} </span>

                  </Typography>

                  <Typography variant="h6" component="div" className="span-container">
                    <span className="span2">{`:${rowData.status === 1 ? "Active" : "Deactive"}`} </span>

                  </Typography>

                  <Typography variant="h6" component="div" className="span-container">
                    <span className="span2">{`:${rowData.email === null ? "Empty" : rowData.email}`}</span>
                  </Typography>
                </Stack>
              </Stack>
            </CardContent>


          </div>
        </Card>
        <div className="buttons1">
          <div className="active-deactive">
            <div>{t('personeldetail.deactive')}</div>
            {refetch() && <SwitchUnstyled
              component={Root}
              onChange={handleChange}
              checked={checked}
            />}

            <div>{t('personeldetail.active')}</div>
          </div>
        </div>

        <Link
          className="detail-page-button"
          role="button"
          to={`/managementpanel/allpersonel/movements/${data?.usersById[0].id}`}
        >
          {t('personeldetail.viewbutton')}
        </Link>
      </div>
    </div>
  );
}

export default PersonelDetail;
