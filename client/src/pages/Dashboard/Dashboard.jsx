import React from "react";
import Home from "../Home/Home";
import AdminLogin from "../Login/Admin/AdminLogin";
import PersonelLogin from "../Login/Personel/PersonelLogin";
import { Routes, Route } from "react-router-dom";
import Admin from "../Layouts/admin/Admin";
import PersonelEkle from "../Layouts/admin/manage/PersonelEkle";
import PersonelSil from "../Layouts/admin/manage/PersonelSil";
import PersonelGuncelle from "../Layouts/admin/manage/PersonelGuncelle";
import TumPersonel from "../Layouts/admin/manage/TumPersonel";

const Dashboard = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="personelLogin" element={<PersonelLogin />} />
        <Route path="adminLogin" element={<AdminLogin />} />
        <Route index path="admin" element={<Admin />} />
        <Route path="/admin/personelekle" element={<PersonelEkle />} />
        <Route path="/admin/personelsil" element={<PersonelSil />} />
        <Route path="/admin/personelguncelle" element={<PersonelGuncelle />} />
        <Route path="/admin/tumpersonel" element={<TumPersonel />} />
      </Routes>
    </div>
  );
};

export default Dashboard;
