import React from "react";
import "./Styles/footer.css";

export default function Footer() {
  return (
    <>
      <footer className="footer border-t-2 border-gray-3 pt-5">
        <ul className="flex flex-wrap items-center justify-center">
          <li>
            <span className="font-bold">Your Name:</span> Darshani Kaushalya
          </li>
          <li>
            <span className="font-bold">Your email: </span>dkfashion@gmail.com
          </li>
          <li>
            <span className="font-bold">Phone Number:</span>0702229997
          </li>
          <li>
            <span className="font-bold">Bank:</span>Commercial Bank
          </li>
          <li>
            <span className="font-bold">Account holder:</span>Darshani Kaushalya
            Diwakara
          </li>
          <li>
            <span className="font-bold">Account number:</span>1234 5678 9876
            5432
          </li>
          <li>
            <span className="font-bold">Website:</span> www.dkfashion.com
          </li>
        </ul>
      </footer>
    </>
  );
}
