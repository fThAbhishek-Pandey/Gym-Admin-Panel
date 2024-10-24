import React ,{useContext, useEffect, useState}from 'react'
import { coachContext } from '../../context/coachContext'
import { assets } from '../../assets/assest';
import DashBox from '../../component/app/DashBox'
import { PrevPagination } from '../../utils/Coach/coachBoard/pagination';
import { NextPagination } from '../../utils/Coach/coachBoard/pagination';
import { findDate } from '../../utils/Coach/coachBoard/findDate';
const CoachDashboard = () => {
  const {handelCoachboard, coachData }= useContext(coachContext);
  const [order, setOrder]= useState(false);
  let i=0;
  useEffect(  ()=>{
   handelCoachboard()
   console.log("console.log(CoachData);",coachData);
  },[])
  useEffect(()=>{
    setOrder(coachData.orders)
    console.log("console.log(CoachData);",coachData,order);
  },[i,coachData])
  return  coachData.coach && (
    <div className="w-full">
      <div className="flex w-full gap-5 bg-green-100 mt-2 p-3 mx-2">
        <img
          className="bg-green-300 w-36 h-36 rounded-full"
          src={assets().coach}
          alt="profile pic"
        />
        <div>
          <div className="border-b-4 w-full text-xl font-semibold mb-3 p-2 pb-3 bg-green-300">
            {coachData.coach.name} <span className='text-base font-medium bg-green-50 p-1'>{coachData.coach._id}</span>
          </div>
          <div className="flex justify-start gap-5 mt-5">
            <div className='flex flex-col gap-3' >
              <p className='bg-green-200 p-1 font-semibold' >Contact No</p>
              <p className='bg-green-200 p-1 font-semibold' >Email ID</p>
              <p className='bg-green-200 p-1 font-semibold' >Total Orders</p>
            </div>
            <div className='flex flex-col gap-3'>
              <p className='bg-green-200 p-1' >{coachData.coach.phone}</p>
              <p className='bg-green-200 p-1' >{coachData.coach.email}</p>
              <p className='bg-green-200 p-1' >{coachData.orders.length}</p>
            </div>
          </div>
        </div>
      </div>
      <div className='bg-green-300 p-4'>
          <p>Summary</p>
      <div className='flex flex-row gap-3 p-2 justify-around'>
        <DashBox img ={assets().Total_order} parameter={"Total Orders"} count = {coachData.totalOrder} rate ={""} symbol={"₹ "} />
        <DashBox img ={assets().Delivered} parameter={'Total Deliverd'} count = {coachData.totalDelivered} rate ={""} symbol={""}/>
        <DashBox img ={assets().Revenue} parameter={"Total Revenue"} count = {coachData.totalRevenue} rate ={""} symbol={"₹ "} />
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

      <div className="bg-green-400">
        <div className="grid grid-cols-7 justify-between mb-3">
          <input type="checkbox" name="" id="" />
          <p>Order ID</p>
          <p>Date</p>
          <p>Total Amount</p>
          <p>Discount</p>
          <p>Coopan used</p>
          <p>Staus</p>
        </div>
      </div>
      <div className="flex flex-col w-full gap-3 mx-0.1">
        {order && order.map((item,index)=>(
        <div key={index} className="grid grid-cols-7 justify-between bg-green-100">
          <div className='flex gap-1 mr-2'>
          <input type="checkbox" name="" id="" />
           <div className='flex justify-start gap-2'>
             <img className='bg-green-500 w-12 h-12 rounded-full ' src= {assets().user} alt="" />
             <p>{item.userId.name}</p>
           </div>
          </div>
            <p >{item._id}</p>
            <p>{findDate(item.createdAt)}</p>
            <p>{item.price}</p>
            <p>{item.discount}</p>
            <p>fth123</p>
            <div className={`m-5 p-2 rounded ${item.isDelivered?'bg-green-500':'bg-red-500'}`} >{item.isDelivered? 'Delived': 'not delivered'}</div>
          </div>))}
          
      </div>
      <div className="flex flex-row justify-around m-8 ">
        <button onClick={()=>PrevPagination(i)} className="bg-green-200 p-2 rounded">Prev</button>
        <div className="bg-green-200 p-2 rounded">
          page {i} of {i+10}
        </div>
        <button onClick={()=>NextPagination(i)} className="bg-green-200 p-2 rounded">next</button>
      </div>
    </div>
  )
}

export default CoachDashboard