/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from "react";
import { useSelector } from "react-redux";

// invoice imports
import Footer from "../../components/InvoiceLayout/Footer";
import Notes from "../../components/InvoiceLayout/Notes";
import Table from "../../components/InvoiceLayout/Table";
import Header from "../../components/InvoiceLayout/Header";
import MainDetails from "../../components/InvoiceLayout/MainDetails";
import CustomerDetails from "../../components/InvoiceLayout/CustomerDetails";
import Dates from "../../components/InvoiceLayout/Dates";
import "./style.css";

const Invoice = (props) => {
  const [showInvoice, setShowInvoice] = useState(false);
  const orderDetails = useSelector((state) => state.user.orderDetails);

  const handlePrint = () => {
    window.print();
  };
  return (
    <div className="delName">
      {showInvoice ? (
        <div>
          {/* <invoice /> */}
          <main className="m-5 p-5 md:max-w-xl md:mx-auto lg:max-w-2xl xl:max-w-4xl bg-white rounded shadow">
            <div>
              <Header handlePrint={handlePrint} />
              <MainDetails />
              <CustomerDetails />
              <Dates InvoiceNumber={orderDetails._id} />
              <Table totalAmount={orderDetails.totalAmount} />
              <Notes />
              <Footer />

              <button
                onClick={() => setShowInvoice(false)}
                className="mt-5 bg-blue-500 text-white font-bold py-2 px-8 rounded shadow border-2 border-blue-500 hover:bg-blue-700 hover:text-blue-500 transition-all duration-300"
              >
                Cancle
              </button>
            </div>
          </main>
        </div>
      ) : (
        <>
          <div className="flex flex-col justify-center preview">
            <button
              onClick={() => setShowInvoice(true)}
              className="bg-green-500 text-white text-sm font-bold py-2 px-15 rounded shadow border-2 border-green-500 hover:bg-green-700 hover:text-green-500 transition-all duration-300"
            >
              Priview Invoice
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Invoice;
