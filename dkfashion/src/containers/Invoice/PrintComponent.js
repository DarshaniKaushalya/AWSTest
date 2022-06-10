/* eslint-disable no-unused-vars */
import React, { useRef, useState } from "react";
import { Button } from "react-bootstrap";
import ReactToPrint from "react-to-print";
import Preview from "./Preview";

export default function PrintComponent() {
  let componentRef = useRef();
  const [activeClick, setActiveClick] = useState(false);

  return (
    <>
      <div id="print_component">
        {/* button to trigger printing of target component */}
        <ReactToPrint
          trigger={() => (
            <Button className="py-2 px-5 text-sm font-bold">
              Print Invoice
            </Button>
          )}
          content={() => componentRef}
        />

        {/* component to be printed */}
        <div style={{ display: "none" }}>
          <ComponentToPrint ref={(el) => (componentRef = el)} />
        </div>
      </div>
    </>
  );
}

// component to be printed
class ComponentToPrint extends React.Component {
  render() {
    return <Preview />;
  }
}
