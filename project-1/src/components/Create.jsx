import { Link, useNavigate } from "react-router-dom";
import { useParams, useState, useContext } from "react";
import { ProductContext } from "../utils/Context";
import { nanoid } from "nanoid";

const Create = () => {
  const navigate = useNavigate();
  const [products, setproducts] = useContext(ProductContext);
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");
  const [title, setTitle] = useState("");
  const AddProductHandler = (e) => {
    e.preventDefault();

    const product = {
      id: nanoid(),
      title,
      image,
      category,
      description,
      price,
    };
    if (
      title.trim().length < 5 ||
      image.trim().length < 5 ||
      category.trim().length < 5 ||
      description.trim().length < 5 ||
      price.trim().length < 1
    ) {
      alert("each and every  input must have atleast 4 characters");
      return;
    }

    setproducts([...products, product]);
    localStorage.setItem("products", JSON.stringify([...products, product]));
    navigate("/");
  };

  return (
    <>
      <form
        onSubmit={AddProductHandler}
        className="h-screen w-[45%] m-auto  py-24 flex flex-col"
      >
        <h1 className="text-3xl">Add New Product</h1>
        <input
          type="URL"
          placeholder="Image link"
          className="w-full bg-zinc-200 h-[40px] px-2 rounded my-1"
          value={image}
          onChange={(e) => {
            setImage(e.target.value);
          }}
        />
        <input
          type="text"
          placeholder="title"
          className="w-full bg-zinc-200 h-[40px] px-2 rounded my-1"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        <div className="flex justify-between">
          <input
            type="text"
            placeholder="category"
            className="w-4/9 bg-zinc-200 h-[40px] px-2 rounded my-1"
            value={category}
            onChange={(e) => {
              setCategory(e.target.value);
            }}
          />
          <input
            type="number"
            placeholder="price"
            className="w-1/2 bg-zinc-200 h-[40px] px-2 rounded my-1"
            value={price}
            onChange={(e) => {
              setPrice(e.target.value);
            }}
          />
        </div>
        <textarea
          onChange={(e) => {
            setDescription(e.target.value);
          }}
          value={description}
          placeholder="enter product description here.."
          className="w-full h-[250px] my-1 
          bg-zinc-200 px-2"
        ></textarea>
        <button
          type="submit"
          className="   text-blue-300 text-lg w-fit px-6 py-1 border-2 border-zinc-200 bg-white border-solid shadow justify-self-end "
        >
          Add New Product
        </button>
      </form>
    </>
  );
};

export default Create;
