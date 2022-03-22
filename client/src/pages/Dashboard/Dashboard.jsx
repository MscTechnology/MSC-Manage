import React from 'react'
import Home from '../Home/Home'
import AdminLogin from '../Login/Admin/AdminLogin'
import PersonelLogin from '../Login/Personel/PersonelLogin'
import { Routes, Route, Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="personelLogin" element={<PersonelLogin />} />
        <Route path="adminLogin" element={<AdminLogin />} />
      </Routes>
    </div>
  )
}

export default Dashboard