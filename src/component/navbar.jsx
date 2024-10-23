import React, {useContext} from 'react'
import { assets } from '../assets/assest'
import { adminContext } from '../context/adminContext' 
import { coachContext } from '../context/coachContext'
const Navbar = () => {
  const {handelLogout , adminToken } = useContext(adminContext)
  const {handleLogoutCoach} = useContext(coachContext);
  const logoutHandel = ()=>{
     if( adminToken) handelLogout()
     else handleLogoutCoach ()
  }
  return (
    <div className='flex flex-row justify-between mx-5'>
      <div className='flex'>
      <img className='w-12 h-12' src={assets().userLogo} alt="logoimg" />
      <p className='border-2 rounded px-4 py-2 m-3 text-[25px] font-bold'><span>{adminToken?'Admin':'Coach'}</span> Dashboard</p>
      </div>
       <button onClick={logoutHandel} className='m-5 p-3 bg-green-400 rounded'>logout</button>
    </div>
  )
}

export default Navbar