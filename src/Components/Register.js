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
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleNotch } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import { toast } from "react-toastify";

const Register = () => {
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();
  const [currentLanguage, setCurrentLanguage] = useState(i18n.language);
  const [isNightMode, setIsNightMode] = useState(true);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
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

  const links = [
    { to: "/", label: "Login" },
    { to: "/register", label: "Register" },
  ];

  const [activeLink, setActiveLink] = useState(null);

  useEffect(() => {
    // Get the current path from window.location.pathname
    const currentPath = window.location.pathname;

    // Find the matching label from the links array based on the current path
    const matchedLink = links.find((link) => link.to === currentPath);

    if (matchedLink) {
      setActiveLink(matchedLink.label);
    }
  }, [links]);

  const handleLinkClick = (linkName) => {
    setActiveLink(linkName);
  };

  const onRegister = async () => {
    try {
      setInProcess(true);
      if (password.length < 8) {
        toast.error("Password must be at least 8 characters");
        return;
      }
      if (password != confirmPassword) {
        toast.error("Password Does Not Match!");
        return;
      }
      if (!firstName || !lastName || !email) {
        toast.error("Invalid Details!");
        return;
      }
      const response = await axios.post(
        process.env.REACT_APP_API_URL + "register",
        {
          first_name: firstName,
          last_name: lastName,
          password: password,
          email: email,
          phone_no: mobile,
          web_register: 1,
        }
      );
      console.log(response);
      if (response.status == 200) {
        toast.success("Registration Successfull!");
        navigate("/");
      }
    } catch (err) {
      toast.error("Invalid Email or Password!");
    } finally {
      setInProcess(false);
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
            <p className="Login-text">{t("singup")}</p>
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
                <p className="First-name-2"> {t("First_Name")}</p>
                <input
                  type="text"
                  placeholder="Enter First Name"
                  className={`information-2 ${
                    isNightMode ? "night-mode" : "day-mode"
                  }`}
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
                <div
                  className={`Copy-address ${
                    isNightMode ? "night-mode" : "day-mode"
                  }`}
                >
                  <img src={personicon} alt="" />
                </div>
              </div>
              <div className="email-wrap">
                <p className="First-name-2"> {t("Last_Name")}</p>
                <input
                  type="text"
                  placeholder="Enter Last Name"
                  className={`information-2 ${
                    isNightMode ? "night-mode" : "day-mode"
                  }`}
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
                <div
                  className={`Copy-address ${
                    isNightMode ? "night-mode" : "day-mode"
                  }`}
                >
                  <img src={personicon} alt="" />
                </div>
              </div>
              <div className="email-wrap">
                <p className="First-name-2"> {t("Email")}</p>
                <input
                  type="text"
                  placeholder="Enter Email"
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
                  <img src={personicon} alt="" />
                </div>
              </div>

              <div className="email-wrap">
                <p className="First-name-2"> {t("Enter_contactnumber")}</p>
                <input
                  type="text"
                  placeholder="985856458845"
                  className={`information-2 ${
                    isNightMode ? "night-mode" : "day-mode"
                  }`}
                  value={mobile}
                  onChange={(e) => setMobile(e.target.value)}
                />
                <div
                  className={`Copy-address ${
                    isNightMode ? "night-mode" : "day-mode"
                  }`}
                >
                  <img src={conatacticon} alt="" />
                </div>
              </div>

              <div className="email-wrap">
                <p className="First-name-2"> {t("Enter_password")}</p>
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

            <button type="button" className="Register-btn" onClick={onRegister}>
              {inProcess ? (
                <FontAwesomeIcon icon={faCircleNotch} spin />
              ) : (
                t("Register")
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
          <img src={loginimg} alt="" className="login-img-right" />
        </div>
      </div>
    </div>
  );
};

export default Register;
