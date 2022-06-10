/* eslint-disable react-hooks/rules-of-hooks */
import React from "react";
import { useSelector } from "react-redux";

// invoice imports
import Footer from "../../components/InvoiceLayout/Footer";
import Notes from "../../components/InvoiceLayout/Notes";
import Table from "../../components/InvoiceLayout/Table";
import Header from "../../components/InvoiceLayout/Header";
import MainDetails from "../../components/InvoiceLayout/MainDetails";
import CustomerDetails from "../../components/InvoiceLayout/CustomerDetails";
import Dates from "../../components/InvoiceLayout/Dates";
// import PrintComponent from "./PrintComponent";

const Invoice = (props) => {
  const orderDetails = useSelector((state) => state.user.orderDetails);

  return (
    <div className="delName">
      <div>
        {/* <invoice /> */}
        <main className="m-5 p-5 md:max-w-xl md:mx-auto lg:max-w-2xl xl:max-w-4xl bg-white rounded shadow">
          <div>
            <Header />
            <MainDetails />
            <CustomerDetails />
            <Dates InvoiceNumber={orderDetails._id} />
            <Table totalAmount={orderDetails.totalAmount} />
            <Notes />
            <Footer />
          </div>
        </main>
      </div>
    </div>
  );
};

export default Invoice;
