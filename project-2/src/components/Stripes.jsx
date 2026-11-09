import React from 'react'
import Stripe from './Stripe'

const Stripes = () => {
     const data=[
        {url:"https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/6a909f831b38ed0cefedff33_Case-Study-logo-onDark.svg",number:48},
        {url:"https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/6697d486ac04cccf98e13fff_bcgp.svg",number:2},
        {url:"https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/666359b62c438b36ad60fdcd_663a62d3cc5a74576d82a863_Singularity_logo.svg",number:11},
        {url:"https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/666359b5b40b9966a3a112d7_663a6cbf194837f9c0affe8e_logo.svg",number:48},
        {url:"https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/666359b850995827afaa8db9_63aed9b4493ff77bba5e9939_spotify.svg",number:2},
        {url:"https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/666359bafc1c77261cbab231_63aedb322c152d2deae759ec_mural.svg",number:11},
    ]
  return (
    <div className='flex mb-20'>
      {data.map((elem,index)=>(
     <Stripe key={index} val={elem}  />
      ))}
    </div>
  )
}

export default Stripes
