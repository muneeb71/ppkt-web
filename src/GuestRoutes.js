import React from "react";
import { useRoutes, Route } from "react-router-dom";
import Dashboard from "./Components/Dashboard";
import Wallet from "./Components/Wallet";
import Pay from "./Components/Pay";
import Transaction from "./Components/Transaction";
import Setting from "./Components/Setting";
import Login from "./Components/Login";
import Register from "./Components/Register";
import ForgetPassword from "./Components/ForgetPassword";
import OtpScreen from "./Components/OtpScreen";
import Confirmationscreen from "./Components/Confirmationscreen";
import Invoicepage from "./Components/Invoicepage";

const GuestRoutes = () => {
  return useRoutes([
    {
      path: "/",
      element: <Login />,
    },

    {
      path: "/register",
      element: <Register />,
    },

    {
      path: "/forgetpassword",
      element: <ForgetPassword />,
    },

    {
      path: "/otpscreen",
      element: <OtpScreen />,
    },

    {
      path: "/confirmationscreen",
      element: <Confirmationscreen />,
    },
  ]);
};

export default GuestRoutes;
