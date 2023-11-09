import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import AllRoutes from "./AllRoutes";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="App">
      <Router>
        <ToastContainer />
        <AllRoutes />
      </Router>
    </div>
  );
}

export default App;
