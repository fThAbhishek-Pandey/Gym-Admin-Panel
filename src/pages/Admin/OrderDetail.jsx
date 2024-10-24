import React from "react";
import { assets } from "../assets/assest";
import { useParams } from "react-router-dom";
const OrderDetail = () => {
  const { id: orderdId } = useParams();
  return (
    <div>
      <div className="flex flex-row justify-between mx-5 mt-4 bg-green-100">
        <div className="m-4">
          <div>
            <p className="font-bold text-lg">{"Kachra Seth"}</p>
            <div className="flex gap-1 text-xs">
              <p className="font-xs">10:30 pm</p>
              <p className="font-xs">today</p>
            </div>
          </div>
          <div className="flex gap-3 bg-green-50">
            <p>
              order Id : <span>{orderdId}</span>
            </p>
            <img className="w-5 h-6" src={assets().reactlogo} alt="" />
          </div>
        </div>
        <div className="m-4">
          <div>
            Orderd by : <span className="bg-red-500 px-2 rounded">Zomato</span>
          </div>
          <div className="flex gap-3">
            <p>print Reciept</p>
            <img src={assets().reactlogo} alt="" />
          </div>
        </div>
      </div>
      <div className="flex flex-row w-full justify-start gap-4 m-5">
        <div className="w-2/5">
          <div className="bg-green-50 gap-4 w-full">
            <p className="font-bold text-lg">Address</p>
            <div className="flex gap-4">
              <img
                className="w-8 h-8"
                src={assets().reactlogo}
                alt="mobile phone icon"
              />
              <p>+91 8409090909</p>
            </div>
            <div className="flex gap-4">
              <img
                className="w-8 h-8"
                src={assets().reactlogo}
                alt="adress  icon"
              />
              <p>Shastri Nagar, Haldighati</p>
            </div>
          </div>
          <div className="bg-green-50 gap-2 w-full mt-5">
            <p className="font-bold text-lg">Bill Details</p>
            <div className="flex flex-row justify-between m-3 w-full p-6">
              <div>
                <p>Total</p>
                <p>Handling Charge</p>
                <p>Delivery Fee</p>
                <p>
                  Discount<span className="text-green-600">{"CODE"}</span>
                </p>
                <div className="mt-5">
                  <p className="font-bold text-lg gap-0">Total Bill</p>
                  <p>incl all taxes & charges</p>
                </div>
              </div>
              <div>
                <p>₹ 350</p>
                <p>₹ 5</p>
                <p>₹ 25</p>
                <p>₹ 40</p>
                <p className="mt-5">₹ 340</p>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-green-50 w-full gap-3">
          <p className="font-bold text-lg">Order Details</p>
          <div className="flex flex-col gap-3 mt-5">
            <div className="flex justify-between p-5 bg-green-100">
              <div className="flex gap-2">
                <img src={assets().reactlogo} alt="food1typelogo" />
                <div>
                  <p>Corporate Mazdoor Salad</p>
                  <p>
                    Qty: <span>1</span>
                  </p>
                </div>
              </div>
              <p>₹ 160</p>
            </div>
            <div className="flex justify-between p-5 bg-green-100">
              <div className="flex  gap-3">
                <img src={assets().reactlogo} alt="food1typelogo" />
                <div>
                  <p>Corporate Mazdoor Salad</p>
                  <p>
                    Qty: <span>1</span>
                  </p>
                </div>
              </div>
              <p>₹ 160</p>
            </div>
           </div>
          <div />
        </div>
      </div>
    </div>
  );
};

export default OrderDetail;
