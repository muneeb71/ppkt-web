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
import axios from "axios";
import { toast } from "react-toastify";

import "../Style/Wallet.css";
import Pkrtbig from "../Assests/ppk-token-logo 3-big-icon.svg";
import qrcodepic from "../Assests/Qr-code-iocn.svg";
import blackqr from "../Assests/Qr-code-black-icon.svg";
import Depositwhite from "../Assests/deposit -iocn-white-color.svg";
import depositeblack from "../Assests/withdraw-icon.png";
import {
  get_balance,
  get_transactions,
  get_token_rate,
  timestampToDateTime,
  copyToClipboard,
  sortTransactions,
  handleLogout,
} from "../utils/helper";
import Loader from "./Loader";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleNotch } from "@fortawesome/free-solid-svg-icons";

const Wallet = () => {
  const { t, i18n } = useTranslation();
  const [currentLanguage, setCurrentLanguage] = useState(i18n.language);
  const [isNightMode, setIsNightMode] = useState(true);
  const [balance, setBalance] = useState({});
  const [isClicked, setIsClicked] = useState(null);
  const [transactions, setTransactions] = useState([]);
  const [amount, setAmount] = useState(0);
  const [walletAddress, setWalletAddress] = useState("");
  const [loading, setLoading] = useState(false);
  const [refresh, setRefresh] = useState(false);
  const [inProcess, setInProcess] = useState(false);
  const tokenFromLocalStorage = localStorage.getItem("token");
  const token = tokenFromLocalStorage
    ? JSON.parse(tokenFromLocalStorage)
    : null;
  const walletFromLocalStorage = localStorage.getItem("wallet");
  const wallet = walletFromLocalStorage
    ? JSON.parse(walletFromLocalStorage)
    : null;
  const navigate = useNavigate();

  const toggleCard = (cardName) => {
    setIsClicked((prevIsClicked) =>
      prevIsClicked === cardName ? null : cardName
    );
  };
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
    if (token) {
      setLoading(true);
      fetchUserData();
    } else {
      navigate("/");
    }
  }, [refresh]);

  const fetchUserData = async () => {
    const _balance = await get_balance();
    console.log(_balance);
    setBalance(_balance);
    const _transactions = await get_transactions();
    setTransactions(await sortTransactions(_transactions));
    localStorage.setItem("transactions", JSON.stringify(_transactions));
    setLoading(false);
  };

  const handleWithdraw = async () => {
    try {
      // if (password.length < 8) {
      //   toast.error("Password must be Valid");
      //   return;
      // }
      setInProcess(true);
      if (!walletAddress || !amount || !isClicked) {
        toast.error("Please Enter Valid Details!");
        setInProcess(false);
        return;
      }

      const response = await axios.post(
        process.env.REACT_APP_API_URL + "withdraw",
        {
          to: walletAddress,
          amount: amount,
          password: "12345678",
          token: isClicked,
        },
        {
          headers: {
            Authorization: "Bearer " + token,
          },
        }
      );
      console.log(response);
      if (response.status == 200) {
        toast.success("Payment Initiated, Check your transactions");
        setRefresh(true);
        setWalletAddress("");
        setAmount(0);
        setInProcess(false);
      }
    } catch (err) {
      toast.error("Something Went Wrong!");
      setInProcess(false);
    }
  };

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          {wallet && (
            <div
              className={`Conatiner ${isNightMode ? "night-mode" : "day-mode"}`}
            >
              <div
                className={`Main-container ${
                  isNightMode ? "night-mode" : "day-mode"
                }`}
              >
                <div
                  className={`Content ${
                    isNightMode ? "night-mode" : "day-mode"
                  }`}
                >
                  <div
                    className={`Left-side ${
                      isNightMode ? "night-mode" : "day-mode"
                    }`}
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

                    <p className="Wallet-text">{t("Deposit")}</p>

                    <div
                      className={`top-content-wallet ${
                        isNightMode ? "night-mode" : "day-mode"
                      }`}
                    >
                      <p className="Scan-qr-text">{t("Scan_QR")}</p>

                      <div className="address">
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
                            {wallet.slice(0, 12) + "...." + wallet.slice(-12)}
                          </p>
                        </div>
                        <div
                          className={`Copy-address ${
                            isNightMode ? "night-mode" : "day-mode"
                          }`}
                        >
                          <img
                            src={clipboard}
                            alt=""
                            onClick={() => copyToClipboard(wallet)}
                          />
                        </div>
                      </div>

                      <div
                        className={`Qr-code-detail ${
                          isNightMode ? "night-mode" : "day-mode"
                        }`}
                      >
                        <img
                          src={Pkrtbig}
                          alt=""
                          className="qr-code-pkrt-pic"
                        />
                        <p className="Ensure-code-txt">{t("Ensure_QRcode")}</p>
                        <div className="Border-line"></div>

                        <img
                          src={`https://chart.googleapis.com/chart?chs=300x300&cht=qr&chl=${wallet}`}
                          alt=""
                        />
                      </div>

                      <div></div>
                    </div>
                  </div>

                  <div
                    className={`right-side ${
                      isNightMode ? "night-mode" : "day-mode"
                    }`}
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

                    <p className="withdraw-heading-text">{t("Withdraw")}</p>

                    <div
                      className={`right-content-Wallet ${
                        isNightMode ? "night-mode" : "day-mode"
                      }`}
                    >
                      <p className="Conversion-Text">{t("Assets")}</p>
                    </div>

                    <div
                      className={`Cards ${
                        isNightMode ? "night-mode" : "day-mode"
                      }`}
                    >
                      <div
                        className={`card-1-wallet ${
                          isClicked === "matic" ? "clicked" : ""
                        } ${isNightMode ? "night-mode" : "day-mode"}`}
                        onClick={() => toggleCard("matic")}
                      >
                        <div
                          className={`Coin-name ${
                            isNightMode ? "night-mode" : "day-mode"
                          }`}
                        >
                          <p className="coins-name-text">{t("Matic")}</p>
                        </div>
                        <div className="Card-wrap">
                          <img src={polygonimg} alt="" className="Card-pic" />
                          <p className="card-balnce">
                            {balance.native_balance
                              ? balance.native_balance.toLocaleString()
                              : "0.0"}{" "}
                            MATIC
                          </p>
                          <p className="Total-assets-text">
                            {t("Total_Assets")}
                          </p>
                        </div>
                      </div>

                      <div
                        className={`card-1-wallet ${
                          isClicked === "ppkt" ? "clicked" : ""
                        } ${isNightMode ? "night-mode" : "day-mode"}`}
                        onClick={() => toggleCard("ppkt")}
                      >
                        <div
                          className={`Coin-name ${
                            isNightMode ? "night-mode" : "day-mode"
                          }`}
                        >
                          <p className="coins-name-text">{t("PPKT")}</p>
                        </div>
                        <div className="Card-wrap">
                          <img src={pkrttoken} alt="" className="Card-pic" />
                          <p className="card-balnce">
                            {balance.token_balance} PPKT
                          </p>
                          <p className="Total-assets-text">
                            {t("Total_Assets")}
                          </p>
                        </div>
                      </div>

                      <div
                        className={`card-1-wallet ${
                          isClicked === "usdt" ? "clicked" : ""
                        } ${isNightMode ? "night-mode" : "day-mode"}`}
                        onClick={() => toggleCard("usdt")}
                      >
                        <div
                          className={`Coin-name ${
                            isNightMode ? "night-mode" : "day-mode"
                          }`}
                        >
                          <p className="coins-name-text">{t("Dollar")}</p>
                        </div>
                        <div className="Card-wrap">
                          <img src={dollarsign} alt="" className="Card-pic" />
                          <p className="card-balnce">
                            {balance.usdt_balance} USDT
                          </p>
                          <p className="Total-assets-text">
                            {t("Total_Assets")}
                          </p>
                        </div>
                      </div>
                    </div>

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
                          {t("Wallet Address")}
                        </p>

                        <input
                          type="text"
                          className={`Amount-input ${
                            isNightMode ? "night-mode" : "day-mode"
                          }`}
                          placeholder="0x0000000000000"
                          onChange={(e) => setWalletAddress(e.target.value)}
                          value={walletAddress}
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
                          {t("Amount")}
                        </p>

                        <input
                          type="text"
                          className={`Amount-input ${
                            isNightMode ? "night-mode" : "day-mode"
                          }`}
                          placeholder="0.0"
                          onChange={(e) => setAmount(e.target.value)}
                          value={amount}
                        />
                      </div>
                    </div>

                    <button
                      type="button"
                      className="Confirm-btn"
                      onClick={() => handleWithdraw()}
                    >
                      {inProcess ? (
                        <FontAwesomeIcon icon={faCircleNotch} spin />
                      ) : (
                        t("Confirm")
                      )}
                    </button>

                    <div className="Transaction-history">
                      <p className="Transaction--history-heading">
                        {t("Transaction_History")}
                      </p>

                      <div
                        className={`detail-history ${
                          isNightMode ? "night-mode" : "day-mode"
                        }`}
                      >
                        {transactions &&
                          transactions.map((transaction) => (
                            <>
                              <div
                                className="Headings-wallet"
                                key={transaction.timeStamp}
                              >
                                <p className="withdraw-wallet-mini-heading">
                                  {t("Withdraw")}
                                </p>
                                <p className="Dates">
                                  {" "}
                                  {t("date")}:{" "}
                                  {timestampToDateTime(transaction.timeStamp)}
                                </p>
                              </div>

                              <div
                                className={`payment-history ${
                                  isNightMode ? "night-mode" : "day-mode"
                                }`}
                              >
                                <img
                                  src={
                                    isNightMode ? Depositwhite : depositeblack
                                  }
                                  alt=""
                                  className="Deposite-icon"
                                />

                                <div
                                  className={`border-line-y ${
                                    isNightMode ? "night-mode" : "day-mode"
                                  }`}
                                >
                                  {" "}
                                </div>

                                <div className="Amount">
                                  <p className="Amount-mini-text">
                                    {t("Amount")}
                                  </p>
                                  <p className="dollar-sign-money">
                                    ${" "}
                                    <span className="cash-digit">
                                      {transaction.value.toLocaleString()}
                                    </span>
                                  </p>
                                </div>

                                <div
                                  className={`border-line-y ${
                                    isNightMode ? "night-mode" : "day-mode"
                                  }`}
                                >
                                  {" "}
                                </div>

                                <div className="Amount">
                                  <p className="Amount-mini-text">
                                    {t("Wallet_From")}
                                  </p>
                                  <p className="dollar-sign-money">
                                    {transaction.from.slice(0, 7) +
                                      "..." +
                                      transaction.from.slice(-7)}
                                  </p>
                                </div>

                                <div
                                  className={`border-line-y ${
                                    isNightMode ? "night-mode" : "day-mode"
                                  }`}
                                >
                                  {" "}
                                </div>

                                <div className="Amount">
                                  <p className="Amount-mini-text">
                                    {t("Wallet_To")}
                                  </p>
                                  <p className="dollar-sign-money">
                                    {transaction.to.slice(0, 7) +
                                      "..." +
                                      transaction.to.slice(-7)}
                                  </p>
                                </div>
                              </div>
                            </>
                          ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </>
      )}
    </>
  );
};
export default Wallet;
