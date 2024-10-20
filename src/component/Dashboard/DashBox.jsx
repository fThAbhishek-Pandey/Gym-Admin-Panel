import React from 'react'

const DashBox = ({img, parameter, count, rate}) => {
  return (
    <div className='bg-white w-48 h-24 m-4'>
        <div className='flex justify-around m-2'>
        <img className='p-3 rounded-full bg-green-100' src={img} alt="dashimg" />
        <div>
            <p>{parameter}</p>
            <p>{"₹ "}{count}</p>
        </div>
        </div>
        <p className={`text-right text-green-500`}>₹ {rate}</p>

    </div>
  )
}

export default DashBox