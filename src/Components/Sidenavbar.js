import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "../Style/Dashboard.css";
import Tradinggraph from "./Tradinggraph";
import germanyFlag from "../Assests/germany -flag.svg";
import usFlag from "../Assests/united-satate-flag.svg";
import Daynight from "../Assests/Day and Night-icon.svg";
import Nightday from "../Assests/Night to day -icon.svg";
import Logo from "../Assests/Logo-pkrt.svg";
import home from "../Assests/Home-icon.svg";
import homewhite from "../Assests/Home-white-icon.svg";
import wallet from "../Assests/Wallet-icon.svg";
import walletwhite from "../Assests/wallet-white-icon.svg";
import pay from "../Assests/Pay-icon.svg";
import Paywhite from "../Assests/Pay-white-icon.svg";
import transaction from "../Assests/Transaction-icon.svg";
import transcationwhite from "../Assests/Transaction List-white-icon.svg";
import setting from "../Assests/Settings-icon.svg";
import Settingwhite from "../Assests/Settings-white-icon.svg";
import logout from "../Assests/Logout Rounded -icon.svg";
import profileimg from "../Assests/Profile-picture-icon.svg";
import Logoutwhite from "../Assests/Logout Rounded-white-icon.svg";
import cornerdesign from "../Assests/cornerdesign-icon.svg";
import vector from "../Assests/vector-icon.svg";
import pkrttoken from "../Assests/ppk-token-logo 4.svg";
import polygonimg from "../Assests/Polygon-MATIC-Icon-900x0 1.svg";
import dollarsign from "../Assests/Dollar-sign-icon.svg";
import { useTranslation, initReactI18next } from "react-i18next";
import i18n from "i18next";
import Switch from "react-switch";

const Sidenavbar = ({ isNightMode }) => {
  const { t, i18n } = useTranslation();
  const [currentLanguage, setCurrentLanguage] = useState(i18n.language);

  const toggleLanguage = () => {
    const newLanguage = currentLanguage === "en" ? "de" : "en";
    i18n.changeLanguage(newLanguage);
    setCurrentLanguage(newLanguage);
  };

  return (
    <div className={`side_navbar ${isNightMode ? "night-mode" : "day-mode"}`}>
      <p>
        <img src={Logo} alt="" className="Logo-pkrt" />
      </p>

      <div className="Navbar-menu">
        <NavLink to="/dashboard">
          <p className="Navbar-icon-text">
            <img
              src={isNightMode ? homewhite : home}
              alt=""
              className="Home-pkrt"
            />{" "}
            {t("Home")}
          </p>
        </NavLink>
        <NavLink to="/wallet">
          <p className="Navbar-icon-text">
            <img
              src={isNightMode ? walletwhite : wallet}
              alt=""
              className="Wallet-pkrt"
            />{" "}
            {t("Wallet")}
          </p>
        </NavLink>

        <NavLink to="/pay">
          <p className="Navbar-icon-text">
            <img
              src={isNightMode ? Paywhite : pay}
              alt=""
              className="pay-pkrt"
            />{" "}
            {t("Pay")}
          </p>
        </NavLink>

        <NavLink to="/transaction">
          <p className="Navbar-icon-text">
            <img
              src={isNightMode ? transcationwhite : transaction}
              alt=""
              className="Transaction-pkrt"
            />{" "}
            {t("Transaction_History")}
          </p>
        </NavLink>

        <NavLink to="/setting">
          <p className="Navbar-icon-text">
            <img
              src={isNightMode ? Settingwhite : setting}
              alt=""
              className="setting-pkrt"
            />
            {t("Setting")}
          </p>
        </NavLink>

        <NavLink to="/">
          <p className="Navbar-icon-text-2">
            <img
              src={isNightMode ? Logoutwhite : logout}
              alt=""
              className="Logout-pkrt"
            />
            {t("logout")}
          </p>
        </NavLink>
      </div>
    </div>
  );
};

export default Sidenavbar;
