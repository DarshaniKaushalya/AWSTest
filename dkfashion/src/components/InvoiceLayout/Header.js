import React from "react";
// import { Button } from "react-bootstrap";
// import ReactToPrint from "react-to-print";
// import Invoice from "../../containers/Invoice/Invoice";

export default function Header() {
  // let componentRef = useRef();

  return (
    <>
      <header className=" flex flex-col items-center justify-center m-5 p-5 xl:justify-between">
        <div>
          <h1 className="font-bold uppercase tracking-wide text-4xl mb-3">
            Invoicer
          </h1>
        </div>
        <div>
          <ul className="flex items-center justify-between flex-wrap">
            {/* <li>
              <button
                className=" bg-gray-500 text-black font-bold py-2 px-8 rounded shadow border-2 border-gray-500 hover:bg-transparent hover:text-gray-500 transition-all duration-300 btn btn-print"
                onClick={handlePrint}
              >
                Print
              </button>
            </li>
            <li className="mx-2">
              <button className="bg-blue-500 text-black font-bold py-2 px-8 rounded shadow border-2 border-blue-500 hover:bg-transparent hover:text-gray-500 transition-all duration-300 btn btn-download">
                Download
              </button>
            </li> */}
            <li>
              <div></div>
            </li>
          </ul>
        </div>
      </header>
    </>
  );
}

// component to be printed
// class ComponentToPrint extends React.Component {
//   render() {
//     return <Invoice />;
//   }
// }
