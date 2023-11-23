import React, { useContext, useEffect, useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import AllRoutes from "./AllRoutes";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import MainContext from "./Context/Maincontext";

function App() {
  const [isNightMode, setIsNightMode] = useState(true);
  useEffect(() => {
    document.title = 'PPKT'
  }, [])
  return (
    <MainContext.Provider value={{ isNightMode, setIsNightMode }}>
      <div className="App">
        <Router>
          <ToastContainer />
          <AllRoutes />
        </Router>
      </div>
    </MainContext.Provider>
  );
}

export default App;
