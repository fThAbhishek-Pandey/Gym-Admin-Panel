import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Navbar from '../../component/navbar'
import Sidebar from '../../component/Coach/Sidebar'
import CoachDashboard from './CoachDashboard'
import Constomer from './constomer'
import CustomerProfile from './customerProfile'
import OrderList from './orderlist'
const CoachHome = () => {
  return (
    <div>
         <Navbar/>
        <div className='flex'>
           <Sidebar />
            <div>
                <Routes>
                    <Route path='/' element={<CoachDashboard/>} ></Route>
                    <Route path='/users' element={< Constomer/>}></Route>
                    <Route path='/user/profile/:id' element={<CustomerProfile/>} ></Route>
                    <Route path='/order' element= {<OrderList/>} ></Route>
                    <Route path = 'order/:order_id' element={<CustomerProfile/>}></Route>
                </Routes>
            </div>
        </div>

    </div>
  )
}

export default CoachHome