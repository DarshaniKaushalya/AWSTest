import React from "react";
import { useSelector } from "react-redux";

export default function CustomerDetails(props) {
  const orderDetails = useSelector((state) => state.user.orderDetails);
  return (
    <>
      <section className="mt-5">
        <h2 className="text-xl uppercase">
          <b> Client's Name:</b>
          {orderDetails.address.name}
        </h2>
        <p>
          <b> Client's Address:</b>
          {orderDetails.address.address}
        </p>
      </section>
    </>
  );
}
