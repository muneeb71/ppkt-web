import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import "../Style/Dashboard.css"
import Tradinggraph from './Tradinggraph'
import germanyFlag from "../Assests/germany -flag.svg";
import usFlag from "../Assests/united-satate-flag.svg";
import Daynight from "../Assests/Day and Night-icon.svg"
import Nightday from "../Assests/Night to day -icon.svg"
import Logo from "../Assests/Logo-pkrt.svg"
import home from "../Assests/Home-icon.svg"
import homewhite from "../Assests/Home-white-icon.svg"
import wallet from "../Assests/Wallet-icon.svg"
import walletwhite from "../Assests/wallet-white-icon.svg"
import pay from "../Assests/Pay-icon.svg"
import Paywhite from "../Assests/Pay-white-icon.svg"
import transaction from "../Assests/Transaction-icon.svg"
import transcationwhite from "../Assests/Transaction List-white-icon.svg"
import setting from "../Assests/Settings-icon.svg"
import Settingwhite from '../Assests/Settings-white-icon.svg';
import logout from "../Assests/Logout Rounded -icon.svg"
import profileimg from "../Assests/Profile-picture-icon.svg"
import Logoutwhite from "../Assests/Logout Rounded-white-icon.svg"
import cornerdesign from "../Assests/cornerdesign-icon.svg"
import vector from "../Assests/vector-icon.svg"
import pkrttoken from "../Assests/ppk-token-logo 4.svg"
import polygonimg from "../Assests/Polygon-MATIC-Icon-900x0 1.svg"
import dollarsign from "../Assests/Dollar-sign-icon.svg"
import { useTranslation, initReactI18next } from "react-i18next";
import i18n from "i18next";
import Switch from 'react-switch';


import "./i18n";
import Tradinggraphwhite from './Tradinggraphwhite';


const Dashboard = () => {

  const { t, i18n } = useTranslation();
  const [currentLanguage, setCurrentLanguage] = useState(i18n.language);
  const [isNightMode, setIsNightMode] = useState(true);



  const toggleLanguage = () => {
    const newLanguage = currentLanguage === 'en' ? 'de' : 'en';
    i18n.changeLanguage(newLanguage);
    setCurrentLanguage(newLanguage);
  };

  const toggleDayNightMode = () => {
    setIsNightMode(!isNightMode);
    console.log('isNightMode:', isNightMode);
  };

  return (

    <div className={`Conatiner ${isNightMode ? 'night-mode' : 'day-mode'}`}>

      <div className={`Main-container ${isNightMode ? 'night-mode' : 'day-mode'}`}>

        <div className={`Content ${isNightMode ? 'night-mode' : 'day-mode'}`}>
          <div className={`Left-side ${isNightMode ? 'night-mode' : 'day-mode'}`}>

            <div className={`side_navbar ${isNightMode ? 'night-mode' : 'day-mode'}`}>

              <p ><img src={Logo} alt="" className='Logo-pkrt' /></p>

              <div className='Navbar-menu'>

                <NavLink to="/dashboard">
                  <p className='Navbar-icon-text'><img src={isNightMode ? homewhite : home} alt="" className='Home-pkrt' /> {t("Home")}</p>
                </NavLink>
                <NavLink to="/wallet">
                  <p className='Navbar-icon-text'><img src={isNightMode ? walletwhite : wallet} alt="" className='Wallet-pkrt' /> {t("Wallet")}</p>
                </NavLink>

                <NavLink to="/pay">
                  <p className='Navbar-icon-text'><img src={isNightMode ? Paywhite : pay} alt="" className='pay-pkrt' /> {t("Pay")}</p>
                </NavLink>
                
                <NavLink to="/transaction"> 
                <p className='Navbar-icon-text'><img src={isNightMode ? transcationwhite : transaction} alt="" className='Transaction-pkrt' /> {t("Transaction_History")}</p>
                </NavLink>

                <NavLink to="/setting">
                <p className='Navbar-icon-text'><img src={isNightMode ? Settingwhite : setting} alt="" className='setting-pkrt' />{t("Setting")}</p>
                </NavLink>

                
                <NavLink to="/" >
                <p className='Navbar-icon-text-2'><img src={isNightMode ? Logoutwhite : logout} alt="" className='Logout-pkrt' />{t("logout")}</p>
                </NavLink>
              </div>

            </div>

            <p className="Welcome-text">{t("Welcome_Back")} <span className='Name-text'>Ali Raza !</span></p>


            <div className={`top-content ${isNightMode ? 'night-mode' : 'day-mode'}`}>





              <div className={`profile-data ${isNightMode ? 'night-mode' : 'day-mode'}`}>

                <div className='profile-img'>
                  <img src={profileimg} alt="" className='profile-img-icon' />
                </div>

                <div className='Profile-detail'>

                  <div className={`Profile-name ${isNightMode ? 'night-mode' : 'day-mode'}`}>
                    <p className='Name'>{t("Admin")} </p>
                  </div>


                  <div className='Id-detail'>
                    <div className={`Id-text ${isNightMode ? 'night-mode' : 'day-mode'}`}>
                      <p className='Id'> {t("ID")}</p>
                    </div>

                    <div className={`id-number ${isNightMode ? 'night-mode' : 'day-mode'}`}>
                      <p className='transaction-digit'>846767*******</p>
                    </div>

                  </div>

                </div>
              </div>

              <div className={`Current-balance ${isNightMode ? 'night-mode' : 'day-mode'}`}>
                <div className='cash-detail'>
                  <p className='current-balance-heading'>{t("Current_Balance")} </p>
                  <p className='current-cash'>$ 101,584.00</p>
                  <p className='current-cash-2'> <img src={vector} alt="" /> $ 452,14</p>
                </div>

              </div>

              <div>

              </div>

            </div>

            <div className={`lower-content ${isNightMode ? 'night-mode' : 'day-mode'}`}>

              <div className='transaction-detail'>

                <h3 className='transaction-heading'>{t("Transaction")}</h3>

                <div>
                  <p className='Date-text'>{t("date")}: 10/12/2023</p>
                  <div className={`transaction-number ${isNightMode ? 'night-mode' : 'day-mode'}`}>

                    <img src={pkrttoken} alt=""  className='pkrtoken'/>
                    <div>
                      <p className='to-text'>{t("To")}</p>
                      <p className='form-text'>{t("form")}</p>
                    </div>
                    <div>
                      <p className='transaction-digit'>8467676676********</p>
                      <p className='transaction-digit'>8467676676********</p>
                    </div>

                  </div>


                </div>

                <div>
                  <p className='Date-text'>{t("date")}: 10/12/2023</p>
                  <div className={`transaction-number ${isNightMode ? 'night-mode' : 'day-mode'}`}>

                    <img src={pkrttoken} alt=""  className='pkrtoken' />
                    <div>
                      <p className='to-text'>{t("To")}</p>
                      <p className='form-text'>{t("form")}</p>
                    </div>
                    <div>
                    <p className='transaction-digit'>8467676676********</p>
                      <p className='transaction-digit'>8467676676********</p>
                    </div>


                  </div>
                </div>

                <div>
                  <p className='Date-text'>{t("date")}: 10/12/2023</p>
                  <div className={`transaction-number ${isNightMode ? 'night-mode' : 'day-mode'}`}>

                    <img src={pkrttoken} alt="" className='pkrtoken' />
                    <div>
                      <p className='to-text'>{t("To")}</p>
                      <p className='form-text'>{t("form")}</p>
                    </div>
                    <div>
                    <p className='transaction-digit'>8467676676********</p>
                      <p className='transaction-digit'>8467676676********</p>
                    </div>



                  </div>


                </div>
                 <Link to="/transaction">
                 <p className='veiw-All-text'>{t("View_All")}</p>
                 </Link>
               

              </div>

            </div>


          </div>

          <div className={`right-side ${isNightMode ? 'night-mode' : 'day-mode'}`}>
            <div className='Changes-button'>

              <button className={`Language-change-btn ${isNightMode ? 'night-mode' : 'day-mode'}`} onClick={toggleLanguage}>
                <img src={currentLanguage === 'en' ? germanyFlag : usFlag} alt="" />
              </button>
              <button className={`day-night-mode-change-btn ${isNightMode ? 'night-mode' : 'day-mode'}`} onClick={toggleDayNightMode}>
                <img src={isNightMode ? Daynight : Nightday} alt="" />
              </button>

            </div>

            <div className={`right-content-1 ${isNightMode ? 'night-mode' : 'day-mode'}`}>
              <div className='wrap'>
                <img src={pkrttoken} alt="" className='pkr-token-2'/>
                <p className='send-recive-text'>{t("Send_Receive")} <span className='Instanatly-text'>instantly</span>”</p>
              </div>

              <img src={cornerdesign} alt="" className='corner-design' />

            </div>

            <div className={`Cards ${isNightMode ? 'night-mode' : 'day-mode'}`}>
              <div className={`card-1 ${isNightMode ? 'night-mode' : 'day-mode'}`}>

                <img src={polygonimg} alt="" className='Card-pic' />
                <p className='card-balnce'>$ 101,584.00</p>
                <p className='Total-assets-text'>{t("Total_Assets")}</p>

              </div>

              <div className={`card-2 ${isNightMode ? 'night-mode' : 'day-mode'}`}>

                <img src={pkrttoken} alt="" className='Card-pic' />
                <p className='card-balnce'>$ 101,584.00</p>
                <p className='Total-assets-text'>{t("Total_Assets")}</p>

              </div>

              <div className={`card-3 ${isNightMode ? 'night-mode' : 'day-mode'}`}>

                <img src={dollarsign} alt="" className='Card-pic' />
                <p className='card-balnce'>$ 101,584.00</p>
                <p className='Total-assets-text'>{t("Total_Assets")}</p>

              </div>
            </div>

            {isNightMode ? <Tradinggraph /> : <Tradinggraphwhite />}



          </div>
        </div>
      </div>
    </div>

  )
}

export default Dashboard