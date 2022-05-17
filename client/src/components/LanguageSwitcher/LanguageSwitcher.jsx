import React, { useState } from "react";
import SwitchUnstyled from "@mui/base/SwitchUnstyled";
import { Root } from "pages/Home/SwitchStyles";
import { useTranslation } from "react-i18next";
import { setLanguage } from "store/Language/LanguageSlice";
import { useDispatch } from "react-redux";

const LanguageSwitcher = () => {
  const [checked, setChecked] = useState(true);
  const { t, i18n } = useTranslation();
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const value = e.target.checked ? "tr" : "en";

    i18n.changeLanguage(value);
    dispatch(setLanguage(value));
    setChecked(e.target.checked);
  };
  return (
    <>
      <h4>EN</h4>
      <SwitchUnstyled
        component={Root}
        checked={checked}
        onChange={handleChange}
      />
      <h4>TR</h4>
    </>
  );
};

export default LanguageSwitcher;
