import React from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useState, useContext, useEffect } from "react";
import { ProductContext } from "../utils/Context";
import { nanoid } from "nanoid";

const Edit = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [products, setproducts] = useContext(ProductContext);
  const [product, setproduct] = useState({
    title: "",
    image: "",
    description: "",
    price: "",
    category: "",
  });

  const changeHandler = (e) => {
    // console.log(e.target.name, e.target.value);
    setproduct({ ...product, [e.target.name]: e.target.value });
  };
  useEffect(() => {
    setproduct(products.filter((p) => p.id == id)[0]);
  }, [id]);

  const AddProductHandler = (e) => {
    e.preventDefault();

    // const product = {
    //   id: nanoid(),
    //   title,
    //   image,
    //   category,
    //   description,
    //   price,
    // };
    if (
      product.title.trim().length < 5 ||
      product.image.trim().length < 5 ||
      product.category.trim().length < 5 ||
      product.description.trim().length < 5 ||
      product.price.length < 1
    ) {
      alert("each and every  input must have atleast 4 characters");
      return;
    }
    const pi = products.findIndex((p) => p.id == id);
    const copydata = [...products];
    copydata[pi] = { ...products[pi], ...product };
    console.log(copydata);
    setproducts(copydata);
    localStorage.setItem("products", JSON.stringify(copydata));
    navigate(-1);
  };

  console.log(products);
  return (
    <>
      <form
        onSubmit={AddProductHandler}
        className="h-screen w-[45%] m-auto  py-24 flex flex-col"
      >
        <h1 className="text-3xl">Edit Product</h1>
        <input
          name="image"
          type="URL"
          placeholder="Image link"
          className="w-full bg-zinc-200 h-[40px] px-2 rounded my-1"
          value={product?.image}
          onChange={changeHandler}
        />
        <input
          name="title"
          type="text"
          placeholder="title"
          className="w-full bg-zinc-200 h-[40px] px-2 rounded my-1"
          value={product?.title}
          onChange={changeHandler}
        />
        <div className="flex justify-between">
          <input
            name="category"
            type="text"
            placeholder="category"
            className="w-4/9 bg-zinc-200 h-[40px] px-2 rounded my-1"
            value={product?.category}
            onChange={changeHandler}
          />
          <input
            name="price"
            type="number"
            placeholder="price"
            className="w-1/2 bg-zinc-200 h-[40px] px-2 rounded my-1"
            value={product.price}
            onChange={changeHandler}
          />
        </div>
        <textarea
          name="description"
          onChange={changeHandler}
          value={product.description}
          placeholder="enter product description here.."
          className="w-full h-[250px] my-1 
          bg-zinc-200 px-2"
        ></textarea>
        <button
          type="submit"
          className="   text-blue-300 text-lg w-fit px-6 py-1 border-2 border-zinc-200 bg-white border-solid shadow justify-self-end "
        >
          Edit Product
        </button>
      </form>
    </>
  );
};

export default Edit;
