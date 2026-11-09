import React from 'react'
import Stripes from './Stripes'

const Stripe = ({val}) => {
   
  return (
    <div className='w-[16.66%] px-4 py-3 items-center border-zinc-700 border-t-1 border-b-1 border-r-1 flex justify-between'>
    <img className='h-full w-[40%]' src={val.url} alt="" />
    <span className='font-semibold'>{val.number}</span>
    </div>
  )
}

export default Stripe
