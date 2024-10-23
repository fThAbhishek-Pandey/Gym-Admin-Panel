import React from "react";
import { assets } from "../../assets/assest";
import { useNavigate, useParams } from "react-router-dom";
const CustomerProfile = () => {
  const  Navigate = useNavigate()
  const {id}= useParams()
  return (
    <div className="w-full">
      <div className="flex w-full gap-5 bg-green-100">
        <img
          className="bg-green-300 w-36 h-36 rounded-full"
          src={assets().reactlogo}
          alt="profile pic"
        />
        <div>
          <div className="border-b-4 w-full">
            Babu Bhaiya <span>{id}</span>
          </div>
          <div className="flex">
            <div>
              <p>contact No</p>
              <p>Email ID</p>
              <p>Total Orders</p>
            </div>
            <div>
              <p>+91 876543210</p>
              <p>pk@gmail.com</p>
              <p>25</p>
            </div>
          </div>
        </div>
      </div>
     <div className="flex justify-between font-bold text-2xl mt-5 mb-5">
      <p>All Orders</p>
     
     <div className='flex justify-start gap-5 p-3'>
          <div className='flex flex-row justify-start bg-white border border-r-2'>
            <img className='w-8 h-9' src={assets().search_icon} alt="search" />
            <input type="search" />
          </div>
        
        <div className='flex flex-row justify-start bg-white border border-r-2' >
            <img className='w-8 h-9' src={assets().filter_icon} alt="filt" />
             <select name="" id="">
              <option value="type1">type1</option>
              <option value="type2">type2</option>
              <option value="type3">typr3</option>
             </select>
          </div>
      <div />
      </div>
      </div>
      {/* all order by this user */}

      <div className="bg-slate-200">
        <div className="grid grid-cols-6 justify-between mb-3">
          <input type="checkbox" name="" id="" />
          <p>Order ID</p>
          <p>Date</p>
          <p>Total Amount</p>
          <p>Discount</p>
          <p>Coopan used</p>
        </div>
      </div>
      <div className="flex flex-col w-full gap-3">
          <div className="grid grid-cols-6 justify-between bg-green-100">
            <input type="checkbox" name="" id="" />
            <p onClick={() => Navigate("/order/1234")}>#1234</p>
            <p>2025</p>
            <p>₹ 500</p>
            <p>₹ 50</p>
            <p>fth123</p>
          </div>
          <div className="grid grid-cols-6 justify-between bg-green-100">
            <input type="checkbox" name="" id="" />
            <p onClick={() => Navigate("/order/1234")}>#1234</p>
            <p>2025</p>
            <p>₹ 500</p>
            <p>₹ 50</p>
            <p>fth123</p>
          </div>
          <div className="grid grid-cols-6 justify-between bg-green-100">
            <input type="checkbox" name="" id="" />
            <p onClick={() => Navigate("/order/1234")}>#1234</p>
            <p>2025</p>
            <p>₹ 500</p>
            <p>₹ 50</p>
            <p>fth123</p>
          </div>
          <div className="grid grid-cols-6 justify-between bg-green-100">
            <input type="checkbox" name="" id="" />
            <p onClick={() => Navigate("/order/1234")}>#1234</p>
            <p>2025</p>
            <p>₹ 500</p>
            <p>₹ 50</p>
            <p>fth123</p>
          </div>
      </div>
      <div className="flex flex-row justify-around m-8 ">
        <button className="bg-green-200 p-2 rounded">Prev</button>
        <div className="bg-green-200 p-2 rounded">
          page {" 1 "} of {"35"}
        </div>
        <button className="bg-green-200 p-2 rounded">next</button>
      </div>
    </div>
  );
};

export default CustomerProfile;
