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
import axios from "axios";
import { toast } from "react-toastify";
import { sendOtp } from "../utils/helper";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleNotch } from "@fortawesome/free-solid-svg-icons";

const ForgetPassword = () => {
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();
  const [currentLanguage, setCurrentLanguage] = useState(i18n.language);
  const [isNightMode, setIsNightMode] = useState(true);
  const [email, setEmail] = useState("");
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

  const sendEmail = async () => {
    try {
      setInProcess(true);
      sendOtp(email)
        .then((success) => {
          if (success == true) {
            setInProcess(false);
            navigate("/otpscreen");
          }
        })
        .catch((err) => {
          throw err;
        });
    } catch (err) {
      setInProcess(false)
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
              {t("please_provide")}{" "}
              <span className="privacy-text">{t("email_address")}</span>
              <span className="to-verfication-text">{t("to_verfication")}</span>
            </p>

            <p className="forget-text">{t("forget_passowrd")}</p>

            <div className="email-inputs-2">
              <div className="email-wrap">
                <p className="First-name-2"> {t("email_address")}</p>
                <input
                  type="text"
                  placeholder="Email Address"
                  className={`information-2 ${
                    isNightMode ? "night-mode" : "day-mode"
                  }`}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <div
                  className={`Copy-address ${
                    isNightMode ? "night-mode" : "day-mode"
                  }`}
                >
                  <img src={mail} alt="" />
                </div>
              </div>
            </div>

            <div className="Cancel-send-wrap">
              <Link to="/login">
                <button type="button" className="cancel-btn">
                  {t("cancel")}
                </button>
              </Link>

              <button
                type="button"
                className="send-btn"
                onClick={sendEmail}
                style={{ marginTop: 7 }}
              >
                {inProcess ? (
                  <FontAwesomeIcon icon={faCircleNotch} spin />
                ) : (
                  t("send")
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
export default ForgetPassword;
