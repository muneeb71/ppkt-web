import { useTranslation, initReactI18next } from "react-i18next";
import i18n from "i18next";
import Switch from "react-switch";
import "./i18n";
import React, { useEffect, useState, useRef } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import loginimg from "../Assests/Login-img.svg";
import "../Style/Login.css";
import conatacticon from "../Assests/conatact-icon.svg";
import personicon from "../Assests/Person-icon.svg";
import atherate from "../Assests/Attherate-icon.svg";
import mail from "../Assests/Mail-icon.svg";
import lock from "../Assests/Lock-icon.svg";
import roboticon from "../Assests/captcha-icon.svg";
import classnames from "classnames";
import OTPGenerator from "./OtpInput";
import axios from "axios";
import { toast } from "react-toastify";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleNotch } from "@fortawesome/free-solid-svg-icons";

const Confirmationscreen = () => {
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();
  const [currentLanguage, setCurrentLanguage] = useState(i18n.language);
  const [isNightMode, setIsNightMode] = useState(true);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const token = localStorage.getItem("token");
  const [inProcess, setInProcess] = useState(false);
  

  const toggleLanguage = () => {
    const newLanguage = currentLanguage === "en" ? "de" : "en";
    i18n.changeLanguage(newLanguage);
    setCurrentLanguage(newLanguage);
  };

  const toggleDayNightMode = () => {
    setIsNightMode(!isNightMode);
    console.log("isNightMode:", isNightMode);
  };

  const changePassword = async () => {
    try {
      setInProcess(true);
      if (!password || password.length < 8) {
        toast.error("Invalid Password!");
        setInProcess(false);
        return;
      }
      if (password != confirmPassword) {
        toast.error("Password Does Not Match");
        setInProcess(false);
        return;
      }
      const response = await axios.post(
        process.env.REACT_APP_API_URL + "new-password",
        {
          password,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log(response);
      if (response.status == 200) {
        toast.success("Password Updated!");
        setInProcess(false);
        navigate("/");
      }
    } catch (err) {
      setInProcess(false);
      toast.error("Something went wrong");
    }
  };

  return (
    <div className={`Conatiner ${isNightMode ? "night-mode" : "day-mode"}`}>
      <div
        className={`Main-container ${isNightMode ? "night-mode" : "day-mode"}`}
      >
        <div
          className={`Left-side-login ${
            isNightMode ? "night-mode" : "day-mode"
          }`}
        >
          <div className="Left-inside">
            <p className="Login-text">{t("Confirmation")}</p>
            <p className="agreeing-text">
              {t("Set")}{" "}
              <span className="privacy-text">{t("New_password")}</span>
              <span className="to-verfication-text">{t("tocomplete")}</span>
            </p>

            <p className="forget-text">{t("forget_passowrd")}</p>

            <div className="email-inputs-2">
              <div className="email-wrap">
                <p className="First-name-2"> {t("New_password")}</p>
                <input
                  type="password"
                  placeholder="**************"
                  className={`information-2 ${
                    isNightMode ? "night-mode" : "day-mode"
                  }`}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <div
                  className={`Copy-address ${
                    isNightMode ? "night-mode" : "day-mode"
                  }`}
                >
                  <img src={lock} alt="" />
                </div>
              </div>
              <div className="email-wrap">
                <p className="First-name-2"> {t("Confirm_Password")}</p>
                <input
                  type="password"
                  placeholder="**************"
                  className={`information-2 ${
                    isNightMode ? "night-mode" : "day-mode"
                  }`}
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
                <div
                  className={`Copy-address ${
                    isNightMode ? "night-mode" : "day-mode"
                  }`}
                >
                  <img src={lock} alt="" />
                </div>
              </div>
            </div>
            <button
              type="button"
              className="login-btn"
              onClick={changePassword}
            >
             {inProcess ? (
                  <FontAwesomeIcon icon={faCircleNotch} spin />
                ) : (
                  t("submit")
                )}
            </button>
          </div>
        </div>

        <div
          className={`right-side-login ${
            isNightMode ? "night-mode" : "day-mode"
          }`}
        >
          <img src={loginimg} alt="" className="login-img-right" />
        </div>
      </div>
    </div>
  );
};

export default Confirmationscreen;
