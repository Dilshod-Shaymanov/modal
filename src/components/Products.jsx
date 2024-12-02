import React, { useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "./ProductCard";

const API_URL = "https://fakestoreapi.com";

const Product = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    axios
      .get(`${API_URL}/products`)
      .then((res) => (console.log(res.data), setData(res.data)))
      .catch((err) => console.error(err))
      .finally(() => setLoading(false));
  }, []);

  const productItems = data?.map((pro) => (
    <div
      key={pro.id}
      className="mt-8 relative flex w-full flex-col justify-between overflow-hidden rounded-lg border border-gray-100 bg-white shadow-xl hover:dark:md:hover:shadow-transparent  border-gray-300 shadow"
    >
      <div className="mx-3 mt-3 flex h-60 overflow-hidden rounded-xl ">
        <img
          className="object-contain w-full h-full"
          src={pro.image}
          alt="product image"
        />
      </div>
      <div className="mt-4 px-5 pb-5">
        <a href="#">
          <h5 className="text-xl tracking-tight text-slate-900">{pro.title}</h5>
        </a>
        <ProductCard pro={pro} />
        <div className="flex items-center justify-center rounded-md bg-slate-900 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-300">
          By now
        </div>
      </div>
    </div>
  ));
  return (
    <>
      {loading && <p className="text-center text-3xl"> Loading...</p>}
      <div className="bg-[#CBD5E1] container grid grid-cols-4 gap-3 max-xl:grid-cols-3 max-lg:grid-cols-2 max-sm:grid-cols-1 max-sm:mx-auto px-10">
        {productItems}
      </div>
    </>
  );
};

export default Product;
