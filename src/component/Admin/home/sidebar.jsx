import React from 'react'
import { NavLink } from 'react-router-dom'
const Sidebar = () => {
  return (
    <div className='min-h-screen bg-white border-r'>
      <ul className='text-[#515151] mt-5'>
        <NavLink to={'/'} className={({isActive})=>`flex items-center gap-3 py-3.5 px-3 md:px-9 md:min-w-72 cursor-pointer ${isActive?'bg-[#23e55d] border-r-4 border-primary ':''}`} >Dashboard</NavLink>
        <NavLink to={'/add-coach'} className={({isActive})=>`flex items-center gap-3 py-3.5 px-3 md:px-9 md:min-w-72 cursor-pointer ${isActive?'bg-[#23e55d] border-r-4 border-primary ':''}`} >Add Coach</NavLink>
        <NavLink to={'/all-coach'} className={({isActive})=>`flex items-center gap-3 py-3.5 px-3 md:px-9 md:min-w-72 cursor-pointer ${isActive?'bg-[#23e55d] border-r-4 border-primary ':''}`} >All Coach</NavLink>
      </ul>
   </div>
  )
}
export default Sidebar