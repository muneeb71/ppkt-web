import React, { useEffect } from "react";
import pkrt from "../Assests/Logo-pkrt.svg";
import "../Style/Invoice.css";
import "../Style/Dashboard.css";
import Loader from "./Loader";

const Invoicepage = () => {
  const invoice = JSON.parse(localStorage.getItem("invoice"));
  const handlePrint = () => {
    window.print();
  };
  return (
    <>
      {invoice ? (
        <div className="Conatiner-invoice">
          <div className="back-white">
            <div className="invoive-container">
              <p className="invoice-heading">Invoice</p>

              <img src={pkrt} alt="" className="invoice-logo" />

              <div className="main-wrap-invoice">
                <div className="wrap-1-invoice">
                  <div className="content-invoice">
                    <p>Customer name :</p>
                    <p>Phone :</p>
                    <p>Email Address :</p>
                  </div>
                  <div className="content-invoice-2">
                    <p>
                      {invoice.customer.first_name +
                        " " +
                        invoice.customer.last_name}
                    </p>
                    <p>
                      {invoice.customer.mobile
                        ? invoice.customer.mobile
                        : "NIL"}
                    </p>
                    <p>{invoice.customer.email}</p>
                  </div>
                </div>

                <div className="wrap-2-invoice">
                  <div className="content-invoice">
                    <p>Cashier name :</p>
                    <p>Phone :</p>
                    <p>Email Address :</p>
                  </div>
                  <div className="content-invoice-2">
                    <p>
                      {invoice.cashier.first_name +
                        " " +
                        invoice.cashier.last_name}
                    </p>
                    <p>
                      {invoice.cashier.mobile ? invoice.cashier.mobile : "NIL"}
                    </p>
                    <p>{invoice.cashier.email}</p>
                  </div>
                </div>
              </div>

              <div className="main-wrap-invoice">
                <div className="wrap-1-invoice">
                  <div className="content-invoice">
                    <p>To (Wallet Address)</p>
                    <p>From (Wallet Address)</p>
                  </div>
                  <div className="content-invoice-2">
                    <p>{invoice.cashier_wallet.wallet}</p>
                    <p>{invoice.customer_wallet.wallet}</p>
                  </div>
                </div>
              </div>

              <div className="fianl-invoice">
                <div className="ist-one">
                  <p>Store name</p>
                  <p>Amount transaction</p>
                </div>
                <div className="second-one">
                  <p style={{marginRight: 50}}>PPKT Store</p>
                  <p>$ {invoice.amount.toLocaleString()}</p>
                </div>
              </div>

              <button className="print-button" onClick={handlePrint}>
                Print
              </button>
            </div>
          </div>
        </div>
      ) : (
        <Loader />
      )}
    </>
  );
};

export default Invoicepage;
