import React, { useState } from "react";
import "../Style/Dashboard.css";
import { Link, NavLink } from "react-router-dom";

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

import Logoutwhite from "../Assests/Logout Rounded-white-icon.svg";

import pkrttoken from "../Assests/ppk-token-logo 4.svg";
import polygonimg from "../Assests/Polygon-MATIC-Icon-900x0 1.svg";
import clipboard from "../Assests/Copy-clipbord-icon.svg";
import dollarsign from "../Assests/Dollar-sign-icon.svg";
import { useTranslation, initReactI18next } from "react-i18next";
import i18n from "i18next";
import Switch from "react-switch";

import "../Style/Wallet.css";
import Pkrtbig from "../Assests/ppk-token-logo 3-big-icon.svg";

import qrcodepic from "../Assests/Qr-code-iocn.svg";
import blackqr from "../Assests/Qr-code-black-icon.svg";

import walletbox from "../Assests/wallet-box-icon.svg";
import scanqr from "../Assests/Scan-icon.svg";
import amounticon from "../Assests/Aoumt-icon.svg";
import walletbalck from "../Assests/wallet-black-icon.svg";
import printericonwhite from "../Assests/Printer-icon.svg";
import printericonblack from "../Assests/printer-icon-black.svg";
import "../Style/Pay.css";
import DatepickerInput from "./Datepicker";
import "../Style/Setting.css";
import eye from "../Assests/Eyes-password.svg";
import profilepersonal from "../Assests/Profile-persoanl.svg";
import gallary from "../Assests/Gallary-icon.svg";
import gallaryblack from "../Assests/Gallary-black-icon.svg";
import conatacticon from "../Assests/conatact-icon.svg"
import personicon from "../Assests/Person-icon.svg"
import atherate from '../Assests/Attherate-icon.svg';

const Setting = () => {
  const { t, i18n } = useTranslation();
  const [currentLanguage, setCurrentLanguage] = useState(i18n.language);
  const [isNightMode, setIsNightMode] = useState(true);

  const toggleLanguage = () => {
    const newLanguage = currentLanguage === "en" ? "de" : "en";
    i18n.changeLanguage(newLanguage);
    setCurrentLanguage(newLanguage);
  };

  const toggleDayNightMode = () => {
    setIsNightMode(!isNightMode);
    console.log("isNightMode:", isNightMode);
  };

  return (
    <div className={`Conatiner ${isNightMode ? "night-mode" : "day-mode"}`}>
      <div
        className={`Main-container ${isNightMode ? "night-mode" : "day-mode"}`}
      >
        <div className={`Content ${isNightMode ? "night-mode" : "day-mode"}`}>
          <div
            className={`Left-side ${isNightMode ? "night-mode" : "day-mode"}`}
          >
            <div
              className={`side_navbar ${
                isNightMode ? "night-mode" : "day-mode"
              }`}
            >
              <p>
                <img src={Logo} alt="" className="Logo-pkrt" />
              </p>

              <div className="Navbar-menu">
              <NavLink to="/dashboard">
                  <p className='Navbar-icon-text'><img src={isNightMode ? homewhite : home} alt="" className='Home-pkrt' /> {t("Home")}</p>
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
                <NavLink to="/" >
                <p className='Navbar-icon-text-2'><img src={isNightMode ? Logoutwhite : logout} alt="" className='Logout-pkrt' />{t("logout")}</p>
                </NavLink>
              </div>
            </div>

            <p className="Wallet-text">{t("Setting")}</p>

            <div
              className={`top-content-wallet ${
                isNightMode ? "night-mode" : "day-mode"
              }`}
            >
              <p className="Setting-text">{t("Security")}</p>

              <div className="Password-change">
                <div className="pay-inputs">
                  <div className="Amount-wrap">
                    <div
                      className={`wallet-address ${
                        isNightMode ? "night-mode" : "day-mode"
                      }`}
                    >
                       <p className={`Amount-heading ${isNightMode ? "night-mode" : "day-mode"}`}>{t("Create_Password")}</p>

                      <input
                        type="text"
                        className={`Amount-input ${
                          isNightMode ? "night-mode" : "day-mode"
                        }`}
                        placeholder="*************"
                      />
                    </div>
                    <div
                      className={`Copy-address ${
                        isNightMode ? "night-mode" : "day-mode"
                      }`}
                    >
                      <img src={eye} alt="" />
                    </div>
                  </div>

                  <div className="Amount-wrap">
                    <div
                      className={`wallet-address ${
                        isNightMode ? "night-mode" : "day-mode"
                      }`}
                    >
                       <p className={`Amount-heading ${isNightMode ? "night-mode" : "day-mode"}`}>{t("Confirm_Password")}</p>

                      <input
                        type="text"
                        className={`Amount-input ${
                          isNightMode ? "night-mode" : "day-mode"
                        }`}
                        placeholder="*************"
                      />
                    </div>
                    <div
                      className={`Copy-address ${
                        isNightMode ? "night-mode" : "day-mode"
                      }`}
                    >
                      <img src={eye} alt="" />
                    </div>
                  </div>

                  <div className="Amount-wrap">
                    <div
                      className={`wallet-address ${
                        isNightMode ? "night-mode" : "day-mode"
                      }`}
                    >
                       <p className={`Amount-heading ${isNightMode ? "night-mode" : "day-mode"}`}>
                        {t("Enter_Last_Password")}
                      </p>

                      <input
                        type="text"
                        className={`Amount-input ${
                          isNightMode ? "night-mode" : "day-mode"
                        }`}
                        placeholder="*************"
                      />
                    </div>
                    <div
                      className={`Copy-address ${
                        isNightMode ? "night-mode" : "day-mode"
                      }`}
                    >
                      <img src={eye} alt="" />
                    </div>
                  </div>

                  <button type="button" className="Update-password-btn">
                    {t("Update_Password")}
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div
            className={`right-side ${isNightMode ? "night-mode" : "day-mode"}`}
          >
            <div className="Changes-button">
              <button
                className={`Language-change-btn ${
                  isNightMode ? "night-mode" : "day-mode"
                }`}
                onClick={toggleLanguage}
              >
                <img
                  src={currentLanguage === "en" ? germanyFlag : usFlag}
                  alt=""
                />
              </button>
              <button
                className={`day-night-mode-change-btn ${
                  isNightMode ? "night-mode" : "day-mode"
                }`}
                onClick={toggleDayNightMode}
              >
                <img src={isNightMode ? Daynight : Nightday} alt="" />
              </button>
            </div>

            <p className="presonal-heading-text">{t("Personal_Information")}</p>

            <div
              className={`right-content-1-setting ${
                isNightMode ? "night-mode" : "day-mode"
              }`}
            >
              <img src={profilepersonal} alt="" className="profile-persoanl" />

              <div className="Upload-buttons">
                <div
                  className={`empty-conatiner ${
                    isNightMode ? "night-mode" : "day-mode"
                  }`}
                >
                  {t("Select_jpg")}
                </div>
                <button type="button" className="upalod-img-btn">
                  {t("Upload")}
                </button>
              </div>

              <img
                src={gallary}
                alt=""
                className={`gallary-img ${
                  isNightMode ? "night-mode" : "day-mode"
                }`}
              />
            </div>

            <div className="information-update">
              <div className="email-inputs">
              <div className="email-wrap">
              <p className={`First-name ${isNightMode ? "night-mode" : "day-mode"}`}> {t("First_Name")}</p>
              <input type="text" className={`information ${isNightMode ? "night-mode" : "day-mode"}`} />
              <div className={`Copy-address ${ isNightMode ? "night-mode" : "day-mode" }`}>
                <img src={personicon} alt="" />
               </div>
              
              </div>
              <div className="email-wrap">
              <p className={`First-name ${isNightMode ? "night-mode" : "day-mode"}`}> {t("Email")}</p>
              <input type="text" className={`information ${isNightMode ? "night-mode" : "day-mode"}`} />
              <div className={`Copy-address ${ isNightMode ? "night-mode" : "day-mode" }`}>
                <img src={atherate} alt="" />
               </div>
              
              </div>
              </div>

              <div className="email-inputs">
              <div className="email-wrap">
              <p className={`First-name ${isNightMode ? "night-mode" : "day-mode"}`}> {t("Last_Name")}</p>
              <input type="text" className={`information ${isNightMode ? "night-mode" : "day-mode"}`} />
              <div className={`Copy-address ${ isNightMode ? "night-mode" : "day-mode" }`}>
                <img src={personicon} alt="" />
               </div>
              
              </div>
              <div className="email-wrap">
              <p className={`First-name ${isNightMode ? "night-mode" : "day-mode"}`}> {t("Contact")}</p>
              <input type="text" className={`information ${isNightMode ? "night-mode" : "day-mode"}`} />
              <div className={`Copy-address ${ isNightMode ? "night-mode" : "day-mode" }`}>
                <img src={conatacticon} alt="" />
               </div>
              
              </div>
              </div>



            </div>

           

            <div className="Buttn">
              <button type="button" className="Update-button-btn">
                {t("Update")}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Setting;
