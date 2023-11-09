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
import { sendOtp } from "../utils/helper";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleNotch } from "@fortawesome/free-solid-svg-icons";

const OtpScreen = () => {
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();
  const [currentLanguage, setCurrentLanguage] = useState(i18n.language);
  const [isNightMode, setIsNightMode] = useState(true);
  const [otp, setOtp] = useState(0);
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

  const verifyToken = async () => {
    try {
      setInProcess(true);
      if (!otp) {
        setInProcess(false);
        toast.error("Invalid OTP!");
        return;
      }
      const response = await axios.get(
        process.env.REACT_APP_API_URL +
          `verify_token?verification_code=${otp}&change_password=1`
      );
      console.log(response);
      if (response.status == 200) {
        toast.success("OTP verified!");
        localStorage.setItem("token", response.data.token);
        setInProcess(false);
        navigate("/confirmationscreen");
      }
    } catch (err) {
      setInProcess(false);
      toast.error("Something went wrong");
    }
  };

  const resendOtp = async () => {
    const email = localStorage.getItem("email");
    try {
      sendOtp(email)
        .then((success) => {
          if (success == true) navigate("/otpscreen");
        })
        .catch((err) => {
          throw err;
        });
    } catch (err) {
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
            <p className="Login-text">{t("verfication")}</p>
            <p className="agreeing-text">
              {t("checkemail")}{" "}
              <span className="privacy-text">{t("OTPcode")}</span>
            </p>

            <p className="forget-text">{t("otpverfication")}</p>

            <OTPGenerator setOtp={setOtp} />

            <p className="otp-not">
              {t("otpcodenot")}{" "}
              <span
                className="resend"
                style={{ cursor: "pointer" }}
                onClick={resendOtp}
              >
                {t("resend")}
              </span>
            </p>

            <div className="Cancel-send-wrap">
              <button type="button" className="login-btn" onClick={verifyToken}>
                {inProcess ? (
                  <FontAwesomeIcon icon={faCircleNotch} spin />
                ) : (
                  t("Login")
                )}
              </button>
            </div>
          </div>

          <div></div>
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

export default OtpScreen;
