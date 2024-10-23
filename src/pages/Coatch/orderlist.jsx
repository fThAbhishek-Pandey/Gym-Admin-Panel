import React from 'react'
import { assets } from '../../assets/assest'
import { useNavigate } from 'react-router-dom'
const OrderList = () => {
  const Navigate = useNavigate()
  const days = ["yesterday", "today"]
  return (
    <div>
       <div className='flex flex-row gap-3'>
        <p className='font-bold text-3xl' >Sort by: </p>
        {days.map((item, index)=>(
          <div onClick={()=>(scrollTo(0,0))} className='flex flex-col items-center text-xl cursor-pointer flex-shrink-0 hover:bg-green-600 bg-green-200 p-3 rounded border border-r-5' key={index}>
              {item}
          </div>
        ))}
       </div>
      <p  className='font-bold text-xl' >All Order</p>
      <div className='flex flex-row justify-between mx-12 my-5'>
        <div className='font-bold text-xl'>Today's Orders</div>
        <div className='flex justify-start gap-5'>
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
          </div>
        </div>
      <div className='bg-slate-200'>
           <div className='grid grid-cols-6 justify-between'>
            <p  >Customer</p>
            <p  >Order ID</p>
            <p  >Date</p>
            <p  >Total Amount</p>
            <p  >Discount</p>
            <p  >Coopan used</p>
           </div>
        </div>
        <div className='bg-slate-50' >
          <div className='grid grid-cols-6 justify-between'>
            <div className='flex gap-2'>
              <input type="checkbox" />
              <img onClick={()=>Navigate(`/constomer/abhishek`)}  className='w-8 h-8' src={assets().userLogo} alt="img" />
              <p   onClick={()=>Navigate(`/constomer/abhishek`)} className='w-min'>Abhishek</p>
            </div>
            
            <p onClick={()=> Navigate('/order/1234')}>#1234</p>
            <p>2025</p>
            <p>₹ 500</p>
            <p>₹ 50</p>
            <p>fth123</p>
          </div>
          <div className='grid grid-cols-6 justify-between'>
            <div className='flex gap-2'>
            <input type="checkbox" />
              <img onClick={()=>Navigate(`/constomer/abhishek`)} className='w-8 h-8' src={assets().userLogo} alt="img" />
              <p  onClick={()=>Navigate(`/constomer/abhishek`)} >Abhishek</p>
            </div>
            <p onClick={()=> Navigate('/order/1234')}>#1234</p>
            <p>2025</p>
            <p>₹ 500</p>
            <p>₹ 50</p>
            <p>fth123</p>
          </div>
          <div className='grid grid-cols-6 justify-between'>
            <div className='flex gap-2'>
            <input type="checkbox" />
              <img onClick={()=>Navigate(`/constomer/abhishek`)} className='w-8 h-8' src={assets().userLogo} alt="img" />
              <p onClick={()=>Navigate(`/constomer/abhishek`)} >Abhishek</p>
            </div>
            <p onClick={()=> Navigate('/order/1234')} >#1234</p>
            <p>2025</p>
            <p>₹ 500</p>
            <p>₹ 50</p>
            <p>fth123</p>
          </div>
          <div className='grid grid-cols-6 justify-between'>
            <div className='flex gap-2'>
            <input type="checkbox" />
              <img onClick={()=>Navigate(`/constomer/abhishek`)} className='w-8 h-8' src={assets().userLogo} alt="img" />
              <p onClick={()=>Navigate(`/constomer/abhishek`)} >Abhishek</p>
            </div>
            <p onClick={()=> Navigate('/order/1234')} >#1234</p>
            <p>2025</p>
            <p>₹ 500</p>
            <p>₹ 50</p>
            <p>fth123</p>
          </div>
        </div>
        <div className='flex flex-row justify-around m-8'>
          <button className='bg-green-200 p-2 rounded'>Prev</button>
          <div className='bg-green-200 p-2 rounded'>
            page {" 1 "} of {"35"}
          </div>
          <button className='bg-green-200 p-2 rounded' >next</button>
        </div>
    </div>
  )
}

export default OrderList