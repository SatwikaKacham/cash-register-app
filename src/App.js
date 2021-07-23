import React, { useState } from "react";
import "./styles.css";

export default function App() {
  var [billtotal, setbilltotal] = useState(0);
  var [cashtotal, setcashtotal] = useState(0);
  var [hide, setHide] = useState(false);

  function billTaker(event) {
    var total = event.target.value;
    console.log(total);
    // if(total===0)
    // setHide(false);
    setbilltotal(total);
  }

  function cashTaker(event) {
    var total = event.target.value;
    console.log(total);

    setcashtotal(total);
  }
  var returnTotal = cashtotal - billtotal;
  console.log(returnTotal);

  return (
    <div className="App">
      <h1 className="header">
        Cash Register App<span>💸</span>
      </h1>
      <div className="totalInput">
        <div className="totalBill">
          <h3> Enter total Bill Amount</h3>
          <input
            type="number"
            placeholder="  Amount need to be paid"
            onChange={billTaker}
          />
          <button
            onClick={() => {
              setHide(!hide);
            }}
          >
            Next
          </button>
        </div>

        <div className={hide ? "totalCash" : "totalCashHidden"}>
          <h3> Enter total Amount</h3>
          <input
            type="number"
            placeholder=" Amount given by customer"
            onChange={cashTaker}
          />
          <button> submit</button>
        </div>
      </div>
    </div>
  );
}
