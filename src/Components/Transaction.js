import React, { useState, useEffect } from "react";
import "../Style/Dashboard.css";
import { Link, NavLink, useNavigate } from "react-router-dom";

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
import "../Style/Transaction.css";
import {
  get_transactions,
  handleLogout,
  sortTransactions,
  timestampToDateTime,
} from "../utils/helper";
import Loader from "./Loader";

const Transaction = () => {
  const { t, i18n } = useTranslation();
  const [currentLanguage, setCurrentLanguage] = useState(i18n.language);
  const [isNightMode, setIsNightMode] = useState(true);
  const [transactions, setTransactions] = useState([]);
  const [isFetching, setIsFetching] = useState(false);
  const token = localStorage.getItem("token");
  const navigate = useNavigate();

  const toggleLanguage = () => {
    const newLanguage = currentLanguage === "en" ? "de" : "en";
    i18n.changeLanguage(newLanguage);
    setCurrentLanguage(newLanguage);
  };

  const toggleDayNightMode = () => {
    setIsNightMode(!isNightMode);
    console.log("isNightMode:", isNightMode);
  };
  useEffect(() => {
    if (token) fetchTransactions();
    else navigate("/");
  }, []);
  const fetchTransactions = async () => {
    try {
      setIsFetching(true);
      const _transactions = await get_transactions();
      var temp = await sortTransactions(_transactions);
      const sortedTransactions = temp.sort((a, b) => b.timeStamp - a.timeStamp);
      setTransactions(sortedTransactions);
    } catch (err) {
      console.log(err);
    } finally {
      setIsFetching(false);
    }
  };
  return (
    <>
      {isFetching ? <Loader /> : ""}
      <div className={`Conatiner ${isNightMode ? "night-mode" : "day-mode"}`}>
        <div
          className={`Main-container ${
            isNightMode ? "night-mode" : "day-mode"
          }`}
        >
          <div
            className={`side_navbar-transaction ${
              isNightMode ? "night-mode" : "day-mode"
            }`}
          >
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
              <p className="Navbar-icon-text">
                <img
                  src={isNightMode ? transcationwhite : transaction}
                  alt=""
                  className="Transaction-pkrt"
                />{" "}
                {t("Transaction_History")}
              </p>
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
              <p
                className="Navbar-icon-text-2"
                onClick={() => {
                  handleLogout();
                  navigate("/");
                }}
              >
                <img
                  src={isNightMode ? Logoutwhite : logout}
                  alt=""
                  className="Logout-pkrt"
                />
                {t("logout")}
              </p>
            </div>
          </div>

          <div className="Right-side">
            <div className="Title-button-wrap">
              <p className="Transaction-text">{t("Transaction_History")}</p>

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
            </div>

            <div
              className={`Left-side-transaction ${
                isNightMode ? "night-mode" : "day-mode"
              }`}
            >
              <table className="whole-tb">
                <thead>
                  <tr className="Table-heading">
                    <td>{t("transaction_hash")}</td>
                    <td>{t("amount")}</td>
                    <td>{t("to")}</td>
                    <td>{t("from")}</td>
                    <td>{t("date")}</td>
                    <td>{t("trx_url")}</td>
                  </tr>
                </thead>
                <tbody>
                  {transactions &&
                    transactions.map((transaction) => (
                      <tr
                        key={transaction.timeStamp}
                        className={`Table-heading-2 ${
                          isNightMode ? "night-mode" : "day-mode"
                        }`}
                      >
                        <td>
                          {transaction.hash.slice(0, 8) +
                            "..." +
                            transaction.hash.slice(-8)}
                        </td>
                        <td
                          style={{
                            display: "flex",
                            justifyContent: "center",
                            width: "10%",
                          }}
                        >
                          {transaction.value.toLocaleString()}{" "}
                          {transaction.currency ? transaction.currency : "PPKT"}
                        </td>
                        <td
                          style={{
                            display: "flex",
                            justifyContent: "center",
                            width: "10%",
                          }}
                        >
                          {transaction.to.slice(0, 7) +
                            "..." +
                            transaction.to.slice(-7)}
                        </td>
                        <td
                          style={{
                            display: "flex",
                            justifyContent: "center",
                            width: "10%",
                          }}
                        >
                          {transaction.from.slice(0, 7) +
                            "..." +
                            transaction.from.slice(-7)}
                        </td>
                        <td
                          style={{
                            display: "flex",
                            justifyContent: "center",
                            width: "10%",
                          }}
                        >
                          {timestampToDateTime(transaction.timeStamp)}
                        </td>

                        <td>
                          <button
                            className="View-btn-tablelist"
                            onClick={() =>
                              window.open(
                                `https://polygonscan.com/tx/${transaction.hash}`,
                                "_blank"
                              )
                            }
                          >
                            {t("view ")}
                          </button>
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Transaction;
