import React from 'react'
import Button from './Button'

const Product = ({prod,index,mover}) => {
  return (
    <div className='w-full h-[16rem] text-white'>
      <div onMouseEnter={()=>{mover(index)}} className='py-8  flex items-center justify-between max-w-screen-lg mx-auto '>
        <h1 className=' text-5xl'>{prod.title}</h1>
        <div className='w-1/3 flex flex-col gap-4'>
            <p className='font-semibold '>{prod.description}</p>
            <div className='flex gap-6'>
            {prod.live&&<Button/>}
            {prod.case&&<Button title="Case study"/>}
            </div>
        </div>    
      </div>
    </div>
  )
}

export default Product
