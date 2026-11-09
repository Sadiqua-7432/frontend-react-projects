import React from 'react'
import Card from './Card'

const Cards = () => {
  return (
    <div className='w-full'>
      <div className='max-w-screen-lg mx-auto py-20 flex gap-1 '>
            <Card width={"basis-1/3"}  start={false} para={true} head1={true} head2={true} />
            <Card  width={"basis-2/3"} start={true} para={false} head1={false} head2={false} />
      </div>
    </div>
    
  )
}

export default Cards
