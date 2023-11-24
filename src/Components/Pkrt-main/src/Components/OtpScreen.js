import { useTranslation, initReactI18next } from "react-i18next";
import i18n from "i18next";
import Switch from 'react-switch';
import "./i18n";
import React, { useEffect, useState, useRef } from 'react';
import { Link, NavLink } from 'react-router-dom';
import loginimg from "../Assests/Login-img.svg"
import "../Style/Login.css"
import conatacticon from "../Assests/conatact-icon.svg"
import personicon from "../Assests/Person-icon.svg"
import atherate from '../Assests/Attherate-icon.svg';
import mail from "../Assests/Mail-icon.svg"
import lock from "../Assests/Lock-icon.svg"
import roboticon from "../Assests/captcha-icon.svg"
import classnames from 'classnames';
import OTPGenerator from "./OtpInput";


const OtpScreen = () => {
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
         
  
               <OTPGenerator/>

              <p className="otp-not">{t("otpcodenot")} <span className="resend">{t("resend")}</span></p>



              <div className="Cancel-send-wrap">
              <Link to="/confrirmationscreen">
              <button type="button" className="login-btn">
              {t("Login")}
            </button>
              </Link>
            
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

export default OtpScreen