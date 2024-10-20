import React from 'react'
import logo from '../../assets/image.png'
const Navbar = () => {
  return (
    <div className='flex flex-row justify-between mx-5'>
      <div className='flex'>
      <img className='w-12 h-12' src={logo} alt="logoimg" />
      <p className='border-2 rounded px-4 py-2 m-3 text-[25px] font-bold'>Admin Dashboard</p>
      </div>
       

       <button className='m-5 p-3 bg-green-400 rounded'>logout</button>
    </div>
  )
}

export default Navbar