/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./Styles/Table.css";

export default function Table({ totalAmount }) {
  const orderDetails = useSelector((state) => state.user.orderDetails);

  return (
    <>
      <table width="100%">
        <thead>
          <tr className="bg-gray-100  p-1">
            <td>Product Name</td>
            <td>Quantity</td>
            <td>Price($)</td>
          </tr>
        </thead>
        <tbody>
          {orderDetails.items.map((item, index) => (
            <tr key={index}>
              <td>{item.productId.name}</td>
              <td>{item.purchasedQty}</td>
              <td>{item.payablePrice}</td>
            </tr>
          ))}

          <tr className="border-t-2 border-gray-3 pt-5">
            <td>
              {" "}
              <b>Total Amount</b>{" "}
            </td>
            <td></td>
            <td>
              <b>{totalAmount}</b>
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
}
