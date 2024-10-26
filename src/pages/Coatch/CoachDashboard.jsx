import React ,{useContext, useEffect, useState}from 'react'
import { coachContext } from '../../context/coachContext'
import { assets } from '../../assets/assest';
import DashBox from '../../component/app/DashBox'
import { PrevPagination } from '../../utils/Coach/coachBoard/pagination';
import { NextPagination } from '../../utils/Coach/coachBoard/pagination';
import { findDate } from '../../utils/Coach/coachBoard/findDate';
import SearchOrder from '../../utils/Coach/coachBoard/search';
const CoachDashboard = () => {
  const {handelCoachboard, coachData }= useContext(coachContext);
  const [searchTerm, setSearchTerm] = useState('');
  const [searchData, setSearchData] = useState([]);
  const [filterdByDate, setFilteredByDate] = useState("");
  const [uniqueDate , setUniqueDate]= useState([])
  let i=0;
  useEffect(  ()=>{
    handelCoachboard()
  },[])
  useEffect(()=>{
   if (coachData&&coachData.orders){
     setSearchData(coachData.orders)
     setUniqueDate([...new Set(coachData.orders.map((item) => findDate(item.createdAt)))]);
  }
  },[coachData])
  const onHandleSearch = (e) => {
    setSearchTerm(e.target.value);
};
 const  onHandleFilter =(e)=>{
       setFilteredByDate(e.target.value)
 }
useEffect(() => {
    SearchOrder(searchTerm,filterdByDate, coachData.orders, setSearchData);
}, [searchTerm,filterdByDate]);
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
     <div className="flex justify-between mt-5 mb-5">
      <p className={`font-bold text-2xl  mr-8`}>All Orders</p>
     
     <div className='flex justify-start h-16 gap-5 p-3'>
          <div className='flex flex-row justify-start bg-white text-right border border-r-2'>
            <img className='w-8 h-9' src={assets().search_icon} alt="search" />
            <input 
              
              type="text" 
              placeholder="Search by name and order ID"
              value={searchTerm}
              onChange={(e) =>(onHandleSearch(e))}
              className="mb-0 p-0 border-0 text-md font-medium rounded"
              />
          </div>
        
        <div className='flex h-8 gap-2 justify-start border border-r-2' >
            <img className='w-8 h-8 align-baseline' src={assets().filter_icon} alt="filt" />
             <select 
               className='w-16 text-sm'
               onChange={onHandleFilter}
             >
              <option className='bg-green-600' value="">Date</option>
              {
              uniqueDate && uniqueDate.map ((item,index)=>(
                <option className='bg-white' key={index} value={item}>{item}</option>
              ))
              }
             </select>
          </div>
      <div />
      </div>
      </div>
      {/* all order by this user */}

      <div className="bg-green-400">
        <div className="grid grid-cols-[2fr_2fr_1fr_1fr_1fr_1fr_1fr] mb-3">
          <div className='flex gap-2 justify-center'>
          <input type="checkbox" name="" id="" />
          <p>User</p>
          </div>
         
          <p >Order ID</p>
          <p className='mx-3'>Date</p>
          <p>Total Amount</p>
          <p>Discount</p>
          <p>Coopan used</p>
          <p>Staus</p>
        </div>
      </div>
      <div className="flex flex-col w-full gap-3 mx-0.1">
        {
          
          searchData
        && searchData.map((item,index)=>(
        <div key={index} className="grid grid-cols-[2fr_2fr_1fr_1fr_1fr_1fr_1fr] justify-between bg-green-100">
          <div className='flex gap-2  flex-row justify-center'>
          <input className='w-4 h-4 rounded-full ' type="checkbox" />
           <div className='flex flex-row justify-start gap-2'>
             <img className='bg-green-500 w-12 h-12 rounded-full' src= {assets().user} alt="" />
             <p className='w-12 ' >{item.userId.name}</p>
           </div>
          </div>
            <p className=' text-sm text-wrap'>{item._id}</p>
            <p className=' text-sm text-wrap '>{findDate(item.createdAt)}</p>
            <p className=' text-sm text-wrap'>{item.price}</p>
            <p className=' text-sm text-wrap'>{item.discount}</p>
            <p className=' text-sm text-wrap'>fth123</p>
            <div className={`p-1 w-16 rounded-full ${item.isDelivered?'bg-green-500':'bg-red-500'}`} >{item.isDelivered? 'Delived': 'not delivered'}</div>
          </div>))
          }
          
      </div>
      <div className="flex flex-row justify-around m-8 ">
        <button onClick={()=>PrevPagination(i)} className="bg-green-200 p-2 rounded">Prev</button>
        <div className="bg-green-200 p-2 rounded">
          page {coachData.currentPage} of {coachData.totalPages}
        </div>
        <button onClick={()=>NextPagination(i)} className="bg-green-200 p-2 rounded">next</button>
      </div>
    </div>
  )
}

export default CoachDashboard