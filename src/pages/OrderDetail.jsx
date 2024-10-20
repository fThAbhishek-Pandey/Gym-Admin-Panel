import React from "react";
import { assets } from "../assets/assest";

const OrderDetail = () => {
  return (
    <div>
      <div className="flex flex-row justify-between mx-5 mt-4">
        <div>
          <div>
            <p>{"Kachra Seth"}</p>
            <div>
              <p>10:30 pm</p>
              <p>today</p>
            </div>
          </div>
          <div>
            <p>order Id : <span>#1234</span></p>
            <img className="w-2 h-2" src={assets().reactlogo} alt="" />
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default OrderDetail;
