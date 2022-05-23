import React from "react";
//! Css
import "./allpersonel.css"
//! Material UI
import {

  Card,
  CardContent,
  Divider,
  Grid,
  IconButton,
  List,
  Typography,
  Avatar,
  ListItemAvatar,
  ListItemText,
  ListItem
} from "@mui/material";

//! Components
import Loading from "components/Loading/Loading";
import NoMatch from "pages/404/NoMatch";

//! Graphql And Router
import { Link } from "react-router-dom";
import { useGetUserQuery } from "generated/graphql";
import { useTranslation } from "react-i18next";

const TumPersonel = () => {
  const { t } = useTranslation();

  const { data, loading, error, refetch } = useGetUserQuery({});

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <NoMatch />;
  }

  const userLength = data?.users.length;

  return (
    <div

      className="bg-primary text-center py-5 text-2xl text-black h-screen"
    >
      <div className="text-3xl">
        {t("allpersonelpage.title")} ({userLength})
      </div>

      <div className="my-12">

        <Grid container>

          {refetch() &&

            data?.users?.map((p) => (
              <Grid item xs={12} sm={12} md={12}>
                <Link
                  className="flex flex-col max-w-fit mx-auto items-baseline"
                  role="button"
                  to={`${p?.id}`}
                  key={p?.id}
                >
                  <div >
                    <List sx={{ maxWidth: 370, minWidth: 500, bgcolor: 'background.paper', paddingTop: '8px',paddingBottom:'0px' }}>
                      <ListItem alignItems="flex-start" className="flex flex-row justify-center items-center">
                        <ListItemAvatar className="mb-3">
                          <Avatar alt={p.name} src="/static/images/avatar/1.jpg" sx={{ width: 43, height: 43,marginTop:'4px',backgroundColor:'#e85923' }} />
                        </ListItemAvatar>
                        <ListItemText secondary={p?.status
                          ? t("allpersonelpage.active")
                          : t("allpersonelpage.deactive")}>
                          <div className='text-3xl'>
                            {p.name} {p.surname}
                          </div>
                        </ListItemText>
                      </ListItem>

                      <Divider variant="inset" style={{color:'#e85923'}} light={true}/>
                      
                    </List>

                    {/* <Card sx={{ minWidth: 275 }} className="">
                    <CardContent
                      className=""
                    >
                      <div className="flex flex-row  justify-between items-center">
                        <div className={p?.status ? "status" : "status-deactive"}>
                          <Typography variant="h5" component="div">
                            {p?.name} {p?.surname}
                          </Typography>
                        </div>

                        <Divider
                          orientation="vertical"
                          flexItem
                          variant="fullWidth"
                        />
                        <div className="divider-group">
                          <div>

                            <Typography color="text.secondary">
                              {p?.status
                                ? t("allpersonelpage.active")
                                : t("allpersonelpage.deactive")}
                            </Typography>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card> */}


                  </div>
                </Link>
              </Grid>
            ))}

          {/* <Link
        className="text-xl text-black"
        role="button"
        to="/admin/personelekle"
      >
        {t("allpersonelpage.addnewbutton")}
      </Link> */}
        </Grid>
      </div>
    </div >
  );
};

export default TumPersonel;
