import React, { useState } from "react";
import Product from "./Product";
import { motion } from "motion/react";

const Products = () => {
  const products = [
    {
      title: "Yahoo!",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia ducimus nostrum rerum sint cumque ab nobis error dignissimos ipsa tenetur?",
      live: true,
      case: false,
    },
    {
      title: "YIR 2022",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia ducimus nostrum rerum sint cumque ab nobis error dignissimos ipsa tenetur?",
      live: true,
      case: true,
    },
    {
      title: "Arqitel",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia ducimus nostrum rerum sint cumque ab nobis error dignissimos ipsa tenetur?",
      live: true,
      case: true,
    },
    {
      title: "TTR",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia ducimus nostrum rerum sint cumque ab nobis error dignissimos ipsa tenetur?",
      live: true,
      case: false,
    },
  ];
  const [pos,setpos]=useState(0)
  const mover=(indx)=>{
    setpos(indx*16)
  }
  return (
    <div className="relative">
        {products.map((elem,index)=>(
            <Product mover={mover} index={index} prod={elem} />
        ))}
      <div className="w-full h-full pointer-events-none  absolute top-[0]">
        <motion.div initial={{y:pos}} animate={{y:pos+`rem`}}  className="w-[22rem] overflow-hidden h-[16rem]  absolute left-[34%]">
          <motion.div animate={{y:-pos+`rem`}} className="w-full h-full "><video className="w-full h-full  " src="https://www.pexels.com/download/video/39876555/"></video></motion.div>
          <motion.div animate={{y:-pos+`rem`}} className="w-full h-full "><video className="w-full h-full " src="https://www.pexels.com/download/video/40540390/"></video></motion.div>
          <motion.div animate={{y:-pos+`rem`}} className="w-full h-full "><video className="w-full h-full " src="https://www.pexels.com/download/video/35293393/"></video></motion.div>
          <motion.div animate={{y:-pos+`rem`}} className="w-full h-full "><video className="w-full h-full " src="https://www.pexels.com/download/video/3853971/"></video></motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Products;
