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
  const isPersonel = useSelector(state => state.users.isPersonel)
  console.log(isPersonel);
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
          isPersonel ? <Route path="personel/bilgileriguncelle" element={<BilgileriGuncelle />} /> : <Route path="*" element={<NoMatch />} />
        }
        {
          isPersonel ?  <Route path="personel/dosyaekle" element={<DosyaEkle />} /> : <Route path="*" element={<NoMatch />} />
        }
    
       
    <Route path="/admin/personelekle" element={<PersonelEkle />} />
        
        {
          isAdmin ? <Route  path="/admin" element={<Admin />}  /> : <Route path="*" element={<NoMatch />} />
        }
        {
          isAdmin ?  <Route path="/admin/personelekle" element={<PersonelEkle />} /> : <Route path="*" element={<NoMatch />} />
        }
        {
          isAdmin ? <Route path="/admin/personelsil" element={<PersonelSil />} />
          : <Route path="*" element={<NoMatch />} />
        }
        {
          isAdmin ? <Route path="/admin/personelguncelle" element={<PersonelGuncelle />} />: <Route path="*" element={<NoMatch />} />
        }
        {
          isAdmin ?   <Route path="/admin/tumpersonel" element={<TumPersonel />} /> : <Route path="*" element={<NoMatch />} />
        }
        {
          isAdmin ?    <Route path="/admin/tumpersonel/:id" element={< PersonelDetail/>} /> : <Route path="*" element={<NoMatch />} />
        }
        <Route path="*"element={<NoMatch />} />
    
      </Routes>
    </div>
  );
};

export default Dashboard;
