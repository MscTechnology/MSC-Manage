import React from 'react'
import { useSelector } from 'react-redux';
import "./managementpanel.css"

function WelcomePage() {
  const user = useSelector((state) => state.users.user);
  console.log(user)
  return (
    <div className="flex flex-col text-center bg-img h-screen py-28 text-[#525252] text-5xl font-bold">
      <div className="font-mono py-10">
       MSC Teknoloji Yönetim Paneli 
      </div>
      <div className="font-mono">
        Hoşgeldin
        <span> {user.name}</span>
      </div>




    </div>
  )
}

export default WelcomePage