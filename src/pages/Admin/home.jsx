import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Sidebar from '../../component/Admin/home/sidebar'
import Navbar from '../../component/navbar'
import Dashboard from './dashboard'
import AddCoach from './addCoach'
import CoachList from './CoachList'
const Home = () => {
  return (
    <div>
        <Navbar />
        <div className='flex justify-start'>
            <Sidebar />
            <div className='w-full'>
              <Routes>
                  <Route path='/' element={<Dashboard/>} ></Route>
                  <Route path='/add-coach' element={<AddCoach/>} ></Route>
                  <Route path='/all-coach' element={<CoachList/>}></Route>
              </Routes>
            </div>
        </div>

    </div>
  )
}

export default Home