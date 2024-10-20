import React from 'react'
import Sidebar from '../component/home/sidebar'
import Navbar from '../component/home/navbar'
import {Routes, Route} from 'react-router-dom'
import Dashboard from './dashboard'
import Constomer from './constomer'
import Order from './orderlist'
import OrderDetail from './OrderDetail'
import CustomerProfile from './customerProfile'
const Home = () => {
  return (
    <div>
        <Navbar />
        <div className='flex justify-start'>
            <Sidebar />
            <div className='w-full'>
              <Routes>
                  <Route path='/' element={<Dashboard/>} ></Route>
                  <Route path='/constomer' element={<Constomer/>} ></Route>
                  <Route path='/constomer/:id' element={<CustomerProfile/>} ></Route>
                  <Route path='/order' element={<Order/>}></Route>
                  <Route path='/order/:id' element={<OrderDetail/>} ></Route>
              </Routes>
            </div>
        </div>

    </div>
  )
}

export default Home