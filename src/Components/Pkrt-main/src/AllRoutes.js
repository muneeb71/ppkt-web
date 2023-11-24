import React from 'react';
import { useRoutes, Route } from 'react-router-dom';
import Dashboard from './Components/Dashboard';
import Wallet from './Components/Wallet';
import Pay from './Components/Pay';
import Transaction from './Components/Transaction';
import Setting from './Components/Setting';
import Login from './Components/Login';
import Register from './Components/Register';
import ForgetPassword from './Components/ForgetPassword';
import OtpScreen from './Components/OtpScreen';
import Confirmationscreen from './Components/Confirmationscreen';


const AllRoutes = () => {
  return useRoutes([
    {
      path: '/dashboard',
      element: <Dashboard />,
    },
    {
      path: '/wallet',
      element: <Wallet />,
    },
    {
      path: '/pay',
      element: <Pay />,
    },
    {
      path: '/transaction',
      element: <Transaction/>,
    },

    {
      path: '/setting',
      element: <Setting/>,
    },

    
    {
      path: '/',
      element: <Login/>,
    },

        
    {
      path: '/register',
      element: <Register/>,
    },

    {
      path: '/forgetpassword',
      element: <ForgetPassword/>,
    },

    
    {
      path: '/otpscreen',
      element: <OtpScreen/>,
    },

    {
      path: '/confrirmationscreen',
      element: <Confirmationscreen/>,
    },
 
 


 
 
  ]);
};

export default AllRoutes;
