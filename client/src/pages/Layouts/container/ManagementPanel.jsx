import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { useTranslation } from "react-i18next";
import {
  Link,
  NavLink,
  Route,
  Router,
  Routes,
  useParams,
} from "react-router-dom";
import PersonelMovements from "../personel/Movements/PersonelMovements";
import TumPersonel from "../admin/manage/AllPersonel/TumPersonel";
import UserMovements from "../admin/manage/Movements/UserMovements";
import BilgileriGuncelle from "../personel/guncelle/BilgileriGuncelle";
import Documents from "../personel/documents/Documents";
import PersonelEkle from "../admin/manage/Ekle/PersonelEkle";
import MovementsByMonth from "../admin/manage/MovementsByMonth/MovementsByMonth";
import { useSelector } from "react-redux";
import PersonelDetail from "../admin/manage/Detail/PersonelDetail";
import "./managementpanel.css";
import LanguageSwitcher from "components/LanguageSwitcher/LanguageSwitcher";

//? icons
import CompareArrowsRoundedIcon from "@mui/icons-material/CompareArrowsRounded";
import SystemUpdateAltRoundedIcon from "@mui/icons-material/SystemUpdateAltRounded";
import PictureAsPdfRoundedIcon from "@mui/icons-material/PictureAsPdfRounded";
import GroupRoundedIcon from "@mui/icons-material/GroupRounded";

import AddReactionRoundedIcon from "@mui/icons-material/AddReactionRounded";
import CalendarMonthRoundedIcon from "@mui/icons-material/CalendarMonthRounded";
import LogoutRoundedIcon from "@mui/icons-material/LogoutRounded";
import { Icon } from "@mui/material";
import WelcomePage from "./WelcomePage";
import Movements from "../admin/manage/MovementsTable/Movements";

const drawerWidth = 220;

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })(
  ({ theme, open }) => ({
    flexGrow: 1,
    
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  })
);

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(["margin", "width"], {
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
  justifyContent: "flex-end",
}));

const DrawerHeaderImg = styled("div")(({ theme }) => ({
  display: "flex",
  paddingLeft: "0px",
  alignItems: "center",
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "center",
}));

function Management() {
  const user = useSelector((state) => state.users.user);
  const isAdmin = useSelector((state) => state.users.isAdmin);
  const { t } = useTranslation();

  const theme = useTheme();
  const [open, setOpen] = React.useState(true);

  const handleDrawerOpen = () => {
    setOpen(!open);
  };


  const HeadersAdmin = [
    {
      text: t("personelPage.buttons.movementsTable"),
      path: `personelpagemovements/${user.id}`,
      icon: <CompareArrowsRoundedIcon />,
    },
    {
      text: t("personelPage.buttons.update"),
      path: "/managementpanel/updateinformations",
      icon: <SystemUpdateAltRoundedIcon />,
      
    },
    
    {
      text: t("personelPage.buttons.documents"),
      path: "/managementpanel/documents",
      icon: <PictureAsPdfRoundedIcon />,
      
    },

    {
      text: t("adminpage.buttons.allpersonel"),
      path: "/managementpanel/allpersonel",
      icon: <GroupRoundedIcon />,
      
    },
    {
      text: t("adminpage.buttons.movements"),
      path: "/managementpanel/adminpagemovements",
      icon: <CompareArrowsRoundedIcon />,
    },
    {
      text: t("adminpage.buttons.addpersonel"),
      path: "/managementpanel/addpersonel",
      icon: <AddReactionRoundedIcon />,
    
    },
    {
      text: t("adminpage.buttons.mountmovenments"),
      path: "/managementpanel/movementsbymonth",
      icon: <CalendarMonthRoundedIcon />,
      
    },
    {
      text: t("Signout.text"),
      path: "/",
      icon: <LogoutRoundedIcon />,
      onclick: ()=> window.location.reload()
    },
  ];

  const HeadersPersonel = [
    {
      text: t("personelPage.buttons.movementsTable"),
      path: `personelpagemovements/${user.id}`,
      icon: <CompareArrowsRoundedIcon />,
    },
    {
      text: t("personelPage.buttons.update"),
      path: "/managementpanel/updateinformations",
      icon: <SystemUpdateAltRoundedIcon />,
      
    },
    
    {
      text: t("personelPage.buttons.documents"),
      path: "/managementpanel/documents",
      icon: <PictureAsPdfRoundedIcon />,
      
    },
    {
      text: t("Signout.text"),
      path: "/",
      icon: <LogoutRoundedIcon />,
      onclick: ()=> window.location.reload()
    },
  ]

  return (
    <div>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />

        <AppBar position="fixed" open={open}>
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" noWrap component="div">
              {t("Management.title")}
            </Typography>

            <div className="ml-auto flex flex-row justify-center items-center text-sm px-5">
              <LanguageSwitcher />
            </div>
          </Toolbar>
        </AppBar>
        <Drawer
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            "& .MuiDrawer-paper": {
              width: drawerWidth,
              boxSizing: "border-box",
            },
          }}
          variant="persistent"
          anchor="left"
          open={open}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              flexDirection: "row",
            }}
          >
            <Link to="/managementpanel/" className=" mx-auto">
            <DrawerHeaderImg>
              <img
                className="h-12"
                src={require("../../../assets/images/logo2.png")}
              ></img>
            </DrawerHeaderImg>
            </Link>
            {/* <DrawerHeader>
              <IconButton className="hidden" onClick={handleDrawerClose}>
                {theme.direction === "ltr" ? (
                  <ChevronLeftIcon />
                ) : (
                  <ChevronRightIcon />
                )}
              </IconButton>
            </DrawerHeader> */}
          </div>

          {(isAdmin ? HeadersAdmin : HeadersPersonel).map(({ path, text, icon }) => (
            <li key={path} className="p-3 list-none">
              <NavLink to={path} >
                {icon} {text}
              </NavLink>
              <Divider color="orange" />
            </li>
          ))}
        </Drawer>
        <Main open={open}>
          <DrawerHeader />
          <div>
            <Routes>
              {/* <Route path="/allpersonel" element={<TumPersonel />} /> */}
              <Route path="/" element={<WelcomePage/>} />
              <Route path="allpersonel" element={<TumPersonel />} />
              <Route
                path="personelpagemovements/:id"
                element={<PersonelMovements />}
              />
              <Route
                path="updateinformations"
                element={<BilgileriGuncelle />}
              />
              <Route path="documents" element={<Documents />} />
              <Route path="adminpagemovements" element={<UserMovements/>} />
              <Route path="addpersonel" element={<PersonelEkle />} />

              <Route path="movementsbymonth" element={<MovementsByMonth />} />

              <Route path="allpersonel/:id" element={<PersonelDetail />} />
              <Route path="allpersonel/movements/:id" element={<Movements />} />
            </Routes>
          </div>
        </Main>
      </Box>
    </div>
  );
}

export default Management;
