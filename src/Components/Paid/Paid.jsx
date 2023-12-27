import React from "react";
import "./Paid.css";
import getpaid from "../../Assets/getpaidmockup.png";
import appstore from "../../Assets/App Store.png";
import playstore from "../../Assets/Play Store.png";

const Paid = () => {
  return (
    <>
      <div className="paidcontainer">
        <div className="getpaidvector">
          <div className="greenbgimage flex">
            <div className="paidleft">
              <img className="br" src={getpaid} alt="" />
            </div>
            <div className="paidright ">
              <div className="paidrighttitle">Getting Paid is now easier!</div>
              <div className="paidrightdesc">
                PayPulse is fully reserved. Unlike banks, we don’t loan out your
                money. We publish our holdings and obligations in real time.
              </div>
              <div className="downloadbuttong flex">
                <img className="appstore" src={appstore} alt="" />
                <img className="playstore" src={playstore} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Paid;
