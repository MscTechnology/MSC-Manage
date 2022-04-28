import React from "react";
import Home from "../Home/Home";
import AdminLogin from "../Login/Admin/AdminLogin";
import PersonelLogin from "../Login/Personel/PersonelLogin";
import { Routes, Route } from "react-router-dom";
import Admin from "../Layouts/admin/Admin";
import PersonelEkle from "../Layouts/admin/manage/Ekle/PersonelEkle";
import TumPersonel from "../Layouts/admin/manage/AllPersonel/TumPersonel";
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


const Dashboard = () => {
  const isAdmin = useSelector(state => state.users.isAdmin)
  const isPersonel = useSelector(state => state.users.isPersonel)

  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="personelLogin" element={<PersonelLogin />} />
        <Route path="adminLogin" element={<AdminLogin />} />
        {
          isPersonel ? <Route path="personel" element={<Personel />} /> : <Route path="*" element={<NoMatch />} />
        }
        {
          isPersonel ? <Route path="/personel/movement/:id" element={<PersonelMovements/>}/> : <Route path="*" element={<NoMatch />} />
        }
        {
          isPersonel ? <Route path="personel/bilgileriguncelle" element={<BilgileriGuncelle />} /> : <Route path="*" element={<NoMatch />} />
        }
        {
          isPersonel ?  <Route path="/personel/documents" element={<Documents/>}/> : <Route path="*" element={<NoMatch />} />
        }
        {
          isPersonel ?  <Route path="personel/bilgileriguncelle" element={<BilgileriGuncelle />} /> : <Route path="*" element={<NoMatch />} />
        }
    
        {
          isAdmin ? <Route  path="/admin" element={<Admin />}  /> : <Route path="*" element={<NoMatch />} />
        }
        {
          isAdmin ?  <Route path="/admin/personelekle" element={<PersonelEkle />} /> : <Route path="*" element={<NoMatch />} />
        }
        {
          isAdmin ? <Route path="/admin/movementsbymonth" element={<MovementsByMonth/>} /> : <Route path="*" element={<NoMatch />} />
        }
        
        {
          isAdmin ?   <Route path="/admin/tumpersonel" element={<TumPersonel />} /> : <Route path="*" element={<NoMatch />} />
        }
        {
          isAdmin ?    <Route path="/admin/tumpersonel/:id" element={< PersonelDetail/>} /> : <Route path="*" element={<NoMatch />} />
        }
        {
          isAdmin ?   <Route path="/admin/tumpersonel/movement/:id" element={<Movements/>}/>  : <Route path="*" element={<NoMatch />} />
        }
        {
          isAdmin ?   <Route path="admin/usermovement" element={<UserMovements />} />  : <Route path="*" element={<NoMatch />} />
        }
        {
          isAdmin ?   <Route path="admin/personelfiles" element={<PersonelFiles />} />  : <Route path="*" element={<NoMatch />} />
        }
       
        <Route path="*"element={<NoMatch />} />
        
        
        
      </Routes>

    </div>
  );
};

export default Dashboard;
