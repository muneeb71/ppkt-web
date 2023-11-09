import React, { useEffect, useState } from "react";
import "../Style/Dashboard.css";
import { Link, NavLink, useNavigate } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

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
import axios from "axios";
import { get_token_rate, handleLogout } from "../utils/helper";
import { toast } from "react-toastify";

const Pay = () => {
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();
  const [currentLanguage, setCurrentLanguage] = useState(i18n.language);
  const [isNightMode, setIsNightMode] = useState(true);
  const [amount, setAmount] = useState(0);
  const [maticConversion, setMaticConversion] = useState(0);
  const [maticRate, setMaticRate] = useState(0);
  const [qr, setQr] = useState("");
  const [date, setDate] = useState("");
  const [uniqueId, setUniqueId] = useState("");
  const [payment, setPayment] = useState({});
  const tokenFromLocalStorage = localStorage.getItem("token");
  const token = tokenFromLocalStorage
    ? JSON.parse(tokenFromLocalStorage)
    : null;
  const walletFromLocalStorage = localStorage.getItem("wallet");
  const walletAddress = walletFromLocalStorage
    ? JSON.parse(walletFromLocalStorage)
    : null;

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

  useEffect(() => {
    if (token) get_matic_rate();
    else navigate("/");
  }, []);

  const get_matic_rate = async () => {
    setMaticRate(await get_token_rate());
  };

  const handleAmountChange = async (e) => {
    setAmount(e.target.value);
    setMaticConversion(e.target.value * maticRate);
  };

  const generateQr = async () => {
    try {
      if (amount == 0) {
        toast.error("Invalid Amount!");
        return;
      }
      const response = await axios.post(
        process.env.REACT_APP_API_URL + "create-payment",
        {
          amount: amount,
          status: "pending",
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (response.status == 201) {
        const qrData = response.data.Payment;
        const qrCode = JSON.stringify({
          amount: qrData.amount,
          unique_id: qrData.unique_id,
          wallet_address: walletAddress,
        });
        setQr(
          `https://chart.googleapis.com/chart?chs=250x250&cht=qr&chl=${qrCode}`
        );
        setDate(qrData.created_at);
        setUniqueId(qrData.unique_id);
        toast.success("Qr Generated!");
      }
    } catch (err) {
      toast.error("Something went wrong");
    }
  };

  const verifyPayment = async () => {
    try {
      const response = await axios.post(
        process.env.REACT_APP_API_URL + "verify-payment",
        {
          unique_id: uniqueId,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (response.status == 200) {
        setPayment(response.data.Payment);
        toast.success("Payment Verified!");
      }
    } catch (err) {
      toast.error("Something went wrong");
    }
  };

  const checkPayment = async () => {
    if (payment.trx_url) {
      window.open(payment.trx_url, "_blank");
      return;
    } else {
      toast.error("Payment Not Processed!");
    }
  };

  const handleInvoice = () => {
    localStorage.setItem("invoice", JSON.stringify(payment));
    navigate("/pay/invoice");
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
                  onClick={() => window.location.reload()}
                  style={{cursor: "pointer"}}
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
                      <p
                        className={`Wallet-address-heading ${
                          isNightMode ? "night-mode" : "day-mode"
                        }`}
                      >
                        {t("Wallet_Address")}
                      </p>
                      <p className="address-code">
                        {walletAddress.slice(0, 12) +
                          "..." +
                          walletAddress.slice(-12)}
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
                      <p
                        className={`Amount-heading ${
                          isNightMode ? "night-mode" : "day-mode"
                        }`}
                      >
                        {t("Amount")}
                      </p>

                      <input
                        type="text"
                        className={`Amount-input ${
                          isNightMode ? "night-mode" : "day-mode"
                        }`}
                        placeholder="0.0"
                        onChange={(e) => handleAmountChange(e)}
                        value={amount}
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
                  <p className="conversion-balnce">
                    $ {maticConversion.toLocaleString()}
                  </p>
                </div>

                <div
                  className={`conversion-1 ${
                    isNightMode ? "night-mode" : "day-mode"
                  }`}
                >
                  <img src={pkrttoken} alt="" className="Conversion-pic" />
                  <p className="conversion-balnce">
                    $ {amount.toLocaleString()}
                  </p>
                </div>

                <div
                  className={`conversion-1 ${
                    isNightMode ? "night-mode" : "day-mode"
                  }`}
                >
                  <img src={dollarsign} alt="" className="Conversion-pic" />
                  <p className="conversion-balnce">
                    $ {amount.toLocaleString()}
                  </p>
                </div>
              </div>

              <button
                type="button"
                className="Gerante-qr-btn"
                onClick={() => generateQr()}
              >
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

            <img src={qr ? qr : qrcodepic} alt="" className="qr-code-img" />

            <div className="Walle-Amount">
              <div
                className={`wallet-address ${
                  isNightMode ? "night-mode" : "day-mode"
                }`}
              >
                <p
                  className={`Amount-heading ${
                    isNightMode ? "night-mode" : "day-mode"
                  }`}
                >
                  {t("Amount")}
                </p>

                <input
                  type="text"
                  className={`Amount-input ${
                    isNightMode ? "night-mode" : "day-mode"
                  }`}
                  placeholder="$ 8547.54"
                  value={amount}
                  disabled={true}
                />
              </div>

              <div
                className={`wallet-address ${
                  isNightMode ? "night-mode" : "day-mode"
                }`}
              >
                <p
                  className={`Amount-heading ${
                    isNightMode ? "night-mode" : "day-mode"
                  }`}
                >
                  {t("Date")}
                </p>

                <input
                  type="text"
                  className={`Amount-input ${
                    isNightMode ? "night-mode" : "day-mode"
                  }`}
                  value={date ? new Date(date) : ""}
                  disabled={true}
                />
              </div>
            </div>

            <div className="Buttn">
              <button
                type="button"
                className="verify-btn"
                onClick={(e) => {
                  verifyPayment();
                }}
              >
                {t("Verify_payements")}
              </button>
              <button
                type="button"
                className="check-transaction-btn"
                onClick={checkPayment}
              >
                {t("Check_transaction")}
              </button>
            </div>

            <div
              className={`Invoice ${isNightMode ? "night-mode" : "day-mode"}`}
              onClick={handleInvoice}
              style={{ cursor: "pointer" }}
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
