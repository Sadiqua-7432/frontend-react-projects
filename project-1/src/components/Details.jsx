import React, { useEffect, useState, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Link, Routes, Route } from "react-router-dom";
import axios from "../utils/axios";
import Loading from "./Loading";
import { ProductContext } from "../utils/Context";

const Details = () => {
  const navigate = useNavigate();
  const [products, setproducts] = useContext(ProductContext);
  const [product, setproduct] = useState(null);
  const { id } = useParams();

  //Value from A-P-I
  // const getsingleproduct = async () => {
  //   try {
  //     const { data } = await axios.get(`/products/${id}`);
  //     setproducts(data);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  useEffect(() => {
    if (!product) {
      setproduct(products.filter((p) => p.id == id)[0]);
    }
    // getsingleproduct();
  }, []);

  const productDeleteHandler = (id) => {
    const FilteredProducts = products.filter((p) => p.id !== id);
    setproduct(FilteredProducts);
    localStorage.setItem("products", JSON.stringify(FilteredProducts));
    navigate("/");
  };
  return product ? (
    <div className="h-screen  w-[70%] m-auto flex justify-center items-center">
      <img className="h-[50%] " src={`${product.image}`} alt="" />
      <div className="ml-24 flex flex-col gap-3 mt-16 w-[30vw]">
        <div>
          <h1 className="text-3xl ">{product.title}</h1>
          <h1 className="text-zinc-400 font-bold">{product.category}</h1>
          <h1 className="text-pink-400">${product.price}</h1>
          <h1 className="font-semibold">{product.description}</h1>
          <div className="flex gap-8">
            <Link
              to={`/Edit/${product.id}`}
              className="px-6 text-blue-400 py-1 bg-white border-1 border-zinc-200 shadow w-fit "
            >
              Edit
            </Link>
            <button
              onClick={() => productDeleteHandler(product.id)}
              className="px-6 text-pink-400 py-1 border-1 shadow border-zinc-200 bg-white w-fit"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <Loading />
  );
};

export default Details;
