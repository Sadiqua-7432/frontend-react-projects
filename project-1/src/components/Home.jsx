import React, { useContext, useEffect, useState } from "react";
import {
  Link,
  Routes,
  Route,
  useLocation,
  useSearchParams,
} from "react-router-dom";
import { ProductContext } from "../utils/Context";
import Navbar from "./Navbar";
import Loading from "./Loading";
import axios from "../utils/axios";

const Home = () => {
  const [products] = useContext(ProductContext);
  const { search } = useLocation();
  const category = decodeURIComponent(search.split("=")[1]);
  const [filteredProducts, setfilteredProducts] = useState(null);

  // when calling from A-P-I
  // const getproductscategory = async () => {
  //   try {
  //     const { data } = await axios.get(`/products/category/${category}`);
  //     setfilteredProducts(data);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
  useEffect(() => {
    if (!filteredProducts || category == "undefined")
      setfilteredProducts(products);
    if (category != "undefined") {
      setfilteredProducts(products.filter((p) => p.category == category));
      // getproductscategory();
    }
  }, [category, products]);

  //from L-O-C-A-L S-T-O-R-A-G-E

  return products ? (
    <>
      <Navbar />

      <div className="content h-screen w-[80%] p-6 pt-[5%] flex flex-wrap overflow-x-hidden overflow-y-auto">
        {filteredProducts &&
          filteredProducts.map((p, i) => (
            <Link
              key={i}
              to={`/Details/${p.id}`}
              className="mr-3 mb-3 card p-3 border-zinc-200 border-2 shadow rounded w-[18%] h-[30vh] flex-col flex justify-center items-center"
            >
              <div
                className="hover:scale-125 transition ease-in mb-3 w-full h-[80%] bg-contain bg-no-repeat bg-center"
                style={{
                  backgroundImage: `url(${p.image})`,
                }}
              ></div>
              <h1 className="text-sm mt-2 hover:text-sky-300">{p.title}</h1>
            </Link>
          ))}
      </div>
    </>
  ) : (
    <Loading />
  );
};

export default Home;
