import React from "react";
import {
  ProSidebar,
  Menu,
  MenuItem,
  SubMenu,
  SidebarHeader,
  SidebarContent,
  SidebarFooter,
} from "react-pro-sidebar";
import "react-pro-sidebar/dist/css/styles.css";
import {
  FaTachometerAlt,
} from "react-icons/fa";
import { Link , NavLink} from "react-router-dom";
import { Button } from "@mui/material";

const Drawer = () => {
    const [collapse, setCollapse] = React.useState(false);
    const sideBarBGPath = "http://www.mscteknoloji.com/img/bg/bg1.jpg"

  return (
    <div className="drawer">
      <ProSidebar 
        collapsed={collapse}
        image={sideBarBGPath}
      >
        <SidebarHeader
        >
          <div
            style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "20px",
                fontSize: "30px",
                textAlign: "center",
                color: "white",
            }}
          >
            MSC Teknoloji Admin Paneli
          </div>
        </SidebarHeader>
        <SidebarContent>
          <Menu iconShape="circle">
              
            <MenuItem  icon={<FaTachometerAlt />}>
                <NavLink to="/deneme1">Personel Ekle</NavLink>
            </MenuItem>
            <MenuItem  icon={<FaTachometerAlt />}>
                <NavLink to="/deneme2">Personel Sil</NavLink>
            </MenuItem>
            <MenuItem  icon={<FaTachometerAlt />}>
                <NavLink to="/admin">Personel Güncelle</NavLink>
            </MenuItem>
          </Menu>
          <SidebarFooter style={{textAlign:"center"}} >
              <button onClick={() => setCollapse(!collapse)}>Küçült</button>
          </SidebarFooter>
        </SidebarContent>
      </ProSidebar>
      
    </div>
  );
};

export default Drawer;
