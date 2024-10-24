import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Navbar from '../../component/navbar'
import CoachDashboard from './CoachDashboard'
const CoachHome = () => {
  return (
    <div>
         <Navbar/>
            <div>
                <Routes>
                    <Route path='/' element={<CoachDashboard/>} ></Route>
                </Routes>
            </div>

    </div>
  )
}

export default CoachHome