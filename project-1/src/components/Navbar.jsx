import React, { useContext } from "react";
import { ProductContext } from "../utils/Context";
import { Link, Routes, Route } from "react-router-dom";
import Create from "./Create";

const Navbar = () => {
  const [products] = useContext(ProductContext);
  let distinct_category =
    products && products.reduce((acc, cv) => [...acc, cv.category], []);
  distinct_category = [...new Set(distinct_category)];
  const color = () => {
    return `rgba(${((Math.random() * 255)).toFixed()},
    ${((Math.random() * 255)).toFixed()},
    ${((Math.random() * 255)).toFixed()},0.4)`;
  };

  return (
    <>
      <nav className="bg-zinc-100 w-[20%] h-screen relative px-8 ">
        <Link
          to="/create"
          className="inline-block my-8 text-blue-300 text-lg w-fit px-6 py-1 border-2 border-zinc-200 bg-white border-solid shadow   translate-x-[20%] "
        >
          Add New Product
        </Link>
        <h1 className="text-2xl ">Category Filter</h1>
        {distinct_category.map((c, i) => (
          <Link key={i} className="flex mt-6" to={`/?category=${c}`}>
            <span  style={{backgroundColor:color()}} className=" mr-6   h-[14px] w-[14px] rounded-full mt-6">
              {" "}
            </span>
            <h1 className="mt-4 hover:scale-125 transition">{c}</h1>
          </Link>
        ))}
      </nav>
    </>
  );
};

export default Navbar;
