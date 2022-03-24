import React from 'react'
import Home from '../Home/Home'
import AdminLogin from '../Login/Admin/AdminLogin'
import PersonelLogin from '../Login/Personel/PersonelLogin'
import { Routes, Route } from "react-router-dom";
import Admin from '../Layouts/admin/Admin';
import Personel from '../Layouts/personel/Personel';
import BilgileriGuncelle from '../Layouts/personel/BilgileriGuncelle';
import DosyaEkle from '../Layouts/personel/DosyaEkle';

const Dashboard = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="personelLogin" element={<PersonelLogin />} />
        <Route path="adminLogin" element={<AdminLogin />} />
        <Route path="admin" element={<Admin />} />
        <Route path="personel" element={<Personel/>} />
        <Route path="personel/bilgileriguncelle" element={<BilgileriGuncelle/>} />
        <Route path="personel/dosyaekle" element={<DosyaEkle/>} />
      </Routes>
    </div>
  )
}

export default Dashboard