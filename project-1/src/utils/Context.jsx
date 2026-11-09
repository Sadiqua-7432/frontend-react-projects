import React, { createContext, useEffect, useState } from "react";
import axios from "./axios";
import { Link, Routes, Route } from "react-router-dom";
export const ProductContext = createContext();
const Context = (props) => {
  const [products, setproducts] = useState(
    JSON.parse(localStorage.getItem("products") || null),
  );
  // Niche wala API ka data hai(isme  add delete nhi chala isiliye apna products bnayenge )
  // const getproducts=async()=>{
  //     try{
  //       const {data}=await axios.get("/products")
  //        setproducts(data)
  //     }catch(error){
  //         console.log(error)
  //     }
  // }
  // useEffect(()=>{
  //     getproducts()
  // },[])

  return (
    <ProductContext.Provider value={[products, setproducts]}>
      {props.children}
    </ProductContext.Provider>
  );
};

export default Context;
