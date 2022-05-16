import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import { useTranslation } from 'react-i18next';
import { Link, NavLink, Route, Router, Routes, useParams } from "react-router-dom";
import PersonelMovements from "../personel/Movements/PersonelMovements";
import TumPersonel from "../admin/manage/AllPersonel/TumPersonel";
import UserMovements from "../admin/manage/Movements/UserMovements";
import BilgileriGuncelle from "../personel/guncelle/BilgileriGuncelle";
import Documents from "../personel/documents/Documents";
import PersonelEkle from "../admin/manage/Ekle/PersonelEkle";
import MovementsByMonth from "../admin/manage/MovementsByMonth/MovementsByMonth";
import { useSelector } from "react-redux";
import PersonelDetail from "../admin/manage/Detail/PersonelDetail";
import "./managementpanel.css"

const drawerWidth = 200;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  }),
);

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "right",
  paddingRight: "5px",
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-end"
}));

const DrawerHeaderImg = styled("div")(({ theme }) => ({
  display: "flex",
  paddingLeft: "20px",
  alignItems: "center",
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "center"
}));

function Management() {
  const { id } = useParams();
  const user = useSelector((state) => state.users.user);
  const { t } = useTranslation();

  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const Headers = [
    {
      text: t("personelPage.buttons.movementsTable"),
      path: `personelpagemovements/${user.id}`
    },
    {
      text: t("personelPage.buttons.update"),
      path: "/managementpanel/updateinformations",
    },
    {
      text: t("personelPage.buttons.documents"),
      path: "/managementpanel/documents",
    },
    {
      text: t("adminpage.buttons.allpersonel"),
      path: "/managementpanel/allpersonel",
    },
    {
      text: t("adminpage.buttons.movements"),
      path: "/managementpanel/adminpagemovements",
    },
    {
      text: t("adminpage.buttons.addpersonel"),
      path: "/managementpanel/addpersonel",
    },
    {
      text: t("adminpage.buttons.mountmovenments"),
      path: "/managementpanel/movementsbymonth",
    },
    {
      text: t("Signout.text"),
      path: "/",
    },

  ]


  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ mr: 2, ...(open && { display: "none" }) }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            {t("Management.title")}
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box"
          }
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <div style={{ display: "flex", alignItems: "center", flexDirection: "row" }}>
          <DrawerHeaderImg>
            <img src={require("../../../assets/images/logo.jpg")}></img>
          </DrawerHeaderImg>

          <DrawerHeader>
            <IconButton onClick={handleDrawerClose}>
              {theme.direction === "ltr" ? (
                <ChevronLeftIcon />
              ) : (
                <ChevronRightIcon />
              )}
            </IconButton>
          </DrawerHeader>
        </div>

        <Divider />

        {Headers.map((header, index) => (
          <li key={index} style={{listStyle:"none", paddingLeft:"10px",paddingBottom:"10px"}}>
            <NavLink to={header.path}>
              {header.text}
            </NavLink>
            <Divider />
          </li>
        ))}

        {/* <List >
          {Headers.map((header, index) => (
            <ListItem button key={header.index} >
              <Link className="pl-6" to={header.path}>{header.text}</Link>
            </ListItem>
          ))}
        </List> */}
      </Drawer>
      <Main open={open}>
        <DrawerHeader />
        <div>

          <Routes>
            {/* <Route path="/allpersonel" element={<TumPersonel />} /> */}
            <Route path="/" element={<UserMovements />} />
            <Route path="allpersonel" element={<TumPersonel />} />
            <Route path="personelpagemovements/:id" element={<PersonelMovements />} />
            <Route path="updateinformations" element={<BilgileriGuncelle />} />
            <Route path="documents" element={<Documents />} />
            <Route path="adminpagemovements" element={<UserMovements />} />
            <Route path="addpersonel" element={<PersonelEkle />} />
            <Route path="movementsbymonth" element={<MovementsByMonth />} />

            <Route path="allpersonel/:id" element={<PersonelDetail/>}/>

          </Routes>
        </div>

      </Main>
    </Box>
  )
}

export default Management