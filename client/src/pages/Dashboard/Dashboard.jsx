import React from "react";
import Home from "../Home/Home";
import AdminLogin from "../Login/Admin/AdminLogin";
import PersonelLogin from "../Login/Personel/PersonelLogin";
import { Routes, Route } from "react-router-dom";
import Admin from "../Layouts/admin/Admin";
import PersonelEkle from "../Layouts/admin/manage/Ekle/PersonelEkle";
import PersonelSil from "../Layouts/admin/manage/Sil/PersonelSil";
import PersonelGuncelle from "../Layouts/admin/manage/Guncelle/PersonelGuncelle";
import TumPersonel from "../Layouts/admin/manage/TumPersonel";
import Personel from "../Layouts/personel/Personel"
import BilgileriGuncelle from "../Layouts/personel/BilgileriGuncelle"
import DosyaEkle from "../Layouts/personel/DosyaEkle"
import PersonelDetail from "../Layouts/admin/manage/Detail/PersonelDetail";
import NoMatch from "pages/404/NoMatch";
import {useSelector} from "react-redux"
const Dashboard = () => {
  const isAdmin = useSelector(state => state.users.isAdmin)
  console.log(isAdmin);
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="personelLogin" element={<PersonelLogin />} />
        <Route path="adminLogin" element={<AdminLogin />} />
        
        <Route path="personel" element={<Personel />} />
        <Route path="personel/bilgileriguncelle" element={<BilgileriGuncelle />} />
        <Route path="personel/dosyaekle" element={<DosyaEkle />} />

        
        {
          isAdmin ? <Route index path="/admin" element={<Admin />}  /> : <Route path="*" element={<NoMatch />} />
        }
        <Route path="/admin/personelekle" element={<PersonelEkle />} />
        <Route path="/admin/personelsil" element={<PersonelSil />} />
        <Route path="/admin/personelguncelle" element={<PersonelGuncelle />} />
        <Route path="/admin/tumpersonel" element={<TumPersonel />} />
        <Route path="/admin/tumpersonel/:id" element={< PersonelDetail/>} />

        
        <Route path="*"element={<NoMatch />} />
    
      </Routes>
    </div>
  );
};

export default Dashboard;
