import { useTranslation, initReactI18next } from "react-i18next";
import i18n from "i18next";
import Switch from "react-switch";
import "./i18n";
import React, { useEffect, useState, useRef } from "react";
import { Link, NavLink, useNavigate, useLocation } from "react-router-dom";
import loginimg from "../Assests/Group763.png";
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
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleNotch } from "@fortawesome/free-solid-svg-icons";
import ReCAPTCHA from "react-google-recaptcha";

const Login = () => {
  const navigate = useNavigate();
  const rememberPassword = localStorage.getItem("remember")
    ? localStorage.getItem("remember")
    : 0;
  const { t, i18n } = useTranslation();
  const [currentLanguage, setCurrentLanguage] = useState(i18n.language);
  const [isNightMode, setIsNightMode] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [inProcess, setInProcess] = useState(false);
  const [show, setShow] = useState(1);
  const [isCaptchaVerified, setIsCaptchaVerified] = useState(false);

  const toggleLanguage = () => {
    const newLanguage = currentLanguage === "en" ? "de" : "en";
    i18n.changeLanguage(newLanguage);
    setCurrentLanguage(newLanguage);
  };

  const toggleDayNightMode = () => {
    setIsNightMode(!isNightMode);
    console.log("isNightMode:", isNightMode);
  };

  const links = [
    { to: "/", label: "Login" },
    { to: "/register", label: "Register" },
  ];

  const [activeLink, setActiveLink] = useState(null);
  const { search } = useLocation();
  const queryParams = new URLSearchParams(search);
  const fromVerification = queryParams.get("verified");
  if (fromVerification && show) {
    toast.success("Email Verified!");
  }

  useEffect(() => {
    // Get the current path from window.location.pathname
    const currentPath = window.location.pathname;
    const matchedLink = links.find((link) => link.to === currentPath);

    if (matchedLink) {
      setActiveLink(matchedLink.label);
    }
    setShow(0);
    if (rememberPassword) {
      const _pass = localStorage.getItem("password");
      setPassword(_pass);
    }
  }, []);

  const handleLinkClick = (linkName) => {
    setActiveLink(linkName);
  };

  const onLogin = async () => {
    setInProcess(true);
    try {
      if (password.length < 8) {
        toast.error("Password must be at least 8 characters");
        return;
      }
      const response = await axios.post(
        process.env.REACT_APP_API_URL + "login",
        {
          email,
          password,
        }
      );
      const data = response.data.data;
      if (response.status == 200) {
        if (response.data.inactive) {
          toast.error("Please verify Email!");
          return;
        }
        localStorage.setItem("token", JSON.stringify(data.token));
        localStorage.setItem("user", JSON.stringify(data.user));
        navigate("dashboard");
      }
    } catch (err) {
      toast.error("Invalid Email or Password!");
    } finally {
      setInProcess(false);
    }
  };

  const handleCaptchaChange = (value) => {
    setIsCaptchaVerified(value !== null);
  };

  const handleRememberPassword = () => {
    localStorage.setItem("remember", 1);
    localStorage.setItem("password", password);
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
            <p className="Login-text">{t("Login")}</p>
            <p className="agreeing-text">
              {t("sigin_text")}{" "}
              <span className="privacy-text">{t("Privacy")}</span>{" "}
            </p>

            <div className="Login-register">
              {links.map((link, index) => (
                <NavLink
                  key={index}
                  to={link.to}
                  className={classnames("link-hover-effect", {
                    "link-active": activeLink === link.label,
                    "link-inactive": activeLink !== link.label,
                  })}
                  onClick={() => handleLinkClick(link.label)}
                >
                  <span>{link.label}</span>
                </NavLink>
              ))}
            </div>

            <div className="email-inputs-2">
              <div className="email-wrap">
                <p className="First-name-2"> {t("email_address")}</p>
                <input
                  type="text"
                  placeholder="Email Address"
                  name="email"
                  className={`information-2 ${
                    isNightMode ? "night-mode" : "day-mode"
                  }`}
                  // value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />
                <div
                  className={`Copy-address ${
                    isNightMode ? "night-mode" : "day-mode"
                  }`}
                >
                  <img src={mail} alt="" />
                </div>
              </div>
              <div className="email-wrap">
                <p className="First-name-2"> {t("Password")}</p>
                <input
                  type="password"
                  placeholder="**************"
                  className={`information-2 ${
                    isNightMode ? "night-mode" : "day-mode"
                  }`}
                  value={password ? password : ""}
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
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

            <div className="rember-forget">
              <p className="Rmber-check" onClick={handleRememberPassword}>
                <input type="checkbox" name="" id="" />
                {t("Remberer_Password")}
              </p>

              <Link to="/forgetpassword">
                <p className="forget-passowrd-text">{t("forget_passowrd")}</p>
              </Link>
            </div>

            <ReCAPTCHA
              sitekey="6LfCWw8pAAAAAPu6u_uROe9z-iu3xRKYcmal8pQi"
              onChange={handleCaptchaChange}
            />
            <button
              type="button"
              className="login-btn"
              onClick={() => onLogin()}
            >
              {inProcess ? (
                <FontAwesomeIcon icon={faCircleNotch} spin />
              ) : (
                t("Login")
              )}
            </button>
          </div>

          <div></div>
        </div>

        <div
          className={`right-side-login ${
            isNightMode ? "night-mode" : "day-mode"
          }`}
        >
          <img
            src={loginimg}
            loading="lazy"
            alt=""
            className="login-img-right"
          />
        </div>
      </div>
    </div>
  );
};

export default Login;
