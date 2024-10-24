import React from 'react'

const DashBox = ({img, parameter, count, rate,symbol}) => {
  return (
    <div className='bg-white w-48 h-24 mx-4'>
        <div className='flex justify-around m-2'>
        <img className='w-12 h-12  p-1 rounded-full bg-green-100' src={img} alt="dashimg" />
        <div>
            <p>{parameter}</p>
            <p>{symbol}{count}</p>
        </div>
        </div>
        <p className={`text-right text-green-500`}>{rate}</p>
    </div>
  )
}

export default DashBox