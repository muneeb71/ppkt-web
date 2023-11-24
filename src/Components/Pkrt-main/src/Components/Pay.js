import React, { useState } from "react";
import "../Style/Dashboard.css";
import { Link, NavLink } from "react-router-dom";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

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

const Pay = () => {
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

  const [selectedDate, setSelectedDate] = useState(null);

  const handleDateChange = (date) => {
    setSelectedDate(date);
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
                <p className='Navbar-icon-text'><img src={isNightMode ? Settingwhite : setting} alt="" className='setting-pkrt' />{t("Setting")}</p>
                </NavLink>
                <NavLink to="/" >
                <p className='Navbar-icon-text-2'><img src={isNightMode ? Logoutwhite : logout} alt="" className='Logout-pkrt' />{t("logout")}</p>
                </NavLink>
              </div>
            </div>

            <p className="Wallet-text">{t(" Pay")}</p>

            <div
              className={`top-content-wallet ${
                isNightMode ? "night-mode" : "day-mode"
              }`}
            >
              <div className="Pay-wrap">
                <p className="chain-text">{t("chain")}</p>

                <div
                  className={`New-payement ${
                    isNightMode ? "night-mode" : "day-mode"
                  }`}
                >
                  <img src={isNightMode ? walletbox : walletbalck} alt="" />
                  <div className="border-line-x"></div>
                  <p className="Payement-text">{t("Payement")}</p>
                </div>
              </div>

              <div
                className={`Coin-selector ${
                  isNightMode ? "night-mode" : "day-mode"
                }`}
              >
                <img src={Pkrtbig} alt="" className="qr-code-pkrt-pic" />
              </div>

              <div className="address">
                <div className="pay-inputs">
                  <div className="wallet-address-wrap">
                    <div
                      className={`wallet-address ${
                        isNightMode ? "night-mode" : "day-mode"
                      }`}
                    >
                      <p className={`Wallet-address-heading ${isNightMode ? "night-mode" : "day-mode"}`}>
                        {t("Wallet_Address")}
                      </p>
                      <p className="address-code">
                        bc1qxy2kgdygjrsqtzq2n0yrfqtzq2n0yrf
                      </p>
                    </div>
                    <div
                      className={`Copy-address ${
                        isNightMode ? "night-mode" : "day-mode"
                      }`}
                    >
                      <img src={scanqr} alt="" />
                    </div>
                  </div>

                  <div className="Amount-wrap">
                    <div
                      className={`wallet-address ${
                        isNightMode ? "night-mode" : "day-mode"
                      }`}
                    >
                       <p className={`Amount-heading ${isNightMode ? "night-mode" : "day-mode"}`}>{t("Amount")}</p>

                      <input
                        type="text"
                        className={`Amount-input ${
                          isNightMode ? "night-mode" : "day-mode"
                        }`}
                        placeholder="$ 8547.54"
                      />
                    </div>
                    <div
                      className={`Copy-address ${
                        isNightMode ? "night-mode" : "day-mode"
                      }`}
                    >
                      <img src={amounticon} alt="" />
                    </div>
                  </div>
                </div>
              </div>

              <p className="Conversion-Heading">{t(" Conversion")}</p>

              <div className="Pay-cards-conversion">
                <div
                  className={`conversion-1 ${
                    isNightMode ? "night-mode" : "day-mode"
                  }`}
                >
                  <img src={polygonimg} alt="" className="Conversion-pic" />
                  <p className="conversion-balnce">$ 101,584.00</p>
                </div>

                <div
                  className={`conversion-1 ${
                    isNightMode ? "night-mode" : "day-mode"
                  }`}
                >
                  <img src={pkrttoken} alt="" className="Conversion-pic" />
                  <p className="conversion-balnce">$ 101,584.00</p>
                </div>

                <div
                  className={`conversion-1 ${
                    isNightMode ? "night-mode" : "day-mode"
                  }`}
                >
                  <img src={dollarsign} alt="" className="Conversion-pic" />
                  <p className="conversion-balnce">$ 101,584.00</p>
                </div>
              </div>

              <button type="button" className="Gerante-qr-btn">
                {t("GernateQr")}
              </button>
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

            <p className="withdraw-heading-text">{t("Qr_code")}</p>

            <p className="Qr-code-scan-text">{t("Scanqrcode")}</p>

            <img
              src={isNightMode ? qrcodepic : blackqr}
              alt=""
              className="qr-code-img"
            />

            <div className="Walle-Amount">
              <div
                className={`wallet-address ${
                  isNightMode ? "night-mode" : "day-mode"
                }`}
              >
                <p className={`Amount-heading ${isNightMode ? "night-mode" : "day-mode"}`}>{t("Amount")}</p>

                <input
                  type="text"
                  className={`Amount-input ${
                    isNightMode ? "night-mode" : "day-mode"
                  }`}
                  placeholder="$ 8547.54"
                />
              </div>

              <div
                className={`wallet-address ${
                  isNightMode ? "night-mode" : "day-mode"
                }`}
              >
                 <p className={`Date-heading ${isNightMode ? "night-mode" : "day-mode"}`}>{t("date")}</p>

                <div className="datepicker-container">
      <DatePicker className={`Date-pick ${isNightMode ? "night-mode" : "day-mode"}`}
        selected={selectedDate}
        onChange={handleDateChange}
        dateFormat="dd/MM/yyyy" // You can adjust the date format as needed
      />
    </div>
              </div>
            </div>

            <div className="Buttn">
              <button type="button" className="verify-btn">
                {t("Verify_payements")}
              </button>
              <button type="button" className="check-transaction-btn">
                {t("Check_transaction")}
              </button>
            </div>

            <div
              className={`Invoice ${isNightMode ? "night-mode" : "day-mode"}`}
            >
              <img
                src={isNightMode ? printericonwhite : printericonblack}
                alt=""
              />
              <div className="border-line-x"></div>
              <p className="Payement-text">{t("Invoice")}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pay;
