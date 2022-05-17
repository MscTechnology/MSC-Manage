import React from 'react'
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import "./managementpanel.css"

function WelcomePage() {
  const user = useSelector((state) => state.users.user);
  const { t } = useTranslation();
  console.log(user)
  return (
    <div className="flex flex-col text-center bg-img h-screen py-28 text-[#525252] text-5xl font-bold">
      <div className="font-mono py-10">
        {t("welcomepage.title1")}
      </div>
      <div className="font-mono">
        {t("welcomepage.title2")}
        <span> {user.name}</span>
      </div>




    </div>
  )
}

export default WelcomePage