import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        Welcome_Back:'Welcome Back',
        Admin:'Admin',
        Current_Balance:'Current Balance',
        Home: "Home",
        Wallet: "Wallet",
        Pay:'Pay',
        Transaction_History:'Transaction History',
        Setting:'Setting',
        logout:'logout',
        Transaction:'Transaction',
        Date:'Date',
        To:'To',
        form:'from',
        View_All:'View All',
        Send_Receive:'“Send & Receive it',
        Total_Assets:'Total Assets',
        Developed_LeSoft:'Developed by “LeSoft',
        Deposit:'Deposit',
        Scan_QR:'Scan QR',
        Wallet_Address:'Wallet Address',
        Ensure_QRcode:'Ensure the QR code is properly aligned and located within the designated frame.',
        Withdraw:'Withdraw',
        Conversion:'Conversion',
        Matic:'Matic',
        PPKT:'PPKT',
        Dollar:'Dollar',
        Amount:'Amount',
        Confirm:'Confirm',
        Wallet_From:'Wallet Address (From)',
        Wallet_To:'Wallet Address (To)',
        Deposit:'Deposit',
        Transaction_History:'Transaction History',
        chain : 'Chain',
        Payement : 'New Payement',
        Conversion : 'Conversion',
        GernateQr : 'Generate QR',
        Scanqrcode : 'Scan the QR code to let your wallet address fill in automatically Place the QR code inside the frame',
        Qr_code : 'QR Code',
        Verify_payements : 'Verify Payment',
        Check_transaction : 'Check Transaction',
        Invoice : 'Print Invoice',
        date : 'Date',
        Transaction_History : 'Transaction History',
        Transaction_Hash:'Transaction Hash',
        View:'View',
        Setting:'Setting',
        Security:'Security',
        Enter_contactnumber : 'Enter Contact Number',
        Create_Password:'Create Password',
        Enter_password : 'Enter Password',
        Confirm_Password:'Confirm Password',
        Enter_Last_Password:'Enter Last Password',
        Update_Password:'Update Password',
        Personal_Information:'Personal Information',
        Select_jpg:'Select.jpg',
        Upload:'Upload',
        First_Name:'First Name',
        Ali:'Ali',
        Last_Name:'Last Name',
        Raza:'Raza',
        Email:'Email',
        Aliraza_gmail:'Aliraza@gmail.com',
        Contact:'Contact',
        985856458845:'985856458845',
        Update:'Update',
        Login : 'Login',
        Register : 'Register',
        sigin_text : 'By signing in you are agreeing our ',
        Privacy : 'Term and privacy policy',
        email_address : 'Email Address',
        Password : 'Password',
        Remberer_Password : 'Remember password',
        forget_passowrd : 'Forget password',
        robot_text : 'I’m not a robot',
        singup : 'Sign up',
        verfication : 'Verification',
        please_provide : 'Provide your',
        to_verfication :   'to receive a verification code for resetting your password',
        cancel : 'Cancel',
        send : 'Send',
        checkemail : 'Check email address to find six digit ',
        OTPcode : 'OTPCode',
        otpverfication : 'OTP Verification',
        otpcodenot : 'OTP not received?',
        resend : 'Resend',
        Set : 'Set a',
        New_password : 'New password',
        tocomplete : 'to complete the password change process.',
        submit : 'Submit',
        Confirmation : 'Confirmation',
        date : 'Date',
        transaction_hash: 'Transaction Hash',
        amount : 'Amount',
        to : 'To',
        from : 'From',
        inovice : 'Invoice',
        view : 'view',
      },
    },
    de: {
      translation: {
        Welcome_Back:'Willkommen zurück',
        Admin:'',
        Current_Balance:'',
        Home: "",
        Wallet: "",
        Pay:'',
        Transaction_History:'',
        Setting:'',
        logout:'',
        Transaction:'',
        Date:'',
        To:'',
        form:'',
        View_All:'',
        Send_Receive:'',
        Total_Assets:' ',
        Developed_LeSoft:'  ',
        Deposit:'',
        Scan_QR:' ',
        Wallet_Address:' ',
        Ensure_QRcode:'Ensure the QR code is properly aligned and located within the designated frame',
        Withdraw:'',
        Conversion:'',
        Matic:'',
        PPKT:'',
        Dollar:'',
        Amount:'',
        Confirm:'',
        Wallet_From:'',
        Wallet_To:'',
        Deposit:'',
      },
    },
  },
  lng: "en", // Default language
  fallbackLng: "en",
  interpolation: {
    escapeValue: false, // not needed for React
  },
});

export default i18n;