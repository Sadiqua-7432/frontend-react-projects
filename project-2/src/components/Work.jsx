import React, { useState } from "react";
import { useScroll ,useMotionValueEvent} from "motion/react"
import { motion } from "motion/react"
import { image } from "motion/react-client";

const Work = () => {
  
  const [img,setimg]=useState([
    {
      url: "https://images.unsplash.com/photo-1788283574707-c6f9ebbe5982?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
      top: "40%",
      left: "40%",
      isActive: false,
    },
    {
      url: "https://images.unsplash.com/photo-1731261061263-31a9daedbbe9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
      top: "35%",
      left: "38%",
      isActive: false,
    },
    {
      url: "https://images.unsplash.com/photo-1744389789987-1ea62ebd66f4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
      top: "45%",
      left: "35%",
      isActive: false,
    },
    {
      url: "https://images.unsplash.com/photo-1606232620087-b5989e184813?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
      top: "40%",
      left: "43%",
      isActive: false,
    },
    {
      url: "https://plus.unsplash.com/premium_photo-1748350572064-fd47d5e035cb?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
      top: "53%",
      left: "40%",
      isActive: false,
    },
  ])
   
const { scrollY } = useScroll()
const { scrollYProgress} = useScroll()
scrollYProgress.on("change",(data)=>{
  const imageShow=(arr)=>{
    setimg(prev=>(
      prev.map((item,index)=>(
        arr.indexOf(index)===-1?{...item,isActive:false}:{...item,isActive:true}
        )
      ))
    );
  }
switch(Math.floor(data*100)){
    case 2:imageShow([0]);
      break;
    case 3:imageShow([0,1])
      break;
    case 5:imageShow([0,1,2])
      break;
    case 7:imageShow([0,1,2,3])
      break;
    case 8:imageShow([0,1,2,3,4])
      break;
    case 9:imageShow([0,1,2,3,4,5])
      break;
  }
})
return (
    
    <div className="w-full mb-20">
      <div className="relative max-w-screen-xl mx-auto text-center">
        <h1 className="leading-none tracking-tight text-[30vw] font-medium user select-none ">
          work
        </h1>
        <div className="absolute top-0 w-full h-full">
          {img.map((elem, index) =>
            elem.isActive ? (
              <img
                key={index}
                style={{ top: elem.top, left: elem.left }}
                className="rounded-lg w-[200px] h-[200px] absolute"
                src={elem.url}
              />
            ) : null,
          )}
        </div>
      </div>
    </div>
  );
};

export default Work;
