import React from 'react'
import { NavLink } from 'react-router-dom'
const Sidebar = () => {
  return (
    <div className='min-h-screen bg-white border-r'>
      <ul className='text-[#515151] mt-5'>
        <NavLink to={'/'} className={({isActive})=>`flex items-center gap-3 py-3.5 px-3 md:px-9 md:min-w-72 cursor-pointer ${isActive?'bg-[#23e55d] border-r-4 border-primary ':''}`} >Dashboard</NavLink>
        <NavLink to={'/constomer'} className={({isActive})=>`flex items-center gap-3 py-3.5 px-3 md:px-9 md:min-w-72 cursor-pointer ${isActive?'bg-[#23e55d] border-r-4 border-primary ':''}`} >Coustomer</NavLink>
        <NavLink to={'/order'} className={({isActive})=>`flex items-center gap-3 py-3.5 px-3 md:px-9 md:min-w-72 cursor-pointer ${isActive?'bg-[#23e55d] border-r-4 border-primary ':''}`} >Order</NavLink>
      </ul>
   </div>
  )
}

export default Sidebar