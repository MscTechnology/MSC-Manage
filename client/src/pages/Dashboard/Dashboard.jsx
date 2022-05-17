import React from "react";
import Home from "../Home/Home";
import AdminLogin from "../Login/Admin/AdminLogin";
import PersonelLogin from "../Login/Personel/PersonelLogin";
import { Routes, Route } from "react-router-dom";
import Admin from "../Layouts/admin/Admin";
import PersonelEkle from "../Layouts/admin/manage/Ekle/PersonelEkle";
import Personel from "../Layouts/personel/Personel"
import BilgileriGuncelle from "../Layouts/personel/guncelle/BilgileriGuncelle"
import PersonelDetail from "../Layouts/admin/manage/Detail/PersonelDetail";
import NoMatch from "pages/404/NoMatch";
import {useSelector} from "react-redux";
import Documents from "pages/Layouts/personel/documents/Documents";
import PersonelFiles from "pages/Layouts/admin/manage/files/PersonelFiles";
import UserMovements from "pages/Layouts/admin/manage/Movements/UserMovements";
import Movements from "pages/Layouts/admin/manage/MovementsTable/Movements";
import PersonelMovements from "pages/Layouts/personel/Movements/PersonelMovements";
import MovementsByMonth from "pages/Layouts/admin/manage/MovementsByMonth/MovementsByMonth";
import ManagementPanel from "pages/Layouts/container/ManagementPanel";


const Dashboard = () => {
  const isAdmin = useSelector(state => state.users.isAdmin)
  const isPersonel = useSelector(state => state.users.isPersonel)

  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        
        <Route path="/managementpanel/*" element={<ManagementPanel />} />
        
        <Route path="*" element={<NoMatch />} />
      </Routes>

    </div>
  );
};

export default Dashboard;
