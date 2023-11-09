import React from "react";
import "../Style/Login.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleNotch } from "@fortawesome/free-solid-svg-icons";

const Loader = () => {
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <div className="loader-container">
          <FontAwesomeIcon icon={faCircleNotch} spin />
        </div>
      </div>
    </div>
  );
};
export default Loader;
